<template>
	<div class="board_wrap">
		<div class="regist">
			<div class="board_title"><h2 style="font-weight: bold">글 작성</h2></div>
			<div class="regist_form">
				<div class="board_write_wrap">
					<div class="board_write">
						<div class="title">
							<dl>
								<dt for="text">제목</dt>
								<dd><input type="text" id="title" ref="title" v-model="article.title" /></dd>
							</dl>
						</div>
						<div class="info">
							<dl>
								<dt>글쓴이</dt>
								<dd><input type="text" id="userId" ref="userId" v-model="article.userId" /></dd>
							</dl>
							<dl>
								<dt>파일 첨부</dt>
								<dd>
									<input type="text" id="fileInfos" ref="fileInfos" v-model="article.fileInfos" />
								</dd>
							</dl>
						</div>
						<div class="cont">
							<textarea
								class="cont"
								placeholder="내용 입력"
								id="content"
								ref="content"
								cols="35"
								rows="5"
								v-model="article.content"
							></textarea>
						</div>
					</div>
					<div class="bt_wrap">
						<button class="on" @click="checkValue">등록</button>
						<button @click="moveList" style="color: white">취소</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:80/board/notice/regist";
export default {
	name: "BoardCreate",
	data() {
		return {
			article: {
				articleId: "",
				userId: "",
				title: "",
				content: "",
				hit: "",
				createtime: "",
				fileInfos: "",
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
			!this.article.title && ((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
			err &&
				!this.article.userId &&
				((msg = "작성자 입력해주세요"), (err = false), this.$refs.userId.focus());
			err &&
				!this.article.content &&
				((msg = "글 내용 입력해주세요"), (err = false), this.$refs.content.focus());

			if (!err) alert(msg);
			// 만약, 내용이 다 입력되어 있다면 registArticle 호출
			else this.registArticle();
		},
		async registArticle() {
			// 비동기
			// TODO : 글번호에 해당하는 글정보 등록.
			let articles = new Array();
			if (localStorage.articles) articles = JSON.parse(localStorage.articles);
			articles.push(this.article);
			localStorage.setItem("articles", JSON.stringify(articles));
			await axios.post(url, {
				title: this.article.title,
				content: this.article.content,
				userId: this.article.userId,
				// fileInfos: this.article.fileInfos,
			});
			this.$router.push({ name: "boardlist" });
		},

		moveList() {
			this.$router.push({ name: "boardlist" });
		},
	},
};
</script>

<style scoped>
* {
	color: black;
}
</style>
