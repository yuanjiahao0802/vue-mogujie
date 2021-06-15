<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import bscroll from '@better-scroll/core'
  import observedom from '@better-scroll/observe-dom'
  import bscrollup from '@better-scroll/pull-up'
  bscroll.use(observedom)
  bscroll.use(bscrollup)
  export default {
    name: "scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoadx:{
        type: Boolean ,
        default:false
      }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted(){
      this.scroll = new bscroll(this.$refs.wrapper,{
        observeDOM:true,
        click:true,
        // pullUpLoad: true,
        probeType: this.probeType,


      })
      // console.log(this.scroll)
      this.scroll.scrollTo(0.0)
      this.scroll.on('scroll',(posis)=>{
         // console.log(posis)
        this.$emit('homecroll',posis)
      })
      // this.scroll.on('pullingUp',()=>{
      //   // console.log('asas')
      //   this.$emit('pullingUp')
      //   // this.scroll.finishPullUp()
      // })
    },
    methods:{
      scrollTo(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>