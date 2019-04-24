<template>
	<div class="container-soon">
		<div>
			<div class="refreshing" ref="refreshing" v-if="refreshing">{{textRefresh}}</div>
			<ItemMovie :list="movieComingList"></ItemMovie>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import ItemMovie from '@/components/ItemMovie/ItemMovie.vue'
	import {mapState, mapActions} from 'vuex'
	
	export default {
		data() {
			return {
				refreshing: false,
				textRefresh: '松手开始更新'
			}
		},
		
		mounted() {
			this.getMovieComingList({
				cityId: JSON.parse(window.localStorage.location).id || this.location.id
			})
		
			this.$nextTick(() => {
				const scroll = new BScroll('.container-soon', {
					tap: true,
					probeType: 1
				})
				
				scroll.on('scroll', ({x, y}) => {
					// 下拉显示
					if(y > 50) {
						this.refreshing = true
						// 松手请求
						scroll.on('touchEnd', ({x, y}) => {
							this.getMovieComingList({
								cityId: JSON.parse(window.localStorage.location).id || this.location.id,
								callback: () => {
									this.textRefresh = '更新中'
									setTimeout(() => {
										this.textRefresh = '更新完成'
										this.$refs.refreshing.style.backgroundColor = '#699'
										this.$refs.refreshing.style.color = '#fff'
										setTimeout(() => {
											this.refreshing = false
											this.textRefresh = '松手开始更新'
										}, 1000)
									}, 500)
								}
							})
						})
					}
				})
			})
		},
		
		methods: {
			...mapActions(['getMovieComingList'])
		},
		
		computed: {
			...mapState(['movieComingList', 'location'])
		},
		
		components: {
			ItemMovie
		}
	}
</script>

<style lang="scss" scoped>
	.container-soon{
		height: calc(100vh - 96px - 56px);
		margin-top: 96px;
		overflow: hidden;
		
		.refreshing{
			padding: 20px;
			text-align: center;
		}
	}
</style>
