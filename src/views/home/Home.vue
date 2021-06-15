<template>
  <div id="home">
    <navbar class="nav-home">
      <template v-slot:center>
        蘑菇街
      </template>
    </navbar>
    <scroll class="homescroll" ref="scroller" :probeType="3"
            @homecroll="contenscroll"
            :pullUpLoadx="true" @pullingUp="loadmore">

      <homeswiper :banners="banners"></homeswiper>
      <homerecommend :recommend="recommend"></homerecommend>
      <homeliuxing></homeliuxing>
      <tabcontrol :titles="['流行','新款','精选']"  @tabClick="pTabClick"></tabcontrol>
      <GoodsList :goods="showGoods"></GoodsList>
    </scroll>

    <backtop @click.native="backTopClick"  v-show="isShowBackTop"></backtop>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar/navbar'
  import homeswiper from './childComps/homeswiper'
  import homerecommend from './childComps/homerecommendview'
  import homeliuxing from './childComps/homeliuxing'
  import tabcontrol from '@/components/contents/tabcontrol/tabcontrol'
  import GoodsList from "@/components/contents/good/GoodsList";
  import scroll from "@/components/common/scroll/scroll";
  import backtop from "@/components/contents/backtop/backtop";

  import {getHomeMultiData,getGoodsData} from "@/network/home";

  export default {
    name: "Home",
    components:{
      navbar,
      homeswiper,
      homerecommend,
      homeliuxing,
      tabcontrol,
      GoodsList,
      scroll,
      backtop
    },
    data() {
      return {
        banners: [],
        recommend: [],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop: false,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created(){
      // 1.首页banner等数据
      this.getHomeMultiDatawai()
      // 2.请求商品
      this.getGoodsDatawai('pop')
      this.getGoodsDatawai('new')
      this.getGoodsDatawai('sell')
    },
    methods:{
      pTabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      // ---
      getHomeMultiDatawai(){
        getHomeMultiData().then(res => {
          // console.log(res)
          this.banners = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      getGoodsDatawai(type){
        const page = this.goods[type].page + 1
        getGoodsData(type,page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // this.$refs.scroller.finishPullUp()
        })
      },
      backTopClick() {
        // 通过$refs拿到组件中的对象
        this.$refs.scroller.scroll.scrollTo(0, 0,500)
      },
      contenscroll(positon){
        this.isShowBackTop = (-positon.y) > 1000
      },
      loadmore(){
        console.log("5555")
        // this.getGoodsDatawai(this.currentType)

        // 刷新scroll重新计算可滚动区域
        // this.$refs.scroller.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
.nav-home{
  background-color: #d6d6d6;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
#home{
  padding-top: 44px;
}
  .tabcontrol{
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
  .homescroll{
    width: 100%;
    height: calc( 100vh - 94px );
    overflow: hidden;
  }
</style>