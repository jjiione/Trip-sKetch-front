import Vue from "vue";
import VueRouter from "vue-router";
// views
import MainPage from "@/views/main/MainPage";
import TheBoard from "@/views/BoardView.vue";

// components
import BoardList from "@/components/board/BoardList";
import BoardCreate from "@/components/board/BoardCreate";
import BoardModify from "@/components/board/BoardModify";
import BoardView from "@/components/board/BoardView";
import BoardDelete from "@/components/board/BoardDelete";

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
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
