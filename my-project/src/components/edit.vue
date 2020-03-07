<template>
  <div class="add container">
      <Alter :message="alter" :class="classs"> </Alter>
    <h1 class="page-head">编辑用户</h1>
    <form @submit="updateCustomers">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for>姓名</label>
          <br />
          <input type="text" class="form-control" placeholder="name" v-model="customers.name" />
          <br />
          <label for>电话</label>
          <br />
          <input type="text" class="form-control" placeholder="phone" v-model="customers.phone" />
          <br />
          <label for>邮箱</label>
          <br />
          <input type="text" class="form-control" placeholder="email" v-model="customers.email" />
          <br />
          <label for>学历</label>
          <br />
          <input
            type="text"
            class="form-control"
            placeholder="education"
            v-model="customers.education"
          />
          <br />
          <label for>毕业学校</label>
          <br />
          <input
            type="text"
            class="form-control"
            placeholder="graduationschool"
            v-model="customers.graduationschool"
          />
          <br />
          <label for>职业</label>
          <br />
          <input type="text" class="form-control" placeholder="job" v-model="customers.job" />
          <br />
          <label for>个人简介</label>
          <br />
          <textarea name="profile" class="form-control" rows="10" v-model="customers.profile"></textarea>
        </div>
      </div>
      <!-- 如果这个按钮是submit就会触发系统的方法，如果在form中绑定submit 触发的就是自己写的方法 -->
      <button type="submit" class="btn btn-primary">修改</button>
    </form>
  </div>
</template>

<script>
import Alter from "./alter";
export default {
  name: "edit",
  data() {
    return {
      customers: [],
      alter:"",
      classs:""
    };
  },
  components:{
      Alter
  },
  methods: {
    // 获取对应id数据在页面展示
    fetchcustomers(id) {
      this.$http.get("users/" + id).then((res) => {
        this.customers = res.data;
        console.log(res.data);
      });
    },
    // 更新数据
    updateCustomers(e) {
      // 阻止默认submit按钮事件
      e.preventDefault();
      if (
        !this.customers.name ||
        !this.customers.phone ||
        !this.customers.email
      ) {
        this.alter="请填写对应的信息",
        this.classs="alert alert-success alert-dismissible"
      } else {
        //  定义对象,
        let newupdate = {
          name: this.customers.name,
          phone: this.customers.phone,
          email: this.customers.email,
          education: this.customers.education,
          graduationschool: this.customers.graduationschool,
          job: this.customers.job,
          profile: this.customers.profile
        };
        //  获取要更新的那条数据对应的id,更新数据发送put请求
        this.$http
          .put("users/" + this.$route.params.id, newupdate)
          .then((res)=>{
            console.log(res);
            this.$router.push({
              name: "customers",
              query: {
                alter: "用户信息更新成功",
                classs: "alert alert-success alert-dismissible"
              }
            });
          });
      }
    }
  },
  created() {
    this.fetchcustomers(this.$route.params.id);
    console.log("编辑页面")
  }
};
</script>

<style>
</style>