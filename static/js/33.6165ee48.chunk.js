(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{266:function(e,t,a){"use strict";var r=function(e,t){return e.length>=t},n=function(e){return""!==e.trim()},s=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};t.a=function(e,t){var a=!0;for(var o in t)switch(o){case"minLength":a=a&&r(e,t[o]);break;case"isRequired":a=a&&n(e);break;case"isEmail":a=a&&s(e);break;default:a=!0}return a}},267:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t="form-control";return e.touched&&!e.valid&&(t="form-control control-error"),n.a.createElement("input",Object.assign({type:"text",className:t},e))}},268:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t="form-control";return e.touched&&!e.valid&&(t="form-control control-error"),n.a.createElement("input",Object.assign({type:"password",className:t},e))}},269:function(e,t,a){"use strict";var r=a(33),n=a(242),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(240),u=a.n(i),d=a(241),m={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(t,"card-footer"),a);return o.a.createElement(s,Object(r.a)({},c,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},272:function(e,t,a){"use strict";var r=a(262),n=a.n(r),s=a(263),o="http://134.209.196.211:3001",c=a(278),l=a.n(c);a.d(t,"b",function(){return i}),a.d(t,"d",function(){return u}),a.d(t,"a",function(){return d}),a.d(t,"c",function(){return m});var i=function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(o+"/login",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(o+"/sign_up",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(o+"/forget_password",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(o+"/reset_password",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},296:function(e,t,a){"use strict";t.a=function(e,t){return e===t}},555:function(e,t,a){"use strict";a.r(t);var r=a(262),n=a.n(r),s=a(263),o=a(292),c=a(85),l=a(86),i=a(88),u=a(87),d=a(89),m=a(0),p=a.n(m),h=a(294),f=a(248),v=a(249),w=a(251),b=a(252),g=a(377),E=a(283),C=a(284),j=a(259),y=a(250),N=a(269),O=a(272),k=a(266),x=a(296),R=a(267),P=a(268),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).changeHandler=function(t){var a=t.target.name,r=t.target.value,n=Object(o.a)({},e.state.formControls),s=Object(o.a)({},n[a]);s.value=r,s.touched=!0,s.valid=Object(k.a)(r,s.validationRules),"repeatPassword"===a&&s.valid&&(s.valid=Object(x.a)(e.state.formControls.password.value,r)),n[a]=s;var c=!0;for(var l in n)c=n[l].valid&&c;e.setState({formIsValid:c,formControls:n})},e.submitRegisterForm=function(){var t=Object(s.a)(n.a.mark(function t(a){var r,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(s in a.preventDefault(),r={},e.state.formControls)r[s]=e.state.formControls[s].value;return console.dir(r),t.prev=4,delete r.repeatPassword,t.next=8,Object(O.d)(r);case 8:t.sent,e.setState({isDanger:!1}),e.props.history.push("/login"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0),e.setState({isDanger:!0,message:t.t0.Message});case 17:case"end":return t.stop()}},t,null,[[4,13]])}));return function(e){return t.apply(this,arguments)}}(),e.state={isDanger:!1,message:"",formIsValid:!1,formControls:{username:{value:"",placeholder:"Username",valid:!1,touched:!1,validationRules:{isRequired:!0}},email:{value:"",placeholder:"Email",valid:!1,touched:!1,validationRules:{isEmail:!0}},password:{value:"",placeholder:"Password",valid:!1,touched:!1,validationRules:{isRequired:!0}},repeatPassword:{value:"",placeholder:"Repeat password",valid:!1,touched:!1,validationRules:{isRequired:!0}}}},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"httpError",value:function(){if(this.state.isDanger)return p.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.message)}},{key:"render",value:function(){return p.a.createElement("div",{className:"app flex-row align-items-center"},p.a.createElement(h.a,null,p.a.createElement(f.a,{className:"justify-content-center"},p.a.createElement(v.a,{md:"9",lg:"7",xl:"6"},p.a.createElement(w.a,{className:"mx-4"},p.a.createElement(b.a,{className:"p-4"},p.a.createElement(g.a,{onSubmit:this.submitRegisterForm},p.a.createElement("h1",null,"Register"),this.httpError(),p.a.createElement("p",{className:"text-muted"},"Create your account"),p.a.createElement(E.a,{className:"mb-3"},p.a.createElement(C.a,{addonType:"prepend"},p.a.createElement(j.a,null,p.a.createElement("i",{className:"icon-user"}))),p.a.createElement(R.a,{name:"username",placeholder:this.state.formControls.username.placeholder,value:this.state.formControls.username.value,onChange:this.changeHandler,touched:this.state.formControls.username.touched?1:0,valid:this.state.formControls.username.valid?1:0})),p.a.createElement(E.a,{className:"mb-3"},p.a.createElement(C.a,{addonType:"prepend"},p.a.createElement(j.a,null,"@")),p.a.createElement(R.a,{name:"email",placeholder:this.state.formControls.email.placeholder,value:this.state.formControls.email.value,onChange:this.changeHandler,touched:this.state.formControls.email.touched?1:0,valid:this.state.formControls.email.valid?1:0})),p.a.createElement(E.a,{className:"mb-3"},p.a.createElement(C.a,{addonType:"prepend"},p.a.createElement(j.a,null,p.a.createElement("i",{className:"icon-lock"}))),p.a.createElement(P.a,{name:"password",placeholder:this.state.formControls.password.placeholder,value:this.state.formControls.password.value,onChange:this.changeHandler,touched:this.state.formControls.password.touched?1:0,valid:this.state.formControls.password.valid?1:0})),p.a.createElement(E.a,{className:"mb-4"},p.a.createElement(C.a,{addonType:"prepend"},p.a.createElement(j.a,null,p.a.createElement("i",{className:"icon-lock"}))),p.a.createElement(P.a,{name:"repeatPassword",placeholder:this.state.formControls.repeatPassword.placeholder,value:this.state.formControls.repeatPassword.value,onChange:this.changeHandler,touched:this.state.formControls.repeatPassword.touched?1:0,valid:this.state.formControls.repeatPassword.valid?1:0})),p.a.createElement(y.a,{color:"success",style:{cursor:"pointer"},type:"submit",disabled:!this.state.formIsValid,block:!0},"Create Account"))),p.a.createElement(N.a,{className:"p-4"},p.a.createElement(f.a,null,p.a.createElement("div",null,"Click here for ",p.a.createElement("span",{style:{color:"#89daf3",cursor:"pointer"},onClick:this.props.history.goBack},"login")))))))))}}]),t}(m.Component);t.default=q}}]);
//# sourceMappingURL=33.6165ee48.chunk.js.map