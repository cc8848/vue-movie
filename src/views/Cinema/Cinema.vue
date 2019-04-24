<template>
	<div>
		<Header>
			<span slot="title">随心影院</span>
		</Header>
		<div class="container-list-cinema">
			<ul class="list-cinema">
				<li class="item-cinema" v-for="(item, index) in list" :key="index">
					<h1 class="title-cinema">
						<span class="ellipse inline-block">{{item.nm}}
						<span class="cost-cinema">
							{{item.sellPrice}}元起
						</span></span>
						
					</h1>
					<p class="address-cinema ellipse">
						{{item.addr}}
					</p>
					<ul class="discounts-cinema">
						<li class="item-discounts-cinema inline-block" v-for="(inItem, index) in item.tagList" :key="index">{{inItem}}</li>
					</ul>
					<div class="distance-cinema">
						<span>{{item.distance}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import BScroll from 'better-scroll'
	import Header from '@/components/Header/Header.vue'
	
	export default {
		data() {
			return {
				list: []
			}
		},
		
		mounted() {
			this.getCinemaList(JSON.parse(window.localStorage.location).id)
			
			this.$nextTick(() => {
				new BScroll('.container-list-cinema')
			})
		},
		
		methods: {
			...mapActions(['getCinemaList'])
		},
		
		watch: {
			cinemaList() {
				this.$nextTick(() => {
					this.list = this.cinemaList
					this.list.forEach((item) => {
						let tagListItem = []
						if(item.tag.allowRefund) {
							tagListItem.push('改签')
						}
						if(item.tag.endorse) {
							tagListItem.push('退')
						}
						if(item.tag.sell) {
							tagListItem.push('折扣卡')
						}
						if(item.tag.snack) {
							tagListItem.push('小吃')
						}
						item.tagList = tagListItem
					})
				})
			}
		},
		
		computed: {
			...mapState(['cinemaList'])
		},
		
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.container-list-cinema{
		height: calc(100vh - 48px - 56px);
		margin-top: 48px;
		overflow: hidden;
		
		.list-cinema{
			background-color: #fff;
			font-size: 15px;
			color: #666;
			
			.item-cinema{
				padding: 20px 0;
				border-bottom: 1px solid #ccc;
				margin: 0 20px;
				position: relative;
			}
			
			.item-cinema:last-child{
				border-style: none;
			}
			
			.title-cinema{
				font-size: 20px;
				
				.cost-cinema{
					position: absolute;
					right: 0;
					top: 20%;
					font-size: 15px;
					color: #699;
				}
			}
			
			.address-cinema{
				margin: 5px ;
			}
			
			.item-discounts-cinema{
				padding: 2px;
				border: 1px solid;
				border-radius: 2px;
				margin: 5px;
				color: #699;
			}
			
			.distance-cinema{
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
	
	// 散搭
	.inline-block{
		display: inline-block;
	}
	
	.ellipse{
		width: 70%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
</style>
