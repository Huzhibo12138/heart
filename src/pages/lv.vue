<template>
<div class="lv">
  <div class="top">
    <a href="#" @click="goClassfly"> < </a>
    <i class="iconfont icon-soucha"></i>
  </div>
  <div class="img">
    <img src="../../static/imgs/tt5.jpg">
  </div>
  <div class="box">
    <div class="left">
      <img src="../../static/imgs/hk126.jpg">
      <h3>Louis Vuitton</h3>
    </div>
    <div class="right">
      <div>
        + 关注
      </div>
    </div>
  </div>
  <div class="section">
    <div>
      自1854年以来，代代相传至今的路易威登，以卓越品质、杰出创意和精湛工艺成为时尚旅行艺术的象征 。
      产品包括手提包，旅行用品，小型皮具，配饰，鞋履，成衣，腕表，高级珠宝及个性化订制服务等
    </div>
  </div>
  <div class="box1">
    <div class="box2">
      <img src="../../static/imgs/hk127.jpg">
      <p>【9成新】Louis Vuitton</p>
      <a href="#">￥2100</a>
    </div>
    <div class="box3">
      <img src="../../static/imgs/hk128.jpg">
      <p>【全新】Louis Vuitton</p>
      <a href="#">￥2380</a>
    </div>
  </div>
  <div class="box1">
    <div class="box2">
      <img src="../../static/imgs/hk129.jpg">
      <p>【9成新】Louis Vuitton</p>
      <a href="#">￥2800</a>
    </div>
    <div class="box3">
      <img src="../../static/imgs/hk130.jpg">
      <p>【全新】Louis Vuitton</p>
      <a href="#">￥4890</a>
    </div>

  </div>
  <div class="box1">
    <div class="box2">
      <img src="../../static/imgs/hk131.jpg">
      <p>【9成新】Louis Vuitton</p>
      <a href="#">￥21000</a>
    </div>
    <div class="box3">
      <img src="../../static/imgs/hk132.jpg">
      <p>【全新】Louis Vuitton</p>
      <a href="#">￥2300</a>
    </div>
  </div>
  <div class="box1">
    <div class="box2">
      <img src="../../static/imgs/hk133.jpg">
      <p>【9成新】Louis Vuitton</p>
      <a href="#">￥6888</a>
    </div>
    <div class="box3">
      <img src="../../static/imgs/hk134.jpg">
      <p>【全新】Louis Vuitton</p>
      <a href="#">￥2100</a>
    </div>
  </div>
  <div class="box1">
    <div class="box2">
      <img src="../../static/imgs/hk135.jpg">
      <p>【9成新】Louis Vuitton</p>
      <a href="#">￥1500</a>
    </div>
    <div class="box3">
      <img src="../../static/imgs/hk136.jpg">
      <p>【全新】Louis Vuitton</p>
      <a href="#">￥8000</a>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "lv",
      methods:{
        goClassfly(){
          this.$router.push({path:'/classfly'})
        },
      }
    }
</script>

<style scoped>
  .lv{
  width: 100%;
  height: 100%;
}
  .top{
    width: 3.75rem;
    height: 0.45rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.top a{
  font-size: 25px;
  color: #7f7f7f;
  margin-left: 0.1rem;
}
  .top i{
    font-size: 20px;
    color: #7f7f7f;
    margin-right: 0.1rem;
  }
  .img{
    width: 3.75rem;
    height: 2rem;
    display: flex;
  }
  .img img{
    width: 3.75rem;
    height: 2rem;
  }
  .box{
    width: 3.75rem;
    height: 0.45rem;
    display: flex;
    justify-content: center;
  }
  .box .left{
    width: 2.5rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .box .left img{
    width: 0.5rem;
    height: 0.5rem;
    position: relative;
    top: -0.1rem;
  }
  .box .left h3{
    font-size: 14px;
  }
  .box .right{
    width: 1.25rem;
    height: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box .right div{
    width: 0.7rem;
    height: 0.25rem;
    border: 1px solid #ff9c95;
    color: #ff564a;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .section{
    width: 3.75rem;
    height: 0.6rem;
    display: flex;
    justify-content: center;
  }
  .section div{
    width: 3.4rem;
    height: 0.6rem;
    font-size: 14px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .box1{
    width: 3.75rem;
    height: 2.6rem;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #f5f4f5;
    background: #f7f7f7;
  }
  .box1 .box2{
      width: 1.75rem;
      height: 2.45rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    background: white;
    }
  .box1 .box2 img{
    width: 1.75rem;
    height: 1.75rem;
  }
  .box1 .box2 p{
    color: #505250;
    font-size: 14px;
  }
  .box1 .box2 a{
    color: black;
    font-size: 16px;
  }
  .box1 .box3{
    width: 1.75rem;
    height: 2.45rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;
  }
  .box1 .box3 img{
    width: 1.75rem;
    height: 1.75rem;
  }
  .box1 .box3 p{
    color: #505250;
    font-size: 14px;
  }
  .box1 .box3 a{
    color: black;
    font-size: 16px;
  }
</style>
