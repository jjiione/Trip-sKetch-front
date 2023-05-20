<template>
  <div data-animate-effect="fadeIn">
    <div href="#" class="col" style="text-align: center">
      <div>
        <img
          src="@/assets/testplace1.jpg"
          style="width: 200px; height: 200px"
          class="img-responsive"
        />
      </div>

      <div style="text-align: center; color: white; margin-top: 5px">
        <div>장소 입력 예정</div>
        <div>3nights + Flight 5*Hotel</div>
        <div>$1,000</div>
       <dark-main-section-2-button></dark-main-section-2-button>
      </div>
    </div>
  </div>
</template>

<script>
import DarkMainSection2Button from "./DarkMainSection2Button.vue";
export default {
  name: "placeCompent",
  components: {
    DarkMainSection2Button,
  }
};
</script>

<style></style>
