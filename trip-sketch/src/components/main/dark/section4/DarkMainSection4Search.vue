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

      <b-button variant="primary">Save</b-button>
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
  </div>
</template>

<script>
import gsap from "gsap";

const list = [
  { msg: "서울특별시" },
  { msg: "부산광역시" },
  { msg: "경기도" },
  { msg: "강원도" },
  { msg: "경상북도" },
  { msg: "경상남도" },
];

export default {
  data() {
    return {
      query: "",
    };
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
  },
};
</script>

<style scoped>
* {
  color: white;
}
</style>
