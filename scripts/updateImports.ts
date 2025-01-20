//автоматизированное добавление алиасов в файлы ts, tsx (алиасы вида - @/....)
import { Project } from 'ts-morph';
// создаем экземпляр
const project = new Project({});

// добавляем все ts и tsx файлы
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];

function isAbsolute(importPath: string) {
  return layers.some((layer) => importPath.startsWith(layer));
}

files.forEach((file) => {
  //получаем все ImportDeclaration файла (ast дерева)
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    // если импорт начинается с одного из значений layers, то добавляем в начало @/
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
