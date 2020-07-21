<template>
	<div>
		<a-row>
			<a-col :sm="{ span: 10, offset: 7 }" :xs="{ span: 20, offset: 2 }">
				<a-form :form="form" @submit="handleSubmit" >
						        	  <a-form-item  >
						        	    <span slot="label">
						        	      用户名&nbsp;
						        	      <a-tooltip title="将使用用户名登录本站点">
						        	        <a-icon type="question-circle-o" />
						        	      </a-tooltip>
						        	    </span>
						        	    <a-input
						        	      v-decorator="[
						        	        'nickname',
						        	        {
						        	          rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
						        	        },
						        	      ]"
						        	    />
						        	  </a-form-item>
						          <a-form-item  label="电子邮箱">
						            <a-input
						              v-decorator="[
						                'email',
						                {
						                  rules: [
						                    {
						                      type: 'email',
						                      message: 'The input is not valid E-mail!',
						                    },
						                    {
						                      required: true,
						                      message: 'Please input your E-mail!',
						                    },
						                  ],
						                },
						              ]"
						            />
						          </a-form-item>
						          <a-form-item  label="设置密码" has-feedback>
						            <a-input
						              v-decorator="[
						                'password',
						                {
						                  rules: [
						                    {
						                      required: true,
						                      message: 'Please input your password!',
						                    },
						                    {
						                      validator: validateToNextPassword,
						                    },
						                  ],
						                },
						              ]"
						              type="password"
						            />
						          </a-form-item>
						          <a-form-item  label="确认密码" has-feedback>
						            <a-input
						              v-decorator="[
						                'confirm',
						                {
						                  rules: [
						                    {
						                      required: true,
						                      message: 'Please confirm your password!',
						                    },
						                    {
						                      validator: compareToFirstPassword,
						                    },
						                  ],
						                },
						              ]"
						              type="password"
						              @blur="handleConfirmBlur"
						            />
						          </a-form-item>
						        
						          </a-form-item>
						          <a-form-item >
						            <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
						              阅读并同意
						              <a href="">
						                《发卡平台用户协议》
						              </a>
						            </a-checkbox>
						          </a-form-item>
						          <a-form-item >
						            <a-button type="primary" html-type="submit">
						              注册
						            </a-button>
						          </a-form-item>
						        </a-form>
			</a-col>
		</a-row>
 </div>
</template>

<script>

export default {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      
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
        callback('Two passwords that you enter is inconsistent!');
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
    },
  },
};
</script>