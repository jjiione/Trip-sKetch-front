<template>

    <div id="dark-main-section3">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <h2>Recent Review</h2>
                </div>
            </div>
            <div class="row justify-content-between">
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