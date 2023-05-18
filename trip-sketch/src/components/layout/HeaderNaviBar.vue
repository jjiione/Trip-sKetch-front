<template>
  <div class="nav-bar-id">
    <div class="container">
      <b-navbar class="nav-bar-id" type="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item style="margin: 10px 10px" href="#">Link</b-nav-item>
            <b-nav-item style="margin: 10px 10px" href="#">Disabled</b-nav-item>
          </b-navbar-nav>

          <b-nav-bar-nav class="ml-auto">
            <img src="@/assets/nightlogo.gif" style="width: 100px; width: 100px" />
          </b-nav-bar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" style="margin: 10px 10px">
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right style="margin: 10px 10px">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
  background-color: rgb(39, 39, 39);
}

b-nav-item {
  color: white;
}
</style>
