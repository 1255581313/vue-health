(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217507"],{c5cb:function(e,s,i){"use strict";i.r(s);var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"register"},[i("div",{staticClass:"tab"},[i("h3",{class:e.isLoginPassword?"":"active",on:{click:function(s){e.isLoginPassword=!1}}},[e._v(" 手机注册 ")]),i("h3",{class:e.isLoginPassword?"active":"",on:{click:function(s){e.isLoginPassword=!0}}},[e._v(" 邮箱注册 ")])]),i("div",{staticClass:"content"},[i("div",{staticClass:"card"},[e.isLoginPassword?i("div",{staticClass:"line"},[i("div",[e._v("邮箱")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})])]):e._e(),e.isLoginPassword?i("div",{staticClass:"line"},[i("div",[e._v("验证码")]),i("div",{staticClass:"line-inner"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.emailCode,expression:"emailCode"}],domProps:{value:e.emailCode},on:{input:function(s){s.target.composing||(e.emailCode=s.target.value)}}}),i("span",{staticClass:"code"},[e._v("发送验证码")])])]):e._e(),e.isLoginPassword?e._e():i("div",{staticClass:"line"},[i("div",[e._v("手机")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],domProps:{value:e.phone},on:{input:function(s){s.target.composing||(e.phone=s.target.value)}}})])]),e.isLoginPassword?e._e():i("div",{staticClass:"line"},[i("div",[e._v("验证码")]),i("div",{staticClass:"line-inner"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneCode,expression:"phoneCode"}],domProps:{value:e.phoneCode},on:{input:function(s){s.target.composing||(e.phoneCode=s.target.value)}}}),i("span",{staticClass:"code"},[e._v("发送验证码")])])]),i("div",{staticClass:"line"},[i("div",[e._v("用户名")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}})])]),i("div",{staticClass:"line"},[i("div",[e._v("密码")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})])]),i("div",{staticClass:"line"},[i("div",[e._v("密码确认")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.rePassword,expression:"rePassword"}],domProps:{value:e.rePassword},on:{input:function(s){s.target.composing||(e.rePassword=s.target.value)}}})])]),i("div",{staticClass:"toAction"}),i("div",{staticClass:"submit"},[i("button",{staticClass:"btn btn-primary",on:{click:e.register}},[e._v("注册")])])]),i("div",{staticClass:"link"},[i("router-link",{staticClass:"btn",attrs:{to:"/login"}},[e._v("登录")])],1)])])},o=[],a=(i("d3b7"),i("e9c4"),{name:"",components:{},props:{},data:function(){return{isLoginPassword:!1,email:"",emailCode:"",phone:"",phoneCode:"",username:"",password:"",rePassword:""}},computed:{},watch:{},created:function(){},mounted:function(){},update:function(){},methods:{getCode:function(){var e={};e=this.isLoginPassword?{email:this.email}:{phone:this.phone},fetch("/api/login/regCaptcha",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){if(e.ok)return e.json()})).then((function(){})).catch((function(e){console.error("Error:",e)}))},register:function(){if(this.isLoginPassword){if(""===this.emailCode||""===this.username)return}else if(""===this.phoneCode||""===this.username)return;if(""!==this.password&&""!==this.repeatPassword){if(this.password!==this.repeatPassword)return this.password="",void(this.repeatPassword="");var e={};e=this.isLoginPassword?{email:this.email,emailCode:this.emailCode,username:this.username,password:this.password,rePassword:this.rePassword}:{phone:this.phone,phoneCode:this.phoneCode,username:this.username,password:this.password,rePassword:this.rePassword},fetch("/api/login/register",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){if(e.ok)return e.json()})).then((function(){alert("注册成功")})).then((function(e){alert(e.msg),alert(e.msg)})).catch((function(e){console.error("Error:",e)}))}}}}),n=a,r=i("2877"),d=Object(r["a"])(n,t,o,!1,null,"559c3fc2",null);s["default"]=d.exports}}]);