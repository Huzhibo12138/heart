<template>
  <div class="addAddress">
    <div class="orderHeader">
      <img src="/static/imgs/order_back.jpg" alt="">
      <p class="msg">
        选择省市区
      </p>
    </div>
    <div class="con">
      <ul>
        <li class="choseResult" v-show="choseResult.prov">{{choseResult.prov}}</li>
        <li class="choseResult" v-show="choseResult.city">{{choseResult.city}}</li>
        <div class="addressItems">
          <li v-show="step == 'choseProv'" v-for="i in provList" @click="choseProv(i)">{{i.name}}</li>
          <li v-show="step == 'choseCity'" v-for="i in cityList" @click="choseCity(i)">{{i.name}}</li>
          <li v-show="step == 'choseContry'" v-for="i in contryList" @click="choseContry(i)">{{i}}</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "addProv",
      props:{
        provList:{
          type:Array,
        }
      },
      data() {
        return {
        list:[],
        cityList:[],
        contryList:[],
        step:'choseProv',
        choseResult:{
          prov:'',
          city:'',
          contry:'',
        }
        }
      },
      methods:{
        choseProv(i) {
          this.cityList = i.city;
          this.step = 'choseCity';
          this.choseResult.prov = i.name;
        },
        choseCity(i) {
          this.contryList = i.area;
          this.step = 'choseContry';
          this.choseResult.city = i.name;
        },
        choseContry(i) {
          this.choseResult.contry = i;
          this.$emit('addProvOver',this.choseResult);
          this.choseResult = {};
          this.cityList = [];
          this.contryList = [];
          this.step = 'choseProv';
        },
      },
      watch:{
        provList: {
          handler(newValue, oldValue) {
            this.list = this.provList;
          },
          deep: true
        }
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
    height: auto;
    flex: 1;
    overflow-y: scroll;
    background: #fff;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      >.addressItems{
        flex: 1;
        overflow-y: scroll;
        li{
          width: 100%;
          height: 0.5rem;
          border-bottom: 1px solid #e9e9e9;
          font-size: 0.16rem;
          line-height: 0.5rem;
          text-indent: 0.28rem;
        }
      }
      .choseResult{
        background: #f8f8f8;
        width: 100%;
        height: 0.5rem;
        border-bottom: 1px solid #e9e9e9;
        font-size: 0.16rem;
        line-height: 0.5rem;
        text-indent: 0.28rem;
      }
    }
  }

</style>
