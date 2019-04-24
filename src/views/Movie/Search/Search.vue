<template>
	<div class="container-search">
		<form class="form-search">
			<div class="box-search">
				<i class="icon-search iconfont iconsousuo"></i>
				<input class="input-search" type="text" v-model="keyword">
			</div>
		</form>
		<h1 class="title-search">电影/电视剧/综艺</h1>
		<div class="contanier-list-search">
			<ul class="list-search">
				<router-link class="item-search" :to="{path: '/pageDetail', query: {id: item.id}}" tag="li" v-for="(item, index) in searchList" :key="index">
					<img class="img-item-search" :src="item.img.replace(/w\.h/, '128.180')">
					<div class="info-item-search inline-block">
						<h1 class="title-info-item-search">{{item.nm}}</h1>
						<p class="text-info-item-search">{{item.enm}}</p>
						<p class="text-info-item-search">{{item.cat}}</p>
						<p class="text-info-item-search">{{item.rt}}</p>
						<div class="score-info-item-search">{{item.sc}}</div>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import {mapState, mapActions} from 'vuex'
	
	export default {
		data() {
			return {
				keyword: '',
				timeId: 0
			}
		},
		
		methods: {
			...mapActions(['getSearchList'])
		},
		
		watch: {
			keyword() {
				clearTimeout(this.timeId)
				this.timeId = setTimeout(() => {
					this.getSearchList({
						cityId: JSON.parse(window.localStorage.location).id,
						kw: this.keyword
					})
					clearTimeout(this.timeId)
				}, 500)
			}
		},
		
		computed: {
			...mapState(['searchList'])
		}
	}
</script>

<style lang="scss" scoped>
	.container-search{
		padding-top: 96px;
		
		.form-search{
			border-bottom: 1px solid #ccc;
			
			.box-search{
				padding: 5px;
				border: 1px solid #ccc;
				border-radius: 5px;
				margin: 10px;
				background-color: #fff;
				
				.icon-search{
					display: inline-block;
					padding: 5px;
				}
				
				.input-search{
					width: 80%;
					border-style: none;
				}
			}
		}
		
		.title-search{
			padding: 10px;
			border-bottom: 1px solid #ccc;
			font-weight: bold;
			color: #666;
			background-color: #fff;
		}
	}
	
	.contanier-list-search{
		height: calc(100vh - 96px - 103px - 56px);
		overflow: auto;
		
		.list-search{
			background-color: #fff;
			
			.item-search{
				display: flex;
				align-items: center;
				margin: 0 20px;
				padding: 20px 0;
				border-bottom: 1px solid #ccc;
				position: relative;
				
				.img-item-search{
					width: 20%;
				}
				
				.info-item-search{
					width: 70%;
					padding-left: 20px;
					
					.title-info-item-search{
						font-size: 20px;
					}
					
					.text-info-item-search{
						margin: 5px 0;
					}
					
					.score-info-item-search{
						position: absolute;
						top: 50%;
						right: 0;
						transform: translateY(-50%);
						color: #699;
					}
				}
			}
			
			.item-search:last-child{
				border-style: none;
			}
		}
	}

	// 散搭
	.inline-block{
		display: inline-block;
	}
</style>
