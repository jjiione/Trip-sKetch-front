<template>
  <div>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="지역으로 검색" active>
        <div class="row">
          <div class="col">
            
<link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">

<nav role="navigation" class="primary-navigation" style="height:600px; ">
  <ul>
    <li style="width:200px">시도 &dtrif;
      <ul id="test" class="dropdown" style="overflow: scroll; height: 300px;width:100px" >
        <li  v-for="(data, idx) in sidoList"  :key="idx" style="color:black; "> 
          <div>
            {{ data.sido_name }}
          </div></li>
      </ul>
    </li>
    
    <li style="width:200px">Work &dtrif;
      <ul class="dropdown">
        <li><div href="#">Web Development</div></li>
        <li><div href="#">Web Design</div></li>
        <li><div href="#">Illustration</div></li>
        <li><div href="#">Iconography</div></li>
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
      
    
      <b-tab title="지역으로 검색" active>
        <div class="row">
          <div class="col">
            
<link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">

<nav role="navigation" class="primary-navigation" style="height:600px; ">
  <ul>
    <li style="width:130px">대분류 &dtrif;
      <ul id="test" class="dropdown" style="overflow: scroll; height: 300px;width:100px" >
        <li  v-for="(data, idx) in sidoList"  :key="idx" style="color:black; "> 
          <div>
            {{ data.sido_name }}
          </div></li>
      </ul>
    </li>
    
    <li style="width:130px">중분류 &dtrif;
      <ul class="dropdown">
        <li><div href="#">Web Development</div></li>
        <li><div href="#">Web Design</div></li>
        <li><div href="#">Illustration</div></li>
        <li><div href="#">Iconography</div></li>
      </ul>
    </li>

    <li style="width:130px">소분류 &dtrif;
      <ul class="dropdown">
        <li><div href="#">Web Development</div></li>
        <li><div href="#">Web Design</div></li>
        <li><div href="#">Illustration</div></li>
        <li><div href="#">Iconography</div></li>
      </ul>
    </li>

  </ul>
</nav>

          </div>
        </div>


      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import DarkMainSection4Search from "./DarkMainSection4Search.vue";
import axios from "axios";

const addr = "http://localhost:80/place/sido/list";
export default {
  data() {
    return {
      latitude: Number,
      longitude: Number,
      sidoList: [],
      gugunList:[],
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
  created(){
    axios
      .get(addr)
      .then((response) => {
        this.sidoList = response.data;
        console.log(this.sidoList);
      })
      .catch((error) => {
        console.dir(error);
      });
  }
};
</script>

<style scoped  lang="scss">
#test {
                width: 200px;
                height: 400px;
                overflow: auto;
                color: white;
                padding: 5px;
            }
 
            #test::-webkit-scrollbar {
                width: 20px; /*스크롤바의 너비*/
            }
 
            #test::-webkit-scrollbar-thumb {
                background-color: #0c134f; /*스크롤바의 색상*/
                background-clip: padding-box;
                border: 4px solid transparent;
                border-top-left-radius: 50px;
                border-bottom-right-radius: 50px;
            }
 
            #test::-webkit-scrollbar-track {
                background-color: grey; /*스크롤바 트랙 색상*/
            }

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

    li div {
      color: black;
    }

    li div:hover {
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

    ul li ul li div:hover {
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

 ul li ul li div { transition: all 0.5s ease; }


* {
  color: white;
}





</style>
