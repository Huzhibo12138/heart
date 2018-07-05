<template>
  <div class="clothingList">
    <div class="clothingMini" v-for="wList in clothingL">
        <div class="clothingMiniImg">
          <img :src="wList.clothingImg" alt="">
        </div>
        <p class="p1">
          <span class="s1">{{wList.news}}</span>
          <span class="s2">{{wList.title}}</span>
        </p>
        <p class="p2">
          <span class="s3">￥{{wList.newPrice}}</span>
          <span class="s4">￥{{wList.oldPrice}}</span>
        </p>
      <i class="iconfont icon-xin-copy" @touchstart="touch"></i>
      <div class="redheart" v-show="or_show">
        <i class="iconfont icon-xin"></i>
        <!--<img src="" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "clothingList",
    data(){
      return{
        or_show:false,
        clothingL:[
          {clothingImg:"./static/imgs/wvb1.jpg",news:'【9成新】',title:'J.Crew',newPrice:1288,oldPrice:5000},
          {clothingImg:"./static/imgs/wvb2.jpg",news:'【8成新】',title:'Vince',newPrice:388,oldPrice:988},
          {clothingImg:"./static/imgs/wvb3.jpg",news:'【全新】',title:'J.Crew',newPrice:867,oldPrice:1588},
          {clothingImg:"./static/imgs/wvb4.jpg",news:'【全新】',title:'Under Armour',newPrice:567,oldPrice:1254},
          {clothingImg:"./static/imgs/wvb5.jpg",news:'【全新】',title:'J.Crew',newPrice:1265,oldPrice:6500},
          {clothingImg:"./static/imgs/wvb6.jpg",news:'【9成新】',title:'Vince',newPrice:1200,oldPrice:2300},
          {clothingImg:"./static/imgs/wvb7.jpg",news:'【全新】',title:'Under Armour',newPrice:988,oldPrice:1100},
          {clothingImg:"./static/imgs/wvb8.jpg",news:'【全新】',title:'J.Crew',newPrice:500,oldPrice:888},
          {clothingImg:"./static/imgs/wvb9.jpg",news:'【9成新】',title:'Under Armour',newPrice:888,oldPrice:1500},
          {clothingImg:"./static/imgs/wvb10.jpg",news:'【全新】',title:'Vince',newPrice:590,oldPrice:1300},

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
  .clothingList{
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
  .clothingMini{
    width:49%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom:0.3rem;
    margin-bottom: 0.05rem;
    background:#ffffff;
    .clothingMiniImg img{
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
      position: absolute;
      right:0.1rem;
      bottom:0.1rem;

    }
    .redheart{
      font-size:0.2rem;
      line-height:0.26rem;
      position: absolute;
      right:0.01rem;
      bottom:0.01rem;
    }


  }


</style>
