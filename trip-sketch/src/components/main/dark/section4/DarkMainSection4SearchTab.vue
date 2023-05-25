<template>
  <div>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="지역으로 검색" active>
        <div class="row flex-wrap">
          <div class="d-block">

            <link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">

            <nav role="navigation" class="primary-navigation d-block" style="height:100px; ">
              <ul>
                <li style="width:150px">{{ currSido.sido_name }} &dtrif;
                  <ul class="dropdown test" style="overflow-y: scroll; height: 300px;width:100px">
                    <li v-for="(data, idx) in sidoList" :key="idx" style="color:black; ">
                      <div @click="gugunMethod(data, $event)">
                        {{ data.sido_name }}
                      </div>
                    </li>
                  </ul>
                </li>

                <li style="width:150px">{{ currGugun.gugun_name }} &dtrif;
                  <ul class="dropdown test" style="overflow-y: scroll; height: 300px;width:100px">
                    <li v-for="(data, idx) in gugunList" :key="idx" style="color:black; ">
                      <div @click="currGugun = data">
                        {{ data.gugun_name }}
                      </div>
                    </li>
                  </ul>
                </li>

                <li style="width:100px" @click="searchLocation"> search
                </li>


              </ul>
            </nav>
          </div>
          <div style="height: 500px; overflow: auto" class="d-block">
            <ul>
              <li v-for="(item, index) in placeList" :key="index">
                <div @click="gugunMethod(data, $event)"> {{ item.title }}</div>
              </li>
            </ul>
          </div>
        </div>
      </b-tab>






      <b-tab title="키워드로 검색"><dark-main-section-4-search @location="location"></dark-main-section-4-search>
      </b-tab>


      <b-tab title="카테고리로 검색" active>
        <div class="row flex-wrap">
          <div class="d-block">

            <link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">

            <nav role="navigation" class="primary-navigation d-block">
              <ul>
                <li style="width:120px; font-size:13px">{{ currCat1.category_name }} &dtrif;
                  <ul class="dropdown test" style="overflow-y: scroll; height: 300px;width:100px">
                    <li v-for="(data, idx) in cat1List" :key="idx" style="color:black; ">
                      <div @click="cat1Method(data, $event)">
                        {{ data.category_name }}
                      </div>
                    </li>
                  </ul>
                </li>

                <li style="width:120px; font-size:13px">{{ currCat2.category_name }}&dtrif;
                  <ul class="dropdown test" style="overflow-y: scroll; height: 300px;width:100px">
                    <li v-for="(data, idx) in cat2List" :key="idx" style="color:black;">
                      <div @click="cat2Method(data, $event)">{{ data.category_name }}</div>
                    </li>

                  </ul>
                </li>

                <li style="width:120px; font-size:13px">{{ currCat3.category_name }} &dtrif;
                  <ul class="dropdown test" style="overflow-y: scroll; height: 300px;width:100px">
                    <li v-for="(data, idx) in cat3List" :key="idx" style="color:black;">
                      <div @click="currCat3 = data">{{ data.category_name }}</div>
                    </li>

                  </ul>
                </li>

                <li style="width:30px; font-size:15px" @click="searchCategory"> search
                </li>

              </ul>
            </nav>

          </div>
          <div style="height: 500px; overflow: auto">
            <ul>
              <li v-for="(item, index) in placeList" :key="index">
                <div @click="gugunMethod(data, $event)"> {{ item.title }}</div>
              </li>
            </ul>
          </div>
        </div>


      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import DarkMainSection4Search from "./DarkMainSection4Search.vue";
import axios from "axios";

const addr = "http://localhost:80/place/";
export default {
  data() {
    return {
      latitude: Number,
      longitude: Number,
      placeList: [],
      sidoList: [],
      gugunList: [],
      cat1List: [],
      cat2List: [],
      cat3List: [],
      currSido: {
        sido_name: '시도',
        sido_code: 0,

      },
      currGugun: {
        gugun_name: '구군',
        gugun_code: 0,
      },
      currCat1: {
        category_id: '0',
        category_name: '대분류'
      },
      currCat2: {
        category_id: '0',
        category_name: '중분류'
      },
      currCat3: {
        category_id: '0',
        category_name: '소분류'
      }
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
    gugunMethod(data, event) {
      this.gugunList = [];
      this.currGugun = {
        gugun_name: '구군',
        gugun_code: 0,
      }
      console.log(data, event.target.value);
      this.currSido = data;


    },
    searchLocation() {
      axios
        .get(addr + 'search/location/' + this.currSido.sido_code + '/' + this.currGugun.gugun_code)
        .then((response) => {
          this.placeList = response.data;
          this.$emit("searchLocation", this.placeList);
          console.log(this.placeList);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    cat1Method(data, event) {
      this.cat2List = [];
      this.currCat2 = {
        category_id: '0',
        category_name: '중분류'
      };
      this.cat3List = [];
      this.currCat3 = {
        category_id: '0',
        category_name: '소분류'
      }
      console.log(data, event.target.value);
      this.currCat1 = data;

    },
    cat2Method(data, event) {
      this.cat3List = [];
      this.currCat3 = {
        category_id: '0',
        category_name: '소분류'
      };
      console.log(data, event.target.value);
      this.currCat2 = data;

    },
    searchCategory() {
      axios
        .get(addr + 'search/category/' + this.currCat3.category_name + '/list')
        .then((response) => {
          this.placeList = response.data;
          this.$emit("searchLocation", this.placeList);
          console.log(this.placeList);
        })
        .catch((error) => {
          console.dir(error);
        });

    }
  },
  created() {
    axios
      .get(addr + 'sido/list')
      .then((response) => {
        this.sidoList = response.data;
        console.log(this.sidoList);
      })
      .catch((error) => {
        console.dir(error);
      });

    axios
      .get(addr + 'search/category1/list')
      .then((response) => {
        this.cat1List = response.data;
        // console.log(this.cat1List);
      })
      .catch((error) => {
        console.dir(error);
      });
  },
  watch: {

    currSido() {
      axios
        .get(addr + 'gugun/' + this.currSido.sido_code + '/list')
        .then((response) => {
          this.gugunList = response.data;
          console.log(this.gugunList);
        })
        .catch((error) => {
          console.dir(error);
        });

    },
    currCat1() {
      axios
        .get(addr + 'search/category2/' + this.currCat1.category_id + '/list')
        .then((response) => {
          this.cat2List = response.data;
          // console.log(this.cat1List);
        })
        .catch((error) => {
          console.dir(error);
        });

    },
    currCat2() {
      axios
        .get(addr + 'search/category3/' + this.currCat2.category_id + '/list')
        .then((response) => {
          this.cat3List = response.data;
          // console.log(this.cat1List);
        })
        .catch((error) => {
          console.dir(error);
        });

    }

  }
};
</script>

<style scoped  lang="scss">
.test {
  width: 200px;
  height: 400px;
  overflow: auto;
  color: white;
  padding: 5px;
}

.test::-webkit-scrollbar {
  width: 15px;
  /*스크롤바의 너비*/
}

.test::-webkit-scrollbar-thumb {
  background-color: #0c134f;
  /*스크롤바의 색상*/
  background-clip: padding-box;
  border: 4px solid transparent;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.test::-webkit-scrollbar-track {
  background-color: grey;
  /*스크롤바 트랙 색상*/
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

    ul li:hover>ul,
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

ul li ul li div {
  transition: all 0.5s ease;
}


* {
  color: white;
}
</style>
