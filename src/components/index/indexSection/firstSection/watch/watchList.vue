<template>
  <div class="watchList">
    <div class="watchMini" v-for="wList in watchL">
      <a href="">
        <div class="watchMiniImg">
          <img :src="wList.watchImg" alt="">
        </div>
        <p class="p1">
          <span class="s1">{{wList.news}}</span>
          <span class="s2">{{wList.title}}</span>
        </p>
        <p class="p2">
          <span class="s3">￥{{wList.newPrice}}</span>
          <span class="s4">￥{{wList.oldPrice}}</span>
        </p>
      </a>
        <div class="redheart" @touchstart="touch">
          <!--<i class="iconfont icon-xin"></i>-->
          <i class="iconfont icon-xin-copy" ></i>
          <img src="/static/imgs/red.png" alt="" v-show="or_show">
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "watchList",
    data(){
      return{
        or_show:false,
        watchL:[
          {watchImg:"./static/imgs/wwat1.jpg",news:'【9成新】',title:'Louis Vuitton',newPrice:8888,oldPrice:10000},
          {watchImg:"./static/imgs/wwat2.jpg",news:'【8成新】',title:'ZENITH',newPrice:6888,oldPrice:9000},
          {watchImg:"./static/imgs/wwat3.jpg",news:'【9成新】',title:'LONGINES',newPrice:6000,oldPrice:8000},
          {watchImg:"./static/imgs/wwat4.jpg",news:'【9成新】',title:'Cartier',newPrice:5000,oldPrice:7658},
          {watchImg:"./static/imgs/wwat5.jpg",news:'【9成新】',title:'Breguet',newPrice:6550,oldPrice:6588},
          {watchImg:"./static/imgs/wwat6.jpg",news:'【9成新】',title:'Rolex',newPrice:6800,oldPrice:9900},
          {watchImg:"./static/imgs/wwat7.jpg",news:'【9成新】',title:'Breguet',newPrice:6000,oldPrice:8588},
          {watchImg:"./static/imgs/wwat8.jpg",news:'【9成新】',title:'Cartier',newPrice:5000,oldPrice:6588},
          {watchImg:"./static/imgs/wwat9.jpg",news:'【9成新】',title:'ZENITH',newPrice:3000,oldPrice:7655},
          {watchImg:"./static/imgs/wwat10.jpg",news:'【9成新】',title:'Rolex',newPrice:16800,oldPrice:39988},

        ]
      }
    },
    methods:{
      touch(ev){
        var o = ev.target;
        this.or_show = !this.or_show;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .watchList{
    span{
      display: block;
    }
    width:100%;
    padding:0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background:#f7f7f7;
  }
  .watchMini{
    width:49%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom:0.3rem;
    margin-bottom: 0.05rem;
    background:#ffffff;
    .watchMiniImg img{
      width:100%;
      height:1.65rem;
    }
    .p1 {
      display:flex;

      .s1 {
        font-size:0.12rem;
        color:#252825;
        line-height:0.24rem;
        font-weight:900;
      }
      .s2 {
        font-size:0.1rem;
        color:#454545;
        font-weight:900;

        line-height:0.24rem;
        margin-left:4px;
      }
    }
    .p2 {
      display:flex;
      .s3 {
        font-size:0.16rem;
        color:#0a0a0a;
        line-height:0.26rem;
      }
      .s4 {
        font-size:0.08rem;
        color:#bab8ba;
        line-height:0.26rem;
        text-decoration: line-through;
        margin-left:4px;
      }
    }
    .iconfont{
      font-size:0.2rem;
      line-height:0.26rem;
      /*position: absolute;*/
      /*right:0.1rem;*/
      /*bottom:0.1rem;*/

    }
    .redheart{
      width:0.24rem;
      height:0.24rem;
      font-size:0.2rem;
      line-height:0.26rem;
      position: absolute;
      right: 0.08rem;
      bottom: 0.12rem;
      img{
        width:100%;
        height:100%;
        position: absolute;
        bottom:0.01rem;
        right:0.03rem;
      }
    }


  }


</style>
