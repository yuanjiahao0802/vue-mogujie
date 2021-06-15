<template>
  <div class="prdetail">
    <detailbarnav @titleclick="titleclick" class="detailscrollnav" :currentindex="currentindex" ref="scrollnav"></detailbarnav>
    <scroll class="detailscroll" ref="scroll" @homecroll="contentScroll" :probeType="3">

    <detailbanner :topimages="topimages"></detailbanner>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
    <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
    <DetailParamInfo :paramInfo="paramInfo" ref="param"></DetailParamInfo>
    <DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
    <GoodsList :goods="recommendList" ref="recommend"></GoodsList>

    </scroll>
    <backtop @click.native="backTopClick"  v-show="isShowBackTop"></backtop>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/scroll'

  import detailbarnav from '@/views/detail/childcomps/detailbarnav'
  import detailbanner from '@/views/detail/childcomps/detailbanner'
  import DetailBaseInfo from '@/views/detail/childcomps/DetailBaseInfo'
  import DetailShopInfo from '@/views/detail/childcomps/DetailShopInfo'
  import DetailGoodsInfo from '@/views/detail/childcomps/DetailGoodsInfo'
  import DetailParamInfo from '@/views/detail/childcomps/DetailParamInfo'
  import DetailCommentInfo from '@/views/detail/childcomps/DetailCommentInfo'
  import DetailBottomBar from '@/views/detail/childcomps/DetailBottomBar'
  import toast from '@/components/common/toast/Toast'
  import backtop from "@/components/contents/backtop/backtop";

  import GoodsList from "@/components/contents/good/GoodsList";

  import {getdetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";

  export default {
    name: "detail",
    components:{
      Scroll,
      detailbarnav,
      detailbanner,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      backtop,
      toast
    },
    data(){
      return{
        iid:null,
        topimages:[],
        goods:{},
        shop:{},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        themeTopsY: [],
        currentindex:0,
        isShowBackTop: false,
      }
    },
    created(){
      // console.log(this.$route.params)
      this.iid = this.$route.params.iid
      // 1获取详情信息
      getdetail(this.iid).then((res)=>{
        // console.log(res)
        // 1.获取顶部轮播图
        this.topimages = res.result.itemInfo.topImages
        // 2获取商品的基本信息
        this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
        // 3获取商家信息
        this.shop = new Shop(res.result.shopInfo)
        // 4.获取商家评论
        this.detailInfo = res.result.detailInfo
        // 5.保存参数信息
        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
        // 7.保存评论信息
        if (res.result.rate.list) {
          this.commentInfo = res.result.rate.list[0];
        }


      })
      // 2获取推荐信息
      getRecommend().then((res, error) => {
        // console.log(res)
        if (error) return
        this.recommendList = res.data.list
      })
    },
    updated() {
      // 获取需要的四个offsetTop
      this.getOffsetTops()
    },
    methods:{

      backTopClick(){
        this.$refs.scroll.scroll.scrollTo(0, 0,500)
      },
      addToCart(){
        // 1.创建对象
        const product = {}
        // 2.对象信息
        product.iid = this.iid;
        product.image = this.topimages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        // this.$store.commit('addCart', product)
        this.$store.dispatch('addCart', product).then((res)=>{
          this.$refs.toast.show('成功添加购物车',1500)
        });

      },
      getOffsetTops() {
        this.$nextTick(() =>{
          this.themeTopsY = []
          this.themeTopsY.push(0)
          this.themeTopsY.push(this.$refs.param.$el.offsetTop)
          this.themeTopsY.push(this.$refs.comment.$el.offsetTop)
          this.themeTopsY.push(this.$refs.recommend.$el.offsetTop)
          this.themeTopsY.push(Number.MAX_VALUE)
        })
      },
      contentScroll(position) {
        const positionY = -position.y
        let length = this.themeTopsY.length
        for (let i = 0;i<length;i++){
          if(this.currentindex !== i && ((i < length - 1 && positionY >= this.themeTopsY[i] && positionY < this.themeTopsY[i+1]) || (i === length - 1 && positionY >= this.themeTopsY[i]))){
            this.currentindex = i;
            // console.log(this.currentindex)
            this.$refs.scrollnav.currentindex = this.currentindex
          }
        }
        this.isShowBackTop = (-position.y) > 1000
      },
      titleclick(index){
        // console.log(index)
        this.$refs.scroll.scrollTo(0, -this.themeTopsY[index], 500)
      }
    }
  }
</script>

<style scoped>
.prdetail{}
  .detailscroll{
    width: 100%;
    height: calc( 100vh - 92px );
    overflow: hidden;
    margin-top: 44px;
  }

</style>