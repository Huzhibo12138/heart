<template>
  <div class="xiangbao">
    <div class="xb">
      <h3>一一 首饰分类 一一</h3>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk43.jpg">
        <p>套装</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk44.jpg">
        <p>项链/吊坠</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk45.jpg">
        <p>戒指/指环</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk46.jpg">
        <p>胸针</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk47.jpg">
        <p>耳钉/耳夹</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk48.jpg">
        <p>耳坠/耳环</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk49.jpg">
        <p>手镯/手链/手环</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk50.jpg">
        <p>发带/发箍</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk51.jpg">
        <p>裸砖</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShouShi"
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
