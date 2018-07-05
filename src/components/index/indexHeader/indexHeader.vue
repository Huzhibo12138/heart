<template>

  <div class="w-header">
    <div class="toclick" @click="toSearch">
      <i class="iconfont icon-soucha"></i>
    </div>

    <div class="logo" @click="goHeader">
      <img src="/static/imgs/logo.png" alt="">
    </div>
    <div class="to" @click="toCars">
      <i class="iconfont icon-ziyuan"></i>
    </div>

  </div>
</template>

<script>
    export default {
        name: "indexHeader",
        methods:{
          goHeader(){
            // console.log(11111111111)
            this.$router.push({path:'/'})
          },
          toSearch(){
            // console.log(11111111111)
            this.$router.push({path:'search',name:'search'})
          },
          toCars(){
            // console.log(11111111111)
            this.$router.push({path:'cars',name:'cars'})
          }
        }
    }
</script>

<style lang="scss" scoped >
  .w-header{
    height:0.4rem;
    display:flex;
    justify-content: space-between;
    padding:0 0.15rem;
    align-items: center;
    .iconfont{
      font-size:0.2rem;
    }
    .logo img{
      height:0.3rem;
    }
  }

</style>
