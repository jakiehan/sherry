import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolves = (options: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'], // какие разрешения файлов не будем использовать(видеть) при импорте
  preferAbsolute: true, // абсолютные пути в приоритете
  modules: [options.paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {
    '@': options.paths.src
  },
});
