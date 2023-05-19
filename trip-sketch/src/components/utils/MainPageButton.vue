<template>
  <div class="button-7">
    <div class="eff-7"></div>
    <a href="#"> Touch me </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button-7 {
  width: 140px;
  height: 50px;
  border: 2px solid #5c469c;
  border-radius: 10px;
  float: left;
  text-align: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 0 40px 50px;
}
.button-7 a {
  font-family: arial;
  font-size: 16px;
  color: azure;
  text-decoration: none;
  line-height: 50px;
  transition: all 0.5s ease;
  z-index: 2;
  position: relative;
}
.eff-7 {
  width: 140px;
  height: 50px;
  border: 0px solid #5c469c;
  position: absolute;
  transition: all 0.5s ease;
  z-index: 1;
  box-sizing: border-box;
}
.button-7:hover .eff-7 {
  border: 70px solid #5c469c;
}
.button-7:hover a {
  color: #fff;
}
</style>
