<template>
  <div class="swiper-container" id="swiper9">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper1" v-for="p in pic">
        <a href="#">
          <img :src="p.picturl" alt="">
        </a>
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" id="swiper9p"></div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: "accesSwiper",
    data(){
      return {
        pic:[
          {picturl:"./static/imgs/wac1.jpg"},
          {picturl:"./static/imgs/wac2.jpg"},
          {picturl:"./static/imgs/wac3.jpg"},
          {picturl:"./static/imgs/wac4.jpg"}

        ]
      }
    },
    methods:{
      createSwiper() {
        this.$nextTick(() => {
          new Swiper ('#swiper9',{
            direction: "horizontal",
            loop: true,
            autoplay: true,
            speed: 300,
            autoplay: {
              delay: 3000
            },
            pagination: {
              el: "#swiper9p",
              type: "bullets"
            }
          })
        })
      },
    },
    mounted() {
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
