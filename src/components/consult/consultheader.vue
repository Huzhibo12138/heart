<template>
    <header>
      <i class="iconfont icon-jiantou-copy-copy" @click="gochat"></i>
      <div class="name">
        <h1>xinshang-354046776</h1>
        <span>9:00-18:00在线</span>
      </div>

    </header>
</template>

<script>
    export default {
        name: "consultheader",
        methods:{
          gochat(){
            this.$router.push({path:'/chat'})
          },
        }
    }
</script>

<style scoped lang="scss">
header{
  width:100%;
  height:0.44rem;
  background:#fff;
  display: flex;
  align-items: center;
  i{
    font-size: 20px;
    font-weight: bolder;
    color: #474747;
    margin-left: 0.11rem;
  }
  .name{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0.8rem;
    h1{
      font-size: 14px;
      color: #020202;
    }
    span{
      font-size: 12px;
      color: #464646;
    }
  }
}
</style>
