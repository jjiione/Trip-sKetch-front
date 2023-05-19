<template>
  <div>
    <main-section-1></main-section-1>
    <main-section-2></main-section-2>
  </div>
</template>

<script>
import MainSection1 from "@/components/main/MainSection1.vue";
import MainSection2 from "@/components/main/MainSection2.vue";
export default {
  name: "MainPage",
  components: {
    MainSection1,
    MainSection2,
  },
};
</script>

<style></style>
