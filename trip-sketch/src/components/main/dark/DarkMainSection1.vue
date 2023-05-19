<template>
  <div style="position: relative" id="dark-main-section1-form">
    <div style="background-color: black; vertical-align: middle">
      <img id="main-night-gif" src="@/assets/night.gif" />
    </div>

    <div
      class="TextAnime1"
      style="
        text-align: center;
        text-align: center;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <span
        v-for="(t, index) in text1"
        :key="index"
        class="item1"
        :style="{ animationDelay: index * 100 + 'ms' }"
        v-text="t"
      />
    </div>

    <div
      class="TextAnime1"
      style="
        text-align: center;
        text-align: center;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <span
        v-for="(t, index) in text2"
        :key="index"
        class="item2"
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
      text1: "Trip's ketch",
      text2: "Sketch your Trip",
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
.item1 {
  display: inline-block;
  min-width: 0.3em;
  font-size: 7rem;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
  color: white;
}

.item2 {
  display: inline-block;
  min-width: 0.3em;
  font-size: 4rem;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
  color: gray;
}

@font-face {
  font-family: "yleeMortalHeartImmortalMemory";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/yleeMortalHeartImmortalMemory.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}

#dark-main-section1-form {
  font-family: "yleeMortalHeartImmortalMemory";
}
</style>
