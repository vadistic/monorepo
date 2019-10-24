#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('ts-node').register({
  compilerOptions: {
    moduleResolution: 'node',
    module: 'commonjs',

    target: 'es2018',
    lib: ['dom', 'esnext'],

    esModuleInterop: true,
    allowSyntheticDefaultImports: true,

    experimentalDecorators: true,
    emitDecoratorMetadata: true,
  },
})

import { runner } from './runner'

runner()
