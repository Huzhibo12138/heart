<template>
    <section>
      <ul id="msgList">
        <li v-for="item in messages">
          <h6>
            {{item.time}}
          </h6>
          <div :class="{'left':item.owner=='left','right':item.owner=='right'}">
            <h2 v-show="item.owner=='right'">{{item.con}}</h2>
            <img  v-show="item.owner=='right'" :src="item.img">
            <img  v-show="item.owner=='left'" :src="item.img">
            <h2 v-show="item.owner=='left'">{{item.con}}</h2>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
    // import VueSocketio from 'vue-socket.io';
    // 引入socket.io
    import Socket from 'socket.io-client'
    export default {
        name: "consultsection",
        data(){
          return {
            userId:'',
            io:{},
            messages:[

            ],
          }
        },
        mounted(){
          // 与服务器建立连接
          this.io = Socket.connect('http://39.107.127.152:8081');
          // 用时间戳建立标记
          this.userId = new Date().getTime();
          // 从footer传值拿到数据
          this.$on('push_section',(data) => {
            // this.messages.push(data);
            data.userId = this.userId;
            // 发送信息
            this.io.emit('pushMsg',data);
          });
          // 接收信息
          this.io.on('sendMsg',(data) => {
            // console.log(this.userId);
            // 判断发送信息的左右
            if(data.userId == this.userId) {
              data.owner = 'right';
              // data.img = '../../../static/imgs/lhy-2.jpg';
            }else{
              data.owner = 'left';
              // data.img = '../../../static/imgs/lhy-1.jpg';
            }
            this.messages.push(data);
          });
        },
    }
</script>

<style scoped lang="scss">
section{
  overflow-y: scroll;
  flex:1;
  width:100%;
  overflow-x: hidden;
}
ul li{
  margin-top: 0.12rem;
  h6{
    display: block;
    font-size: 9px;
    width: 0.65rem;
    height: 0.16rem;
    line-height: 0.16rem;
    background: #cdcdcd;
    color: #fff;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
  }
  .right{
    display:-webkit-flex;
    width:3.65rem;
    justify-content: flex-end;
    align-items: center;
    padding-top: 0.15rem;
    margin-right: 0.1rem;
    h2{
      color:#fff;
      line-height: 0.34rem;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      font-size: 13px;
      max-width: 2.6rem;
      justify-content: flex-end;
      background:#ff918c;
      border-radius: 14px;
    }
    img{
      width:0.42rem;
      height:0.42rem;
      justify-content: flex-end;
      margin-left: 0.1rem;
      border-radius: 50%;
    }
  }
  .left{
    display:-webkit-flex;
    width:3.65rem;
    justify-content: flex-start;
    align-items: center;
    padding-top: 0.15rem;
    margin-left: 0.1rem;
    h2{
      color:#000;
      line-height: 0.34rem;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      font-size: 13px;
      max-width: 2.6rem;
      justify-content: flex-start;
      background:#fff;
      border-radius: 14px;
    }
    img{
      width:0.42rem;
      height:0.42rem;
      justify-content: flex-start;
      margin-right: 0.1rem;
      border-radius: 50%;
    }
  }
}

</style>
