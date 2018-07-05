<template>
  <div class="swiper-container" id="swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper1" v-for="picturl in indexBannerGoodsList">
        <a href="#">
          <img :src="picturl" alt="">
        </a>
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" id="swiper1p"></div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import IndexListApi from "@/apis/wapi/indexList"
  export default {

        name: "headerSwiper",
        data(){
          return {
            indexBannerGoodsList:{},

          }
        },
        //获取的动态真实数据data
        created() {
          IndexListApi.getData((data) => {
            this.indexBannerGoodsList = data.banner;



          });

        },
        updated(){
          this.$nextTick(() => {
            new Swiper ('#swiper1',{
              direction: "horizontal",
              loop: true,
              autoplay: true,
              speed: 300,
              autoplay: {
                delay: 3000
              },
              pagination: {
                el: "#swiper1p",
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
