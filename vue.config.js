// vue.config.js
module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
            args[0].title = "桐桐吃炸屎"
          return args
        })
    }
  }