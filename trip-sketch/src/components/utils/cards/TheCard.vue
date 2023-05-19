<template>
	<div
		class="card"
		:class="[{ 'card-plain': plain }, { 'card-raised': raised }, { [`card-${type}`]: type }]"
		:data-background-color="color"
	>
		<h6 class="card-category" v-if="$slots.category || category">
			{{ category }}
		</h6>
		<div class="card-image" v-if="$slots.image">
			<slot name="image"></slot>
		</div>

		<div class="card-avatar" v-if="$slots.avatar">
			<slot name="avatar"></slot>
		</div>

		<div class="info" v-if="$slots.info">
			<slot name="info"></slot>
		</div>

		<div class="card-header" :class="headerClasses" v-if="$slots.header || title">
			<slot name="header">
				<h1 v-if="title" class="card-title">{{ title }}</h1>
				<h3 v-if="subTitle" class="card-category">{{ subTitle }}</h3>
				<p v-if="description" class="card-description">{{ description }}</p>
			</slot>
		</div>
		<div v-if="$slots.default" class="card-body" :class="cardBodyClasses">
			<slot></slot>
		</div>

		<slot name="raw-content"></slot>

		<hr v-if="$slots.footer && !noFooterLine" />
		<div class="card-footer" v-if="$slots.footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: "TheCard",
	props: {
		type: String,
		title: String,
		subTitle: String,
		category: String,
		color: String,
		description: String,
		noFooterLine: Boolean,
		plain: Boolean,
		raised: Boolean,
		cardBodyClasses: [String, Object, Array],
		headerClasses: [String, Object, Array],
	},
};
</script>
<style>
.card {
	border: 0;
	border-radius: border-radius-small;
	display: inline-block;
	position: relative;
	width: 100%;
	margin-bottom: 30px;
	box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
}
.card-header {
	background-color: transparent-bg;
	border-bottom: 0;
	background-color: transparent;
	border-radius: 0;
	padding: 0;
}

.card-footer {
	padding: 0;
	margin-top: 15px;
	background-color: transparent-bg;
	border: 0;
}

.card-plain {
	background: transparent;
	box-shadow: none;
}
.card-body,
.card-header {
	padding-left: 5px;
	padding-right: 5px;
}

.card-header:after {
	width: 100%;
	left: 0;
}
</style>
