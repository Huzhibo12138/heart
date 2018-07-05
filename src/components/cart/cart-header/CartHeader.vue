<template>
  <div class="header">
    <div class="header_top">
      <i class="iconfont icon-jiantou-copy-copy"  @click="$router.back(-1)"></i>
      <h2>购物车</h2>
    </div>


  </div>
</template>

<script>
    export default {
        name: "CartHeader",
    }
</script>

<style lang="scss" scoped>
  .header_top{
    width:100%;
    height:0.45rem;
    background:#fff;
    display: -webkit-flex;
    padding: 0 0.23rem;
    box-sizing: border-box;
    border-bottom: 2px solid #f0f0f0;
    .iconfont{
      display: block;
      font-size: 0.25rem;
      color:#222222;
      line-height: 0.45rem;
    }
    h2{
      color:#030303;
      font-size: 0.18rem;
      line-height: 0.45rem;
      margin-left: 1.10rem;
    }
  }


</style>
