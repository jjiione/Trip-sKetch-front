<template>
	<div id="user-login-top">
		<div id="user-login-form">
			<form class="form-signin" style="margin-top: 5%" @submit.prevent="onSubmit">
				<img
					class="mb-4"
					src="@/assets/tripsketch_logo-removebg-preview.png"
					alt=""
					width="60%"
					height=""
				/>
				<h1 class="h3 mb-3 fw-normal" style="margin-top: 10px; color: black">Please sign in</h1>

				<div class="form-floating">
					<input
						type="text"
						class="form-control"
						id="floatingInput"
						v-model="user.userId"
						placeholder="아이디를 입력해주세요"
						@keyup.enter="login"
					/>
				</div>
				<div class="form-floating">
					<input
						type="password"
						class="form-control"
						id="floatingPassword"
						v-model="user.userPwd"
						placeholder="비밀번호를 입력해주세요"
						@keyup.enter="login"
					/>
				</div>

				<div>
					<button
						class="w-100 btn btn-lg btn-primary"
						type="submit"
						style="background-color: black"
						@click="login"
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
							><router-link :to="{ name: 'userfindpwd' }" style="color: cornflowerblue"
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

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";

export default {
	name: "UserLogin",
	data() {
		return {
			user: {
				userId: null,
				userPwd: null,
			},
		};
	},
	created() {
		// console.log(this.isLogin);
	},
	computed: {
		...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
	},
	methods: {
		...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
		async login() {
			await this.userConfirm(this.user);
			let token = sessionStorage.getItem("access-token");
			// console.log("1. confirm() token >> " + token);
			if (this.isLogin) {
				await this.getUserInfo(token);
				// console.log("4. confirm() userInfo :: ", this.userInfo);
				this.$router.push({ name: "MainPage" });
			} else {
				Swal.fire({
					html: `<div class="text-danger">아이디 또는 비밀번호를 확인하세요.</div>`,
					// input: "text",
					inputAttributes: {
						autocapitalize: "off",
					},
					confirmButtonText: "OK",
					showLoaderOnConfirm: true,
				});
			}
		},
	},
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
