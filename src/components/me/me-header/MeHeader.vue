<template>
    <div class="header">
      <div class="header_top">
        <i class="iconfont icon-shezhi"></i>
        <i class="iconfont icon-ziyuan"></i>
      </div>
      <div class="header_center">
        <div class="cricle"><img src="static/imgs/lhy-2.jpg"></div>
        <div class="cricle_center">
          <h2>xinshang...</h2>
          <div class="huiyuan">铜牌会员></div>
        </div>
        <div class="score">
          <h5>未认证></h5>
          <h6>信用积分</h6>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MeHeader"
    }
</script>

<style lang="scss" scoped>
.header{
  width:100%;
  height:1.9rem;
  background:#212021;
  .header_top{
    display:flex;
    padding:0.13rem 0.2rem 0 0.2rem;
    box-sizing:border-box;
    justify-content: space-between;
    .iconfont{
      font-size: 0.2rem;
      color:#fff;
    }
  }
  .header_center{
    margin-top: 0.44rem;
    display:flex;
    .cricle{
      img{
        width:0.7rem;
        height:0.7rem;
        margin:0 0.19rem 0 0.12rem;
      }
      /*width:0.7rem;*/
      /*height:0.7rem;*/
      /*background:#e7e3e7;*/
      /*border-radius: 50%;*/
      /*margin:0 0.19rem 0 0.12rem;*/
    }
    .cricle_center{
      h2{
        font-size:0.18rem;
        color:#fff;
        margin-top: 0.1rem;
      }
      .huiyuan{
        width:0.73rem;
        height:0.19rem;
        margin-top: 0.15rem;
        border:1px solid #a5a6a5;
        border-radius: 0.22rem;
        font-size: 0.13rem;
        color:#fff;
        text-align: center;
        line-height: 0.19rem;
      }
    }
    .score{
      width:0.8rem;
      height:0.38rem;
      background: #000400;
      border-radius: 0.2rem 0 0 0.2rem;
      margin-left: 1rem;
      h5{
        font-size: 0.1rem;
        color:#fff;
        text-align: center;
        font-weight: 100;
      }
      h6{
        font-size: 0.11rem;
        color:#fff;
        text-align: center;
        font-weight: 100;
      }
    }
  }
}
</style>
