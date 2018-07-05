<template>
<div class="me">
  <me-header></me-header>
  <me-center class="section"></me-center>
  <me-footer></me-footer>
</div>
</template>

<script>
    import MeHeader from "../components/me/me-header/MeHeader";
    import MeCenter from "../components/me/me-center/MeCenter";
    import MeFooter from "../components/me/me-footer/MeFooter";

    export default {
        name: "me",
      components: {MeFooter, MeCenter, MeHeader}
    }
</script>

<style lang="scss" scoped>
  .me{
    display: flex;
    flex-direction: column;
    height:100%;
    .section{
      overflow-y: scroll;
      flex:1;
      width:100%;
      overflow-x: hidden;
    }
  }
</style>
