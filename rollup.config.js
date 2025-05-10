import path from 'path';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled', // Required to avoid issues with helpers
        presets: ['@babel/preset-react'], // This ensures JSX is parsed
        extensions: ['.js', '.jsx'], // Ensure JSX files are included
      }),
      postcss({
        modules: false,
        inject: {
          insertAt: 'top',
        },
        config: path.resolve('./postcss.config.mjs'),
        minimize: true,
        sourceMap: true,
      }),
    ],
  },
];
