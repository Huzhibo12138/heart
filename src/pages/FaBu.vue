<template>
    <div class="fabu">
      <div class="box">
        <a href="#"  @click="goJiaHao"><</a>
        <h4>自主发布</h4>
        <h5>发布流程</h5>
      </div>
      <div class="box3">
        <a href="#">品类</a>
        <a href="#" class="a">必选 > </a>
      </div>
      <div class="box3">
        <a href="#">品牌</a>
        <a href="#" class="a">必选 > </a>
      </div>
      <div class="box3">
        <a href="#">成色</a>
        <a href="#" class="a">必选 > </a>
      </div>
      <div class="box3">
        <a href="#">图片</a>
        <a href="#" class="a">根据提示上传图片 > </a>
      </div>
      <div class="box1">
        <i class="iconfont icon-zhaopianpaizhao"></i>
        <p>增添图片</p>
      </div>
      <div class="box2"></div>
      <div class="box5">
        <h3>
          商品特征
        </h3>
      </div>
      <textarea  id="te" cols="30" rows="10" placeholder="填写商品特征，更容易被搜索到"></textarea>
      <div class="box5">
        <h3>
          卖家寄语
        </h3>
      </div>
      <textarea  id="te1" cols="30" rows="10" placeholder="小主，请详细描述你的宝贝吧！让大家更了解TA，如：这个宝贝是2017在塞班免税购买的，当时喜欢的不要不要的，自己用的很爱惜，只有右下角一丢丢的磨损，盒子和发票都有，可随宝贝一起提供，现在挥泪出手，你愿意当TA的主人吗？"></textarea>
      <div class="box2"></div>
      <div class="box3">
        <a href="#">售价</a>
        <a href="#" class="a">￥ 0</a>
      </div>
      <div class="box3">
        <a href="#">原价</a>
        <a href="#" class="a">￥ 0 </a>
      </div>
      <div class="box3">
        <a href="#">服务费抵扣卷</a>
        <a href="#" class="a"><span>| 一张可以使用 | </span> > </a>
      </div>
      <div class="box6">
        <p>
          *提示：服务费抵扣券一旦绑定将不可更改
        </p>
      </div>
      <div class="box7">
        <a href="#" style="text-decoration: none;">服务费：12%</a>
        <a href="#">查看收费标准</a>
        <a href="#">商品优势评估</a>
      </div>
      <div class="box2"></div>
      <div class="box8">
        <a href="#">数量</a>
        <button>
          1
        </button>
      </div>
      <div class="box3" style="height: 1rem;">
        <a href="#">商品尺寸</a>
        <a href="#" class="a">填写长宽高或尺寸</a>
      </div>
      <div class="box3">
        <a href="#">商品型号</a>
        <a href="#" class="a">填写商品官方型号（非必填）</a>
      </div>
      <div class="box2"></div>
      <div class="div">
        <p>选择保存完整的配件（非必填）</p>
      </div>
      <div class="divx">
        <button>发票</button>
        <button>盒子</button>
        <button>说明书</button>
      </div>
      <div class="divx">
        <button>身份证</button>
        <button>其他</button>
        <button>请输入名称</button>
      </div>
      <div class="div1">
        <button @click="goClassfly">确认发布</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FaBu",
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
  .fabu{
    width: 100%;
    height: 100%;
  }
  .fabu .box{
    width: 3.75rem;
    height: 0.45rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ecebeb;
  }
  .fabu .box a{
    font-size: 18px;
    margin-left: 0.1rem;
  }
  .fabu .box h4{
    font-size: 18px;
  }
  .fabu .box h5{
    font-size: 16px;
    margin-right: 0.1rem;
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
  .box3 a span {
    color: #f97d91;
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
  .box5{
    width: 3.75rem;
    height: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .box5 h3{
    font-size: 14px;
    margin-left: 0.1rem;
  }
  #te{
    width: 3.69rem;
    height: 0.5rem;
    border:0;
    font-size: 14px;
    color: #b6b6b6;
    border-bottom: 1px solid #e3e3e3;
  }
  #te1{
    width: 3.69rem;
    height: 1.8rem;
    border:0;
    font-size: 14px;
    color: #b6b6b6;

  }
  .box6{
    width: 3.75rem;
    height: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .box6 p{
    font-size: 14px;
    margin-left: 0.1rem;
    color: #f97d91;
  }
  .box7{
    width: 3.75rem;
    height: 0.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #e3e3e3;
  }
  .box7 a{
    font-size: 13px;
    color: #6d6d6d;
    text-decoration: underline;
  }
  .box8 {
    margin-top: 0.1rem;
    width: 3.75rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #f5f5f5;
  }
  .box8 a{
    font-size: 14px;
    color: black;
    margin-left: 0.1rem;
  }
  .box8 button{
    width: 1.2rem;
    height: 0.4rem;
    background: #f7f7f7;

  }
  .div{
    width: 3.75rem;
    height: 0.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .div p{
    font-size: 14px;
    margin-left: 0.1rem;
  }
  .divx{
    width: 3.75rem;
    height: 0.7rem;
    display: flex;
    justify-content: space-around;
    align-content: center;
  }
  .divx button{
    width: 1rem;
    height: 0.4rem;
    background: white;
    border-radius: 8px;
  }
  .div1{
    width: 3.75rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div1 button{
    width: 3.5rem;
    height: 0.6rem;
    background: #fc665e;
    border: 0;
    color: white;
    font-size: 14px;
  }
</style>
