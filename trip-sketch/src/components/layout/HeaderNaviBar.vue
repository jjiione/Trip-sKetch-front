<template>
  <div class="nav-bar-id">
    <div class="container">
      <b-navbar class="nav-bar-id" type="dark">
        <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item style="margin: 0px 10px 0px 50px">
              <router-link :to="{ name: 'MainPage' }" style="color: gray">Home</router-link>
            </b-nav-item>

            <b-nav-item-dropdown style="margin: 0px 10px 0px 50px; "  text="Place">
              <b-dropdown-item>Search</b-dropdown-item>
              <b-dropdown-item>Recommend</b-dropdown-item>

            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Plan" style="margin: 0px 10px 0px 50px">
              <b-dropdown-item href="#">Plan Create</b-dropdown-item>
              <b-dropdown-item href="#">My Plan List</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <img src="@/assets/nightlogo.gif" style="width: 100px; width: 100px" />
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" >
            <b-nav-item-dropdown text="community" style="margin: 0px 10px 0px 50px" >
              <b-dropdown-item >
                <router-link :to="{ name: 'boardlist' }" style="color: gray" >자유 게시판</router-link>
              </b-dropdown-item>
              <b-dropdown-item >공지 사항</b-dropdown-item>

            </b-nav-item-dropdown>

            <b-button variant="light" style="margin: 0px 10px 0px 50px">Light</b-button>

            <b-nav-item-dropdown text="MyPage"  style="margin: 0px 10px 0px 50px">
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      
    </div>
    
  </div>
</template>

<script>
export default {};

</script>

<style>
.nav-bar-id {
  background-color: black;
}

#nav-margin{
  margin: 0px 10px 0px 50px;
}

#nav-color{
  color: white!important;
}

</style>
