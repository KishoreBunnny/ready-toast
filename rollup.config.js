import path from 'path';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/postcss';



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
        // extract: 'index.css',
        inject: {
          insertAt: 'top',
        },
        plugins:[tailwindcss(),autoprefixer()],
        minimize: true,
        sourceMap: true,       
      }),
      
    ],
  },
];
