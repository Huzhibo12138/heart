<template>
  <div class="sreachCon">
    <ul class="list">
      <li v-for="i in items" @click="goToDetails(i)">
        <img :src="i.goodsThumb" alt="">
        <h3>
          <span>{{i.usageStateName}}</span>
          {{i.goodsName}}
        </h3>
        <p>
          <span class="newPrice">{{i.salePrice | filterPrice}}</span>
          <del class="oldPrice">{{i.purchasePrice | filterPrice}}</del>
        </p>
        <h4>
          <span class="bussiness">{{i.isMerchantAuth | filterPeople}}</span>
          <span class="size">{{i.goodsSize | filterSize}}</span>
        </h4>
      </li>
    </ul>
    <p v-show="isShowLoading" class="loading">
      <img src="/static/imgs/loading.gif" >
    </p>
    <p v-show="isShowMsg" class="bottomMsg">没有更多宝贝了</p>
    <div class="noValueMsg" v-show="isShowNoDataMsg">
      <img src="/static/imgs/loadnone.png" alt="">
      <p>抱歉，我们会努力增加您需要的商品的，请换个条件再试！！！</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "searchCon",
      data() {
        return {
          items:[],
          isShowLoading:false,
          isShowNoDataMsg:false,
          isShowMsg:false,
          isGetNewData:true,
        }
      },
      watch:{
        items: {
          handler(newValue, oldValue) {
            if(newValue.length == 0) {
              this.isShowNoDataMsg = true;
            }else{
              this.isShowNoDataMsg = false;   // 隐藏没有商品
              this.isGetNewData = true;  // 允许继续加载
              if(newValue.length % 20 == 0 && newValue.length != oldValue.length) {
                this.isShowMsg = false;
                $('.sreachCon').bind('scroll',this.watchScroll); // 添加时间绑定
              }else{
                this.isShowMsg = true;
              }
            }
          },
          deep: true
        }
      },
      filters:{
        filterPrice(i) {
          if(i) {
            return '￥' + i;
          }else{
            return i;
          }
        },
        filterPeople(i) {
          if(i == 1) {
            return '实名认证'
          }else{
            return '';
          }
        },
        filterSize(i) {
          if(i) {
            return i;
          }else{
            return '';
          }
        },
        filterDiscount(i) {
          if(i) {
            return i + '折';
          }else{
            return '';
          }
        }
      },
      methods:{
        goToDetails(i) {
          this.$router.push({path:'/particulars',name:'particulars',query:{id:i.goodsId}});
        },
        getNewData(data) {
          $('.sreachCon').scrollTop(0);
          this.items = data.docs;
        },
        getMoreData(data) {
          this.items = this.items.concat(data.docs);
        },
        watchScroll() {
          if(!$('.sreachCon>ul>li:last-child').offset()) {
            return false;
          }
          var top = $('.sreachCon>ul>li:last-child').offset().top;
          if(top < 1000) {
            $('.sreachCon').unbind('scroll',this.watchScroll);
            if(!this.isGetNewData) {
              return false;
            }
            this.isGetNewData = false;  //  不允许继续加载
            this.$emit('reqMoreData');
          }
        }
      },
      created() {
        this.$on('getNewData',(data) => {
          this.getNewData(data);
        });
        this.$on('getMoreData',(data) => {
          this.getMoreData(data);
        });
      },
      mounted() {
        $('.sreachCon').bind('scroll',this.watchScroll);
      },
      components:{
      }
    }
</script>

<style scoped lang="scss">
  .sreachCon{
    width: 100%;
    height:auto;
    flex: 1;
    overflow-y:scroll;
    box-sizing: border-box;
    padding: 0.1rem;
    padding-bottom: 0;
    >ul{
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      >li{
        width: 1.75rem;
        height: 2.78rem;
        background: #fff;
        margin-bottom: 0.1rem;
        >img{
          width: 1.75rem;
          height: 1.75rem;
          display: block;
        }
        >h3{
          font-size: 0.12rem;
          font-weight: 100;
          padding-left: 0.1rem;
          padding-right: 0.1rem;
          padding-top: 0.05rem;
          height: 0.39rem;
          >span{
            display: inline-block;
            background: #fe4037;
            color: #fff;
            padding: 0.01rem;
            border-radius: 0.03rem;
            font-size: 0.1rem;
          }
        }
        p{
          font-size: 0.15rem;
          padding-top: 0.05rem;
          padding-left: 0.1rem;
          color: #000;
          del{
            color: #a6a6a6;
            font-size: 0.1rem;
          }
        }
        h4{
          font-size: 0.1rem;
          font-weight: 100;
          padding-left: 0.1rem;
          padding-top: 0.05rem;
          >span{
            display: inline-block;
            color: #55a532;
          }
        }
      }
    }
    .noValueMsg {
      width: 100%;
      height:100%;
      box-sizing: border-box;
      padding-top: 1rem;
      >img{
        display: block;
        margin:0 auto;
      }
      >p{
        font-size: 0.14rem;
        width: 2.3rem;
        line-height: 1;
        margin:0.2rem auto;
        text-align: center;
      }
    }
    .bottomMsg{
      font-size: 0.12rem;
      text-align: center;
      padding-bottom: 0.1rem;
    }
    .loading{
      >img{
        width: 0.20rem;
        height: 0.20rem;
        display: block;
        margin: 0 auto;
      }
    }
  }
</style>
