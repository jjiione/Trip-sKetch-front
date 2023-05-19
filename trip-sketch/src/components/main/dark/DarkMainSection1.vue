<template>
  <div style="position: relative">
    <div style="background-color: black; vertical-align: middle">
      <img id="main-night-gif" src="@/assets/night.gif" />
    </div>

    <div
      class="TextAnime1"
      style="
        text-align: center;
        text-align: center;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <span
        v-for="(t, index) in text1"
        :key="index"
        class="item"
        :style="{ animationDelay: index * 100 + 'ms' }"
        v-text="t"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "section-1",
  data() {
    return {
      text1: "Sketch your Trip",
    };
  },
};
</script>

<style scoped>
#main-night-gif {
  height: 90vh;
  width: 100%;
  opacity: 0.5;
}

@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
  color: white;
}
</style>
