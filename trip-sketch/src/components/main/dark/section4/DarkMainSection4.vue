<template>
  <div id="dark-main-section4">
    <div id="dark-main-section4-container">
      <div class="d-flex justify-content-center">
        <!-- <div class="col-md-7" style="background-color: blue;"> -->
        <main-seciton-4-map class="col-md-7"></main-seciton-4-map>

        <!-- </div> -->

        <div class="col-md-3">
          <dark-main-section-4-search-tab></dark-main-section-4-search-tab>
          <!-- <dark-main-section-4-search></dark-main-section-4-search> -->
          <dark-main-section-4-sidebar></dark-main-section-4-sidebar>
          <!-- <dark-main-section-4-list :placeList="placeList"></dark-main-section-4-list> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import DarkMainSection4Search from "./DarkMainSection4Search.vue";
import DarkMainSection4Sidebar from "./DarkMainSection4Sidebar.vue";
import MainSeciton4Map from "./MainSeciton4Map.vue";
import DarkMainSection4SearchTab from "./DarkMainSection4SearchTab.vue";

export default {
  name: "section-4",
  components: {
    DarkMainSection4Sidebar,
    MainSeciton4Map,
    // DarkMainSection4Search,
    DarkMainSection4SearchTab,
  },
  data() {
    return {
      placeList: [],
    };
  },
};
</script>

<style scoped>
#dark-main-section4 {
  background: linear-gradient(#0c134f, black);
  height: 100vh;
  width: 100%;
  animation: gradient 15s ease infinite;
}

#dark-main-section4-container {
  padding-top: 80px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#map {
  width: 60%;
  height: 80vh;
  /* margin: 20px 20px 20px 20px; */
}
</style>
