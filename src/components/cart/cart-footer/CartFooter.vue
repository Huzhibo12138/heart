<template>
    <div class="cart_footer">
      <div class="total_price">
        <h6>已选<span>{{num}}</span>件商品</h6>
        <h2>¥{{money}}</h2>
      </div>
      <div class="slt" @click = 'gotoorder'>结算</div>
    </div>
</template>

<script>
    export default {
        name: "CartFooter",
        data(){
          return{
            num:0,
            money:0,
            data:[],
          }
        },
        mounted(){
          this.$on('pushfooter',(data)=>{
            this.num++;
            // console.log(typeof data.newPrice);
            this.money += Number(data.newPrice);
            this.data.push(data);
          }),
          this.$on('plusfooter',(data)=>{
            this.num--;
            this.money -= Number(data.newPrice);

          })
        },
        methods:{
          gotoorder(){
            this.$router.push({path:'/order'})
            var storage = window.localStorage;
            var data = JSON.stringify(this.data);
            // console.log(data);
            storage.setItem('goodsList',data);
          }
        },
    }
</script>

<style lang="scss" scoped>
  .cart_footer{
    width:100%;
    height:0.56rem;
    background:#fff;
    padding:0 0.2rem;
    box-sizing: border-box;
    display: -webkit-flex;
    justify-content: space-between;
    border-top:2px solid #f2f2f2;
    .total_price{
      h6{
        font-size: 0.14rem;
        color:#636363;
        margin-top: 0.04rem;
        font-weight: 100;
      }
      h2{
        font-size: 0.20rem;
        color:#000000;
        margin-top: 0.04rem;
      }
    }
    .slt{
      width:1.04rem;
      height:0.42rem;
      background:#ff645b;
      font-size: 0.15rem;
      color:#e8ffff;
      line-height: 0.42rem;
      text-align: center;
      margin-top: 0.06rem;
    }
  }

</style>
