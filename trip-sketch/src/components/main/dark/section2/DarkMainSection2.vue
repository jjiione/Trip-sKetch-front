<template>
  <div id="dark-main-section2">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-md-5" style="margin: 10vh 10vh">
          <h1 style="color: white; text-align: center">Today's Recommendation</h1>
        </div>
      </div>

      <div class="row">
        <div class="button-7" @click="reset">
          <div class="eff-7"></div>
          <div class="text">Refresh</div>
        </div>
      </div>

      <div
        data-sal="slide-left"
        data-sal-duration="300"
        data-sal-delay="3000"
        data-sal-easing="ease-out-back"
        class="row justify-content-around"
        style="margin-top: 40px"
      >
        <div
          v-for="(data, idx) in placeList"
          :key="idx"
          class="col-md-3"
          style="border: solid 1px white; padding: 10px 10px"
        >
          <dark-main-section-2-place :img="imgList[idx]" :place="data"></dark-main-section-2-place>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DarkMainSection2Place from "./DarkMainSection2Place.vue";

import axios from "axios";
import sal from "sal.js";

const addr = "http://localhost:80/place/recommend";

export default {
  name: "main-secion2",
  components: {
    DarkMainSection2Place,
    // DarkMainSection2RefreshButton,
  },
  data() {
    return {
      placeList: [],
      // contentIdList: []
      imgList: [],
    };
  },
  created() {
    sal();
    // const scrollAnimations = sal();

    // // Provide new options
    // scrollAnimations.reset({
    //   selector: "animated-element",
    //   once: true,
    // });

    axios
      .get(addr)
      .then((response) => {
        this.placeList = response.data;
        for (var i = 0; i < 3; i++) {
          this.imgList.push(this.placeList[i].imgSrc);
        }
        console.log(this.imgList);
      })
      .catch((error) => {
        console.dir(error);
      });
  },
  mounted() {
    sal();
  },
  methods: {
    reset() {
      axios
        .get(addr)
        .then((response) => {
          this.placeList = response.data;
          console.log(this.placeList);
          this.imgList = [];
          for (var i = 0; i < 3; i++) {
            this.imgList.push(this.placeList[i].imgSrc);
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
};
</script>

<style scoped>
.scroll-container {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: no-wrap;
}
.card {
  display: inline-block;
  width: 120px;
  height: 50px;
}

#dark-main-section2 {
  background-color: black;
  height: 100vh;
  width: 100%;
  margin: 0px 0px 0px 0px;
  animation: gradient 15s ease infinite;
}

/* @import "~sal.js/sal.css"; */
/* @import "./node_modules/sal.js/dist/sal.css"; */

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

.button-7 {
  width: 140px;
  height: 50px;
  border: 2px solid white;
  border-radius: 10px;
  float: left;
  text-align: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 0 40px 50px;
}
.text {
  font-size: 16px;
  color: azure;
  text-decoration: none;
  line-height: 50px;
  transition: all 0.5s ease;
  z-index: 2;
  position: relative;
}
.eff-7 {
  width: 140px;
  height: 50px;
  border: 0px solid #150050;
  position: absolute;
  transition: all 0.5s ease;
  z-index: 1;
  box-sizing: border-box;
}
.button-7:hover .eff-7 {
  border: 70px solid #150050;
}
.button-7:hover a {
  color: #fff;
}
</style>
