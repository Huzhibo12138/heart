<template>
    <div class="footer">
      <ul>
        <li>
          <i class="iconfont icon-xinxi"></i>
          <span>联系卖家</span>
        </li>
        <li>
          <i class="iconfont icon-xin-copy" @touchstart="touch"><img v-show="or_show" src="/static/imgs/red.png"></i>
          <span class="spec">收藏</span>
        </li>
        <li class="cart" @touchstart="plu_cart">加入购物车</li>
        <li class="buy">立即购买</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ParticularFooter",
        data(){
          return{
            or_show:false,
            information:{},
            cartinner:{},
            carts:[],
          }
        },
        created(){
          this.$on('pushfooter',(data)=>{
            this.information = data;
            // console.log(this.information);
            this.cartinner.ownPic= this.information.data.ownPic;
            this.cartinner.ownName= this.information.data.ownName;
            this.cartinner.name= this.information.data.name;
            this.cartinner.brand= this.information.data.brand;
            this.cartinner.newPrice= this.information.data.newPrice;
            this.cartinner.bigPic = (this.information.data).banner[0].src;
            this.cartinner.isSelect = false;
          })
        },
        methods:{
          plu_cart(){
            this.carts = localStorage.getItem('carts');
            if(this.carts) {
              this.carts = JSON.parse(this.carts);
            }else{
              this.carts = [];
            }
            this.carts.push(this.cartinner);
            localStorage.setItem('carts',JSON.stringify(this.carts));
            this.$router.push({path:'/cart'})
          },
          touch(ev){
            var o = ev.target;
            this.or_show=!this.or_show;
            if(o.tagName === "IMG"){
             $(o).css('transform','scale(1.5)')
            }
          },
        }
    }
</script>

<style lang="scss" scoped>
    .footer{
      width:100%;
      height:0.6rem;
      border-top:1px solid #f7f7f7;
      display: -webkit-flex;
      ul{
        display: -webkit-flex;
        li{
          .iconfont{
            font-size: 0.24rem;
            color:#ff655d;
            display:block;
            margin-left: 0.27rem;
            margin-top: 0.09rem;
            margin-bottom: 0.02rem;
            position:relative;
          }
          .icon-xin-copy{
            color:#969496;
            img{
              display:block;
              width:0.23rem;
              height:0.21rem;
              position:absolute;
              top:0.0245rem;
              left:0.005rem;
            }
          }
          span{
            display:block;
            font-size: 0.12rem;
            color:#ff655d;
            margin-left: 0.12rem;
          }
          .spec{
            color:#969496;
            display:block;
            font-size: 0.12rem;
            margin-left: 0.25rem;
          }
        }
        .cart{
          width:1.12rem;
          height:0.6rem;
          text-align: center;
          line-height: 0.6rem;
          font-size: 0.16rem;
          color:#fff;
          background:#ff867b;
          margin-left: 0.4rem;
          border-right:1px solid #fff;
        }
        .buy{
          height:0.6rem;
          width:1.11rem;
          background:#ff655a;
          line-height: 0.6rem;
          text-align: center;
          font-size: 0.16rem;
          color:#fff;
        }
      }
    }
</style>
