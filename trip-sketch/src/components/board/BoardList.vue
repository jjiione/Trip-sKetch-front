<template>
	<div>
		<h1 class="underline">도서 목록</h1>
		<div style="text-align: right">
			<button @click="movePage">도서 등록</button>
		</div>
		<div v-if="articles.length">
			<table id="article-list">
				<colgroup>
					<col style="width: 5%" />
					<col style="width: 65%" />
					<col style="width: 10%" />
					<col style="width: 5%" />
					<col style="width: 15%" />
				</colgroup>
				<thead>
					<tr>
						<th>글번호</th>
						<th>도서 번호</th>
						<th>제목</th>
						<th>저자</th>
						<th>가격</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(article, idx) in articles" :key="idx">
						<td>{{ idx + 1 }}</td>
						<td>
							<router-link :to="{ name: 'articleview', params: { isbn: article.isbn } }">{{
								article.isbn
							}}</router-link>
						</td>
						<td>{{ article.title }}</td>
						<td>{{ article.author }}</td>
						<td>{{ article.price | formatPrice }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="text-center" v-else>게시글이 없습니다.</div>
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

<style></style>
