<template>
	<div class="overflow-auto">
		<!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->

		<b-table
			id="my-table"
			:items="items"
			:per-page="perPage"
			:current-page="currentPage"
			:fields="fields"
			small
			><template #cell(title)="data">
				<router-link
					:to="{
						name: 'commonboardview',
						params: { articleId: data.item.articleId },
					}"
					>{{ data.item.title }}</router-link
				>
			</template></b-table
		>
		<b-pagination
			v-model="currentPage"
			:total-rows="rows"
			:per-page="perPage"
			aria-controls="my-table"
			align="center"
		></b-pagination>
	</div>
</template>

<script>
export default {
	name: "PaginationComponent",
	props: { items: [] },
	data() {
		return {
			perPage: 10,
			currentPage: 1,
			fields: [
				{
					key: "articleId",
					label: "글 번호",
					sortable: true,
				},
				{
					key: "title",
					label: "제목",
					sortable: true,
				},
				{
					key: "userId",
					label: "글쓴이",
					sortable: false,
					// Variant applies to the whole column, including the header and footer
				},
				{
					key: "createtime",
					label: "작성일",
					sortable: true,
					// Variant applies to the whole column, including the header and footer
				},
				{
					key: "hit",
					label: "조회수",
					sortable: true,
					// Variant applies to the whole column, including the header and footer
				},
			],
		};
	},
	computed: {
		rows() {
			return this.items.length;
		},
	},
};
</script>
<style>
button.page-link {
	width: 100%;
}
</style>
