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

<style>
@font-face {
  font-family: "MYYeongnamnu";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/MYYeongnamnu.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: "MYYeongnamnu";
}
</style>
