<template>
  <div class="orderBottom">
    <p class="allPrice">
      合计: $<span>{{calAllPic}}</span>
    </p>
    <button class="pay">立即支付</button>
  </div>
</template>

<script>
    export default {
      name: "orderBottom",
      props:{
        goodsList:{
          type:Array,
        },
      },
      computed:{
        calAllPic () {
          var price = 0;
          this.goodsList.forEach(v => {
            if(v.newPrice) {
              price += Number.parseFloat(v.newPrice);
            }
          });
          return price;
        }
      },
    }
</script>

<style scoped lang="scss">
  .orderBottom{
    width: 100%;
    height: 0.58rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .allPrice{
      font-size: 0.18rem;
      color: #000;
      margin-left: 0.2rem;
      span{
        margin-left: 0.03rem;
      }
    }
    .pay{
      display: block;
      width: 1.45rem;
      height: 0.4rem;
      border: 0;
      font-size: 0.14rem;
      color: #fff;
      background: #fc665e;
      margin-right: 0.2rem;
    }
  }
</style>
