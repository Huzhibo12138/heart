<template>
  <div class="box">
    <indexHeader class="header"></indexHeader>
    <div class="section">
      <index-nav></index-nav>
    </div>
    <index-footer></index-footer>

  </div>
</template>

<script>
  import indexHeader from "../components/index/indexHeader/indexHeader";
  import IndexNav from "../components/index/indexNav/indexNav";
  import IndexFooter from "../components/index/indexFooter/indexFooter";

  export default {
        name: "index",
        components:{
          IndexFooter,
          IndexNav,
          indexHeader}
    }
</script>

<style lang="scss" scoped>
  .box{
    display:flex;
    flex-direction: column;
    height:100%;
  }
  .header{

  }
  .section{
    flex:1;
    overflow-y: auto;
  }
</style>
