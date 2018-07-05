<template>
  <div class="famly">
    <div class="famlyTitle">
      <h1>— 心说 —</h1>
      <h3>FAMLY</h3>
    </div>
    <div class="famlyContent">
      <div class="famlyContentMini">
        <div class="famlyContentSwiper">
          <famly-swiyper></famly-swiyper>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import FamlySwiyper from "./famlySwiper/famlySwiyper";
    export default {
        name: "famly",
      components: {FamlySwiyper},
    }
</script>

<style lang="scss" scoped>
  .famly{
    padding:0 0.1rem 0.15rem ;
    display:flex;
    flex-direction: column;

    .famlyTitle{
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
  .famlyContentSwiper{
    padding:0.1rem 0;
  }


</style>

