<template>
  <div>
    <h2>카카오지도</h2>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "KaKaoMap",
  data() {
    return {
      map: null,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods() {},
};
</script>

<style scope>
#map {
  width: 100%;
  height: 400px;
}
</style>
