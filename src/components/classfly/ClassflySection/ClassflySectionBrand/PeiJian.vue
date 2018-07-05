<template>
  <div class="xiangbao">
    <div class="xb">
      <h3>一一 配件分类 一一</h3>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk54.jpg">
        <p>钢笔</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk55.jpg">
        <p>圆珠笔</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk56.jpg">
        <p>签字笔</p>
      </div>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk57.jpg">
        <p>笔记本/笔袋</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk58.jpg">
        <p>眼镜盒/眼睛袋</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk59.jpg">
        <p>烟盒/打火机</p>
      </div>
    </div>
    <div class="section1">
      <div>
        <img src="../../../../../static/imgs/hk60.jpg">
        <p>手机链/挂件</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk61.jpg">
        <p>其他</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PeiJian"
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
