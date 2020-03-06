<template>
  <div class="alter container">
      <div class="alert alert-success alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>{{message}}</strong> 
</div>

  </div>
</template>

<script>
export default {
name:"alter",
props:["message"]
}
</script>

<style>

</style>