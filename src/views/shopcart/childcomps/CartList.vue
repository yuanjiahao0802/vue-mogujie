<template>
  <scroll class="catlistscroll">
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    <div style="height: 1000px;"></div>





  </scroll>
</template>

<script>
  import scroll from "@/components/common/scroll/scroll";
  import CartListItem from './CartListItem'

	export default {
		name: "CartList",
    components: {
      scroll, CartListItem
    },
    props: {
		  cartList: {
		    type: Array,
        default() {
		      return []
        }
      }
    }
	}
</script>

<style scoped>
.catlistscroll{
  width: 100%;
  height: calc( 100vh - 94px );
  overflow: hidden;
}
</style>
