export type BuildMode = 'production' | 'development'

export type BuildPath = {
  entry: string; // путь до entry
  build: string; // до папки куда собирается билд
  html: string; // до индексного html файла
  src: string; // до папки с исходным кодом
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
}
