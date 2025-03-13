import { Node, Project, SyntaxKind, JsxAttribute } from 'ts-morph';

// аргументы для запуска скрипта
const removedFeatureName = process.argv[2]; // пример = isArticleRating
const featureState = process.argv[3]; // on/off

const toggleFeaturesHookName = 'useToggleFeatures';
const toggleFeaturesComponentName = 'ToggleFeatures';

if (!removedFeatureName) {
  throw new Error('Укажите название фича-флага');
}

if (!featureState) {
  throw new Error('Укажите состояние фичи (on или off)');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Некорректное состояние фичи (on или off)');
}

// создаем экземпляр
const project = new Project({});

// добавляем все ts и tsx файлы
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunctions(node: Node) {
  let isToggleFeature = false;

  node.forEachChild((child: Node) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFeaturesHookName
    ) {
      isToggleFeature = true;
    }
  });
  return isToggleFeature;
}

function isToggleComponent(node: Node) {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

  return identifier?.getText() === toggleFeaturesComponentName;
}

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression
  );

  if (!objectOptions) return;

  const onFunctionProperty = objectOptions.getProperty('on');
  const offFunctionProperty = objectOptions.getProperty('off');
  const featureNameProperty = objectOptions.getProperty('name');

  const onFunction = onFunctionProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction
  );
  const offFunction = offFunctionProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction
  );
  const featureName = featureNameProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== removedFeatureName) return;

  if (featureState === 'on') {
    return node.replaceWithText(onFunction?.getBody().getText() ?? '');
  }

  if (featureState === 'off') {
    return node.replaceWithText(offFunction?.getBody().getText() ?? '');
  }
};

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string
) => {
  return jsxAttributes.find((node) => node.getName() === name);
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value;
};

const replaceComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const offAttribute = getAttributeNodeByName(attributes, 'off');

  const featureNameAttribute = getAttributeNodeByName(attributes, 'name');
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1, -1);

  if (featureName !== removedFeatureName) return;

  const offValue = getReplacedComponent(offAttribute);
  const onValue = getReplacedComponent(onAttribute);

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue);
  }
};

files.forEach((file) => {
  file.forEachDescendant((node: Node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunctions(node)) {
      return replaceToggleFunction(node);
    }

    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      return replaceComponent(node);
    }
  });
});

project.save();
