<template>
  <div>
    <dark-main-section-1></dark-main-section-1>
    <dark-main-section-2></dark-main-section-2>
    <dark-main-section-3></dark-main-section-3>
    <dark-main-section-4></dark-main-section-4>
  </div>
</template>

<script>
import DarkMainSection1 from "@/components/main/dark/section1/DarkMainSection1.vue";
import DarkMainSection2 from "@/components/main/dark/section2/DarkMainSection2.vue";
import DarkMainSection3 from "@/components/main/dark/section3/DarkMainSection3.vue";
import DarkMainSection4 from "@/components/main/dark/section4/DarkMainSection4.vue";
export default {
  name: "MainPage",
  components: {
    DarkMainSection1,
    DarkMainSection2,
    DarkMainSection3,
    DarkMainSection4,
  },
};
</script>

<style></style>
