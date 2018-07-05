<template>
<div class="xiangbao">
  <div class="xb">
    <h3>一一 箱包分类 一一</h3>
  </div>
  <div class="section">
      <div   @click="goSearch">
        <img src="../../../../../static/imgs/hk1.jpg">
        <p>手提包</p>
      </div>
      <div   @click="goSearch">
        <img src="../../../../../static/imgs/hk2.jpg">
        <p>双肩包</p>
      </div>
      <div   @click="goSearch">
        <img src="../../../../../static/imgs/hk3.jpg">
        <p>单肩包</p>
      </div>
  </div>
  <div class="section">
    <div   @click="goSearch">
      <img src="../../../../../static/imgs/hk4.jpg">
      <p>公文包</p>
    </div>
    <div   @click="goSearch">
      <img src="../../../../../static/imgs/hk5.jpg">
      <p>化妆包</p>
    </div>
    <div   @click="goSearch">
      <img src="../../../../../static/imgs/hk6.jpg">
      <p>手机套</p>
    </div>
  </div>
  <div class="section">
    <div   @click="goSearch">
      <img src="../../../../../static/imgs/hk7.jpg">
      <p>胸包</p>
    </div>
    <div   @click="goSearch">
      <img src="../../../../../static/imgs/hk8.jpg">
      <p>卡套</p>
    </div>
    <div   @click="goSearch">
      <img src="../../../../../static/imgs/hk9.jpg">
      <p>手拿包</p>
    </div>
  </div>
  <div class="section1">
    <div   @click="goSearch">
      <img src="../../../../../static/imgs/hk10.jpg">
      <p>行李箱</p>
    </div>
    <div   @click="goSearch">
      <img src="../../../../../static/imgs/hk11.jpg">
      <p>钱包</p>
    </div>
  </div>
</div>
</template>

<script>
  // import classfly from '@/apis/HouKun/classfly.js'
    export default {
        name: "XiangBao",
      methods:{
        goSearch(){
          this.$router.push({path:'/search'})
        },
      }
      // data() {
      //     return{
      //       list:[],
      //     }
      // },
      // beforeCreate() {
      //   classfly.getBrandList((data) => {
      //       this.list.push(data.data.shift());
      //   });
      //
      // },
    }
</script>

<style scoped>
.xb{
  width: 2.85rem;
  height: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .xiangbao h3{
    font-size: 14px;
    color: #676767;
  }
  .section{
    width: 2.85rem;
    height: 1.05rem;
    display: flex;
    justify-content: space-around;
  }
.section div{
  width: 0.95rem;
  height:1.05rem ;
  display: flex;
  flex-direction: column;
justify-content: space-around;
  align-items: center;
  text-align: center;
}
.section div img{
  width: 0.5rem;
  height: 0.5rem;
}
  .section div p{
    font-size: 12px;
    color: #7e7e7e;
  }
.section1{
  width: 2.85rem;
  height: 1.05rem;
  display: flex;
  justify-content: flex-start;
}
.section1 div{
  width: 0.95rem;
  height:1.05rem ;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.section1 div img{
  width: 0.5rem;
  height: 0.5rem;
}
.section1 div p{
  font-size: 12px;
  color: #585858;
}
</style>
