import Vue from "vue";
import VueRouter from "vue-router";
// views
import MainPage from "@/views/main/MainPage";
import TheBoard from "@/views/BoardView.vue";
import TheUser from "@/views/UserView.vue";

// components
import BoardList from "@/components/board/BoardList";
import BoardCreate from "@/components/board/BoardCreate";
import BoardModify from "@/components/board/BoardModify";
import BoardView from "@/components/board/BoardView";
import BoardDelete from "@/components/board/BoardDelete";
import UserLogin from "@/components/user/UserLogin";
import UserLogout from "@/components/user/UserLogout";
import UserSignup from "@/components/user/UserSignup";
import UserInfo from "@/components/mypage/UserInfo";
import MyPlans from "@/components/mypage/MyPlans";
import MyReviews from "@/components/mypage/MyReviews";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
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
				component: BoardCreate,
			},
			{
				path: "view/:isbn",
				name: "boardview",
				component: BoardView,
			},
			{
				path: "modify",
				name: "boardmodify",
				component: BoardModify,
			},
			{
				path: "delete",
				name: "boarddelete",
				component: BoardDelete,
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
		],
	},
	{
		path: "/mypage",
		name: "mypage",
		component: TheUser,
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
				component: MyReviews,
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
