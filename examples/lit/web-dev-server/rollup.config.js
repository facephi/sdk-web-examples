 
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    format: 'esm',
    name: 'main',
    globals: {
      '@facephi/sdk-web-wc': 'FacephiSDK'
    }
  },
  external: ['@facephi/sdk-web-wc', 'lottie-web', 'lottie-player'],
  plugins: [
    resolve({
      preferBuiltins: false,
      browser: true,
      mainFields: ['browser', 'module', 'main']
    }),
    commonjs({
      transformMixedEsModules: true,
      ignore: ['buffer', 'util']
    }),
  ],
  onwarn(warning, warn) {
    // Ignore certain warnings
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  }
};
