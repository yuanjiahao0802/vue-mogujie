<template>
  <div class="recommend">
    <ul>
      <li v-for="item in recommend" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "homerecommendview",
    props:{
      recommend:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend ul{
  display: flex;
  padding: 20px 0 20px 0;
  border-bottom: 10px solid #d6d6d6;
}
.recommend li{
  flex: 1;
  text-align: center;
}
.recommend li img{
  width: 80%;
}
.recommend li p{
  font-size: 16px;
  margin-top: 10px;
}
</style>