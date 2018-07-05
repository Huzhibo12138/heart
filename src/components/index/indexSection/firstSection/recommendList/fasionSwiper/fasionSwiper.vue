<template>
  <div class="swiper-container" id="swiper4">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper1" v-for="p in pic">
        <a href="#">
          <img :src="p.picturl" alt="">
        </a>
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"  id="swiper4p"></div>

  </div>

</template>

<script>
  import Swiper from 'swiper'
  export default {
        name: "fasionSwiper",
        data(){
          return {
            pic:[
              {picturl:"./static/imgs/wf1.png"},
              {picturl:"./static/imgs/wf2.png"},
              {picturl:"./static/imgs/wf3.png"},
              {picturl:"./static/imgs/wf4.png"},


            ]
          }
        },
        mounted(){
          this.$nextTick(() => {
            new Swiper ('#swiper4',{
              direction: "horizontal",
              loop: true,
              autoplay: true,
              speed: 500,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
              pagination: {
                el: "#swiper4p",
                type: "bullets"
              }
            })
          })
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

