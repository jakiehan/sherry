import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'), // путь до папки куда будет собираться скомпилированный код,
    html: path.resolve(__dirname, 'public', 'index.html'), // index.html будет использоваться как шаблон, туда будут подставляться скрипты,
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const API = env.apiURL || 'http://localhost:8000';

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiURL: API,
    project: 'frontend'
  });

  return config;
};
