<template>
  <div class="swiper-container" id="swiper7">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper1" v-for="p in pic">
        <a href="#">
          <img :src="p.picturl" alt="">
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <!--<div class="swiper-pagination"></div>-->

  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: "watchSwiper",
    data(){
      return {
        pic:[
          {picturl:"./static/imgs/w11.jpg"},
          {picturl:"./static/imgs/w12.jpg"},
          {picturl:"./static/imgs/w13.jpg"},
          {picturl:"./static/imgs/w14.jpg"}


        ]
      }
    },

    methods:{
      createSwiper(){
        this.$nextTick(() => {
          new Swiper ('#swiper7',{
            direction: "horizontal",
            loop: true,
            autoplay: true,
            speed: 300,
            autoplay: {
              delay: 3000
            },
            // pagination: {
            //   el: "#swiper7p",
            //   type: "bullets"
            // }
          })
        })
      }
    },
    created(){
      this.createSwiper();

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
  .swiper1 a img{
    width:100%;
    height:1.85rem;
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
