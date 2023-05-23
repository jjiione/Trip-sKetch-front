<template>
  <div data-animate-effect="fadeIn">
    <div href="#" class="col" style="text-align: center">
      <div v-if="imgList[0]">
        <img :src="imgList[0]" style="width: 200px; height: 150px" class="img-responsive" />
      </div>
      <div v-else>
        <img
          src="@/assets/testplace1.jpg"
          style="width: 200px; height: 150px"
          class="img-responsive"
        />
      </div>

      <div style="text-align: center; color: white; margin-top: 5px">
        <div>{{ place.title }}</div>
        <div>시도 : {{ place.sidoName }}</div>
        <div>구군 : {{ place.gugunName }}</div>
        <dark-main-section-2-button
          :detail="placeDetail"
          :place="place"
        ></dark-main-section-2-button>
      </div>
    </div>
  </div>
</template>

<script>
import DarkMainSection2Button from "./DarkMainSection2Button.vue";
import axios from "axios";
const detailaddr = "http://localhost:80/place/";
export default {
  name: "placeCompent",
  data() {
    return {
      placeDetail: {
        contentid: Number,
        contenttypeid: String,
        heritage1: String,
        heritage2: String,
        heritage3: String,
        infocenter: String,
        opendate: String,
        restdate: String,
        expguide: String,
        expagerange: String,
        accomcount: String,
        useseason: String,
        usetime: String,
        parking: String,
        chkbabycarriage: String,
        chkpet: String,
        chkcreditcard: String,
      },
      imgList: [],
    };
  },
  props: {
    place: {
      gugunName: String,
      sidoName: String,
      title: String,
      contentId: Number,
    },
  },
  components: {
    DarkMainSection2Button,
  },
  created() {
    axios
      .get(detailaddr + this.place.contentId + "/detail")
      .then((response) => {
        this.placeDetail = response.data;
        console.log(this.placeDetail);
      })
      .catch((error) => {
        console.dir(error);
      });

    axios
      .get(detailaddr + this.place.contentId + "/images")
      .then((response) => {
        this.imgList = response.data;
        console.log(this.imgList);
      })
      .catch((error) => {
        console.dir(error);
      });
  },
};
</script>

<style></style>
