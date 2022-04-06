// https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/lazy-loading.html
module.exports = {
  'presets': [
    // vant
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset',

    // ElementUI
    /**
     *
     * preset-env & babel-preset-es2015
     * https:babeljs.io/docs/en/env/
     * ElementUI官方例子是babel-preset-es2015，可是babel早就不推荐
     *
     */

    ['@babel/preset-env', { 'modules': false }]
    // ["es2015", { "modules": false }]
    // Plugin/Preset files are not allowed to export objects, only functions. 猜测是不兼容
  ],
  'env': {
    'development': {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      'plugins': ['dynamic-import-node']
    }
  },
  'plugins': [
    // vant
    [
      'import',
      {
        'libraryName': 'vant',
        'libraryDirectory': 'es',
        'style': true
      },
      'vant'
    ],

    // ElementUI
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
