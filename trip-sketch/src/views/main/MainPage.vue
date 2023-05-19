<template>
  <div>
    <dark-main-section-1></dark-main-section-1>
    <dark-main-section-2></dark-main-section-2>
    <dark-main-section-3></dark-main-section-3>
  </div>
</template>

<script>
import DarkMainSection1 from "@/components/main/dark/DarkMainSection1.vue";
import DarkMainSection2 from "@/components/main/dark/DarkMainSection2.vue";
import DarkMainSection3 from "@/components/main/dark/DarkMainSection3.vue";
export default {
  name: "MainPage",
  components: {
    DarkMainSection1,
    DarkMainSection2,
    DarkMainSection3,
  },
};
</script>

<style></style>
