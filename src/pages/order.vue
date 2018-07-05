<template>
  <div class="order">
    <orderHeader></orderHeader>
    <div class="orderCon">
      <chose-address @showAddress="showAddress" :addressMsg="addressMsg"></chose-address>
      <goods-list :goodsList="goodsList"></goods-list>
    </div>
    <order-bottom :goodsList="goodsList"></order-bottom>
    <add-address v-show="isShowAddress" @choseAddressOver="choseAddressOver"></add-address>
  </div>
</template>

<script>
  import orderHeader from '@/components/order/orderHeader/orderHeader'
  import choseAddress from '@/components/order/choseAddress/choseAddress'
  import goodsList from '@/components/order/goodsList/goodsList'
  import orderBottom from '@/components/order/orderBottom/orderBottom'
  import addAddress from '@/components/order/addAddress/addAddress'

    export default {
      name: "order",
      data() {
        return {
          goodsList:[],
          isShowAddress:false,
          addressMsg:{},
        }
      },
      methods:{
        showAddress() {
          this.isShowAddress = true;
        },
        choseAddressOver(data) {
          this.addressMsg = data;
          this.isShowAddress = false;
        },
      },
      created() {
        // const goodList = [
        //     {
        //       brand:"chanel",
        //       name:'CHANEL 香奈儿小包包',
        //       newPrice:"999",
        //       ownName:'只卖正品啊只卖正品啊',
        //       ownPic:'/static/imgs/goodsPic.jpg',
        //       goodsPic:'/static/imgs/goodsPic.jpg',
        //     },{
        //       brand:"chanel",
        //       name:'CHANEL 香奈儿小包包',
        //       newPrice:"999",
        //       ownName:'只卖正品卖正品啊',
        //       ownPic:'/static/imgs/goodsPic.jpg',
        //       goodsPic:'/static/imgs/goodsPic.jpg',
        //     },{
        //       brand:"chanl",
        //       name:'CHANEL 香奈包包',
        //       newPrice:"999",
        //       ownName:'只卖正品啊只卖正品啊',
        //       ownPic:'/static/imgs/goodsPic.jpg',
        //       goodsPic:'/static/imgs/goodsPic.jpg',
        //     },
        //   ];
        // 从localstorage中获取数据
        var goodsList = localStorage.getItem('goodsList');
        if(!goodsList) {
          this.goodsList = [];
        }else{
          this.goodsList = JSON.parse(goodsList);
        }

      },
      mounted() {},
      components:{
        orderHeader,
        choseAddress,
        goodsList,
        orderBottom,
        addAddress
      }
    }
</script>

<style scoped lang="scss">
  .order{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
  }
  .orderCon{
    width: 100%;
    height: auto;
    flex: 1;
    overflow-y: scroll;
  }
</style>
