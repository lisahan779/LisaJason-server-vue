<template>
  <div class="details container">
    <button class="btn btn-default">
      <router-link to="/">返回</router-link>
    </button>
    <h1 class="page-head">
      {{customers.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+customers.id">编辑</router-link>
        <button class="btn btn-danger" @click="delet(customers.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <!-- bootstrap中的图标 -->
        <span class="glyphicon glyphicon-phone-alt">{{customers.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-file">{{customers.email}}</span>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <!-- bootstrap官网中的图标 在组件中找-->
        <span class="glyphicon glyphicon-phone-alt">{{customers.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-calendar">{{customers.graduationschool}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-folder-open">{{customers.job}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-list-alt">{{customers.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      customers: ""
    };
  },
  methods: {
    // 异步请求数据
    // 已经入details时将id传过来，通过id查找对应信息
    fetchCustomers(id) {
      this.$http.get("users/" + id).then(res => {
        this.customers = res.data;
      });
    },
    //  删除对应id的数据，发送deltet请求
    delet(id) {
      console.log(id);
      this.$http.delete("users/" + id).then(() => {
        //  返回为空，直接跳转到跟目录
        this.$router.push({
          name: "customers",
          query: {
            alter: "删除成功",
            classs: "alert alert-warning alert-dismissible"
          }
        });
      });
    }
  },
  created() {
    // 拿到id 请求地址栏数据用route,发送用router
    this.fetchCustomers(this.$route.params.id);
    console.log("详情页面");
  }
};
</script>

<style>
</style>