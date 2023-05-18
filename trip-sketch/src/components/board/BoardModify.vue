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
              <input type="text" id="isbn" v-model="article[0].isbn" ref="isbn" />
            </dd>
          </div>
          <div class="info">
            <dl>
              <dt>글쓴이</dt>
              <dd>
                <input type="text" id="title" v-model="article[0].title" ref="title" />
              </dd>
            </dl>
            <dl>
              <dt>비밀번호</dt>
              <dd><input type="text" id="author" v-model="article[0].author" ref="author" /></dd>
            </dl>
          </div>
          <div class="cont">
            <textarea
              id="content"
              v-model="article[0].desc"
              ref="content"
              cols="35"
              rows="5"
            ></textarea
            ><br />
          </div>
        </div>
        <div class="bt_wrap">
          <button @click="checkValue"><a href="#" class="on">수정</a></button>
          <button @click="moveList"><a href="#">목록</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardModify",
  data() {
    return {
      isbn: String,
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
      !this.article[0].isbn &&
        ((msg = "도서번호 입력해주세요"), (err = false), this.$refs.isbn.focus());
      err &&
        !this.article[0].title &&
        ((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.article[0].author &&
        ((msg = "저자 입력해주세요"), (err = false), this.$refs.author.focus());
      err &&
        !this.article[0].desc &&
        ((msg = "설명 입력해주세요"), (err = false), this.$refs.content.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registArticle 호출
      else this.modifyBoard();
    },
    modifyBoard() {
      console.log(this.article.isbn + "번 도서 수정 하러가자!!!!");
      // 비동기
      // TODO : 글번호에 해당하는 글정보 수정.
      localStorage.setItem("articles", JSON.stringify(this.articles));
      this.$router.push({ name: "boardlist" });
    },

    moveList() {
      this.$router.push({ name: "boardlist" });
    },
  },
  created() {
    // 비동기
    // TODO : 글번호에 해당하는 글정보 얻기.
    this.isbn = this.$route.params.isbn;
    this.articles = new Array();
    if (localStorage.articles) this.articles = JSON.parse(localStorage.getItem("articles"));
    this.article = this.articles.filter((article) => article.isbn === this.isbn);
  },
};
</script>

<style></style>
