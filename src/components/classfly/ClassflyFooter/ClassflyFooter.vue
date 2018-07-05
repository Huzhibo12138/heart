<template>
  <div class="indexFooter">
    <div class="footTop f1 " @click="goIndex">
      <i class="iconfont icon-fangzicopy f2"></i>
      <span >首页</span>
    </div>
    <div class="footList f1" @click="goClassfly">
      <i class="iconfont icon-leimupinleifenleileibie--1 f2"></i>
      <span>分类</span>
    </div>
    <div class="footShop f1 ">

      <span class="f3">出售</span>
    </div>
    <div class="footMsg f1" @click="goChat">
      <i class="iconfont icon-xinxi f2"></i>
      <span>消息</span>
    </div>
    <div class="footMine f1"  @click="goMe">
      <i class="iconfont icon-ziyuan1 f2"></i>
      <span>我的</span>
    </div>
    <div class="shop">
      <div class="shopMini" @click="goJiaHao">
        <i class="iconfont icon-icon10"></i>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "ClassflyFooter",
    methods:{
      goJiaHao(){
        this.$router.push({path:'/JiaHao'})
      },
      goIndex(){
        this.$router.push({path:'/'})
      },
      goClassfly(){
        this.$router.push({path:'/classfly'})
      },
      goMe(){
        this.$router.push({path:'/me'})
      },
      goChat(){
        this.$router.push({path:'/chat'})
      }
    }
  }
</script>

<style scoped>
  .indexFooter {
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.05rem 0;
    border-top: #c4c4bc solid 1px;
    background: #ffffff;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;

  }
  .indexFooter  .f1 {
    height: 0.5rem;
    width: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .indexFooter  .f1 .f2{
    font-size:0.24rem;
    color:#424542;
    line-height:0.28rem;
  }
  .indexFooter  .f1 .f3{
    margin-top:0.27rem;
  }
  .indexFooter  .f1 span{
    font-size:0.12rem;
    color:#767676;
    line-height:0.18rem;
  }
  .indexFooter .f4 {
    width: 0.4rem;
    height: 0.4rem;
    background: #767676;
    color: #ffffff;
    border-radius: 50%;
  }
  .indexFooter .f4 span{
    color:#ffffff;
  }
  .indexFooter .shop {
    width: 0.5rem;
    height: 0.25rem;
    position: absolute;
    top: -0.25rem;
    left: 50%;
    border-radius: 0.5rem 0.5rem 0 0;
    transform: translateX(-50%);
    background: #ffffff;
    border: 1px solid #eaebe9;
    border-bottom: none;
  }
  .indexFooter .shop .shopMini {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 0.05rem;
    left: 0.045rem;
    border-radius: 50%;
    background: #ff655a;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .indexFooter .shop .shopMini .iconfont{
    font-size:0.22rem;
    color:#ffffff;
  }
</style>
