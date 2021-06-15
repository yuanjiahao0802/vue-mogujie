<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item"
         v-for="(item,index) in titles" :class="{active: index === currentindex}"
         @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabcontrol",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentindex:0
      }
    },
    methods:{
      tabClick(index){
        this.currentindex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
.tabcontrol{
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  z-index: 999;
}
.tabcontrol .tabcontrol-item{
  flex: 1;
  text-align: center;

}
.tabcontrol span{
  /*display: block;*/
  padding: 5px;
}
  .active{
    color: red;
  }
.active span{
  border-bottom: 3px solid red;
}
</style>