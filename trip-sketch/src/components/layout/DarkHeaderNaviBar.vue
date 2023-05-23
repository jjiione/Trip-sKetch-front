<template>
	<div class="nav-bar-id">
		<div class="container">
			<b-navbar class="nav-bar-id" type="dark">
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item-dropdown style="margin: 0px 10px 0px 50px" text="Place">
							<b-dropdown-item>Search</b-dropdown-item>
							<b-dropdown-item>Recommend</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown text="Plan" style="margin: 0px 10px 0px 50px">
							<b-dropdown-item href="#">Plan Create</b-dropdown-item>
							<b-dropdown-item href="#">My Plan List</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown text="community" style="margin: 0px 10px 0px 50px">
							<b-dropdown-item>
								<router-link :to="{ name: 'boardlist' }" style="color: black"
									>공지 사항</router-link
								>
							</b-dropdown-item>
							<b-dropdown-item>자유 게시판</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>

					<b-navbar-nav class="ml-auto">
						<router-link :to="{ name: 'MainPage' }" style="color: black">
							<img src="@/assets/nightlogo.gif" style="width: 100px; width: 100px" />
						</router-link>
					</b-navbar-nav>

					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-item style="margin: 0px 10px 0px 50px">
							<router-link :to="{ name: 'userlogin' }" style="color: white" v-if="!this.userInfo"
								>Login</router-link
							>
							<router-link
								:to="{ name: 'userlogout' }"
								style="color: white"
								@click.native.prevent="onClickLogout"
								v-else
								>Logout</router-link
							>
						</b-nav-item>

						<b-nav-item-dropdown text="MyPage" style="margin: 0px 10px 0px 50px">
							<b-dropdown-item href="#"
								><router-link
									:to="{ name: 'userinfo' }"
									style="color: cornflowerblue"
									v-if="this.userInfo"
									>회원 정보 수정</router-link
								></b-dropdown-item
							>
							<b-dropdown-item>
								<router-link :to="{ name: 'google' }" style="color: cornflowerblue"
									>구글테스트</router-link
								></b-dropdown-item
							>
							<b-dropdown-item href="#">RU</b-dropdown-item>
							<b-dropdown-item href="#">FA</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-form-checkbox
							style="margin: 10px 10px 0px 50px"
							class="nav-color"
							v-model="checked"
							name="check-button"
							switch
						>
							mode
						</b-form-checkbox>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
const memberStore = "memberStore";
export default {
	data() {
		return {
			checked: false,
		};
	},
	computed: {
		...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
		...mapGetters(["checkUserInfo"]),
	},
	methods: {
		...mapActions(memberStore, ["userLogout"]),
		// ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
		onClickLogout() {
			// this.SET_IS_LOGIN(false);
			// this.SET_USER_INFO(null);
			// sessionStorage.removeItem("access-token");
			// if (this.$route.path != "/") this.$router.push({ name: "main" });
			console.log(this.userInfo.userId);
			//vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
			//+ satate에 isLogin, userInfo 정보 변경)
			// this.$store.dispatch("userLogout", this.userInfo.userid);
			this.userLogout(this.userInfo.userId);
			sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
			sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
			if (this.$route.path != "/") this.$router.push({ name: "MainPage" });
		},
	},
	created() {
		if (this.userInfo) console.log(this.userInfo.userId);
	},
};
</script>

<style scoped lang="scss">
.nav-bar-id {
	background-color: black;
}

#nav-margin {
	margin: 0px 10px 0px 50px;
}
::v-deep {
	.nav-color {
		color: white !important;
	}
}
</style>
