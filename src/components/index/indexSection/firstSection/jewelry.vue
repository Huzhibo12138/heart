<template>
  <div class="jewelry">
    <jewelry-swiper></jewelry-swiper>
    <jewelry-list></jewelry-list>
  </div>
</template>

<script>
    import JewelrySwiper from "./jewelry/jewelrySwiper";
    import JewelryList from "./jewelry/jewelryList";
    export default {
        name: "jewelry",
      components: {JewelryList, JewelrySwiper}
    }
</script>

<style scoped>

</style>
