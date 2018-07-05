<template>
  <section>
    <div class="list">
        <a href="javascript:;">
          <i class="iconfont icon-zan"></i>
          <p>收藏/赞/评论</p>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-fensi"></i>
          <p>新的粉丝</p>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-qian"></i>
          <p>卖家提醒</p>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-baobao"></i>
          <p>买家提醒</p>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-remind"></i>
          <p>系统消息</p>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-yaoqinghaoyou"></i>
          <p>邀请好友</p>
        </a>
    </div>
    <div class="chatmany">
      <div class="chatlist" @click="goconsult">
        <img src="../../../static/imgs/lhy-1.jpg" alt="">
        <div class="center">
          <h1>xinshang-354046776</h1>
          <p>好的</p>
        </div>
        <span>下午12:09</span>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "chatsection",
        methods:{
          goconsult(){
            this.$router.push({path:'/consult'})
          },
        }
    }
</script>

<style scoped lang="scss">
section{
  width: 100%;
  /*flex: 1;*/
  /*overflow-x: hidden;*/
  /*overflow-y: auto;*/
}
.list{
  background: #fff;
  margin-top: 0.1rem;
  height: 1.51rem;
  width: 3.75rem;
  display: flex;
  flex-wrap: wrap;
}
.list a{
  width: 1.24rem;
  height: 0.75rem;
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  color: #474747;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  i{
    font-size: 25px;
  }
  p{
    font-size: 12px;
    padding-top: 0.1rem;
  }
}
.chatmany{
  margin-top: 0.1rem;
  background: #fff;
}
.chatlist{
  width: 100%;
  height: 0.85rem;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img{
    width: 0.48rem;
    height: 0.48rem;
    border-radius: 50%;
  }
  .center{
    width: 2.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h1{
      font-size: 15px;
      color: #020202;
    }
    p{
      font-size: 13px;
      color: #767676;
      padding-top: 0.1rem;
    }
  }
  span{
    font-size: 11px;
    color: #767676;
  }
}
</style>
