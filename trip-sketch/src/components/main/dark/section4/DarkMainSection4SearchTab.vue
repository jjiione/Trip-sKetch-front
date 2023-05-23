<template>
  <div>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="지역으로 검색" active>
        <dark-main-section-4-search></dark-main-section-4-search>
      </b-tab>
      <b-tab title="키워드로 검색"
        ><dark-main-section-4-search @location="location"></dark-main-section-4-search
      ></b-tab>
      <b-tab title="리뷰 많은 순">
        <li></li>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import DarkMainSection4Search from "./DarkMainSection4Search.vue";

export default {
  data() {
    return {
      latitude: Number,
      longitude: Number,
    };
  },
  components: {
    DarkMainSection4Search,
  },
  methods: {
    location(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.$emit("location", this.latitude, this.longitude);
    },
  },
};
</script>

<style scoped>
* {
  color: white;
}
</style>
