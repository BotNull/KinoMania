const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@pages': 'src/pages',
    '@components': 'src/components',
    '@icons': 'src/components/icons',
    '@ItemList': 'src/components/Movie/ItemList',
    '@redux': 'src/redux',
    '@utils': 'src/utils',
  })(config);

  return config;
};
