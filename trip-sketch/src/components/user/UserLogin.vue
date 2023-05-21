<template>
  <div id="user-login-top">
    <div id="user-login-form">
      <form class="form-signin" style="margin-top: 5%">
        <img
          class="mb-4"
          src="@/assets/tripsketch_logo-removebg-preview.png"
          alt=""
          width="60%"
          height=""
        />
        <h1 class="h3 mb-3 fw-normal" style="margin-top: 10px">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput" class="label-name">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword" class="label-name">Password</label>
        </div>

        <div>
          <button
            class="w-100 btn btn-lg btn-primary"
            type="submit"
            style="background-color: black"
          >
            Sign in
          </button>
        </div>
        <div class="pull-left" style="margin-top: 30px">
          <h6>
            <a href="#" class="link footer-link"
              ><router-link :to="{ name: 'usersignup' }" style="color: gray"
                >Create Account</router-link
              ></a
            >
          </h6>
        </div>
        <div class="pull-right" style="margin-top: 10px">
          <h6>
            <a href="#" class="link footer-link"
              ><router-link :to="{ name: 'userinfo' }" style="color: cornflowerblue"
                >Forgot password</router-link
              ></a
            >
          </h6>
        </div>
        <p class="mt-5 mb-3 text-muted">&copy; trip-sketch</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
};
</script>

<style>
#user-login-top {
  background: url("@/assets/login.jpg");
  background-repeat: none;
  /* width: 100%; */
  height: 110vh;
  /* min-height: 100%; */
  background-size: cover;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#user-login-form {
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.form-floating label {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.form-floating label::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

.floatingInput {
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-bottom: 5px;
  transition: all 0.3s ease;
}

.form-floating input:focus {
  outline: none;
}
.form-floating input:focus + .label-name .floatingInput,
.form-floating input:valid + .label-name .floatingInput {
  transform: translateY(-150%);
  font-size: 14px;
  left: 0px;
}
.form-floating input:focus + .label-name::after,
.form-floating input:valid + .label-name::after {
  transform: translateX(0%);
}
.form-floating {
  margin-bottom: 10px;
  border-radius: 1px;
}
</style>
