<template>
  <div>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="지역으로 검색" active>
        <div class="row">
          <div class="col">
            
<link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">

<nav role="navigation" class="primary-navigation" style="height:600px">
  <ul>
    <li>Home</li>
    <li>Work &dtrif;
      <ul class="dropdown">
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Illustration</a></li>
        <li><a href="#">Iconography</a></li>
      </ul>
    </li>

  </ul>
</nav>

          </div>
        </div>


      </b-tab>
      <b-tab title="키워드로 검색"
        ><dark-main-section-4-search @location="location"></dark-main-section-4-search
      ></b-tab>
      <b-tab title="리뷰 많은 순">
        <li></li>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import DarkMainSection4Search from "./DarkMainSection4Search.vue";

export default {
  data() {
    return {
      latitude: Number,
      longitude: Number,
    };
  },
  components: {
    DarkMainSection4Search,
  },
  methods: {
    location(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.$emit("location", this.latitude, this.longitude);
    },
  },
};
</script>

<style scoped  lang="scss">
nav {
  &.primary-navigation {
    margin: 0 auto;
    display: block;

  
    padding: 20px 0 0 0;  
    text-align: center;
    font-size: 16px;

    ul li {
      list-style: none;
      margin: 0 auto;
      border-left: 2px solid #3ca0e7;
      display: inline-block;
      padding: 0 30px;
      position: relative;
      text-decoration: none;
      text-align: center;
      font-family: arvo;
    }

    li a {
      color: black;
    }

    li a:hover {
      color: #3ca0e7;
    }

    li:hover {
      cursor: pointer;
    }

    ul li ul {
      visibility: hidden;
      opacity: 0;
      position: absolute;
padding-left: 0;
      left: 0;
      display: none;
      background: white;
    }

    ul li:hover > ul,
    ul li ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
      min-width: 250px;
      text-align: left;
      padding-top: 20px;
      box-shadow: 0px 3px 5px -1px #ccc;
    }

    ul li ul li {
      clear: both;
      width: 100%;
      text-align: left;
      margin-bottom: 20px;
      border-style: none;
    }

    ul li ul li a:hover {
      padding-left: 10px;
      border-left: 2px solid #3ca0e7;
      transition: all 0.3s ease;
    }
  }
}

a {

    text-decoration: none;

    &:hover {
        color: #3CA0E7;
    }
 
}

 ul li ul li a { transition: all 0.5s ease; }


* {
  color: white;
}





</style>
