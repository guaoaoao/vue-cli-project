import axios from 'axios';  //引入axios模块
const axiosInstance = axios.create({
    baseURL: 'http://192.168.20.231:8080',  //路径待定
    timeout: 2000,
  }); 
  switch(process.env.NODE_ENV){
    // 生产环境，部署到服务器上的环境   
    case 'production':
    axiosInstance.defaults.baseURL='http://api.zhengqinan.cn';
    break;
    //设置测式环境的接口地址
     case 'text':
    axiosInstance.defaults.baseURL='http://api.zhengqinantext.cn';
    break;
    //开发环境接口地址
    default:
    axiosInstance.defaults.baseURL='http://192.168.20.231:8080/shop/allList';
  }
  axiosInstance.defaults.timeout=2000;

    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

// 封装axios请求接口
  let http  = {
    get(url,data){
        return  axiosInstance.get(url,{params:data});
    },
    post(url,data){
        return axiosInstance.post(url,data);
    },
    put(url,data){
        return axiosInstance.put(url,data);
    },
    delete(url,data){
        return axiosInstance.delete(url,{data});
    }
  }
  export default http;

 
