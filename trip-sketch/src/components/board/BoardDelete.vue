<template>
	<div class="regist">
		<h1>SSAFY 글 삭제</h1>
		<div>삭제중....</div>
	</div>
</template>

<script>
export default {
	name: "BoardDelete",
	data() {
		return {
			isbn: String,
		};
	},
	created() {
		// 비동기
		// TODO : 글번호에 해당하는 글을 삭제.
		this.isbn = this.$route.params.isbn;
		console.log(this.isbn + "번글 삭제!!!!!");
		this.articles = JSON.parse(localStorage.getItem("articles"));
		this.articles = this.articles.filter((article) => article.isbn !== this.isbn);
		localStorage.setItem("articles", JSON.stringify(this.articles));
		this.moveList();
	},
	methods: {
		moveList() {
			console.log("글목록 보러가자!!!");
			this.$router.push({ path: "boardlist" });
		},
	},
};
</script>

<style></style>
