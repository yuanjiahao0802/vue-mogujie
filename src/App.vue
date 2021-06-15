<template>
  <div id="nav">
    <router-view></router-view>
    <maintabbar v-if="showhide"></maintabbar>
  </div>
</template>

<script>

  import maintabbar from '@/components/contents/maintabbar/maintabbar'

  export default {
    name:'App',

    components:{
      maintabbar
    },
    computed:{
      showhide(){
        return this.$route.path == '/home' ||
          this.$route.path == '/category' ||
          this.$route.path == '/shopcart' ||
          this.$route.path == '/profile'
      }
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
  #tab-bar{
    display: flex;
    height: 50px;
    width: 100%;
    background-color: #d6d6d6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 0px 6px #5f5f5f;
  }

</style>
