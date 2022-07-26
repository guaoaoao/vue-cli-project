const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 反向代理
  devServer: {
    proxy: {
        '/api': {
            target: 'http://192.168.20.231:8080',//目标地址
            ws: false,  //是否启用websockets
            changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            pathRewrite: {'^/api': '/'}    //这里重写路径
        }
    }
},
devServer: {
  // 项目运行时候的端口号
  port: 8081
},


})
