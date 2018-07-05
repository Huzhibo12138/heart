<template>
  <div class="orderHeader">
    <router-link to="/cart" class="backBtn">
      <img src="/static/imgs/order_back.jpg" alt="">
    </router-link>
    <p class="msg">
      提交订单
    </p>
  </div>
</template>

<script>
    export default {
        name: "orderHeader"
    }
</script>

<style scoped lang="scss">
  .orderHeader{
    width: 100%;
    height: 0.45rem;
    background: #fff;
    >.backBtn{
      float: left;
      >img{
        display: block;
      }
    }
    >.msg{
      float: left;
      font-size: 0.17rem;
      line-height: 0.45rem;
      color: #000;
      text-align: center;
      width: 2.6rem;
    }
  }
</style>
