<template>
  <div style="height: 450px; overflow: auto">
    <ul>
      <li v-for="(item, index) in placeList" :key="index">
        <div @click="viewListDetail(item)">{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    placeList: [],
  },
  methods: {
    viewListDetail(item) {
      // alert("detail");
      // alert("latitude" + item.latitude);
      this.$emit("location", item.latitude, item.longitude);
    },
  },
};

// console.log(this.placeList);
</script>

<style scoped>
* {
  color: white;
}
</style>
