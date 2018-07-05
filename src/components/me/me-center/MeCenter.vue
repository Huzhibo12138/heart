<template>
    <div class="section">
      <div class="section_header">
        <h2>我的买家</h2>
        <i class="iconfont icon-qiehuan"></i>
        <h3>我是卖家</h3>
      </div>
      <div class="section_center">
         <div class="center_one">
           <h5>0</h5>
           <h6>优惠券</h6>
         </div>
          <p></p>
        <div class="center_one">
          <h5>¥20.0</h5>
          <h6>红包</h6>
        </div>
          <p></p>
        <div class="center_one">
          <h5>¥0</h5>
          <h6>信用额度</h6>
        </div>
      </div>
     <ul class="buy">
       <li>
         <i class="iconfont icon-qianbao"></i>
         <h3>我买到的</h3>
       </li>
       <li>
         <i class="iconfont icon-iconcopy"></i>
         <h3>我租到的</h3>
       </li>
       <li>
         <i class="iconfont icon-xin-copy"></i>
         <h3>收藏关注</h3>
       </li>
       <li>
         <i class="iconfont icon-icons64x6420"></i>
         <h3>我买到的</h3>
       </li>
     </ul>
      <ul class="list">
        <li>
          <h2>我的社区</h2>
          <i class="iconfont icon-jiantou3"></i>
        </li>
        <li>
          <h2>帮助中心</h2>
          <i class="iconfont icon-jiantou3"></i>
        </li>
        <li>
          <h2>拍卖资格</h2>
          <i class="iconfont icon-jiantou3"></i>
        </li>
        <li>
          <h2>福利中心</h2>
          <i class="iconfont icon-jiantou3"></i>
        </li>
        <li>
          <h2>邀请好友</h2>
          <i class="iconfont icon-jiantou3"></i>
        </li>
      </ul>

      <div class="kefu">
        <p>客服电话：400-630-8055（9:00-18：:00）</p>
      </div>
    </div>
</template>
<script>
    export default {
        name: "MeCenter"
    }
</script>

<style lang="scss" scoped>
  .section{
    width:100%;
    height:100%;
    background:#f7f3f7;
  }
  .section_header{
    width:100%;
    height:0.65rem;
    background:#fff;
    border-bottom:1px solid #f7f6f7;
    display: flex;
    justify-content: space-between;
    padding:0 0.56rem;
    box-sizing: border-box;
    h2{
      font-size: 0.15rem;
      color:#ff5347;
      line-height: 0.65rem;
    }
    .iconfont{
      font-size: 0.15rem;
      color:#9b9a9b;
      line-height: 0.65rem;
    }
    h3{
      font-size:0.15rem;
      color:#6e706e;
      line-height: 0.65rem;
    }
  }
  .section_center{
    height:0.68rem;
    width:100%;
    background:#fff;
    display:flex;
    margin-bottom: 0.07rem;
    justify-content: space-around;
    p{
      background:#f8f7f8;
      height:0.21rem;
      width:0.02rem;
      margin-top: 0.23rem;
    }
    .center_one{
      margin-top: 0.18rem;
      h5{
        font-size: 0.15rem;
        color:#212321;
        text-align: center;
      }
      h6{
        font-size: 0.13rem;
        color:#686868;
        text-align: center;

      }
    }
  }
  .buy{
    width:100%;
    height:0.8rem;
    background:#fff;
    display: flex;
    justify-content: space-around;
    padding-top: 0.15rem;
    box-sizing: border-box;
    margin-bottom: 0.08rem;
    li{
      .iconfont{
        display: block;
        font-size: 0.25rem;
        color:#4e4f4e;
        text-align:center;
      }
      h3{
        font-size: 0.13rem;
        color:#565556;
        text-align:center;
      }
    }
  }
  .list{
    width:100%;
    background:#fff;
    li{
      display: flex;
      height:0.52rem;
      width:100%;
      justify-content: space-between;
      padding: 0 0.21rem;
      box-sizing: border-box;
      border-bottom: 1px solid #f7f6f7;
      h2{
        font-size: 0.15rem;
        line-height: 0.52rem;
        color:#545654;
      }
      .iconfont{
        font-size: 0.17rem;
        color:#545654;
        line-height: 0.52rem;
      }
    }
  }
  .kefu{
    width:2rem;
    height:0.5rem;
    border:1px solid #e3e2e3;
    margin: 0.2rem auto;
    border-radius: 0.03rem;
    padding:0.05rem 0.2rem;
    box-sizing: border-box;
    p{
      font-size:0.13rem;
      color:#848484;
    }
  }
</style>
