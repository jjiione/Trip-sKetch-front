<template>
  <div class="nav-bar-id">
    <div class="container">
      <b-navbar class="nav-bar-id" type="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item style="margin: 0px 10px 0px 50px">
              <router-link :to="{ name: 'MainPage' }" style="color: gray">Home</router-link>
            </b-nav-item>

            <b-nav-item-dropdown style="margin: 0px 10px 0px 50px" text="Place">
              <b-dropdown-item>Search</b-dropdown-item>
              <b-dropdown-item>Recommend</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Plan" style="margin: 0px 10px 0px 50px">
              <b-dropdown-item href="#">Plan Create</b-dropdown-item>
              <b-dropdown-item href="#">My Plan List</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <router-link :to="{ name: 'MainPage' }" style="color: gray">
            <img src="@/assets/daylogo.gif" style="width: 100px; width: 100px" />
          </router-link>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="community" style="margin: 0px 10px 0px 50px">
              <b-dropdown-item>
                <router-link :to="{ name: 'boardlist' }" style="color: gray"
                  >자유 게시판</router-link
                >
              </b-dropdown-item>
              <b-dropdown-item>공지 사항</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item style="margin: 0px 10px 0px 50px">
              <router-link :to="{ name: 'MainPage' }" style="color: gray">Login</router-link>
            </b-nav-item>

            <b-nav-item-dropdown text="MyPage" style="margin: 0px 10px 0px 50px">
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

        <!-- Rounded switch -->
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.nav-bar-id {
  background-color: white;
}

#nav-margin {
  margin: 0px 10px 0px 50px;
}
::v-deep {
  .nav-color {
    color: skyblue !important;
  }
}
</style>
