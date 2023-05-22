<template>
  <div class="board_wrap">
    <div class="regist">
      <div class="board_title">
        <h1 style="font-weight: bold">공지사항</h1>
      </div>
      <div class="board_write_wrap">
        <div class="board_write">
          <div class="title">
            <dt>제목</dt>
            <dd>
              <input type="text" name="title" id="title" v-model="article.title" ref="title" />
            </dd>
          </div>
          <div class="info">
            <dl>
              <dt>작성자</dt>
              <dd>
                <input
                  type="text"
                  name="userId"
                  id="userId"
                  readonly
                  v-model="article.userId"
                  ref="userId"
                />
              </dd>
            </dl>
            <dl>
              <dt>파일 첨부</dt>
              <dd>
                <input
                  type="text"
                  name="fileInfos"
                  id="fileInfos"
                  v-model="article.fileInfos"
                  ref="fileInfos"
                />
              </dd>
            </dl>
          </div>
          <div class="cont">
            <textarea
              id="content"
              name="content"
              v-model="article.content"
              ref="content"
              cols="35"
              rows="5"
            ></textarea
            ><br />
          </div>
        </div>
        <div class="bt_wrap">
          <button class="on" @click="checkValue">수정</button>
          <button @click="moveList">목록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const url = "http://localhost:80/board/notice/";
import axios from "axios";
export default {
  name: "BoardModify",
  data() {
    return {
      articleId: Number,
      article: Object,
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
      else this.modifyBoard();
    },
    async modifyBoard() {
      //   console.log(this.article.articleId + "번 도서 수정 하러가자!!!!");
      // 비동기
      // TODO : 글번호에 해당하는 글정보 수정.
      // localStorage.setItem("articles", JSON.stringify(this.articles));
      // this.article = this.articles.filter((article) => article.articleId === this.articleId);
      await axios.put(url + "modify", {
        articleId: this.article.articleId,
        title: this.article.title,
        content: this.article.content,
        // fileInfos: this.article.fileInfos,
      });
      this.$router.push({ name: "boardlist" });
    },

    moveList() {
      this.$router.push({ name: "boardlist" });
    },
  },
  created() {
    // 비동기
    // TODO : 글번호에 해당하는 글정보 얻기.
    this.articleId = this.$route.params.articleId;
    this.articles = new Array();
    if (localStorage.articles) this.articles = JSON.parse(localStorage.getItem("articles"));
    axios.get(url + this.articleId + "/view").then((response) => {
      this.article = response.data;
    });
  },
};
</script>

<style></style>
