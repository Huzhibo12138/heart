<template>
  <div class="indexFooter">
    <div class="footTop f1 " @click="goIndex">
      <i class="iconfont icon-fangzicopy f2"></i>
      <span >首页</span>
    </div>
    <div class="footList f1">
      <i class="iconfont icon-leimupinleifenleileibie--1 f2"></i>
      <span>分类</span>
    </div>
    <div class="footShop f1 ">

      <span class="f3">出售</span>
    </div>
    <div class="footMsg f1">
      <i class="iconfont icon-xinxi f2"></i>
      <span>消息</span>
    </div>
    <div class="footMine f1">
      <i class="iconfont icon-ziyuan1 f2"></i>
      <span>我的</span>
    </div>
    <div class="shop"  @click="goJiaHao">
      <div class="shopMini">
        <i class="iconfont icon-icon10"></i>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "indexFooter",
        methods:{
          goIndex(){

            this.$router.push({path:'/'})
          },
          goJiaHao(){
            this.$router.push({path:'/JiaHao'})
          }
        }
    }
</script>

<style lang="scss" scoped>
  .indexFooter{
    width:100%;
    height:0.5rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding:0.05rem 0;
    border-top:#c4c4bc solid 1px;
    background:#ffffff;
    position:relative;
    z-index:1;
    .f1{
      height:0.5rem;
      width:0.4rem;
      display:flex;
      flex-direction: column;
      align-items: center;
      .f2{
        font-size:0.24rem;
        color:#424542;
        line-height:0.28rem;
      }
      .f3{
        margin-top:0.27rem;
      }
      span{
        font-size:0.12rem;
        color:#767676;
        line-height:0.18rem;
      }

    }
    .f4{
      width:0.4rem;
      height:0.4rem;
      background:#767676;
      color:#ffffff;
      border-radius:50%;
      span{
        color:#ffffff;
      }
    }

  }
  .shop{
    width:0.5rem;
    height:0.25rem;
    position: absolute;
    top:-0.25rem;
    left:50%;
    border-radius: 0.5rem 0.5rem 0 0;
    transform: translateX(-50%);
    background:#ffffff;
    border:1px solid #eaebe9;
    border-bottom:none;
    .shopMini{
      width:0.4rem;
      height:0.4rem;
      position:absolute;
      top:0.05rem;
      left:0.045rem;
      border-radius: 50%;
      background:#ff655a;
      border:1px solid red;
      display:flex;
      align-items: center;
      justify-content: center;
      .iconfont{
        font-size:0.22rem;
        color:#ffffff;
      }
    }
  }
</style>
