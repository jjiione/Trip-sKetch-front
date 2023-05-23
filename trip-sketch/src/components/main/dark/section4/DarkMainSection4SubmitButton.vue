<template>
  <div @click="getList" class="button-7">
    <div class="eff-7"></div>
    <div class="text">search</div>
  </div>
</template>

<script>
import axios from "axios";
const addr = "http://localhost:80/place/search/";
export default {
  name: "submit-button",

  props: {
    keyword: String,
  },
  data() {
    return {
      placeList: [],
    };
  },
  methods: {
    getList() {
      console.log(this.keyword);

      axios
        .get(addr + this.keyword)
        .then((response) => {
          this.placeList = response.data;
          console.log(this.placeList);
          this.$emit("checkit", this.placeList);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
};
</script>

<style scoped>
.button-7 {
  width: 140px;
  height: 50px;
  border: 2px solid #54b435;
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
  font-size: 18px;
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
  border: 0px solid #54b435;
  position: absolute;
  transition: all 0.5s ease;
  z-index: 1;
  box-sizing: border-box;
}
.button-7:hover .eff-7 {
  border: 70px solid #54b435;
}
.button-7:hover a {
  color: #fff;
}
</style>
