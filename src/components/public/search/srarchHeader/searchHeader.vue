<template>
  <div class="searchHeader">
    <i @click="goToBefore" class="iconfont icon-jiantou-copy-copy backBtn"></i>
    <input type="text" v-model="searchKey" @keydown="search" class="searchInput" placeholder="搜点什么呢">
    <p class="searchBtn" @click="keyCodeOver">搜索</p>
  </div>
</template>

<script>
  export default {
    name: "searchHeader",
    data() {
      return {
        searchKey:'',
      }
    },
    methods:{
      goToBefore() {
      	this.$router.go(-1);
      },
      search(ev) {
        if(ev.keyCode == 13) {
          this.keyCodeOver();
        }
      },
      keyCodeOver() {
        this.$emit('searchKeyOver',this.searchKey);
      },
    },
  }
</script>

<style scoped lang="scss">
  $height : 0.46rem;
  .searchHeader{
    width: 100%;
    height: $height;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 1px solid #e7e7e7;
    display: -webkit-flex;
    position: relative;
    .backBtn{
      height: $height;
      display: block;
      width: 0.6rem;
      font-size: 0.24rem;
      text-align: center;
      line-height: $height;
      color:#2d2d2d;
    }
    .searchInput{
      width: 2.44rem;
      height: 0.3rem;
      border: none;
      background: url("/static/imgs/searchInput.jpg") left center no-repeat;
      background-size: 100%;
      margin-top: 0.08rem;
      text-indent: 0.38rem;
      outline: none;
    }
    .searchBtn{
      height: $height;
      width: 0.5rem;
      text-align: center;
      line-height: $height;
      color: #494949;
      font-size: 0.13rem;
    }
  }
</style>
