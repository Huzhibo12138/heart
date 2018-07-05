<template>
    <div class="watch">

      <watch-swiper></watch-swiper>
      <watch-list></watch-list>
    </div>
</template>

<script>
    import WatchSwiper from "./watch/watchSwiper";
    import WatchList from "./watch/watchList";
    export default {
        name: "watch",
      components: {WatchList, WatchSwiper}
    }
</script>

<style scoped>

</style>
