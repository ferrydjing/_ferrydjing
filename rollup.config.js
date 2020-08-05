import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    input: './src/index.js',
    output: {
      name: '_ferrydjing',
      file: pkg.browser || 'dist/_ferrydjing.iife.js',
      format: 'iife'
    },
    plugins: [
      terser(),
      resolve(),
      commonjs(),
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              targets: { chrome: '70' },
              useBuiltIns: 'usage',
              corejs: 3,
              modules: false
            }
          ]
        ],
        plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
  },
  // browser-friendly UMD build but IE 8
  {
    input: './src/index.js',
    output: {
      name: '_ferrydjing',
      file: pkg.browser || 'dist/_ferrydjing.iife.ie.js',
      format: 'iife'
    },
    plugins: [
      terser(),
      resolve(),
      commonjs(),
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              targets: { ie: '8' },
              useBuiltIns: 'usage',
              corejs: 3,
              modules: false
            }
          ]
        ],
        plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
        // 只编译我们的源代码
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: './src/index.js',
    external: ['core-js', '@babel/runtime', '@babel/runtime-corejs3'],
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [resolve(), commonjs()]
  }
]
