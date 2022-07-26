import http  from "@/utils/http";
// 首页数据请求
let indexList = ()=>{
   return http.get('shop/list').then((res)=>{return res.data})
}
export  {
    indexList
}