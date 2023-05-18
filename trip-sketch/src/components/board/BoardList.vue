<template>
	<div class="board_wrap">
		<div class="board_title">
			<h1 style="font-weight: bold;">공지사항</h1></div>
		<div class="board_list_wrap" v-if="articles.length" >
			<table class="board_list" id="article-list">
				<colgroup >
					<col style="width: 5%" />
					<col style="width: 65%" />
					<col style="width: 10%" />
					<col style="width: 5%" />
					<col style="width: 15%" />
				</colgroup>
				<thead>
					<tr class="top">
						<th class="num">번호</th>
						<th class="title">제목</th>
						<th class="writer">글쓴이</th>
						<th class="date">작성일</th>
						<th class="count">조회</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(article, idx) in articles" :key="idx">
						<td class="num">{{ idx + 1 }}</td>
						<td class="title">
							<router-link :to="{ name: 'boardview', params: { isbn: article.isbn } }">{{
								article.isbn
							}}</router-link>
						</td>
						<td class="writer">{{ article.title }}</td>
						<td class="date">{{ article.author }}</td>
						<td class="count">{{ article.price | formatPrice }}</td>
					</tr>
				</tbody>
			</table>
            <div class="board_page">
                <a href="#" class="bt first">&lt;&lt;</a>
                <a href="#" class="bt prev">&lt;</a>
                <a href="#" class="num on">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="num">4</a>
                <a href="#" class="num">5</a>
                <a href="#" class="bt next">></a>
                <a href="#" class="bt last">>></a>
            </div>
		</div>
		<div class="text-center" v-else>게시글이 없습니다.</div>
            <div class="bt_wrap">
			<button><a class="on" @click="movePage" >글 작성</a></button>
                <!--<a href="#">수정</a>-->
            </div>
	</div>
</template>

<script>
export default {
	name: "BoardList",
	data() {
		return {
			articles: [],
		};
	},
	created() {
		// 비동기
		// TODO : 글목록 얻기.
		let articleList = JSON.parse(localStorage.getItem("articles"));
		if (articleList) this.articles = articleList;
	},
	filters: {
		formatPrice(value) {
			let val = value / 1;
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
	},
	methods: {
		movePage() {
			this.$router.push({ name: "boardcreate" });
		},
	},
};
</script>

<style>

</style>
