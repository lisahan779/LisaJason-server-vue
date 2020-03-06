// 将axios转化成引用内部组件那种形式
const Myhttpserver={}
import axios from 'axios'

Myhttpserver.install = (Vue)=> {
    // 4. 添加实例方法
    axios.defaults.baseURL="http://localhost:3000"
    Vue.prototype.$http = axios
    
    }
    export default Myhttpserver 
  