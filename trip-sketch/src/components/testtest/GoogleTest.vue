<template>
  <div>
    <button @click="googleSignIn">Sign In with Google</button>
    <!-- <div class="g-signin2" id="google-signin-btn" data-onsuccess="onSignIn"></div> -->
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  name: "SignUp",
  created() {
    window.onSignIn = this.onSignIn;
  },
  methods: {
    googleSignIn: function () {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
          console.log(token); // Token
          console.log(user); // User that was authenticated
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    },
  },
};
</script> 


