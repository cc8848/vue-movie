<template>
	<div>
		<Header>
			<span slot="title">影片详情</span>
			<i slot="btn-back" class="btn-back iconfont iconfanhui1" @click="$router.go(-1)"></i>
		</Header>
		<div class="container-pageDetail">
			<div>
				<div class="box-pageDetail">
					<div class="bg-pageDetail" :style="'background-image: url(' + detailMovie.img.replace(/w\.h/, '148.208') + ');'" v-if="detailMovie.img"></div>
					<div class="infoBase-pageDetail">
						<img class="img-infoBase-pageDetail" :src="detailMovie.img.replace(/w\.h/, '148.208')" v-if="detailMovie.img">
						<div class="text-infoBase-pageDetail inline-block">
							<h1 class="title-text-pageDetail">{{detailMovie.nm}}</h1>
							<p class="item-text-pageDetail">{{detailMovie.enm}}</p>
							<p class="item-text-pageDetail">{{detailMovie.sc}}</p>
							<p class="item-text-pageDetail">{{detailMovie.cat}}</p>
							<p class="item-text-pageDetail">{{detailMovie.oriLang}}/{{detailMovie.episodeDur}}分钟</p>
							<p class="item-text-pageDetail">{{detailMovie.pubDesc}}</p>
						</div>
					</div>
				</div>
				
				<p class="desc-pageDetail">{{detailMovie.dra}}</p>
				<div class="container-list-pageDetail">
					<ul class="list-pageDetail" ref="list">
						<li class="item-pageDetail inline-block" v-for="(item, index) in detailMovie.photos" :key="index">
							<img class="img-item-pageDetail" :src="item.replace(/w\.h/, '140.127')">
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import BScroll from 'better-scroll'
	import Header from '@/components/Header/Header.vue'
		
	export default {
		mounted() {
			this.getDetailMovie(this.$route.query.id)
		},
		
		methods: {
			...mapActions(['getDetailMovie'])
		},
		
		watch: {
			detailMovie() {
				this.$nextTick(() => {
					new BScroll('.container-pageDetail')
					
					// 160 * n + 20
					const count = this.detailMovie.photos.length
					this.$refs.list.style.width = 40 + 130 * count + 'px'
					new BScroll('.container-list-pageDetail', {
						scrollX: true
					})
				})
			}
		},
		
		computed: {
			...mapState(['detailMovie'])
		},
		
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.container-pageDetail{
			height: calc(100vh - 48px - 56px);
			margin-top: 48px;
			overflow: hidden;
		}
		
	.box-pageDetail{
		padding: 20px;
		position: relative;
	
		.bg-pageDetail{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			filter: blur(10px);
			background-repeat: no-repeat;
			background-size: cover;
		}
		
		.infoBase-pageDetail{
			display: flex;
			align-items: center;
			
			.img-infoBase-pageDetail{
				width: 30%;
				border: 1px solid #fff;
			}
			
			.text-infoBase-pageDetail{
				width: 70%;
				padding: 20px;
				vertical-align: bottom;
				color: #fff;
				
				.title-text-pageDetail{
					font-size: 20px;
				}
				
				.item-text-pageDetail{
					margin: 5px 0;
				}
			}
		}
	}
		
	.desc-pageDetail{
		padding: 20px;
		margin-top: 20px;
		text-indent: 2em;
		word-break: break-all;
	}
		
	.container-list-pageDetail{
		overflow: hidden;
		
		.list-pageDetail{
			padding: 0 20px;
			white-space: nowrap;
			
			.item-pageDetail{
				width: 120px;
				margin: 0 5px;
				vertical-align: top;
				
				.img-item-pageDetail{
					width: 100%;
				}
			}
		}
	}
	


	// 散搭
	.inline-block{
		display: inline-block;
	}
</style>
