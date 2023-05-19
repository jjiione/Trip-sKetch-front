<template>
  <div id="dark-main-section2">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h1 style="color: white">Today's Recommendation</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <dark-main-section-2-place></dark-main-section-2-place>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DarkMainSection2Place from "./DarkMainSection2Place.vue";

export default {
  name: "main-secion2",
  components: {
    DarkMainSection2Place,
  },
};
</script>

<style scoped>
#dark-main-section2 {
  background-color: black;
  height: 100vh;
  width: 100%;
  margin: 0px 0px 0px 0px;
}
</style>
