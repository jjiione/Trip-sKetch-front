<template>
  <div class="speech-bubble">
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
const detailaddr = "http://localhost:80/review/current/list";

export default {
  data() {
    return {
      reviewList: [],
    };
  },
  created() {
    axios
      .get(detailaddr)
      .then((response) => {
        this.reviewList = response.data;
        console.log(this.reviewList);
      })
      .catch((error) => {
        console.dir(error);
      });
  },
};
</script>

<style>
.speech-bubble {
  position: relative;
  background: #a199b8;
  border-radius: 0.4em;
  width: 350px;
  height: 180px;
}

.speech-bubble:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 29px solid transparent;
  border-top-color: #a199b8;
  border-bottom: 0;
  border-right: 0;
  margin-left: -14.5px;
  margin-bottom: -29px;
}
</style>
