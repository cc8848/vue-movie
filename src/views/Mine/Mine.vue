<template>
	<div class="container-mine">
		<Header>
			<span slot="title">随心账号</span>
		</Header>
		<form class="form-mine">
			<input class="account-mine" type="text" placeholder="手机号/邮箱">
			<input class="password-mine" type="password" placeholder="请输入你的密码">
			<input class="login-mine" type="button" value="登录">
			<div>
				<span class="register-mine">立即注册</span>
				<span class="findPwd-mine">找回密码</span>
			</div>
		</form>
	</div>
</template>

<script>
	import Header from '@/components/Header/Header.vue'
	
	export default {
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.container-mine{
		height: 100vh;
		position: relative;
		background-color: #fff;

		.form-mine{
			height: 300px;
			padding: 20px;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 10%;
			right: 10%;
			margin: auto;
			
			.account-mine:focus, .password-mine:focus{
				border-color: #699;
			}
			
			.account-mine, .password-mine{
				width: 100%;
				padding: 10px;
				border-style: none;
				border-bottom: 1px solid #ccc;
			}
			
			.login-mine{
				display: block;
				width: 90%;
				padding: 10px 0;
				border-radius: 5px;
				border-style: none;
				margin: 20px auto;
				background-color: #699;
				color: #fff;
			}
			
			.register-mine{
				float: left;
			}
			
			.findPwd-mine{
				float: right;
			}
			
			.register-mine, .findPwd-mine{
				padding: 10px;
				font-size: 10px;
				color: #699;
			}
		}
	}
</style>
