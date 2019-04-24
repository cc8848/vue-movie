<template>
	<ul class="list-footer">
		<router-link class="item-footer inline-block" to="/movie" tag="li">
			<div class="icon-item-footer iconfont icondianying"></div>
			<div class="text-item-footer">电影</div>
		</router-link>
		<router-link class="item-footer inline-block" to="/cinema" tag="li">
			<div class="icon-item-footer iconfont iconyingyuan"></div>
			<div class="text-item-footer">影院</div>
		</router-link>
		<router-link class="item-footer inline-block" to="/mine" tag="li">
			<div class="icon-item-footer iconfont iconwode"></div>
			<div class="text-item-footer">我的</div>
		</router-link>
	</ul>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style lang="scss" scoped>
	.list-footer{
		width: 100%;
		border-top: 1px solid #ccc;
		box-shadow: 0 0 5px 0 #ccc;
		position: fixed;
		bottom: 0;
		color: #666;
		background-color: #fff;
		
		.item-footer{
			width: 33.3%;
			padding: 10px;
			
			.icon-item-footer{
				font-size: 20px;
				text-align: center;
			}
			
			.text-item-footer{
				font-size: 10px;
				text-align: center;
			}
		}
	}
	
	// 散搭
	.inline-block{
		display: inline-block;
	}
	
	.router-link-active{
		color: #699;
	}
</style>
