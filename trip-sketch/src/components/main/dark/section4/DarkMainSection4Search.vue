<template>
  <div>
    <b-form inline>
      <b-form-input
        style="color: black"
        v-model="query"
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="검색어를 입력하세요"
      ></b-form-input>

      <!-- <b-button >Save</b-button> -->
      <dark-main-section-4-submit-button
        :keyword="query"
        @checkit="checkit"
      ></dark-main-section-4-submit-button>
    </b-form>
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
        {{ item.msg }}
      </li>
    </TransitionGroup>
    <dark-main-section-4-list
      @location="location"
      :placeList="placeList"
    ></dark-main-section-4-list>
  </div>
</template>

<script>
import gsap from "gsap";
import DarkMainSection4SubmitButton from "./DarkMainSection4SubmitButton.vue";
import DarkMainSection4List from "./DarkMainSection4List.vue";

const list = [{ msg: "바다" }, { msg: "해수욕장" }, { msg: "산" }, { msg: "계곡" }, { msg: "숲" }];

export default {
  data() {
    return {
      query: "",
      placeList: [],
      latitude: Number,
      longitude: Number,
    };
  },
  components: {
    DarkMainSection4SubmitButton,
    DarkMainSection4List,
  },

  computed: {
    computedList() {
      return list.filter((item) => item.msg.toLowerCase().includes(this.query));
    },
  },
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
    checkit(placeList) {
      // alert(placeList);
      this.placeList = placeList;
    },
    location(latitude, longitude) {
      // alert(latitude, longitude);
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
