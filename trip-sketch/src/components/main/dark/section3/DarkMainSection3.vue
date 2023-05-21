<template>

    <div id="dark-main-section3">
        <div class="container">
            <div class="d-flex justify-content-center">
        <div class="col-md-5" style="margin: 10vh 10vh">
          <h1 style="color: white; text-align: center;">Recent Review</h1>
        </div>
      </div>
            <div class="row justify-content-between">
                <dark-main-section-3-review></dark-main-section-3-review>
                <dark-main-section-3-review></dark-main-section-3-review>
                <dark-main-section-3-review></dark-main-section-3-review>
            </div>

            <div class="row justify-content-between" style="margin-top: 100px;">
                <dark-main-section-3-review></dark-main-section-3-review>
                <dark-main-section-3-review></dark-main-section-3-review>
                <dark-main-section-3-review></dark-main-section-3-review>
            </div>
        </div>

    </div>
  </template>
  
  <script>
  import DarkMainSection3Review from "./DarkMainSection3Review.vue";

  
  
  export default {
    name: "section-3",
    components: {
        DarkMainSection3Review,
      
    },
    data() {
      return {
       
      };
    },
   
  };
  </script>
  
  <style scoped>
  
  #dark-main-section3 {
    background: linear-gradient(black, #0C134F);
    height: 100vh;
    width: 100%;
    
  }
  
  #dark-main-section3-container{
    padding-top: 80px ;
  
  }
 
  
  </style>