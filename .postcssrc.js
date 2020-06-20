module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px2rem-exclude": {  // 添加的代码
      remUnit: 37.5, //设计稿宽度(remUnit*10)px
      exclude: /node_modules|folder_name/i, // 忽略node_modules目录下的文件
    }

  }
}