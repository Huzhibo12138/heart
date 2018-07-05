<template>
  <div class="indexListNav">
    <div class="listNavTop">
      <div class="listNavTopMini">
        <i class="iconfont icon-right-1"></i>
        <p class="mini">PICC承保</p>
      </div>
      <div class="listNavTopMini">
        <i class="iconfont icon-right-1"></i>
        <p class="mini">6道专家鉴定</p>
      </div>
      <div class="listNavTopMini">
        <i class="iconfont icon-right-1"></i>
        <p class="mini">假一赔三</p>
      </div>
      <div class="listNavTopMini">
        <i class="iconfont icon-right-1"></i>
        <p class="mini">极速售卖</p>
      </div>
    </div>
    <div class="listNavSection">
      <div class="listNavSectionMini">
        <i class="iconfont icon-zulin"></i>
        <p class="mini">租赁</p>
      </div>
      <div class="listNavSectionMini">
        <i class="iconfont icon-shequ"></i>
        <p class="mini">社区</p>
      </div>
      <div class="listNavSectionMini">
        <i class="iconfont icon-lipin1"></i>
        <p class="mini">寄卖</p>
      </div>
      <div class="listNavSectionMini">
        <i class="iconfont icon-qiaquan"></i>
        <p class="mini">领券</p>
      </div>
      <div class="listNavSectionMini">
        <i class="iconfont icon-jisuan"></i>
        <p class="mini">估价</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexListNav"
    }
</script>

<style scoped lang="scss">
  .indexListNav{
    display:flex;
    flex-direction: column;
    padding:0 0.15rem;
    .listNavTop{
      display:flex;
      justify-content: space-around;
      align-items: center;
      height:0.3rem;
      .listNavTopMini{
        padding:0.08rem 0;
        display:flex;
        justify-content: space-between;
        .iconfont{
          color:#ff483d;
        }
        .mini{
          font-weight:900;
          margin-left:4px;
          font-size: 0.1rem;
          color:#9a999a;
        }
      }
    }
  }
  .listNavSection{

    display:flex;
    justify-content: space-around;
    .listNavSectionMini{
      display:flex;
      flex-direction: column;
      align-items: center;
      padding:0.14rem 0;
      .iconfont{
        font-size:0.26rem;
        color:#2d2f2d;
        line-height: 0.3rem;
      }
  .mini{
    margin-top:4px;
    font-size: 0.12rem;
    color:#2d2f2d;
    line-height:0.26rem;
  }
    }
  }
</style>
