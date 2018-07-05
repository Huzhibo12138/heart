<template>
  <div class="choseArddress">
    <div class="addressBox" @click="showAddress">
      <p class="msg1">收获地址:</p>
      <p class="msg2">
        <span class="name">{{addressMsg.name}}</span>
        <span class="phoneNum">{{addressMsg.phone}}</span>
      </p>
      <p class="msg3">
        <span class="prov">{{addressMsg.address}}</span>
        <span class="prov">{{addressMsg.contry}}</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "choseAddress",
      props:{
        addressMsg:{
          type:Object,
        },
      },
      methods:{
        showAddress() {
          this.$emit('showAddress');
        }
      },
      components:{
      }
    }
</script>

<style scoped lang="scss">
  .choseArddress{
    width: 100%;
    height: 1rem;
    margin-top: 0.1rem;
    background: url("/static/imgs/addressBg.jpg") left top no-repeat;
    background-size: 100%;
    box-sizing: border-box;
    padding-left: 0.17rem;
    margin-bottom: 0.1rem;

    .addressBox{
      width: 100%;
      height: 100%;
      >.msg1{
        font-size: 0.16rem;
        color:#000;
        font-weight: 900;
        padding-top: 0.17rem;
        line-height: 1;
      }
      >.msg2{
        font-size: 0.14rem;
        color: #595959;
        line-height: 1;
        padding-top: 0.1rem;
      }
      >.msg3{
        font-size: 0.14rem;
        color: #595959;
        line-height: 1;
        padding-top: 0.1rem;
      }
    }
  }
</style>
