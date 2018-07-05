<template>
  <div class="brands">
    <div class="brandsTitle">
      <h1>— 时尚大牌 —</h1>
      <h3>BRABDS</h3>
    </div>
    <div class="brandsContent">
      <div class="brandsContentMini">

        <div class="brandsContentSwiper">
          <brands-swiper></brands-swiper>
        </div>
      </div>

    </div>
    <div class="brandsImg">
      <a href="">
        <img src="/static/imgs/wq1.jpg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
    import BrandsSwiper from "./brandsSwiper/brandsSwiper";
    export default {
        name: "brands",
      components: {BrandsSwiper}
    }
</script>

<style lang="scss" scoped>
  .brands{
    padding:0 0.1rem 0.15rem ;
    display:flex;
    flex-direction: column;

  .brandsTitle{
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
  .brandsContentSwiper{
    padding:0.1rem 0;
  }
  .brandsImg{
    width:100%;
    img{
      width:100%;
      height:1.9rem;
    }
  }

</style>
