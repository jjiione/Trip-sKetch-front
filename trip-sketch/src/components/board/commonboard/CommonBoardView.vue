<template>
  <div class="board_wrap">
    <div class="regist">
      <div class="board_title">
        <h2 style="font-weight: bold">자유게시판</h2>
      </div>
      <div class="board_view_wrap">
        <div class="board_view">
          <div class="title">
            {{ article.title }}
          </div>
          <div class="info">
            <dl>
              <dt>글번호</dt>
              <dd>{{ article.articleId }}</dd>
            </dl>
            <dl>
              <dt>글쓴이</dt>
              <dd>{{ article.userId }}</dd>
            </dl>
            <dl>
              <dt>작성일</dt>
              <dd>{{ article.createtime }}</dd>
            </dl>
            <dl>
              <dt>조회수</dt>
              <dd>{{ article.hit }}</dd>
            </dl>
            <div>
              <dl>
                <dt>파일 첨부</dt>
                <dd>
                  <a :href="article.img">{{ article.img }}</a>
                </dd>
              </dl>
            </div>
          </div>
          <div class="cont">
            <p style="white-space: pre-line">{{ article.content }}</p>
          </div>
        </div>
        <div class="bt_wrap">
          <button class="on" @click="deleteBoard">삭제</button>
          <button class="" @click="moveList" style="color: white">목록</button>
          <button class="btn" @click="moveModifyBoard">수정</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const url = "http://localhost:80/board/common/";
import axios from "axios";
export default {
  name: "CommonBoardView",
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
    axios.get(url + this.articleId + "/view").then((response) => {
      this.article = response.data;
    });
  },
  methods: {
    moveModifyBoard() {
      // console.log("글수정 하러가자!!!");
      this.$router.push({
        name: "commonboardmodify",
        params: { articleId: this.article.articleId },
      });
    },
    deleteBoard() {
      // console.log("글삭제 하러가자!!!");
      this.$router.push({
        name: "commonboarddelete",
        params: { articleId: this.article.articleId },
      });
    },
    moveList() {
      // console.log("글목록 보러가자!!!");
      this.$router.push({ name: "commonboardlist" });
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}
</style>
