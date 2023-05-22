<!-- <template>
    <div class="wrap">
      <h1>다양한 커리어 관련 이벤트를 만나보세요!</h1>
      <div class="tab">
        <button
          v-for="(tab, index) in tabList"
          :key="index"
          @click.prevent="currentTagName = tab.tag"
          :class="{ active: currentTagName === tab.tag }"
        >
          {{ tab.name }}
        </button>
      </div>
      <ul class="tab-content">
        <li v-for="(item, index) in currentList" :key="index">
          <div class="ex-img" :class="{red :item.tag == 'career', gray: item.tag == 'company', green: item.tag == 'develop'}"></div>
          <span>벨로그</span>
          <h1>{{ item.title }}</h1>
          <h2>{{ item.sub }}</h2>
        </li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    name: "SearchTab",
    data() {
      return {
        currentTagName: "employ",
        tabList: [
          { name: "취업/이직", tag: "employ" },
          { name: "커리어고민", tag: "career" },
          { name: "회사생활", tag: "company" },
          { name: "개발", tag: "develop" },
        ],
        employList: [
         { title: "", tag: "employ" },
         { title: "", tag: "career" },
         { title: "", tag: "company" },
         { title: "", tag: "develop" },
        ],
      };
    },
    computed: {
      currentList() {
        return this.employList.filter((el) => el.tag == this.currentTagName);
      },
    },
  };
  </script> -->

<template>
  <div>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="지역으로 검색" active>
        <dark-main-section-4-search></dark-main-section-4-search>
      </b-tab>
      <b-tab title="키워드로 검색"><dark-main-section-4-search></dark-main-section-4-search></b-tab>
      <b-tab title="리뷰 많은 순">
        <li></li>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import DarkMainSection4Search from "./DarkMainSection4Search.vue";

export default {
  components: {
    DarkMainSection4Search,
  },
};
</script>

<style scoped>
* {
  color: white;
}
</style>
