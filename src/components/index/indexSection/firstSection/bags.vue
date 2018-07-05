<template>
    <!--箱包-->
  <div class="bags">
    <bag-swiper></bag-swiper>
    <bag-list></bag-list>
  </div>

</template>

<script>
    import BagSwiper from "./bags/bagSwiper";
    import BagList from "./bags/bagList";
    export default {
        name: "bags",
      components: {BagList, BagSwiper}
    }
</script>

<style scoped>

</style>
