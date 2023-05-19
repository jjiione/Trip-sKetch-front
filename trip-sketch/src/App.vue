<template>
  <div id="app">
    <dark-header-navi-bar />
    <router-view />
  </div>
</template>

<script>
import DarkHeaderNaviBar from "./components/layout/DarkHeaderNaviBar.vue";

export default {
  name: "App",
  components: {
    DarkHeaderNaviBar,
  },
};
</script>

<style></style>
