import vue from 'vue';
import {post,fetch,patch,put,del,upload,ret2} from '@/utils/index.js'
vue.prototype.$post=post;
vue.prototype.$fetch=fetch;
vue.prototype.$patch=patch;
vue.prototype.$put=put;
vue.prototype.$del=del;

//也可以不需要
//const _baseUrl=process.env.API_URL;//这里我在项目配置文件里面设置了相对路径
const _baseUrl="http://coolc.funfly.top/";//这里我在项目配置文件里面设置了相对路径
//登录方法
const loginURL = `${_baseUrl}admin/regist`;
export const loginApi = function(json) {
  return vue.prototype.$post(loginURL,json)
};
//修改账号信息RESTful
// const editAdminUrl = `${_baseUrl}admin/checkLogin`;
// export const editAdminListApi = function (id,json) {
//   return vue.prototype.$put(`${editAdminUrl}/${id}`,json)
// };
//等等...