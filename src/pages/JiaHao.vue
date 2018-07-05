<template>
<div class="jiahao">
  <a href="#" class="ac"  @click="goClassfly">×</a>
  <div class="top">
    <h3>闲置宝贝卖个人</h3>
    <p>闲置7天出售，15天未出售高价回收</p>
    <p>最高多卖<span style="color: #f7b1b6;">30%</span></p>
  </div>
  <div class="section">
    <div class="left">
      <h3>个人寄卖</h3>
      <p>顺丰免费取件</p>
      <div>
        <p class="p">管家服务</p>
        <p>（维护，拍照，定价，上传）</p>
      </div>
      <div>
        <p class="p">急速7天出售</p>
        <p>（15天未出售高价回收）</p>
      </div>
      <div>
        <p class="p">极速回收</p>
        <p>（售出速度快，极速回款）</p>
      </div>
    </div>
    <div class="right">
      <h3>自主发布</h3>
      <p class="p">自主发布 自主定价</p>
      <div>
        <p>商品资料审核</p>
        <p style="font-size: 12px">（资料审核后需上架）</p>
      </div>
    </div>
  </div>

  <div class="bottom">
    <div class="box"   @click="goJiMai">
      <div>
        <i class="iconfont icon-lipin1"></i>
      </div>
      <h3>
        个人寄卖
      </h3>
    </div>

    <div class="box1"  @click="goFaBu">
      <div>
        <i class="iconfont icon-zhaopianpaizhao"></i>
      </div>
      <h3>
        自主发布
      </h3>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "JiaHao",
      methods:{
        goJiMai(){
          this.$router.push({path:'/JiMai'})
        },
        goFaBu(){
          this.$router.push({path:'/FaBu'})
        },
        goClassfly(){
          this.$router.push({path:'/classfly'})
        },
      }
    }
</script>

<style scoped>
.jiahao{
  background: #f2f2f2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
  .top{
    width: 3.5rem;
    height: 1rem;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
 .ac{
    font-size: 20px;
    color: darksalmon;
    margin-left: 0.1rem;
  }
.top h3{
  font-size: 18px;
  margin-left: 0.1rem;

}
  .top p{
    color: #767676;
    font-size: 12px;
    margin-left: 0.1rem;
  }
  .section{
    width: 3.5rem;
    height: 2.1rem;
    background: white;
    border-radius: 10px;
    display: flex;
    text-align: center;
    align-items: center;
  }
.section .left{
  width: 1.75rem;
  height: 1.8rem;
  border-right: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.section .left h3{
  font-size: 16px;
}
.section .left div p{
  color: #767676;
  font-size: 12px;
}
.section .left  div .p{
  color: #5b5b5b;
  font-size: 14px;
}
.section .left  p{
  color: #767676;
  font-size: 14px;
}
.section .right{
  width: 1.75rem;
  height: 1.8rem;
  border-right: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.section .right h3{
  font-size: 16px;
  margin-top: 0.02rem;
}
.section .right div{
  margin-top: 0.08rem;
}
.section .right div p{
  color: #767676;
  font-size: 14px;
}
.section .right .p{
  color: #767676;
  font-size: 14px;
  margin-top: 0.08rem;
}
  .bottom{
    width: 3.75rem;
    height: 2.5rem;
    background: #f2f2f2;
    display: flex;
  }
  .bottom .box{
    width: 1.875rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .bottom .box div{
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: #f9655b;
    display: flex;
    justify-content: center;
    align-items: center;

  }
.bottom .box div i{
 font-size: 30px;
  color: white;
}
.bottom .box h3{
  font-size: 16px;
}
.bottom .box1{
  width: 1.875rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.bottom .box1 div{
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: #f9655b;
  display: flex;
  justify-content: center;
  align-items: center;

}
.bottom .box1 div i{
  font-size: 30px;
  color: white;
}
.bottom .box1 h3{
  font-size: 16px;
}

</style>
