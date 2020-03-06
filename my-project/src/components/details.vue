<template>
  <div class="details container">
      <h1 class="page-head">{{customers.name}}</h1>
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
name:"detail",
data(){
    return{
     customers:""
    }
},
methods:{
    // 已经入details时将id传过来，通过id查找对应信息
 fetchCustomers(id){
     this.$http.get("users/"+id).then((res)=>{
      this.customers=res.data
         console.log(res.data.name)
     })
 }
},
created(){
    // 拿到id
    this.fetchCustomers(this.$route.params.id)
}

}
</script>

<style>

</style>