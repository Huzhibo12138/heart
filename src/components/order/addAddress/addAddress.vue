<template>
  <div class="addAddress">
    <div class="orderHeader">
        <img src="/static/imgs/order_back.jpg" alt="">
      <p class="msg">
        选择送货地址
      </p>
    </div>
    <div class="con">
      <ul>
        <li>
          <label>*联系人</label><input v-model="result.name" type="text" placeholder="请输入您的姓名">
        </li>
        <li>
          <label>*手机号码</label><input v-model="result.phone" type="number" placeholder="请输入您的手机号">
        </li>
        <li>
          <label>*省市区</label><input type="text"  placeholder="请选择您的地址" @keydown="() => {return false;}" @click="showProv" v-model="result.address"><img :src="getAutoAddress.img" alt="">
        </li>
        <li>
          <label>*详细地址</label><input v-model="result.contry" type="text" placeholder="请输入您的详细地址">
        </li>
        <p class="msg">{{msg}}</p>
      </ul>
    </div>
    <div class="orderBottom">
      <button class="pay" @click="choseAddressOver">确定地址</button>
    </div>
    <add-prov v-show="isShowAddress" @addProvOver="addProvOver" :provList="provList"></add-prov>
  </div>
</template>

<script>
  import addProv from './addProv/addProv'
  import OrderApis from '@/apis/order/orderApis'
  // import bMap from 'http://api.map.baidu.com/api?v=3.0&ak=3pAUact48MIB2SC4ASYbnTYsET7VEAQ2'
    export default {
      name: "addAddress",
      data() {
        return {
          provList:[],
          msg:'',
          result:{
            name:'',
            phone:'',
            address:'',
            contry:'',
          },
          isShowAddress:false,
          getAutoAddress:{
            step:1,
            img:'/static/imgs/address.jpg',
          },
        }
      },
      methods:{
        cleanMsg() {
          setTimeout(() => {
            this.msg = '';
          },3000);
        },
        choseAddressOver() {
          if(this.result.name == '') {
            this.msg = '姓名不能为空';
            this.cleanMsg();
            return false;
          }
          if(this.result.phone == '') {
            this.msg = '手机号不能为空';
            this.cleanMsg();
            return false;
          }
          if(this.result.address == '') {
            this.msg = '地址不能为空';
            this.cleanMsg();
            return false;
          }
          if(this.result.contry == '') {
            this.msg = '详细地址不能为空';
            this.cleanMsg();
            return false;
          }
          this.$emit('choseAddressOver',this.result);
        },
        autoAddress() {
          if(this.getAutoAddress.step == 2) {
            return false;
          }
          this.getAutoAddress.step = 2;
          this.getAutoAddress.img = '/static/imgs/loading.gif';
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((data) => {
              console.log(data);
            });
          }else {
            x.innerHTML="Geolocation is not supported by this browser.";
          }
        },
        showProv() {
          this.isShowAddress = true;
        },
        addProvOver(data) {
          this.result.address = '';
          for(var attr in data) {
            this.result.address += data[attr] + ' ';
            this.isShowAddress = false;
          }
        }
      },
      created() {
        OrderApis.getAddressList((data) => {
          this.provList = data;
        });
      },
      components:{
        addProv
      },
    }
</script>

<style scoped lang="scss">
  .addAddress{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top:0;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
  }
  .orderHeader{
    width: 100%;
    height: 0.45rem;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    >img{
      float: left;
      display: block;
    }
    >.msg{
      float: left;
      font-size: 0.17rem;
      line-height: 0.45rem;
      color: #000;
      text-align: center;
      width: 2.6rem;
    }
  }
  .con{
    width: 100%;
    height:auto;
    flex: 1;
    >ul{
      width: 100%;
      height: auto;
      box-sizing: border-box;
      padding: 0 0.16rem;
      background: #fff;
      >li{
        display: flex;
        align-items: center;
        width: 100%;
        height: 0.5rem;
        border-top: 1px solid #e6e6e6;
        >label{
          width: 1rem;
          display: block;
          font-size: 0.14rem;
        }
        >input{
          display: block;
          border: 0;
          background: #fff;
          color: #000;
          outline: none;
          font-size: 0.14rem;
          width: 2.1rem;
          height: 100%;
        }
        img{
          float: right;
          height: 0.4rem;
          width: 0.31rem;
        }
      }
      .msg {
        width: 100%;
        height: 0.4rem;
        text-align: center;
        font-size: 0.14rem;
        line-height: 0.4rem;
        color:red;
      }
    }
  }
  .orderBottom{
    width: 100%;
    height: 0.58rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .pay{
      display: block;
      width: 90%;
      margin: 0 auto;
      height: 0.4rem;
      border: 0;
      font-size: 0.14rem;
      color: #fff;
      background: #fc665e;
      margin-right: 0.2rem;
    }
  }
</style>
