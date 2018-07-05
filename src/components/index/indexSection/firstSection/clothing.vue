<template>
  <div class="clothing">
    <clothing-swiper></clothing-swiper>

    <clothing-list></clothing-list>
  </div>
</template>

<script>
    import ClothingList from "./clothing/clothingList";
    import ClothingSwiper from "./clothing/clothingSwiper";
    export default {
        name: "clothing",
      components: {ClothingSwiper, ClothingList}
    }
</script>

<style scoped>

</style>
