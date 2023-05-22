<template>
	<div class="board_wrap">
		<div class="regist">
			<div class="board_title">
				<h2 style="font-weight: bold">공지사항</h2>
			</div>
			<div class="board_view_wrap">
				<div class="board_view">
					<div class="title">
						{{ article[0].title }}
					</div>
					<div class="info">
						<dl>
							<dt>글번호</dt>
							<dd>{{ article[0].articleId }}</dd>
						</dl>
						<dl>
							<dt>글쓴이</dt>
							<dd>{{ article[0].userId }}</dd>
						</dl>
						<dl>
							<dt>작성일</dt>
							<dd>{{ article[0].createtime }}</dd>
						</dl>
						<dl>
							<dt>조회</dt>
							<dd>{{ article[0].hit }}</dd>
						</dl>
					</div>
					<div class="cont">
						<p style="white-space: pre-line">{{ article[0].content }}</p>
					</div>
				</div>
				<div class="bt_wrap">
					<button class="on" @click="deleteBoard">삭제</button>
					<button class="" @click="moveList">목록</button>
					<button class="btn" @click="moveModifyBoard">수정</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const url = "http://localhost:80/board/notice/list";
import axios from "axios";
export default {
	name: "BoardView",
	data() {
		return {
			articleId: Number,
			article: Object,
		};
	},
	created() {
		this.articleId = this.$route.params.articleId;
		this.articles = new Array();
		if (localStorage.articles) this.articles = JSON.parse(localStorage.getItem("articles"));
		this.article = this.articles.filter((article) => article.articleId === this.articleId);

		axios.get(url).then((response) => {
			this.article = response.data;
			// console.log(response);
			// console.log(response.data);
			console.log(this.articles);
			console.log(response.data);
		});
	},
	methods: {
		moveModifyBoard() {
			console.log("글수정 하러가자!!!");
			this.$router.push({ name: "boardmodify", params: { articleId: this.article[0].articleId } });
		},
		deleteBoard() {
			console.log("글삭제 하러가자!!!");
			this.$router.push({ name: "boarddelete", params: { articleId: this.article[0].articleId } });
		},
		moveList() {
			console.log("글목록 보러가자!!!");
			this.$router.push({ name: "boardlist" });
		},
	},
};
</script>

<style></style>
