<template>
	<ul class="list-ing">
			<li class="item-ing" v-for="(item, index) in list" :key="index" @tap="$router.push({path: '/pageDetail', query: {id: item.id}})">
				<img class="img-item-ing" :src="item.img.replace(/w\.h/, '128.180')">
				
				<div class="info-item-ing inline-block">
					<h1 class="title-info-item-ing ellipsis-info-item-ing">
						<span>{{item.nm}}</span>
						<i class="icon-info-item-ing iconfont icon3DIMAX" v-if="item.version"></i>
					</h1>
					<div class="text-info-item-ing" v-if="item.comingTitle">
						<span>{{item.wish}}人想看</span>
					</div>
					<div class="text-info-item-ing" v-else>
						<span>
							评分<span class="score-info-item-ing">{{item.sc}}</span>
						</span>
					</div>
					<div class="ellipsis-info-item-ing text-info-item-ing">
						<span>主演: {{item.star}}</span>
					</div>
					<div class="text-info-item-ing" v-if="item.comingTitle">
						<span>{{item.rt}}上映</span>
					</div>
					<div class="text-info-item-ing" v-else>{{item.showInfo}}</div>
				</div>
				
				<div class="btn-item-ing" v-if="item.comingTitle">预售</div>
				<div class="btn-item-ing" v-else>购票</div>
			</li>
		</ul>
</template>

<script>
	export default {
		props: {
			list: Array
		}
	}
</script>

<style lang="scss" scoped>
	.list-ing{
		background-color: #fff;
		
		.item-ing{
			display: flex;
			align-items: center;
			padding-top: 10px;
			border-bottom: 1px solid #ccc;
			margin: 10px;
			margin-top: 0;
			position: relative;
			color: #666;
			
			.img-item-ing{
				width: 30%;
				padding-bottom: 10px;
			}
			
			.info-item-ing{
				width: 70%;
				padding-left: 10px;
				
				.title-info-item-ing{
					margin-bottom: 10px;
					font-size: 20px;
					line-height: 20px;
					font-weight: bold;
					color: #333;
				}
				
				.score-info-item-ing{
					margin-left: 5px;
					color: #699;
				}
				
				.text-info-item-ing{
					margin: 2px 0;
				}
				
				.ellipsis-info-item-ing{
					width:70%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			
			.icon-info-item-ing{
				position: absolute;
				right: 10px;
				top: 20%;
				font-size: 15px;
				color: #699;
				font-size: 40px;
				font-weight: normal;
				color: #699;
			}
			
			.btn-item-ing{
				padding: 10px 15px;
				border-radius: 10px;
				position: absolute;
				right: 10px;
				font-size: 12px;
				color: #fff;
				background-color: #699;
				white-space: nowrap;
			}
		}
		
		.item-ing:last-child{
			border-bottom-style: none;
		}
	}
	
	
	
	// 散搭
	.inline-block{
		display: inline-block;
	}
</style>