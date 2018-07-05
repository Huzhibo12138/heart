<template>
  <div class="cart">
    <cart-header></cart-header>
    <cart-center class="ding" @pushcartfooter="getMsg" @pluscartfooter="plusMsg"></cart-center>

    <cart-footer ref="footer"></cart-footer>
  </div>
</template>

<script>
    import CartHeader from "../components/cart/cart-header/CartHeader";
    import CartCenter from "../components/cart/cart-center/CartCenter";
    import CartFooter from "../components/cart/cart-footer/CartFooter";
    export default {
        name: "cart",
        components: {CartFooter, CartCenter, CartHeader},
        methods:{
          getMsg(data){
            this.$refs.footer.$emit('pushfooter',data)
          },
          plusMsg(data){
            this.$refs.footer.$emit('plusfooter',data)
          }
        }
    }
</script>

<style lang="scss" scoped>
  .cart{
    background:#f7f7f7;
    flex-direction: column;
    display:-webkit-flex;
    height:100%;
  }
  .ding{
    overflow-y: scroll;
    overflow-x: hidden;
    flex: 1;
    width:100%;
  }
</style>
