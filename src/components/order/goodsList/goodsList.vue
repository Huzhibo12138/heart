<template>
  <div class="goodsList">
    <ul>
      <li v-for="i in goodsList">
        <div class="goodsTltle">
          <img class="goodsOwnPic" :src="i.ownPic" alt="">
          <p class="goodsOwnName">{{i.ownName}}</p>
          <span>实名认证</span>
        </div>
        <div class="goodsDetail">
          <div class="left">
            <img class="goodsPic" :src="i.bigPic" alt="">
          </div>
          <div class="right">
            <p class="goodsName">{{i.name}}</p>
            <p class="goodsBrand">{{i.brand}}</p>
            <p class="price">${{i.newPrice}}</p>
          </div>
        </div>
        <div class="goodsPrice">
          <p>商品金额:<span>${{i.newPrice}}</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "goodsList",
      props:{
          goodsList:{
            type:Array,
          },
      },
    }
</script>

<style scoped lang="scss">
  .goodsList{
    width: 100%;
    height: auto;
    >ul{
      width: 100%;
      height: auto;
      >li{
        width: 100%;
        height: 2.22rem;
        box-sizing: border-box;
        padding: 0 0.2rem;
        background: #fff;
        margin-bottom: 0.1rem;
        .goodsTltle{
          width: 100%;
          height: 0.5rem;
          border-bottom: 1px solid #f5f5f5;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .goodsOwnPic{
            display: block;
            float: left;
            width: 0.26rem;
            height: 0.26rem;
            border-radius: 50%;
            margin-right: 0.1rem;
          }
          .goodsOwnName{
            float: left;
            font-size: 0.14rem;
            color: #000;
            line-height: 1;
          }
          span{
            font-size: 0.1rem;
            color: #fff;
            background: #ffc13e;
            padding: 0.03rem;
            line-height: 1;
            border-radius: 0.03rem;
            margin-left: 0.05rem;
          }
        }
        .goodsDetail{
          width: 100%;
          height: 1.2rem;
          border-bottom: 1px solid #f5f5f5;
          box-sizing: border-box;
          padding-top: 0.2rem;
          .left{
            width: 0.83rem;
            float: left;
            height: 0.83rem;
            img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .right{
            float: left;
            width: 2rem;
            >.goodsName{
              font-size: 0.14rem;
              color: #303030;
              padding-top: 0.1rem;
              padding-left: 0.15rem;
              box-sizing: border-box;
              line-height: 1;
            }
            >.goodsBrand{
              font-size: 0.14rem;
              color: #303030;
              padding-top: 0.1rem;
              padding-left: 0.15rem;
              box-sizing: border-box;
              line-height: 1;
            }
            >.price{
              font-size: 0.18rem;
              color: #000;
              font-weight: 900;
              padding-top: 0.1rem;
              padding-left: 0.15rem;
              box-sizing: border-box;
              line-height: 1;
            }
          }
        }
        .goodsPrice{
          width: 100%;
          height: 0.47rem;
          border-top: 1px solid #f4f4f4;
          p{
            font-size: 0.18rem;
            text-align: right;
            line-height: 0.47rem;
            >span{
              font-size: 0.2rem;
              font-weight: 900;
              margin-left: 0.1rem;
            }
          }
        }
      }
    }
  }
</style>
