<template>
    <!--配饰-->
  <div class="acces">
    <acces-swiper></acces-swiper>
    <acces-list></acces-list>

  </div>

</template>

<script>
    import AccesList from "./acces/accesList";
    import AccesSwiper from "./acces/accesSwiper";
    export default {
        name: "acces",
      components: {AccesSwiper, AccesList}
    }
</script>

<style scoped>

</style>
