<template>
  <div class="classfly">
    <classfly-section></classfly-section>
    <classfly-footer></classfly-footer>

  </div>
</template>

<script>
    import ClassflySection from "../components/classfly/ClassflySection/ClassflySection";
    import ClassflyFooter from "../components/classfly/ClassflyFooter/ClassflyFooter";

    export default {
        name: "classfly",
      components: {ClassflyFooter, ClassflySection}
    }
</script>

<style scoped>
.classfly{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
