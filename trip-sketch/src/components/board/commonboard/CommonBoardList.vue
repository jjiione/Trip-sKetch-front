<template>
  <div class="board_wrap">
    <div class="board_title">
      <h1 style="font-weight: bold">자유 게시판</h1>
    </div>
    <div style="float: right; margin-bottom: 5px">
      <button
        id="btn-search"
        class="btn btn-dark"
        type="button"
        @click="searchFilter"
        style="text-decoration: none; height: min-content; margin-right: 5px"
        v-if="articles.length"
      >
        검색 조건 설정
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        id="btn-search-keyword"
        @click="resetBoard"
        style="text-decoration: none; height: min-content"
        v-if="articles.length"
      >
        초기화
      </button>
    </div>
    <div class="board_list_wrap" v-if="articles.length">
      <div style="margin-top: 100px">
        <!-- <table class="board_list" id="article-list">
				<colgroup>
					<col style="width: 5%" />
					<col style="width: 65%" />
					<col style="width: 10%" />
					<col style="width: 5%" />
					<col style="width: 15%" />
				</colgroup>
				<thead>
					<tr class="top">
						<th class="num">글번호</th>
						<th class="title">제목</th>
						<th class="writer">글쓴이</th>
						<th class="date">작성일</th>
						<th class="count">조회</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(article, idx) in articles" :key="idx">
						<td class="num">{{ article.articleId }}</td>
						<td class="title">
							<router-link
								:to="{ name: 'commonboardview', params: { articleId: article.articleId } }"
								>{{ article.title }}</router-link
							>
						</td>
						<td class="writer">{{ article.userId }}</td>
						<td class="date">{{ article.createtime }}</td>
						<td class="count">{{ article.hit | formatNum }}</td>
					</tr>
				</tbody>
			</table>
			<div class="board_page"> -->
        <!-- <div id="temp"></div> -->
        <!-- {{ temp.navigator }} -->
        <!-- <a href="#" class="bt first">&lt;&lt;</a>
				<a href="#" class="bt prev">&lt;</a>
				<a href="#" class="num on">1</a>
				<a href="#" class="num">2</a>
				<a href="#" class="bt next">></a>
				<a href="#" class="bt last">>></a>
			</div> -->
        <pagination-component :items="articles"></pagination-component>
      </div>
    </div>
    <div class="text-center" v-else>게시글이 없습니다.</div>
    <div class="bt_wrap">
      <button class="on" @click="movePage">글 작성</button>
      <!--<a href="#">수정</a>-->
    </div>

    <!-- <form id="form-param">
			<input type="hidden" name="pgno" id="pgno" v-model="pgno" />
			<input type="hidden" name="key" v-model="key" />
			<input type="hidden" name="word" v-model="word" />
		</form> -->
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
const url = "http://localhost:80/board/common/list";
import PaginationComponent from "@/components/board/PaginationComponent.vue";

export default {
  components: { PaginationComponent },
  name: "CommonBoardList",
  data() {
    return {
      articles: [],
      searchTitle: "",
      searchUserId: "",
      searchContent: "",
      // navigation: "",
      // temp: Object,
      // pgno: "1",
      // key: "",
      // word: "",
    };
  },
  async created() {
    // 비동기
    // TODO : 글목록 얻기.
    // let articleList = JSON.parse(localStorage.getItem("articles"));
    // if (articleList) this.articles = articleList;
    // let navigation = JSON.parse(localStorage.getItem("navigation"));
    // if (navigation) this.navigation = navigation;
    await axios.get(url).then((response) => {
      //   console.log(response);
      //   console.log(response.data);
      this.articles = response.data;
      // console.log(response);
      // console.log(response.data);
    });

    // await axios
    // 	.post(url, {
    // 		pgno: this.pgno,
    // 		key: this.key,
    // 		word: this.word,
    // 	})
    // 	.then((response) => {
    // 		console.log(response);
    // 		console.log(response.data);
    // 		this.temp = response.data;
    // 		console.log(this.temp.navigator);
    // 		document.querySelector("#temp").innerHTML = this.temp.navigator;
    // 		this.pgno = this.temp.pgno;
    // 		this.key = this.temp.key;
    // 		this.word = this.temp.word;
    // 		let pages = document.querySelectorAll(".page-link");
    // 		pages.forEach(function (page) {
    // 			page.addEventListener("click", function () {
    // 				document.querySelector("#pgno").value = this.parentNode.getAttribute("data-pg");
    // 				let form = document.querySelector("#form-param");
    // 			});
    // 		});
    // 		// this.navigation = this.response.data.navigation;
    // 		// this.navigation = response.data;
    // 		// console.log(response);
    // 		// console.log(response.data);
    // 	});
  },
  filters: {
    formatNum(value) {
      let val = value / 1;
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  computed: {
    computedArticles() {
      return this.articles;
    },
  },
  methods: {
    movePage() {
      this.$router.push({ name: "commonboardcreate" });
    },
    searchFilter() {
      Swal.fire({
        title: "검색 조건을 설정해 주세요",
        html:
          `<form>` +
          '<input id="swal-input1" class="swal2-input" placeholder="제목을 입력해주세요">' +
          '<input id="swal-input2" class="swal2-input" placeholder="작성자를 입력해주세요">' +
          '<input id="swal-input3" class="swal2-input"  placeholder="글내용을 입력해주세요">' +
          `</form>`,
        // input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          // preConfirm: (login) => {
          // return fetch(`//api.github.com/users/${login}`)
          // 	.then((response) => {
          // 		if (!response.ok) {
          // 			throw new Error(response.statusText);
          // 		}
          // 		return response.json();
          // 	})
          // 	.catch((error) => {
          // 		Swal.showValidationMessage(`Request failed: ${error}`);
          // 	});
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          let key = new Array();
          this.searchTitle = document.querySelector("#swal-input1").value;
          this.searchUserId = document.querySelector("#swal-input2").value;
          this.searchContent = document.querySelector("#swal-input3").value;
          this.articles.forEach((element) => {
            if (
              element.title.indexOf(this.searchTitle) == 0 &&
              element.userId.indexOf(this.searchUserId) == 0 &&
              element.content.indexOf(this.searchContent) == 0
            ) {
              console.log(element);
              key.push(element);
            }
          });
          this.articles = key;
          // const Toast = Swal.mixin({
          //   toast: true,
          //   position: "center-center",
          //   showConfirmButton: false,
          //   timer: 3000,
          //   timerProgressBar: true,
          //   didOpen: (toast) => {
          //     toast.addEventListener("mouseenter", Swal.stopTimer);
          //     toast.addEventListener("mouseleave", Swal.resumeTimer);
          //   },
          // });
          // Toast.fire({
          //   icon: "success",
          //   title: "검색 조건이 정상적으로 설정되었습니다.",
          // });
          // Swal.fire({
          // 	title: `${result.value.login}'s avatar`,
          // 	imageUrl: result.value.avatar_url,
          // });
        }
      });
    },
    resetBoard() {
      axios.get(url).then((response) => {
        this.articles = response.data;
      });
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}
#article-list {
  font-size: larger;
}
#form-search {
  text-align: end;
  font-size: larger;
}
</style>
