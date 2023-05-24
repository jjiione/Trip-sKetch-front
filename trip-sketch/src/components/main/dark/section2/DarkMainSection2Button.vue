<template>
  <div>
    <div
      class="button_base b11_3d_jumpback"
      @click="modalShow = !modalShow"
      style="margin-top: 10px"
    >
      <div>Detail</div>
    </div>

    <b-modal v-model="modalShow">
      <DarkMainSection2Detail :detail="detail" :place="place"></DarkMainSection2Detail>
    </b-modal>
  </div>
</template>

<!-- <script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> -->
<script>
import DarkMainSection2Detail from "./DarkMainSection2Detail.vue";

export default {
  data() {
    return {
      modalShow: false,
    };
  },
  components: {
    DarkMainSection2Detail,
  },
  props: {
    detail: {
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
    place: {
      gugunName: String,
      sidoName: String,
      title: String,
      contentId: Number,
    },
  },
  methods: {
    showmodal() {
      // Swal.fire({
      //   title: "여행지 상세 정보",
      //   html: `
      //   <dark-main-section-2-detail></dark-main-section-2-detail>
      //   `,
      //   showClass: {
      //     popup: "animate__animated animate__fadeInDown",
      //   },
      //   hideClass: {
      //     popup: "animate__animated animate__fadeOutUp",
      //   },
      // });
    },
  },
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed'); */

@media screen and (max-width: 1260px) {
  .back {
    width: 50%;
  }
}

@media screen and (max-width: 840px) {
  .back {
    width: 100%;
  }
}

.button_base_in {
  border: 0;
  font-size: 18px;
  position: relative;
  top: 50%;
  left: 50%;
  /* margin-top: -25px; */
  margin-left: -100px;
  width: 200px;
  height: 50px;
  text-align: center;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-user-select: none;
  cursor: default;
}

.button_base {
  border: 0;
  font-size: 18px;
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -100px;
  width: 200px;
  height: 50px;
  text-align: center;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-user-select: none;
  cursor: default;
}

.button_base:hover {
  cursor: pointer;
}

/* ### ### ### 11 */
.b11_3d_jumpback {
  perspective: 500px;
  -webkit-perspective: 500px;
  -moz-perspective: 500px;
}

.b11_3d_jumpback div {
  color: #000000;
  background-color: #ffffff;
  border: #000000 solid 1px;
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.b11_3d_jumpback:hover div {
  color: #ffffff;
  background-color: #000000;
  animation: b11_3d_jump 0.3s ease-out;
  -webkit-animation: b11_3d_jump 0.3s ease-out;
  -moz-animation: b11_3d_jump 0.3s ease-out;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
}

@-webkit-keyframes b11_3d_jump {
  from {
    transform: translateZ(0px) rotateX(0deg);
    -webkit-transform: translateZ(0px) rotateX(0deg);
    -moz-transform: translateZ(0px) rotateX(0deg);
    background-color: #ffffff;
    color: #000000;
  }
  49.99% {
    transform: translateZ(100px) rotateX(90deg);
    -webkit-transform: translateZ(100px) rotateX(90deg);
    -moz-transform: translateZ(100px) rotateX(90deg);
    background-color: #808080;
    color: #000000;
  }
  50.00% {
    transform: translateZ(100px) rotateX(-90deg);
    -webkit-transform: translateZ(100px) rotateX(-90deg);
    -moz-transform: translateZ(100px) rotateX(-90deg);
    background-color: #000000;
    color: #808080;
  }
  to {
    transform: translateZ(0px) rotateX(0deg);
    -webkit-transform: translateZ(0px) rotateX(0deg);
    -moz-transform: translateZ(0px) rotateX(0deg);
    background-color: #000000;
    color: #ffffff;
  }
}

@-moz-keyframes b11_3d_jump {
  from {
    transform: translateZ(0px) rotateX(0deg);
    -webkit-transform: translateZ(0px) rotateX(0deg);
    -moz-transform: translateZ(0px) rotateX(0deg);
    background-color: #ffffff;
    color: #000000;
  }
  49.99% {
    transform: translateZ(100px) rotateX(90deg);
    -webkit-transform: translateZ(100px) rotateX(90deg);
    -moz-transform: translateZ(100px) rotateX(90deg);
    background-color: #808080;
    color: #000000;
  }
  50.00% {
    transform: translateZ(100px) rotateX(-90deg);
    -webkit-transform: translateZ(100px) rotateX(-90deg);
    -moz-transform: translateZ(100px) rotateX(-90deg);
    background-color: #000000;
    color: #808080;
  }
  to {
    transform: translateZ(0px) rotateX(0deg);
    -webkit-transform: translateZ(0px) rotateX(0deg);
    -moz-transform: translateZ(0px) rotateX(0deg);
    background-color: #000000;
    color: #ffffff;
  }
}
</style>
