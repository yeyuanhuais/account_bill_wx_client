//设置公共访问url，即环境地址
//commonJS写法--node采用就是该规范 引入require
module.exports = {
  //开发环境
  dev: {
    baseUrl: "http://localhost:3100/v1",
  },
  //线上url
  prod: {
    baseUrl: "https://yyh28.top:3100/v1",
  },
};
