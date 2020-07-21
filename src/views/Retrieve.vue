<template>
	<div id="components-form-demo-vuex">
		<a-row>
			<a-col :sm="{ span: 10, offset: 7 }" :xs="{ span: 20, offset: 2 }">
				<a-form :form="form" @submit="handleSubmit">
					<a-form-item>
						<span slot="label">
							预留邮箱&nbsp;
							<a-tooltip title="请输入您注册账号时使用的邮箱,系统将发送密码到您的邮件中."><a-icon type="question-circle-o" /></a-tooltip>
						</span>
						<a-input
							v-decorator="[
								'username',
								{
									rules: [{ required: true, message: '预留邮箱不能为空！' }]
								}
							]"
						/>
					</a-form-item>
					<a-button type="primary" html-type="submit">找回密码</a-button>
				</a-form>
			</a-col>
		</a-row>
	</div>
</template>

<script></script>

<style></style>
