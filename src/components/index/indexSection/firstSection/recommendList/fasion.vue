<template>
  <div class="fasion">
    <div class="fasionTitle">
      <h1>— 时尚指南 —</h1>
      <h3>FASION GUIDE</h3>
    </div>
    <div class="fasionContent">
      <div class="fasionContentMini">
        <div class="fasionContentSwiper">
          <fasion-swiper></fasion-swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import FasionSwiper from "./fasionSwiper/fasionSwiper";
    export default {
        name: "fasion",
      components: {FasionSwiper}
    }
</script>

<style lang="scss" scoped>
  .fasion{
    padding:0 0.1rem 0.15rem ;
    display:flex;
    flex-direction: column;

    .fasionTitle{
      text-align: center;
      h1{
        font-size:0.14rem;
        color:#3d3e3d;
        line-height:0.24rem;
      }
      h3{
        font-size:0.08rem;
        color:#3d3e3d;
        line-height:0.24rem;
      }
    }
  }
  .fasionContentSwiper{
    padding:0.1rem 0;
  }


</style>

