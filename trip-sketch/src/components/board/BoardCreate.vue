<template>
	<div class="regist">
		<h1 class="underline">SSAFY 도서 등록</h1>
		<div class="regist_form">
			<label for="isbn">도서번호</label>
			<input type="text" id="isbn" ref="isbn" v-model="article.isbn" /><br />
			<label for="title">제목</label>
			<input type="text" id="title" ref="title" v-model="article.title" /><br />
			<label for="author">저자</label>
			<input type="text" id="author" ref="author" v-model="article.author" /><br />
			<label for="price">가격</label>
			<input type="text" id="price" ref="price" v-model="article.price" /><br />
			<label for="content">설명</label>
			<br />
			<textarea id="content" ref="content" cols="35" rows="5" v-model="article.desc"></textarea
			><br />
			<button @click="checkValue">등록</button>
			<button @click="moveList">목록</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "BoardCreate",
	data() {
		return {
			article: {
				isbn: "",
				title: "",
				author: "",
				price: "",
				desc: "",
			},
		};
	},
	methods: {
		// 입력값 체크하기 - 체크가 성공하면 registArticle 호출
		checkValue() {
			// 사용자 입력값 체크하기
			// 작성자아이디, 제목, 내용이 없을 경우 각 항목에 맞는 메세지를 출력
			let err = true;
			let msg = "";
			!this.article.isbn &&
				((msg = "도서번호 입력해주세요"), (err = false), this.$refs.isbn.focus());
			err &&
				!this.article.title &&
				((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
			err &&
				!this.article.author &&
				((msg = "저자 입력해주세요"), (err = false), this.$refs.author.focus());
			err &&
				!this.article.price &&
				((msg = "가격 입력해주세요"), (err = false), this.$refs.price.focus());
			err &&
				!this.article.desc &&
				((msg = "설명 입력해주세요"), (err = false), this.$refs.content.focus());

			if (!err) alert(msg);
			// 만약, 내용이 다 입력되어 있다면 registArticle 호출
			else this.registArticle();
		},
		registArticle() {
			// 비동기
			// TODO : 글번호에 해당하는 글정보 등록.
			let articles = new Array();
			if (localStorage.articles) articles = JSON.parse(localStorage.articles);
			articles.push(this.article);
			localStorage.setItem("articles", JSON.stringify(articles));
			this.$router.push({ name: "boardlist" });
		},

		moveList() {
			this.$router.push({ name: "boardlist" });
		},
	},
};
</script>

<style></style>
