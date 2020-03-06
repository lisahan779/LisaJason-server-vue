<template>
  <div class="customers container">
    <h1 class="page-header">用户管理系统</h1>
    <!-- v-if判断alter存在情况 -->
    <Alert v-if="alter" :message="alter"></Alert>
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
        <tr  v-for="(item,index) in customers" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <!-- 通过对应的id查看详情  拼接id-->
          <!-- 在details中通过携带id发送后台请求数据:to是因为to现在的值是变量要绑定，如果是单纯的字符串就不需要绑定-->
          <td><router-link class="btn btn-default" :to="'/customer/'+item.id">查看详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./alter"
export default {
  name: "customers",
  data(){
    return {
      customers:[],
      alter:""
    };
  },
components:{
Alert
},
  methods: {
    async fetchCustomers() {
      const res = await this.$http.get("users");
      this.customers=res.data
    //    console.log(this.customers);

    }
  },
  created(){
    //   创建时判断存在query的渲染
      if(this.$route.query.alter){
          this.alter=this.$route.query.alter
        //   this.fetchCustomers()
      }
    //   else{
        this.fetchCustomers()  
    //   }
      },
//   updated(){this.fetchCustomers()}
};
</script>

<style>

</style>