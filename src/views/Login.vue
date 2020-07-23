<template>
	<a-row>
		<a-col :sm="{ span: 10, offset: 7 }" :xs="{ span: 20, offset: 2 }">
			<a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
				<a-form-item>
					<a-input v-decorator="['username', { rules: [{ required: true, message: '请输入您的用户名或邮箱!' }] }]" placeholder="用户名/邮箱">
						<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-input v-decorator="['password', { rules: [{ required: true, message: '请输入您的密码!' }] }]" type="password" placeholder="密码">
						<a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-checkbox
						v-decorator="[
							'remember',
							{
								valuePropName: 'checked',
								initialValue: true
							}
						]"
					>
						7天内自动登录
					</a-checkbox>
					<a class="login-form-forgot" href="">找回密码</a>
					<a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
					或者
					<a href="">注册账号</a>
				</a-form-item>
			</a-form>
		</a-col>
	</a-row>
</template>

<script>
import { LoginAPI } from '@/api/user.js';
export default {
	beforeCreate() {
		this.form = this.$form.createForm(this, { name: 'normal_login' });
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault();
			this.form.validateFields((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values);
					LoginAPI(values)
						.then(res => {
							console.log('返回信息', res);
						})
						.catch(info => {
							console.log('异常信息', info);
						});
				}
			});
		}
	}
};
</script>
<style>
#components-form-demo-normal-login .login-form {
	max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
	float: right;
}
#components-form-demo-normal-login .login-form-button {
	width: 100%;
}
</style>
