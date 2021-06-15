<template>
  <div>
    <navbar class="shopcartnav">
      <template v-slot:center>
        购物车({{$store.state.cartList.length}})
      </template>
    </navbar>
    <CartList :cartList="cartList"></CartList>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar/navbar'
  import CartList from './childcomps/CartList'
  import BottomBar from './childcomps/BottomBar'

  export default {
    name: "Shopcart",
    components:{
      navbar,
      CartList,
      BottomBar
    },
    computed:{
      cartList() {
        return this.$store.state.cartList
      }
    }
  }
</script>

<style scoped>
.shopcartnav{
background-color: #d6d6d6;
}
</style>