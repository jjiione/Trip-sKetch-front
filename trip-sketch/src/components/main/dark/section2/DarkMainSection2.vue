<template>
  <div id="dark-main-section2">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-md-5" style="margin: 10vh 10vh">
          <h1 style="color: white; text-align: center">Today's Recommendation</h1>
        </div>
      </div>

      <div class="row">
        <dark-main-section-2-refresh-button></dark-main-section-2-refresh-button>
      </div>

      <div class="row justify-content-around" style="margin-top: 40px">
        <div
          v-for="(data, idx) in placeList"
          :key="idx"
          class="col-md-3"
          style="border: solid 1px white; padding: 10px 10px"
        >
          <dark-main-section-2-place :place="data"></dark-main-section-2-place>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DarkMainSection2Place from "./DarkMainSection2Place.vue";
import DarkMainSection2RefreshButton from "./DarkMainSection2RefreshButton.vue";
import axios from "axios";
const addr = "http://localhost:80/place/recommend";
export default {
  name: "main-secion2",
  components: {
    DarkMainSection2Place,
    DarkMainSection2RefreshButton,
  },
  data() {
    return {
      placeList: [],
    };
  },
  created() {
    axios
      .get(addr)
      .then((response) => {
        this.placeList = response.data;
        console.log(this.placeList);
      })
      .catch((error) => {
        console.dir(error);
      });
  },
};
</script>

<style scoped>
#dark-main-section2 {
  background-color: black;
  height: 100vh;
  width: 100%;
  margin: 0px 0px 0px 0px;
  animation: gradient 15s ease infinite;
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
</style>
