<template>
  <div class="xiangbao">
    <div class="xb">
      <h3>一一 手表分类 一一</h3>
    </div>
    <div class="section">
      <div>
        <img src="../../../../../static/imgs/hk52.jpg">
        <p>机械表</p>
      </div>
      <div>
        <img src="../../../../../static/imgs/hk53.jpg">
        <p>石英表</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShouBiao"
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
    justify-content: flex-start;
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
