<template>
  <!--购物车内部-->
  <div class="cart_center">
    <ul >
      <li v-for = '(n,index) in carts'  :key = "index">
        <div class="cart_top">
          <div class="top_left">
            <div class="cricil"  @touchstart="touch(n,index)">
              <span v-show="n.isSelect">√</span>
            </div>
            <img :src='n.ownPic'>
            <h2>{{n.ownName}}</h2>
            <h3>实名认证</h3>
          </div>
          <div class="top_right">
            <i class="iconfont icon-xinxi"></i>
          </div>
        </div>
        <div class="cart_bottom">
          <div class="cricil" @touchstart="touch(n,index)">
            <span v-show="n.isSelect">√</span>
          </div>
          <img :src='n.bigPic' >
          <div class="detail_center">
            <h2>{{n.name}}</h2>
            <h3>[95新]{{n.brand}}</h3>
            <h4>{{n.newPrice}}</h4>
          </div>
        </div>
    </li>
    </ul>
  </div>
</template>

<script>
  import particularApis from '@/apis/tt/getparticular';
  export default {
        name: "CartCenter",
        data(){
          return{
            id:'',
            data:{},
            carts:[],
            price:''
          }
        },
        methods:{
          touch(n,index){
            n.isSelect = !n.isSelect;
            // 判断下标
            // console.log(index);
            if(n.isSelect){
              // console.log(this.carts[index]);
              this.$emit('pushcartfooter',this.carts[index])
            }else{
              this.$emit('pluscartfooter',this.carts[index])
            }
          }
        },
      created(){
        var carts = localStorage.getItem('carts');
        if(carts) {
          this.carts = JSON.parse(carts);
        }else{
          this.carts = [];
        }
      },
    }
</script>

<style lang="scss" scoped>
  .cart_center{
    width:100%;
    height:100%;
    ul{
     height: 100%;
      li{
        margin-top: 0.09rem;
        width:100%;
        height:1.78rem;
        background:#fff;
        .cart_top{
          position: relative;
          width:100%;
          height:0.52rem;
          background:#fff;
          border-bottom: 1px solid #f7f7f7;
          display: -webkit-flex;
          justify-content: space-between;
          padding:0 0.17rem;
          box-sizing: border-box;
          .top_left{
            display: -webkit-flex;
            .cricil{
              width:0.2rem;
              height:0.2rem;
              border:2px solid #e3e3e3;
              border-radius: 50%;
              margin:auto 0;
              span{
                width:0.2rem;
                display:block;
                height:0.2rem;
                border-radius: 50%;
                background:#ff665b;
                font-size: 0.15rem;
                line-height: 0.2rem;
                text-align: center;
                color:#fff;
                font-weight: 600;
              }
            }
            img{
              width:0.3rem;
              height:0.3rem;
              display:block;
              border-radius: 50%;
              margin:auto 0.08rem;
            }
            h2{
              font-size: 0.15rem;
              color:#121212;
              font-weight: 100;
              line-height: 0.52rem;
            }
            h3{
              width:0.56rem;
              height:0.18rem;
              background:#f3bc38;
              font-size: 0.12rem;
              color:#fff;
              line-height: 0.18rem;
              text-align: center;
              border:1px solid #fbe8d2;
              border-radius: 2px;
              margin:auto 0.05rem ;
            }
          }
          .top_right{
            i{
              display: block;
              font-size: 0.21rem;
              color:#656565;
              line-height:0.52rem ;
            }
          }
        }
      }
    }
  }
  .cart_bottom{
    position:relative;
    padding:0 0.17rem;
    display: -webkit-flex;
    box-sizing: border-box;
    height:1.26rem;
    .cricil{
      width:0.2rem;
      height:0.2rem;
      border:2px solid #e3e3e3;
      border-radius: 50%;
      margin:auto 0;
      span{
        width:0.2rem;
        display:block;
        height:0.2rem;
        border-radius: 50%;
        background:#ff665b;
        font-size: 0.15rem;
        line-height: 0.2rem;
        text-align: center;
        color:#fff;
        font-weight: 600;
      }
    }
    img{
      display:block;
      width:0.83rem;
      height:0.83rem;
      margin:auto 0.15rem;
    }
    .detail_center{
      width:1.90rem;
      height:1.26rem;
      h2{
        font-size:0.13rem;
        color:#3e3e3e;
        font-weight: 100;
        margin-top: 0.19rem;
      }
      h3{
        font-size: 0.14rem;
        color:#565656;
        font-weight: 100;
        margin-top: 0.12rem;

      }
      h4{
        font-weight: 100;
        font-size: 0.16rem;
        color:#121212;
        margin-top: 0.12rem;
      }
    }
  }
</style>
