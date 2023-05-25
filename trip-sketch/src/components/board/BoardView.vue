<template>
  <div class="board_wrap">
    <div class="regist">
      <div class="board_title">
        <h2 style="font-weight: bold">공지사항</h2>
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
          <button class="on" @click="deleteBoard" v-if="authorization == 'a'">삭제</button>
          <button class="" @click="moveList" style="color: white">목록</button>
          <button class="btn" @click="moveModifyBoard" v-if="authorization == 'a'">수정</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const url = "http://localhost:80/board/notice/";
import axios from "axios";
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
  name: "BoardView",
  data() {
    return {
      articleId: Number,
      article: Object,
      authorization: "",
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  async created() {
    this.authorization = this.userInfo.authorization;
    this.articleId = this.$route.params.articleId;
    this.articles = new Array();
    if (localStorage.articles) this.articles = JSON.parse(localStorage.getItem("articles"));
    this.article = this.articles.filter((article) => article.articleId === this.articleId);
    await axios.get(url + this.articleId + "/view").then((response) => {
      this.article = response.data;
    });
  },
  methods: {
    moveModifyBoard() {
      // console.log("글수정 하러가자!!!");
      this.$router.push({ name: "boardmodify", params: { articleId: this.article.articleId } });
    },
    deleteBoard() {
      // console.log("글삭제 하러가자!!!");
      this.$router.push({ name: "boarddelete", params: { articleId: this.article.articleId } });
    },
    moveList() {
      // console.log("글목록 보러가자!!!");
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
