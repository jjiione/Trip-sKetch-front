<template>
    <div class="board_wrap">
	<div class="regist">
        <div class="board_title">
		<h2 style="font-weight: bold;">공지사항</h2>
        </div>
        <div class="board_view_wrap">
		<div class="board_view">
                <div class="title">
					{{ article[0].title }}
                </div>
                <div class="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>{{ article[0].isbn }}</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>{{ article[0].author }}</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2021.1.16</dd>
                    </dl>
                    <dl>
                        <dt>조회</dt>
                        <dd>33</dd>
                    </dl>
                </div>
			<div class="cont">{{ article[0].desc }}</div>
		</div>
            <div class="bt_wrap">
				<button class="btn" @click="deleteBoard"><a href="#" class="on">삭제</a></button>
				<button class="btn" @click="moveList"><a href="#" class="on">목록</a></button>
                <button class="btn" @click="moveModifyBoard"><a href="#">수정</a></button>
            </div>
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
