<template>
  <div class="jewelry">
    <div class="jewelryMini" v-for="b in bList">
      <a href="">
        <div class="jewelryMiniImg">
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
      </a>
    </div>

  </div>
</template>
<script>
  export default {
    name: "jewelryList",
    data(){
      return{
        bList:[
          {bagImg:"./static/imgs/wg5.jpg",news:'【9成新】',title:'Louis Vuitton',newPrice:888,oldPrice:10000},
          {bagImg:"./static/imgs/wg6.jpg",news:'【9成新】',title:'Juicy Couture',newPrice:388,oldPrice:800},
          {bagImg:"./static/imgs/wg6.jpg",news:'【9成新】',title:'GIVENCHY',newPrice:2288,oldPrice:5433},
          {bagImg:"./static/imgs/wg7.jpg",news:'【9成新】',title:'Louis Vuitton',newPrice:566,oldPrice:1030},
          {bagImg:"./static/imgs/wg8.jpg",news:'【9成新】',title:'Juicy Couture',newPrice:538,oldPrice:5200},
          {bagImg:"./static/imgs/wg9.jpg",news:'【9成新】',title:'GIVENCHY',newPrice:356,oldPrice:800},
          {bagImg:"./static/imgs/wg10.jpg",news:'【9成新】',title:'GIVENCHY',newPrice:588,oldPrice:4000},
          {bagImg:"./static/imgs/wg11.jpg",news:'【9成新】',title:'Juicy Couture',newPrice:848,oldPrice:1700},
          {bagImg:"./static/imgs/wg12.jpg",news:'【9成新】',title:'GIVENCHY',newPrice:588,oldPrice:1000},
          {bagImg:"./static/imgs/wg13.jpg",news:'【9成新】',title:'Louis Vuitton',newPrice:878,oldPrice:1500},

        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .jewelry{
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
  .jewelryMini{
    width:49%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom:0.3rem;
    margin-bottom: 0.05rem;
    background:#ffffff;
    .jewelryMiniImg img{
      width:100%;
      height:1.65rem;
    }
    .p1 {
      display:flex;

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
