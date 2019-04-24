<template>
	<div class="container-header">
		<slot name="btn-back"></slot>
		<slot name="title"></slot>
	</div>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style lang="scss" scoped>
	.container-header{
		width: 100%;
		height: 48px;
		position: fixed;
		top: 0;
		left: 0;
		line-height: 48px;
		text-align: center;
		font-weight: bold;
		color: #fff;
		background-color: #699;
		
		.btn-back{
			padding: 0 10px;
			position: absolute;
			left: 0;
			font-size: 20px;
			line-height: 48px;
		}
	}
</style>
