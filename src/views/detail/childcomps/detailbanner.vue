<template>

    <Swiper class="detail-swiper">
      <SwiperItem v-for="(item,i) in topimages" :key="i">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>

</template>

<script>
  import {Swiper, SwiperItem} from "@/components/common/swiper";

  export default {
    name: "detailbanner",
    props:{
      topimages:{
          type:Array,
          default(){
            return []
          }

      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
  img{
    width: 100%;
  }
</style>