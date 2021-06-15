<template>
  <div class="tabbar-item" @click="itemClick" v-bind:style="Activecolor">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <slot name="item-text"></slot>
    <!--<img src="../../assets/img/tabbar/tabbar2.png" alt="">-->
    <!--首页-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      activecolor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      Activecolor(){
        return this.isActive ? {color:this.activecolor} : {}
      }
    }
  }
</script>

<style >
  .tabbar-item{
    width: 25%;
    text-align: center;
    padding-top: 5px;
    font-size: 14px;
  }
  .tabbar-item img{
    width: 24px;
  }
  .active{
    color: red;
  }
</style>