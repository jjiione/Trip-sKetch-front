<template>
  <div style="position: relative">
    <img src="@/assets/paint.png" style="width: 350px; height: 230px" />
    <div class="contents">
      <div v-if="review.content.length < 20">
        {{ review.content }}
      </div>
      <div v-else>
        {{ review.content.substr(0, 20) }}
        <span style="color: blue">...더보기</span>
      </div>
      <div>여행지 : {{ review.title }}</div>
      <div>작성자 : {{ review.userId }}</div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// const detailaddr = "http://localhost:80/review/current/list";

export default {
  data() {
    return {
      // reviewList: [],
      contentLength: String,
    };
  },
  props: {
    review: {
      placeId: Number,
      createTime: String,
      content: String,
      rate: Number,
      title: String,
      userId: String,
    },
  },
  created() {
    this.contentLength = this.content.length;
  },
};
</script>

<style scoped>
.contents {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 14px;
}
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
