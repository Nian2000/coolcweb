<template>

		<a-row  style="margin-top: 35px;">
			<a-col :sm="{ span: 10, offset: 7 }" :xs="{ span: 20, offset: 2 }">
				<a-form :form="form" @submit="handleSubmit">
					<a-form-item>
						<span slot="label">
							用户名&nbsp;
							<a-tooltip title="将使用用户名登录本站点"><a-icon type="question-circle-o" /></a-tooltip>
						</span>
						<a-input
							v-decorator="[
								'username',
								{
									rules: [{ required: true, message: '请输入您要注册的用户名!', whitespace: true }]
								}
							]"
						/>
					</a-form-item>
					<a-form-item label="电子邮箱">
						<a-input
							v-decorator="[
								'email',
								{
									rules: [
										{
											type: 'email',
											message: '您输入的并不是电子邮箱正确格式!'
										},
										{
											required: true,
											message: '请输入你的电子邮箱!'
										}
									]
								}
							]"
						/>
					</a-form-item>
					<a-form-item label="设置密码" has-feedback>
						<a-input
							v-decorator="[
								'password',
								{
									rules: [
										{
											required: true,
											message: '请输入您要设置的密码!'
										},
										{
											validator: validateToNextPassword
										}
									]
								}
							]"
							type="password"
						/>
					</a-form-item>
					<a-form-item label="确认密码" has-feedback>
						<a-input
							v-decorator="[
								'password_confirmation',
								{
									rules: [
										{
											required: true,
											message: '请确认您的密码!'
										},
										{
											validator: compareToFirstPassword
										}
									]
								}
							]"
							type="password"
							@blur="handleConfirmBlur"
						/>
					</a-form-item>

					<a-form-item>
						<a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
							阅读并同意
							<a href="">《发卡平台用户协议》</a>
						</a-checkbox>
					</a-form-item>
					<a-form-item><a-button type="primary" html-type="submit">注册</a-button></a-form-item>
				</a-form>
			</a-col>
		</a-row>
	
</template>

<script>
import {RegisteredAPI} from '@/api/user.js';
export default {
	data() {
		return {
			confirmDirty: false,
			autoCompleteResult: []
		};
	},
	beforeCreate() {
		this.form = this.$form.createForm(this, { name: 'register' });
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault();
			this.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values);
					if(values.agreement != true){
						this.$message.warning('请先同意用户协议再进行注册！');
					}else{
						RegisteredAPI(values)
							.then(res => {
								console.log('返回信息', res);
							})
							.catch(info => {
								console.log('异常信息', info);
							});
					}
				}
			});
		},
		handleConfirmBlur(e) {
			const value = e.target.value;
			this.confirmDirty = this.confirmDirty || !!value;
		},
		compareToFirstPassword(rule, value, callback) {
			const form = this.form;
			if (value && value !== form.getFieldValue('password')) {
				callback('您输入的两个密码不一致!');
			} else {
				callback();
			}
		},
		validateToNextPassword(rule, value, callback) {
			const form = this.form;
			if (value && this.confirmDirty) {
				form.validateFields(['confirm'], { force: true });
			}
			callback();
		},
		handleWebsiteChange(value) {
			let autoCompleteResult;
			if (!value) {
				autoCompleteResult = [];
			} else {
				autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
			}
			this.autoCompleteResult = autoCompleteResult;
		}
	}
};
</script>
