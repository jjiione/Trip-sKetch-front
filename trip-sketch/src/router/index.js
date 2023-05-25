import Vue from "vue";
import VueRouter from "vue-router";
// views
import MainPage from "@/views/main/MainPage";
import TheBoard from "@/views/BoardView.vue";
import TheUser from "@/views/UserView.vue";
import TheReview from "@/views/ReviewView.vue";

// components
import BoardList from "@/components/board/BoardList";
import BoardCreate from "@/components/board/BoardCreate";
import BoardModify from "@/components/board/BoardModify";
import BoardView from "@/components/board/BoardView";
import BoardDelete from "@/components/board/BoardDelete";
import CommonBoardList from "@/components/board/commonboard/CommonBoardList";
import CommonBoardCreate from "@/components/board/commonboard/CommonBoardCreate";
import CommonBoardModify from "@/components/board/commonboard/CommonBoardModify";
import CommonBoardView from "@/components/board/commonboard/CommonBoardView";
import CommonBoardDelete from "@/components/board/commonboard/CommonBoardDelete";
import UserLogin from "@/components/user/UserLogin";
import UserLogout from "@/components/user/UserLogout";
import UserSignup from "@/components/user/UserSignup";
import UserFindPwd from "@/components/user/UserFindPwd";
import UserInfo from "@/components/mypage/UserInfo";
import MyPlans from "@/components/mypage/MyPlans";
import MyReview from "@/components/mypage/MyReview";
import GoogleTest from "@/components/testtest/GoogleTest";
import ReviewWrite from "@/components/myreviews/ReviewWrite";

import store from "@/store";
Vue.use(VueRouter);

// https://v3.router.vuejs.org/kr/guide/advanced/navigation-guards.html
const onlyAuthUser = async (to, from, next) => {
	const checkUserInfo = store.getters["memberStore/checkUserInfo"];
	const checkToken = store.getters["memberStore/checkToken"];
	let token = sessionStorage.getItem("access-token");
	console.log("로그인 처리 전", checkUserInfo, token);

	if (checkUserInfo != null && token) {
		console.log("토큰 유효성 체크하러 가자!!!!");
		await store.dispatch("memberStore/getUserInfo", token);
	}
	if (!checkToken || checkUserInfo === null) {
		alert("로그인이 필요한 페이지입니다..");
		// next({ name: "login" });
		router.push({ name: "userlogin" });
	} else {
		console.log("로그인 했다!!!!!!!!!!!!!.");
		next();
	}
};

const routes = [
	{
		path: "",
		name: "MainPage",
		component: MainPage,
	},
	{
		path: "/board",
		name: "Board",
		component: TheBoard,
		redirect: "/board/list",
		children: [
			{
				path: "list",
				name: "boardlist",
				component: BoardList,
			},
			{
				path: "create",
				name: "boardcreate",
				beforeEnter: onlyAuthUser,
				component: BoardCreate,
			},
			{
				path: "view",
				name: "boardview",
				component: BoardView,
			},
			{
				path: "modify",
				name: "boardmodify",
				beforeEnter: onlyAuthUser,
				component: BoardModify,
			},
			{
				path: "delete",
				name: "boarddelete",
				beforeEnter: onlyAuthUser,
				component: BoardDelete,
			},
			{
				path: "common",
				name: "commonboard",
				component: TheBoard,
				redirect: "/common/list",
				children: [
					{
						path: "list",
						name: "commonboardlist",
						component: CommonBoardList,
					},
					{
						path: "create",
						name: "commonboardcreate",
						beforeEnter: onlyAuthUser,
						component: CommonBoardCreate,
					},
					{
						path: "view",
						name: "commonboardview",
						component: CommonBoardView,
					},
					{
						path: "modify",
						name: "commonboardmodify",
						beforeEnter: onlyAuthUser,
						component: CommonBoardModify,
					},
					{
						path: "delete",
						name: "commonboarddelete",
						beforeEnter: onlyAuthUser,
						component: CommonBoardDelete,
					},
				],
			},
		],
	},
	{
		path: "/user",
		name: "user",
		component: TheUser,
		redirect: "/user/login",
		children: [
			{
				path: "login",
				name: "userlogin",
				component: UserLogin,
			},
			{
				path: "logout",
				name: "userlogout",
				component: UserLogout,
			},
			{
				path: "signup",
				name: "usersignup",
				component: UserSignup,
			},
			{
				path: "findpwd",
				name: "userfindpwd",
				component: UserFindPwd,
			},
		],
	},
	{
		path: "/mypage",
		name: "mypage",
		component: TheUser,
		beforeEnter: onlyAuthUser,
		redirect: "/mypage/userinfo",
		children: [
			{
				path: "userinfo",
				name: "userinfo",
				component: UserInfo,
			},
			{
				path: "myplans",
				name: "myplans",
				component: MyPlans,
			},
			{
				path: "myreviews",
				name: "myreviews",
				component: MyReview,
			},
			{
				path: "google",
				name: "google",
				component: GoogleTest,
			},
		],
	},
	{
		path: "/review",
		name: "review",
		component: TheReview,
		redirect: "/review/write",
		children: [
			{
				path: "write",
				name: "write",
				component: ReviewWrite,
				props: true,
			},
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
