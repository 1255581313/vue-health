'use strict'
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || '智能管理系统' // 标题

const port = process.env.port || process.env.npm_config_port || 80 // 端口

// vue.config.js 配置说明
// 官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
module.exports = {
  css: {
    loaderOptions: {
      sass: {
      }
    }
  },
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
  publicPath: process.env.NODE_ENV === 'production' ? defaultSettings.publicPath : '/',
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: process.env.NODE_ENV === 'development',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // before: require('./mock/mock-server.js'),
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      // java接口
      [process.env.VUE_APP_BASE_API]: {
        target: `http://gzrb.vestamedical.cn/jrtech`,
        //target: `http://localhost:8082`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    disableHostCheck: true
  },

  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@crud': resolve('src/components/Crud')
      }
    }
  },

  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    //  gzip压缩
    // if (process.env.NODE_ENV !== 'development') {
    //   config.plugin('CompressionWebpackPlugin').use(
    //     new CompressionWebpackPlugin({
    //       // [file] 会被替换成原始资源。[path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串。默认值是 "[path].gz[query]"。
    //       filename: '[path].gz[query]', // 提示compression-webpack-plugin@3.0.0的话asset改为filename
    //       // 可以是 function(buf, callback) 或者字符串。对于字符串来说依照 zlib 的算法(或者 zopfli 的算法)。默认值是 "gzip"。
    //       algorithm: 'gzip',
    //       // 所有匹配该正则的资源都会被处理。默认值是全部资源。
    //       test: new RegExp('\\.(' + ['html', 'js', 'css'].join('|') + ')$'),
    //       // 只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
    //       threshold: 10240,
    //       // 只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
    //       minRatio: 0.8,
    //       deleteOriginalAssets: true // 删除原文件 & false 不删除 true 删除 & true 如果是开发环境报错
    //     })
    //   )
    // }

    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      }),
        config.optimization.runtimeChunk('single'),
        {
          from: path.resolve(__dirname, './public/robots.txt'), // 防爬虫文件
          to: './' // 到根目录下
        }
    })
  }
}
