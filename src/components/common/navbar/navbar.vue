<template>
  <div class="nav-tabbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
.nav-tabbar{
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 0 5px #ae9b9b;
}
  .nav-tabbar .left,.nav-tabbar .right{
    width: 60px;
  }
.nav-tabbar .center{
  flex: 1;
  text-align: center;
}
</style>