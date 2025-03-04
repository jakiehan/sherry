import { Node, Project, SyntaxKind } from 'ts-morph';

// аргументы для запуска скрипта
const removedFeatureName = process.argv[2]; // пример = isArticleRating
const featureState = process.argv[3]; // on/off

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
      child.getText() === 'useToggleFeatures'
    ) {
      isToggleFeature = true;
    }
  });
  return isToggleFeature;
}

files.forEach((file) => {
  file.forEachDescendant((node: Node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunctions(node)) {
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
    }
  });
});

project.save();
