import webpack from 'webpack';

export const buildResolves = (): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'], // какие разрешения файлов не будем использовать(видеть) при импорте
  }
}