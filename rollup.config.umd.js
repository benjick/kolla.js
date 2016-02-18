import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/kolla.umd.js';
config.moduleName = 'rollupStarterProject';

export default config;
