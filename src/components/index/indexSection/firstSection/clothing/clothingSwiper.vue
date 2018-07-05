<template>
  <div class="swiper-container" id="swiper8">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper1" v-for="p in pic">
          <img :src="p.picturl" alt="">
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" id="swiper8p"></div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: "clothingSwiper",
    data(){
      return {
        pic:[
          {picturl:"./static/imgs/wv2.jpg"},
          {picturl:"./static/imgs/wv1.jpg"},
          {picturl:"./static/imgs/wv3.jpg"},
          {picturl:"./static/imgs/wv4.jpg"}
        ]
      }
    },
    methods:{
      createSwiper() {
        this.$nextTick(() => {
          new Swiper ('#swiper8',{
            direction: "horizontal",
            loop: true,
            autoplay: true,
            speed: 300,
            autoplay: {
              delay: 3000
            },
            pagination: {
              el: "#swiper8p",
              type: "bullets"
            }
          })
        })
      }
    },
    mounted(){
      this.createSwiper();
    },
    updated(){
      this.createSwiper();
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    width:100%;
    height: 1.85rem;
  }
  .swiper-wrapper{
    width:100%;
    height:100%;
  }
  .swiper1 img{
    width:100%;
    height:100%;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -13px;
    left: 0;
    width: 100%;
  }
  .swiper-pagination-bullet-active{
    background:#ff483d;
  }
</style>
