<template>
    <div id="dark-main-section3">
      <div
        class="container"
        data-sal="slide-up"
        data-sal-duration="100"
        :data-sal-delay="600"
        data-sal-easing="ease-out-back"
      >
        <div class="d-flex justify-content-center">
          <div class="col-md-5" style="margin: 10vh 10vh">
            <h1 style="color: white; text-align: center">Recent Review</h1>
          </div>
        </div>
        <div class="row justify-content-between">
          <dark-main-section-3-review :review="reviewList[0]"></dark-main-section-3-review>
          <dark-main-section-3-review :review="reviewList[1]"></dark-main-section-3-review>
          <dark-main-section-3-review :review="reviewList[2]"></dark-main-section-3-review>
        </div>
  
        <div class="row justify-content-between">
          <dark-main-section-3-review :review="reviewList[3]"></dark-main-section-3-review>
          <dark-main-section-3-review :review="reviewList[4]"></dark-main-section-3-review>
          <dark-main-section-3-review :review="reviewList[5]"></dark-main-section-3-review>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import sal from "sal.js";
  import { mapState } from "vuex";
const memberStore = "memberStore";
  import DarkMainSection3Review from "../main/dark/section3/DarkMainSection3Review.vue";
  const detailaddr = "http://localhost:80/place/myreview/";
  
  export default {
    name: "MyReview",
    components: {
      DarkMainSection3Review,
    },
    data() {
      return {
        reviewList: [],
        user: Object,
      };
    },
    created() {
      this.user = this.userInfo;
      sal();
      axios
        .get(detailaddr + this.user.userId)
        .then((response) => {
          this.reviewList = response.data;
          console.log(this.reviewList);
        })
        .catch((error) => {
          console.dir(error);
        });

        
    },
    computed: {
        ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
    },
    mounted() {
      sal();
    },
  };
  </script>
  
  <style scoped>
  #dark-main-section3 {
    background: linear-gradient(black, #0c134f);
    height: 100vh;
    width: 100%;
  }
  
  #dark-main-section3-container {
    padding-top: 80px;
  }
  </style>
  