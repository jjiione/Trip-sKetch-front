<template>
  <div class="regist">
    <h1>SSAFY 글 삭제</h1>
    <div>삭제중....</div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
const memberStore = "memberStore";
const url = "http://localhost:80/board/notice/";
export default {
  name: "BoardDelete",
  data() {
    return {
      articleId: Number,
      authorization: "",
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  async created() {
    this.authorization = this.userInfo.authorization;
    if (this.authorization != "a") {
      alert("글 삭제 권한이 없습니다!");
      this.$router.push({ path: "list" });
      return;
    }
    // 비동기
    // TODO : 글번호에 해당하는 글을 삭제.
    this.articleId = this.$route.params.articleId;
    // console.log(this.articleId + "번글 삭제!!!!!");
    // this.articles = JSON.parse(localStorage.getItem("articles"));
    // this.articles = this.articles.filter((article) => article.articleId !== this.articleId);
    // localStorage.setItem("articles", JSON.stringify(this.articles));
    await axios.delete(url + this.articleId + "/delete");
    this.moveList();
  },
  methods: {
    moveList() {
      //   console.log("글목록 보러가자!!!");
      this.$router.push({ path: "list" });
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}
</style>
