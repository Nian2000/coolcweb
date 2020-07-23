import vue from 'vue';
import {post,fetch,patch,put,del,upload,ret2} from '@/utils/api.js'
vue.prototype.$post=post;
vue.prototype.$fetch=fetch;
vue.prototype.$patch=patch;
vue.prototype.$put=put;
vue.prototype.$del=del;

//也可以不需要
//const _baseUrl=process.env.API_URL;//这里我在项目配置文件里面设置了相对路径
const _baseUrl="http://coolc.funfly.top/";//api路径

//注册方法
const RegisteredURL = `${_baseUrl}admin/regist`;
export const RegisteredAPI = function(json) {
  return vue.prototype.$post(RegisteredURL,json)
};

//登录方法
const LoginURL = `${_baseUrl}admin/login`;
export const LoginAPI = function(json) {
  return vue.prototype.$post(LoginURL,json)
};


//找回密码方法
const RetrieveURL = `${_baseUrl}admin/forgetPassword `;
export const RetrieveAPI = function(json) {
  return vue.prototype.$post(RetrieveURL,json)
};
//修改账号信息RESTful
// const editAdminUrl = `${_baseUrl}admin/checkLogin`;
// export const editAdminListApi = function (id,json) {
//   return vue.prototype.$put(`${editAdminUrl}/${id}`,json)
// };
//等等...