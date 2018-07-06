<template>
  <div class="recom">
    <div class="recomTitle">
      <h1>— 猜你喜欢 —</h1>
      <h3>RECOM</h3>
    </div>
    <div class="recomContent">
      <div class="recomContentMini" v-for="(b,index) in indexGoodsList" @click="goParticular(index)">
          <div class="recomContentImg">
            <img :src="b.goodsThumb" alt="">
          </div>
          <div class="recomDetails">
            <h1>
              <span class="f1">【{{b.usageStateName}}】</span>
              <span class="f6">{{b.brandName}}</span>
            </h1>
            <p class="f2">{{b.goodsName}}</p>
            <p class="f3">
              <span class="f4">￥{{b.salePrice}}</span>
              <span class="f5">￥{{b.purchasePrice | filterPrice}}</span>
            </p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IndexListApi from "@/apis/wapi/indexList"
  export default {
        name: "recom",
      data(){
        return{
          indexBannerGoodsList:{},
          indexGoodsList:{},
          // bList:[
          //   {bagImg:"./static/imgs/wbag1.jpg",news:'【9成新】',title:'Louis Vuitton',litTitle:'CHANEL香奈儿银扣方形包包',newPrice:8888,oldPrice:10000},
          //   {bagImg:"./static/imgs/wbag1.jpg",news:'【9成新】',title:'Louis Vuitton',litTitle:'CHANEL香奈儿银扣方形包包',newPrice:8888,oldPrice:10000},
          //   {bagImg:"./static/imgs/wbag1.jpg",news:'【9成新】',title:'Louis Vuitton',litTitle:'CHANEL香奈儿银扣方形包包',newPrice:8888,oldPrice:10000},
          //   {bagImg:"./static/imgs/wbag1.jpg",news:'【9成新】',title:'Louis Vuitton',litTitle:'CHANEL香奈儿银扣方形包包',newPrice:8888,oldPrice:10000},
          //   {bagImg:"./static/imgs/wbag1.jpg",news:'【9成新】',title:'Louis Vuitton',litTitle:'CHANEL香奈儿银扣方形包包',newPrice:8888,oldPrice:10000},
          //
          // ]
        }
      },
    filters:{
      filterPrice(pic) {
        if(!pic) {
          return '6888';
        }else{
          return pic;
        }
      }
    },
    methods:{
      goParticular(index){
        // console.log(index)
        // console.log(this.indexGoodsList[index].goodsId)
        this.$router.push({path:'/particulars',name:'particulars',query:{id:this.indexGoodsList[index].goodsId}})
      }
    },
      //获取的动态真实数据data
      created() {
        IndexListApi.getData((data) => {
          // console.log(data);
          this.indexBannerGoodsList = data.banner;
          // console.log(this.indexBannerGoodsList);
          this.indexGoodsList = data.goodsList;
          // console.log(this.indexGoodsList);


        });

      },

    }
</script>

<style lang="scss" scoped>
  .recom{
    padding:0 0.1rem 0.15rem ;
    display:flex;
    flex-direction: column;

    .recomTitle{
      text-align: center;
      h1{
        font-size:0.14rem;
        color:#3d3e3d;
        line-height:0.24rem;
      }
      h3{
        font-size:0.08rem;
        color:#3d3e3d;
        line-height:0.24rem;
      }
    }
  }
  .recomContent{
    width:100%;
    padding:0.05rem;
    box-sizing: border-box;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing:border-box;

  }
  .recomContentMini{
    width:49%;
    padding:0.08rem;
    box-sizing: border-box;
    border:1px solid #f5f5f5;
    border-radius: 3px;
    margin-bottom:0.05rem;
  }
  .recomContentImg{
    width:100%;
    /*height:100%;*/

    img{
      border:1px solid #c6c8c7;
      width:100%;
    }
  }

  .recomDetails{
    width:100%;
    padding:0.08rem;
    box-sizing: border-box;
    span{
      display:block;
    }
    h1{
      font-size:0.12rem;
      color:#6d6f6d;
      line-height:0.2rem;
      display:flex;
      .f1{
      color:orangered;
      }

    }
    .f2{
      font-size:0.1rem;
      color:#989a98;
      line-height:0.2rem;
      width:1.3rem;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .f6{
      width:0.6rem;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .f3{
      display:flex;
    }
    .f4{
      font-size:0.16rem;
      color:#ff7269;
      line-height:0.24rem;
    }
    .f5{
      font-size:0.1rem;
      color:#989a98;
      line-height:0.24rem;
      margin-left:4px;
      text-decoration: line-through;
    }
  }
</style>

