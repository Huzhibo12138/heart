<template>
<div class="jimai">
  <div class="box">
    <a href="#"   @click="goJiaHao"><</a>
    <h4>个人寄卖</h4>
    <h5>寄卖流程</h5>
  </div>
  <div class="box1">
    <i class="iconfont icon-zhaopianpaizhao"></i>
    <p>增添图片</p>
  </div>
  <div class="box2"></div>
  <div class="box3">
    <a href="#">品类</a>
    <a href="#" class="a">必填 > </a>
  </div>
  <div class="box3">
    <a href="#">品牌</a>
    <a href="#" class="a">必填 > </a>
  </div>
  <textarea  id="text" cols="30" rows="10" placeholder="描述一下你的商品"></textarea>
  <div class="box4"></div>
  <div class="box5">
    <button   @click="goClassfly">确定</button>
  </div>
</div>
</template>

<script>
    export default {
        name: "JiMai",
      methods:{
        goJiaHao(){
          this.$router.push({path:'/JiaHao'})
        },
        goClassfly(){
          this.$router.push({path:'/classfly'})
        },
      }
    }
</script>

<style scoped>
.jimai{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.jimai .box{
    width: 3.75rem;
    height: 0.45rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ecebeb;
  }
.jimai .box a{
    font-size: 18px;
    margin-left: 0.1rem;
  }
.jimai .box h4{
  font-size: 18px;
}
.jimai .box h5{
  font-size: 16px;
  margin-right: 0.1rem;
}
.box1{
    width: 3.75rem;
    height: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
.box1 i{
  font-size: 45px;
  color: #353535;
}
.box1 p{
  font-size: 12px;
  color: #181818;
}
.box2{
    width: 3.75rem;
    height: 0.1rem;
    background: #f2f2f2;
  }
.box3 {
  width: 3.75rem;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #f5f5f5;
}
.box3 a{
    font-size: 14px;
    color: black;
    margin-left: 0.1rem;
  }
.box3 .a{
  color: #d9d9d9;
  margin-right: 0.1rem;
}
#text{
  width: 3.69rem;
  height: 1.63rem;
  border:0;
  font-size: 14px;
  color: #b6b6b6;
  outline: 0;
  text-indent: 2px;
}
  .box4{
    width: 3.75rem;
    height: 1.35rem;
    background: #f2f2f2;
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
  }
  .box5{
    width: 3.75rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box5 button{
  width: 3.5rem;
  height: 0.6rem;
  background: #fc665e;
  border: 0;
  color: white;
  font-size: 14px;
}
</style>
