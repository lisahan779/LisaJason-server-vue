<template>
  <div class="add container">
    <h1 class="page-head">添加用户</h1>
    <form @submit="addcustomers">
<div class="well">
    <h4>用户信息</h4>
    <div class="form-group">
        <label for="">姓名</label><br>
        <input type="text" class="form-control" placeholder="name" v-model="customers.name"><br>
        <label for="">电话</label><br>
        <input type="text" class="form-control" placeholder="phone" v-model="customers.phone"><br>
         <label for="">邮箱</label><br>
        <input type="text" class="form-control" placeholder="email" v-model="customers.email"><br>
        <label for="">学历</label><br>
        <input type="text" class="form-control" placeholder="education" v-model="customers.education"><br>
        <label for="">毕业学校</label><br>
        <input type="text" class="form-control" placeholder="graduationschool" v-model="customers.graduationschool"><br>
        <label for="">职业</label><br>
        <input type="text" class="form-control" placeholder="job" v-model="customers.job"><br>
        <label for="">个人简介</label><br>
        <textarea name="profile" class="form-control" rows="10" v-model="customers.profile"></textarea>
    </div>
</div>
<!-- 如果这个按钮是submit就会触发系统的方法，如果在form中绑定submit 触发的就是自己写的方法 -->
<button type="submit" class="btn btn-primary">添加</button>
    </form>

  </div>
</template>

<script>
export default {
name:"add",
data(){
    return{
        customers:[]
    }
},
methods:{
    addcustomers(e){
         // 阻止默认submit按钮事件
         e.preventDefault()
         if(!this.customers.name||!this.customers.phone||!this.customers.email){
           console.log("请添加用户信息")
         }else{
            //  定义对象
             let newCustomers={
                 name:this.customers.name,
                 phone:this.customers.phone,
                 email:this.customers.email,
                 education:this.customers.education,
                 graduationschool:this.customers.graduationschool,
                 job:this.customers.job,
                 profile:this.customers.profile
             }
            //  将数据发送到后端
            this.$http.post("users",newCustomers).then((res)=>{
                console.log(res)
                // query 将地址栏的信息传给alter组件展示
                this.$router.push({name:"customers",query:{alter:"用户信息添加成功"}})
            })
         }
        
       
      
       
    }
}
}
</script>

<style>

</style>