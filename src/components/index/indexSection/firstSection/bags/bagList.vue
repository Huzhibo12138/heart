<template>
    <div class="bagList">
      <div class="bagListmini" v-for="b in bList">
          <div class="bagListminiImg">
            <img :src="b.bagImg" alt="">
          </div>
          <p class="p1">
            <span class="s1">{{b.news}}</span>
            <span class="s2">{{b.title}}</span>
          </p>
          <p class="p2">
            <span class="s3">￥{{b.newPrice}}</span>
            <span class="s4">￥{{b.oldPrice}}</span>
          </p>
          <i class="iconfont icon-xin-copy"></i>
      </div>

    </div>
</template>
<script>
    export default {
        name: "bagList",
      data(){
        return{
          bList:[
            {bagImg:"./static/imgs/wxb1.jpg",news:'【9成新】',title:'Louis Vuitton',newPrice:4633,oldPrice:7688},
            {bagImg:"./static/imgs/wxb2.jpg",news:'【8成新】',title:'ZENITH',newPrice:6888,oldPrice:9988},
            {bagImg:"./static/imgs/wxb3.jpg",news:'【9成新】',title:'LONGINES',newPrice:2867,oldPrice:3888},
            {bagImg:"./static/imgs/wxb4.jpg",news:'【8成新】',title:'Louis Vuitton',newPrice:3800,oldPrice:4988},
            {bagImg:"./static/imgs/wxb5.jpg",news:'【9成新】',title:'FENDI',newPrice:2600,oldPrice:4288},
            {bagImg:"./static/imgs/wxb6.jpg",news:'【9成新】',title:'Louis Vuitton',newPrice:3800,oldPrice:4988},
            {bagImg:"./static/imgs/wxb7.jpg",news:'【7成新】',title:'MCM ',newPrice:6800,oldPrice:8888},
            {bagImg:"./static/imgs/wxb8.jpg",news:'【8成新】',title:'COACH',newPrice:2500,oldPrice:8988},
            {bagImg:"./static/imgs/wxb9.jpg",news:'【9成新】',title:'Moschino ',newPrice:1300,oldPrice:5908},
            {bagImg:"./static/imgs/wxb10.jpg",news:'【9成新】',title:'Dior',newPrice:2380,oldPrice:4888},
            {bagImg:"./static/imgs/wxb11.jpg",news:'【9成新】',title:'Cartier',newPrice:5368,oldPrice:9988},
            {bagImg:"./static/imgs/wxb12.jpg",news:'【9成新】',title:'Hermès',newPrice:5800,oldPrice:18988},

          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .bagList{
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
  .bagListmini{
    width:49%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom:0.3rem;
    margin-bottom: 0.05rem;
    background:#ffffff;
      .bagListminiImg img{
        width:100%;
        height:1.65rem;
      }
    .p1 {
      display:flex;

      padding:0.2rem 0 0;
      .s1 {
        font-size:0.12rem;
        color:#252825;
        line-height:0.24rem;
        font-weight: 900;
      }
      .s2 {
        font-weight:900;
        font-size:0.1rem;
        color:#535353;
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
      position: absolute;
      right:0.1rem;
      bottom:0.1rem;

    }


  }


</style>
