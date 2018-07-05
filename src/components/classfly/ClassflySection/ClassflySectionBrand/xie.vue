<template>
  <div class="xiangbao">
    <div class="xb">
      <h3>一一 鞋靴分类 一一</h3>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk22.jpg">
        <p>皮鞋</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk23.jpg">
        <p>靴子</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk24.jpg">
        <p>休闲鞋</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk25.jpg">
        <p>运动鞋</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk26.jpg">
        <p>平跟鞋</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk27.jpg">
        <p>高跟鞋</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk28.jpg">
        <p>雪地靴</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk29.jpg">
        <p>凉鞋/拖鞋</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk30.jpg">
        <p>低/中跟鞋</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "xie"
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
