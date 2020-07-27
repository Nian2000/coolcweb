<template>
	<a-layout id="components-layout-demo-fixed">
		<a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
			<div class="logo"></div>
			<a-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{ lineHeight: '64px' ,width:'30%'}">
				<a-menu-item key="4"><router-link to="/">首页</router-link></a-menu-item>
				<a-menu-item key="1"><router-link to="/register">注册</router-link></a-menu-item>
				<a-menu-item key="2"><router-link to="/login">登录</router-link></a-menu-item>
				<a-menu-item key="3"><router-link to="/retrieve">找回</router-link></a-menu-item>
				<a-menu-item key="5">其他</a-menu-item>
			</a-menu>
			
		</a-layout-header>
		<a-layout-content :style="{ padding: '0px', marginTop: '40px' }">
			<a-breadcrumb :style="{ margin: '24px 0' }">
				<!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
				<a-breadcrumb-item>List</a-breadcrumb-item>
				<a-breadcrumb-item>App</a-breadcrumb-item> -->
			</a-breadcrumb>
			<a-row>
				<a-col class="content" :xs="{ span: 24, offset: 0 }" :sm="{ span: 16, offset: 4 }"><router-view /></a-col>
			</a-row>
		</a-layout-content>
		<a-layout-footer :style="{ textAlign: 'center' }">酷C发卡系统</a-layout-footer>
	</a-layout>
</template>

<script></script>

<style>
.content {
	background-color: #fff;
	padding: 10px;
}

#components-layout-demo-fixed .logo {
	width: 120px;
	height: 31px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px 24px 16px 0;
	float: left;
}


</style>
