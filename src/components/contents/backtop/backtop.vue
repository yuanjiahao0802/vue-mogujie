<template>
  <div class="back-top">
    <img src="@/assets/images/common/top.png" alt="">
  </div>
</template>

<script>
  import bscroll from '@better-scroll/core'

  export default {
    name: "backtop"
  }
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 7px;
  bottom: 50px;
}
  .back-top img{
    width: 40px;
  }
</style>