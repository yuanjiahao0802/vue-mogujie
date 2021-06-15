<template>
  <tab-bar>
    <TabBarItem path="/home" >
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/tabbar2.png" alt="">
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/tabbar1.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/tabbar4.png" alt="">
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/tabbar3.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/shopcart">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/tabbar6.png" alt="">
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/tabbar5.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/tabbar8.png" alt="">
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/tabbar7.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
    name: "maintabbar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>