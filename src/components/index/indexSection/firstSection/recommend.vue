<template>
    <!--推荐-->
    <div class="banner">
      <headerSwiper></headerSwiper>
      <index-list-nav></index-list-nav>
      <buyers></buyers>
      <brands></brands>
      <fasion></fasion>
      <famly></famly>
      <recom></recom>


    </div>

</template>

<script>
    import headerSwiper from "./recommendList/headerSwiper";
    import IndexListNav from "./recommendList/indexListNav";
    import Buyers from "./recommendList/buyers";
    import Brands from "./recommendList/brands";
    import Fasion from "./recommendList/fasion";
    import Famly from "./recommendList/famly";
    import Recom from "./recommendList/recom";
    export default {
      // 推荐
        name: "recommend",
      components: {
        Recom,
        Famly,
        Fasion,
        Brands,
        Buyers,
        IndexListNav,
        headerSwiper},
    }
</script>

<style lang="scss" scoped>

</style>
