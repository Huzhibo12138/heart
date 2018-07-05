<template>
  <div class="xiangbao">
    <div class="xb">
      <h3>一一 配饰分类 一一</h3>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk12.jpg">
        <p>腰带</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk13.jpg">
        <p>帽子</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk14.jpg">
        <p>手套</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk15.jpg">
        <p>袖口</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk16.jpg">
        <p>钥匙扣</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk17.jpg">
        <p>领带</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk18.jpg">
        <p>太阳镜/眼睛</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk19.jpg">
        <p>围巾/丝巾/方巾</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk20.jpg">
        <p>丝巾扣/腰带扣</p>
      </div>
    </div>
    <div class="section1">
      <div>
        <img src="../../../../../static/imgs/hk21.jpg">
        <p>耳套/耳罩</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PeiShi"
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
    color: #7e7e7e;
  }
  .section1{
    width: 2.85rem;
    height: 1.05rem;
    display: flex;
    justify-content: flex-start;
  }
  .section1 div{
    width: 0.95rem;
    height:1.05rem ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .section1 div img{
    width: 0.5rem;
    height: 0.5rem;
  }
  .section1 div p{
    font-size: 12px;
    color: #585858;
  }
</style>
