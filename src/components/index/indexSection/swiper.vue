<template>
  <!--推荐-->
  <div class="indexSection">
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">a</div>
        <div class="swiper-slide">b</div>
        <div class="swiper-slide">c</div>
      </div>
      <!-- 如果需要分页器 -->
      <!--<div class="swiper-pagination"></div>-->
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  export default {
        name: "indexSection",
    mounted: function () {
      this.$nextTick(() => {
        new Swiper('#swiper1', {
          direction: "horizontal",
          loop: true,
          autoplay: true,
          speed:300,
          autoplay: {
            delay: 3000
          },
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true,
          //   renderBullet: function (index, className) {
          //     var text=""
          //     switch(index){
          //       case 0:text='壹';break;
          //       case 1:text='贰';break;
          //       case 2:text='叁';break;
          //       case 3:text='肆';break;
          //       case 4:text='伍';break;
          //     }
          //     return '<span class="' + className + '">' + text + '</span>';
          //   }
          // }
        })
      })
    }
  }
</script>

<style lang="scss" scoped>

  .indexSection .swiper-container{

    height:500px;
  }
  .swiper-pagination-bullet{
    width: 28px;
    height: 28px;
    font-size: 22px;
  }
</style>
