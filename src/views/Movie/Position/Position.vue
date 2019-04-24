<template>
	<div>
		<div class="container-position">
			<div class="box-position" v-if="finishCalc">
				<h1 class="title-hot-position">热门城市</h1>
				<ul class="list-hot-position">
					<li class="item-hot-position" v-for="(item, index) in listHot" :key="index" @tap="sendLocation(item)">
						<span class="name-item-hot-position">{{item.nm}}</span>
					</li>
				</ul>
				
				<ul>
					<li v-for="(item, index) in listTag" :key="index">
						<h1 class="title-item-tag-position">{{item.firstLetter}}</h1>
						<ul class="list-item-tag-position">
							<li class="item-item-tag-position" v-for="(inItem, index) in item.list" :key="index" @tap="sendLocation(inItem)">{{inItem.nm}}</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<ul class="list-index-position">
			<li class="item-index-position" v-for="(item, index) in listTag" :class="{'active-item-index-position': index === indexActive}" :key="index" @click="scrollLeft(index)">
				{{item.firstLetter}}
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import BScroll from 'better-scroll'
	
	export default {
		data() {
			return {
				list: [],
				listHot: [],
				listTag: [],
				finishCalc: false,
				arrayHeight: [],
				left: {},
				indexActive: 0
			}
		},
		
		mounted() {
			this.getCityList()
		},
		
		methods: {
			...mapActions(['getCityList']),
			sendLocation(item) {
				this.$emit('eventChildren', item, 1)
				this.$router.push('/movie/ing')
			},
			scrollLeft(index) {
				this.left.scrollTo(0, -this.arrayHeight[index])
			}
		},
		
		watch: {
			finishCalc() {
				this.$nextTick(() => {
					this.left = new BScroll('.container-position', {
						tap: true,
						probeType: 2
					})
				
					// 178 + (41.6 * n1 + 28.4 + 20) + (41.6 * n2 + 28.4 + 20)...
					this.arrayHeight[0] = 178
					this.listTag.forEach((item, index) => {
						this.arrayHeight.push(this.arrayHeight[index] + (41.6 * item.list.length + 28.4 + 20 - 0.8))
					})
					
					this.left.on('scrollEnd', ({x, y}) => {
						this.arrayHeight.forEach((item, index) => {
							if(-y >= item && -y < this.arrayHeight[index + 1]) {
								this.indexActive = index
								return null
							}
						})
					})
				})
			},
			
			cityList() {
				this.$nextTick(() => {
					this.list = this.cityList
					this.list.forEach((item) => {
						if(item.isHot) {
							this.listHot.push(item)
						}
					})
					
					for(let i = 0; i < this.list.length - 1; i++){
						for(let j = 0; j < this.list.length - i - 1; j++){
							if(this.list[j].py > this.list[j + 1].py) {
								let swap = this.list[j]
								this.list[j] = this.list[j + 1]
								this.list[j + 1] = swap
							}
						}
					}
					
					// 提取索引数组
					let indexArray = []
					this.list.forEach((item, index) => {
						let firstLetter = item.py.charAt(0)
						if(index === 0) {
							indexArray.push(index)
						}
						if(index < this.list.length - 1) {
							if(firstLetter === this.list[index+1].py.charAt(0)) {
								indexArray.push(index + 1)
							}
							else {
								indexArray.push(firstLetter)
								indexArray.push(index)
							}
						}
						if(index === this.list.length - 1) {
							indexArray.push('Z')
						}
					})
					
					// 根据索引数组,生成tag数组
					let index = 0
					for(let i = 0; i < indexArray.length; i++) {
						if(typeof indexArray[i] === 'number') {
							// 创建数组新区
							if(!this.listTag[index]) {
								this.listTag[index] = {
									firstLetter: '',
									list: []
								}
								this.listTag[index].list.push(this.list[indexArray[i]])
							}
							else {
								this.listTag[index].list.push(this.list[indexArray[i]])
							}
						}
						// 通过字符，进行断点，自加index，从而创建数组新区
						else {
							this.listTag[index].firstLetter = this.list[indexArray[i-1]].py.charAt(0)
							index++
						}
					}
					this.finishCalc = true
				})
			}
		},
		
		computed: {
			...mapState(['cityList'])
		}
	}
</script>

<style lang="scss">
	.container-position{
		height: calc(100vh - 96px - 56px);
		margin-top: 96px;
		color: #666;
		overflow: hidden;
		
		.box-position{
			background-color: #fff;
			
			.title-hot-position{
				padding: 5px;
				padding-left: 15px;
				background-color: #eee;
			}
			
			.list-hot-position{
				margin: 10px 0;
				
				.item-hot-position{
					display: inline-block;
					width: 33.3%;
					margin: 5px 0;
					text-align: center;
					
					.name-item-hot-position{
						display: inline-block;
						padding: 5px 25px;
						border: 1px solid;
					}
				}
			}
			
			.title-item-tag-position{
				padding: 5px;
				padding-left: 15px;
				color: #699;
				background-color: #eee;
			}
			
			.list-item-tag-position{
				margin: 10px 0;
				
				.item-item-tag-position{
					padding: 10px;
					border-bottom: 1px solid #ccc;
					margin: 0 10px;
				}
				
				.item-item-tag-position:last-child{
					border-style: none;
				}
			}
		}
	}
	
	.list-index-position{
		position: fixed;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		
		.item-index-position{
			width: 20px;
			text-align: center;
			font-size: 10px;
			color: #ccc;
		}
		
		.active-item-index-position{
			color: #699;
		}
	}
</style>