<template>
	<a-layout id="components-layout-demo-fixed">
		<a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
			<div class="logo" >酷C发卡网</div>
			<a-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{ lineHeight: '64px' }">
				<a-menu-item key="4">
					<router-link to="/">首页</router-link>
				</a-menu-item>
				<a-menu-item key="1">
					<router-link to="/register">注册</router-link>
				</a-menu-item>
				<a-menu-item key="2">
					<router-link to="/login">登录</router-link>
				</a-menu-item>
				<a-menu-item key="3">
					<router-link to="/retrieve">找回</router-link>
				</a-menu-item>
			</a-menu>
			
			
		</a-layout-header>
		<a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
			<a-breadcrumb :style="{ margin: '24px 0' }">
				<!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
				<a-breadcrumb-item>List</a-breadcrumb-item>
				<a-breadcrumb-item>App</a-breadcrumb-item> -->
			</a-breadcrumb>
			<div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
				<router-view />
			</div>
		</a-layout-content>
		<a-layout-footer :style="{ textAlign: 'center' }">
			Ant Design ©2018 Created by Ant UED
		</a-layout-footer>
	</a-layout>
</template>


<script>


</script>

<style>
	#components-layout-demo-fixed .logo {
		width: 120px;
		height: 31px;
		background: rgba(255, 255, 255, 0.2);
		margin: 16px 24px 16px 0;
		float: left;
	}
</style>
