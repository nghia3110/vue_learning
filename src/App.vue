<template>
  <div class="main-container">
    <TheHeader />
    <TheMain />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheMain from "./components/layout/TheMain.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
  },
};
</script>

<style scoped>
.main-container {
  overflow: hidden;
}
</style>
