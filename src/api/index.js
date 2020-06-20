import axios from 'axios';
import qs from 'qs'

/**
 * @param {url} baseURL 默认地址
 * @param {number} timeout 请求超时
 */
axios.defaults.baseURL = 'www.xxx.xxx';
axios.defaults.timeout = 10000;
axios.defaults.withCredentials=true;//让ajax携带cookie



console.dir(axios.defaults)

/**
 * @function request.use 拦截请求
 * @param {*} config 请求信息
 */
axios.interceptors.request.use((config)=>{
    console.log(config)
    return config;
},(err)=>{
    return err;
});

/**
 * @function request.use 拦截响应
 * @param {*} response 响应信息
 */
axios.interceptors.response.use((response)=>{
    return response;
},(err)=>{
    return err;
})


const get = (url,data={}) =>{
    return new Promise((resolve, reject) => {
        axios.get(url,{params:{...data}})
        .then(res=>{
            resolve(res.data)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

const post = (url,data) =>{
    return new Promise((resolve, reject) => {
        let params = qs.stringify(data)
        axios.post(url,params)
        .then(res=>{
            resolve(res.data)
        })
        .catch(err=>{
            reject(err)
        })
    })
}


export default {
    get,post
};