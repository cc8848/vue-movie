<template>
	<div>
		<Header>
			<span slot="title">随心电影</span>
		</Header>
		<ul class="list-tabBar-movie">
			<router-link class="item-tabBar-movie inline-block" to="/movie/position" tag="li" @click.native="changeIndexItemTabBar(0)">
				<span class="content-item-tabBar-movie inline-block" :class="{'underLine-tabBar-movie': indexItemTabBar === 0}">
					<span>{{location}}</span>
					<i class="iconfont iconxiala"></i>
				</span>
			</router-link>
			<router-link class="item-tabBar-movie inline-block" to="/movie/ing" tag="li" @click.native="changeIndexItemTabBar(1)">
				<span class="content-item-tabBar-movie inline-block" :class="{'underLine-tabBar-movie': indexItemTabBar === 1}">正在热映</span>
			</router-link>
			<router-link class="item-tabBar-movie inline-block" to="/movie/soon" tag="li" @click.native="changeIndexItemTabBar(2)">
				<span class="content-item-tabBar-movie inline-block" :class="{'underLine-tabBar-movie': indexItemTabBar === 2}">即将上映</span>
			</router-link>
			<router-link class="search-tabBar-movie inline-block" to="/movie/search" tag="li" @click.native="changeIndexItemTabBar(3)">
				<i class="content-item-tabBar-movie inline-block iconfont iconsousuo" :class="{'underLine-tabBar-movie': indexItemTabBar === 3}" style="font-size: 15px;"></i>
			</router-link>
		</ul>
		<router-view @eventChildren="changeLocation"></router-view>
	</div>
</template>

<script>
	import Header from '@/components/Header/Header.vue'
	
	export default {
		data() {
			return {
				indexItemTabBar: 1,
				location: ''
			}
		},
		
		mounted() {
			const routeChildren = this.$route.path.split('/')[2]
			switch(routeChildren) {
				case 'position':
				this.indexItemTabBar = 0
				break
				case 'ing':
				this.indexItemTabBar = 1
				break
				case 'soon':
				this.indexItemTabBar = 2
				break
				case 'search':
				this.indexItemTabBar = 3
				break
				default:
				break
			}
			
			this.$nextTick(() => {
				this.location = JSON.parse(window.localStorage.location).nm
			})
		},
		
		methods: {
			changeIndexItemTabBar(index) {
				this.indexItemTabBar = index
			},
			changeLocation(item, index) {
				this.changeIndexItemTabBar(index)
				
				const location = {
					id: item.id,
					nm: item.nm
				}
				window.localStorage.location = JSON.stringify(location)
				this.location = item.nm
			}
		},
		
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.list-tabBar-movie{
		width: 100%;
		margin-top: 48px;
		border-bottom: 1px solid #ccc;
		position: fixed;
		top: 0;
		left: 0;
		box-shadow: 0 0 5px 0 #ccc;
		color: #666;
		
		.item-tabBar-movie{
			width: 30%;
		}
		
		.search-tabBar-movie{
			width: 10%;
		}
		
		.item-tabBar-movie, .search-tabBar-movie{
			text-align: center;
		}
		
		.content-item-tabBar-movie{
			padding: 15px 0;
			font-size: 15px;
			line-height: 15px;
		}
		
		.underLine-tabBar-movie{
			border-bottom: 2px solid #699;
		}
	}
	
	// 散搭
	.inline-block{
		display: inline-block;
	}
</style>
