<template>
  <div>
    <navbar class="detailnav">
      <template v-slot:left>
        <div class="back" @click="backclick">
        <img src="@/assets/images/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <ul class="title">
          <li v-for="(item,index) in titles"
              :class="{avtive: currentindex === index}"
          @click="titleclick(index)" >

            <a href="#">{{item}}</a></li>
        </ul>
      </template>
    </navbar>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar/navbar'

  export default {
    name: "detailbarnav",
    components:{
      navbar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentindex:0
      }
    },
    methods:{
      titleclick(index){
        this.currentindex = index
        this.$emit('titleclick',index)
      },
      backclick(){
        this.$router.back()
      }
    }
  }
</script>

<style >
  .detailnav{
    background-color: #ffffff;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
  }
  .title{
  display: flex;
}
.title li{
  flex: 1;
}
  .avtive{
    color: red;
    border-bottom: 1px solid red;
  }
  .back {
    text-align: center;
  }
  .back img{margin-top: 10px}
</style>