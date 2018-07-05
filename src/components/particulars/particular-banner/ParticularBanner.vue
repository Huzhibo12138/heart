<template>
  <div class="section">
    <div class="banner">
      <div class="swiper-container" id="swiper-con">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="n in data.banner"><img :src=n.src></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!--遮罩层-->
      <div class="mask">
        <div class="mask_inner">95新<span>?</span></div>
      </div>
    </div>
    <!--单品介绍部分-->
    <div class="intr">
      <h2>{{name}}</h2>
      <div class="agt">
        <div class="agt_left">
          <h2>{{newPrice}}</h2>
          <h3>{{oldPrice}}</h3>
        </div>
        <div class="agt_right">
          包邮
        </div>
      </div>
      <div class="ensure">
        <div class="ensure_left"><i class="iconfont icon-right-1"></i>PICC承保</div>
        <div class="ensure_center"><i class="iconfont icon-right-1"></i>6道专家鉴定</div>
        <div class="ensure_right"><i class="iconfont icon-right-1"></i>假一赔十</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "ParticularBanner",
        data(){
          return{
            data:{},
            name:'',
            newPrice:'',
            oldPrice:'',
          }
        },
        created(){
          this.$on('pushbanner',(data)=>{
            this.data = data.data;
             // console.log(this.data);
             this.name = data.data.name;
             this.newPrice = data.data.newPrice;
             // console.log( this.newPrice);
             this.oldPrice = data.data.oldPrice;
          })
        },
      updated(){
          var mySwiper = new Swiper ('#swiper-con', {
            direction: 'horizontal',
            loop: true,

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',

            },
          })
        }
    }
</script>

<style lang="scss" scoped>
    .banner{
      width:100%;
      height:3.65rem;
      position:relative;
    }
    .swiper-container {
      width: 100%;
      height: 3.65rem;
      img{
        width:100%;
        height:3.65rem;
        display: block;
      }
    }
    .swiper-pagination{
      font-size: 0.12rem;
      color:#fff;
    }
    .swiper-pagination-fraction{
      width:0.5rem;
      background:rgba(18,27,19,.6);
      left:2.8rem;
      border-radius: 0.05rem;
    }
  .mask{
    width:100%;
    height:0.36rem;
    background: url("../../../../static/imgs/back1.png");
    position:absolute;
    left:0;
    top:3.30rem;
    z-index: 100;
    .mask_inner{
      width:0.57rem;
      height:0.19rem;
      border:2px solid #ff8481;
      margin-top:0.16rem;
      margin-left:0.2rem;
      border-radius: 0.03rem;
      font-size:0.12rem;
      color:#ff8481;
      padding-left: 0.05rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: -webkit-flex;
      span{
        display:block;
        height: 0.15rem;
        width:0.15rem;
        background:#ff2c1f;
        border-radius: 50%;
        margin-left:0.04rem;
        font-size: 0.08rem;
        color:#fff;
        line-height:0.15rem;
        text-align: center;
      }
    }
  }
  .intr{
    width:100%;
    /*background:yellow;*/
    border-bottom:2px solid #f2f2f2;
    h2{
      font-size:0.18rem;
      color:#2b2f2b;
      margin-left:0.2rem;
      margin-top: 0.1rem;
      padding:0 0.05rem;
      box-sizing: border-box;
    }
    .agt{
      width:100%;
      height:0.6rem;
      /*background:red;*/
      display: -webkit-flex;
      justify-content: space-between;
      .agt_left{
          display: -webkit-flex;
          h2{
            font-size: 0.25rem;
            color:#ff382a;
            line-height: 0.35rem;
          }
          h3{
            font-size: 0.11rem;
            color:#8d8b8d;
            text-decoration: line-through;
            line-height: 0.6rem;
            margin-left:0.15rem;
          }
      }
      .agt_right{
        width:0.44rem;
        height:0.2rem;
        border:1px solid #ff9992;
        font-size: 0.12rem;
        color:#ff544a;
        margin-top: 0.25rem;
        margin-right:0.2rem;
        text-align: center;
        line-height: 0.2rem;
      }
    }
    .ensure{
      display: -webkit-flex;
      justify-content: space-between;
      width:100%;
      padding:0 0.16rem;
      box-sizing: border-box;
      height:0.35rem;
      .ensure_left{
        font-size: 0.1rem;
        color:#828082;
        display: -webkit-flex;
        line-height: 0.35rem;
        .iconfont{
          font-size: 0.14rem;
          color:#ff4439;
          display:block;
        }
      }
      .ensure_center{
        font-size: 0.1rem;
        color:#828082;
        display: -webkit-flex;
        line-height: 0.35rem;
        .iconfont{
          font-size: 0.14rem;
          color:#ff4439;
          display:block;
        }
      }
      .ensure_right{
        font-size: 0.1rem;
        color:#828082;
        display: -webkit-flex;
        line-height: 0.35rem;
        .iconfont{
          font-size: 0.14rem;
          color:#ff4439;
          display:block;
        }
      }
    }
  }
</style>
