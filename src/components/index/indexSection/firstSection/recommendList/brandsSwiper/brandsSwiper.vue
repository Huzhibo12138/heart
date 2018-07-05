<template>
  <div class="brandsBox">
    <div class="swiper-container" id="swiper3">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper1" v-for="p in pic">
          <a href="#">
            <img :src="p.picturl" alt="">
            <div class="brandsServe">
              <h1>{{p.title}}</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: "brandsSwiper",
    data(){
      return {
        pic:[
          {picturl:"./static/imgs/wp1.jpg",title:'路易·威登'},
          {picturl:"./static/imgs/wp2.jpg",title:'香奈儿'},
          {picturl:"./static/imgs/wp3.jpg",title:'博柏利'},
          {picturl:"./static/imgs/wp4.jpg",title:'卡地亚'},
          {picturl:"./static/imgs/wp5.jpg",title:'迪奥'},
          {picturl:"./static/imgs/wp6.jpg",title:'普拉达'},
          {picturl:"./static/imgs/wp7.jpg",title:'施华洛世奇'},
          {picturl:"./static/imgs/wp8.jpg",title:'欧米茄'},


        ]
      }
    },
    mounted(){
      this.$nextTick(() => {
        new Swiper ('#swiper3',{
          direction: "horizontal",
          slidesPerView : 4.5,
          spaceBetween : 15,

        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  .brandsBox{
    /*width:100%;*/
    height:0.7rem;
    border-radius: 0.05rem;
    padding:0 0.1rem;
    box-sizing: border-box;
    img{
      width:0.5rem;
      height:0.5rem;
      border-radius: 5px;

    }
    .brandsServe{
      /*width:100%;*/
      height:0.3rem;
      background:rgba(255,255,255,.6);

      text-align: center;
      h1{
        line-height:0.2rem;
        font-size:0.1rem;
        color:#262726;
      }
    }
  }
</style>
