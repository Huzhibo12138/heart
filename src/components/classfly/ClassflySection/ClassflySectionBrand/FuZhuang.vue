<template>
  <div class="xiangbao">
    <div class="xb">
      <h3>一一 服装分类 一一</h3>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk31.jpg">
        <p>套装</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk32.jpg">
        <p>半身裙</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk33.jpg">
        <p>上衣</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk34.jpg">
        <p>长袖</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk35.jpg">
        <p>短袖</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk36.jpg">
        <p>羽绒服</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk37.jpg">
        <p>连衣裙</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk38.jpg">
        <p>牛仔裤</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk39.jpg">
        <p>休闲裤</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk40.jpg">
        <p>针织衫</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk41.jpg">
        <p>短裤</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk42.jpg">
        <p>西裤</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FuZhuang"
  }
</script>

<style scoped>
  .xb{
    width: 2.85rem;
    height: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .xiangbao h3{
    font-size: 14px;
    color: #676767;
  }
  .section{
    width: 2.85rem;
    height: 1.05rem;
    display: flex;
    justify-content: space-around;
  }
  .section div{
    width: 0.95rem;
    height:1.05rem ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .section div img{
    width: 0.5rem;
    height: 0.5rem;
  }
  .section div p{
    font-size: 12px;
    color: #585858;
  }

</style>
