<template>
	<div class="regist">
		<h1 class="underline">SSAFY 도서 정보</h1>
		<div class="regist_form">
			<label> 도서번호</label>
			<div class="view">{{ article[0].isbn }}</div>
			<label> 도서명</label>
			<div class="view">{{ article[0].title }}</div>
			<label> 저자</label>
			<div class="view">{{ article[0].author }}</div>
			<label> 가격</label>
			<div class="view">{{ article[0].price }}</div>
			<label> 설명</label>
			<div class="view">{{ article[0].desc }}</div>

			<div style="padding-top: 15px">
				<button class="btn" @click="moveModifyBoard">수정</button>
				<button class="btn" @click="deleteBoard">삭제</button>
				<button class="btn" @click="moveList">목록</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BoardView",
	data() {
		return {
			isbn: String,
			article: Object,
		};
	},
	created() {
		this.isbn = this.$route.params.isbn;
		this.articles = new Array();
		if (localStorage.articles) this.articles = JSON.parse(localStorage.getItem("articles"));
		this.article = this.articles.filter((article) => article.isbn === this.isbn);
	},
	methods: {
		moveModifyBoard() {
			console.log("글수정 하러가자!!!");
			this.$router.push({ name: "boardmodify", params: { isbn: this.article[0].isbn } });
		},
		deleteBoard() {
			console.log("글삭제 하러가자!!!");
			this.$router.push({ name: "boarddelete", params: { isbn: this.article[0].isbn } });
		},
		moveList() {
			console.log("글목록 보러가자!!!");
			this.$router.push({ name: "boardlist" });
		},
	},
};
</script>

<style></style>
