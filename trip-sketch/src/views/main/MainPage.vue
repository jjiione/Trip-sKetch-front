<template>
  <div>
    <dark-main-section-1></dark-main-section-1>
    <dark-main-section-2></dark-main-section-2>
  </div>
</template>

<script>
import DarkMainSection1 from "@/components/main/DarkMainSection1.vue";
import DarkMainSection2 from "@/components/main/DarkMainSection2.vue";
export default {
  name: "MainPage",
  components: {
    DarkMainSection1,
    DarkMainSection2,
  },
};
</script>

<style></style>
