<template>
  <div class="customers container">
    
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput"/>
    <!-- v-if判断alter存在情况 -->
    <Alert v-if="alter" :message="alter" :classs="classs"></Alert>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <!-- 遍历搜索的东西，触发filterBy方法遍历的时候和数组进行匹配 例如name-->
        <!-- 如果不搜索，遍历的就是所有数据 -->
        <tr v-for="(item,index) in filterBy(customers,filterInput)" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <!-- 通过对应的id查看详情  拼接id-->
          <!-- 在details中通过携带id发送后台请求数据:to是因为to现在的值是变量要绑定，如果是单纯的字符串就不需要绑定-->
          <td>
            <router-link class="btn btn-default" :to="'/customer/'+item.id" style="backgroundcolor:blue ">查看详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./alter";
export default {
  name: "customers",
  data() {
    return {
      customers: [],
      alter: "",
      classs: "alert alert-success alert-dismissible",
      filterInput:""
    };
  },
  components: {
    Alert
  },
  methods: {
    // 异步请求数据
    async fetchCustomers() {
      const res = await this.$http.get("users");
      this.customers = res.data;
    },
    // fetchCustomers() {
    // this.$http.get("users").then((res)=>{
    //   this.customers=res.data
    // })
    // }
    // 搜索
    filterBy(customers,inputvalue){
      // filter方法遍历整个数组，有多个内容就会展示出来
   return customers.filter((customer)=>{
    //  match()将遍历的数据与搜索输入的数据比对,有的话就展示该条数据
    return customer.name.match(inputvalue)
   })
    }
  },
  
  created() {
    //   创建时判断存在query的渲染
    if (this.$route.query.alter || this.$route.query.classs) {
      (this.alter = this.$route.query.alter),
        (this.classs = this.$route.query.classs);
      // this.fetchCustomers()
    }
    this.fetchCustomers();
    console.log("customers页面")
  }
  // updated(){this.fetchCustomers()}
};
</script>

<style>

</style>