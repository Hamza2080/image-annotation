(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{266:function(e,t,a){"use strict";var r=function(e,t){return e.length>=t},n=function(e){return""!==e.trim()},s=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};t.a=function(e,t){var a=!0;for(var o in t)switch(o){case"minLength":a=a&&r(e,t[o]);break;case"isRequired":a=a&&n(e);break;case"isEmail":a=a&&s(e);break;default:a=!0}return a}},267:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t="form-control";return e.touched&&!e.valid&&(t="form-control control-error"),n.a.createElement("input",Object.assign({type:"text",className:t},e))}},268:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t="form-control";return e.touched&&!e.valid&&(t="form-control control-error"),n.a.createElement("input",Object.assign({type:"password",className:t},e))}},272:function(e,t,a){"use strict";var r=a(262),n=a.n(r),s=a(263),o="http://134.209.196.211:3001",c=a(278),l=a.n(c);a.d(t,"b",function(){return i}),a.d(t,"d",function(){return u}),a.d(t,"a",function(){return p}),a.d(t,"c",function(){return m});var i=function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(o+"/login",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(o+"/sign_up",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(o+"/forget_password",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(o+"/reset_password",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},293:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(1),o=a.n(s),c=a(27),l=a.n(c),i=a(92),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,s=Array(n),o=0;o<n;o++)s[o]=arguments[o];return a=r=p(this,e.call.apply(e,[this].concat(s))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!m(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,s=a.to;n?t.replace(s):t.push(s)}},p(r,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var s=this.context.router.history,o="string"===typeof t?Object(i.b)(t,null,null,s.location):t,c=s.createHref(o);return n.a.createElement("a",u({},r,{onClick:this.handleClick,href:c,ref:a}))},t}(n.a.Component);f.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=f},326:function(e,t,a){"use strict";var r=a(33),n=a(242),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(240),u=a.n(i),p=a(241),m={tag:p.q,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(p.m)(u()(t,"card-group"),a);return o.a.createElement(s,Object(r.a)({},c,{className:l}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},554:function(e,t,a){"use strict";a.r(t);var r=a(262),n=a.n(r),s=a(263),o=a(292),c=a(85),l=a(86),i=a(88),u=a(87),p=a(89),m=a(0),f=a.n(m),d=a(293),h=a(266),v=a(267),b=a(268),g=a(272),y=a(294),w=a(248),E=a(249),O=a(326),j=a(251),x=a(252),C=a(377),N=a(283),k=a(284),R=a(259),S=a(250),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).changeHandler=function(t){var a=t.target.name,r=t.target.value,n=Object(o.a)({},e.state.formControls),s=Object(o.a)({},n[a]);s.value=r,s.touched=!0,s.valid=Object(h.a)(r,s.validationRules),n[a]=s;var c=!0;for(var l in n)c=n[l].valid&&c;e.setState({formIsValid:c,formControls:n})},e.submitLoginForm=function(){var t=Object(s.a)(n.a.mark(function t(a){var r,s,o;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(s in a.preventDefault(),r={},e.state.formControls)r[s]=e.state.formControls[s].value;return t.prev=3,t.next=6,Object(g.b)(r);case 6:o=t.sent,sessionStorage.setItem("userId",o[1]._id),console.log(o),e.setState({isDanger:!1,isSuccess:!0,message:o[0].Message}),e.props.history.push("/dashboard"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),e.setState({isDanger:!0,isSuccess:!1,message:t.t0[0].Message});case 16:case"end":return t.stop()}},t,null,[[3,13]])}));return function(e){return t.apply(this,arguments)}}(),e.state={isDanger:!1,isSuccess:!1,message:"",formIsValid:!1,formControls:{email:{value:"",placeholder:"Email or Username",valid:!1,touched:!1,validationRules:{isEmail:!0}},password:{value:"",placeholder:"Password",valid:!1,touched:!1,validationRules:{isRequired:!0}}}},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"loginMessage",value:function(){return this.state.isDanger?f.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.message):this.state.isSuccess?f.a.createElement("div",{className:"alert alert-success",role:"alert"},this.state.message):void 0}},{key:"render",value:function(){return f.a.createElement("div",{className:"app flex-row align-items-center"},f.a.createElement(y.a,null,f.a.createElement(w.a,{className:"justify-content-center"},f.a.createElement(E.a,{md:"8"},f.a.createElement(O.a,null,f.a.createElement(j.a,{className:"p-4"},f.a.createElement(x.a,null,this.loginMessage(),f.a.createElement(C.a,{onSubmit:this.submitLoginForm},f.a.createElement("h1",null,"Login"),f.a.createElement("p",{className:"text-muted"},"Sign In to your account"),f.a.createElement("div",{className:"form-group"},f.a.createElement(N.a,{className:"mb-3"},f.a.createElement(k.a,{addonType:"prepend"},f.a.createElement(R.a,null,f.a.createElement("i",{className:"icon-user"}))),f.a.createElement(v.a,{name:"email",placeholder:this.state.formControls.email.placeholder,value:this.state.formControls.email.value,onChange:this.changeHandler,touched:this.state.formControls.email.touched?1:0,valid:this.state.formControls.email.valid?1:0}))),f.a.createElement("div",{className:"form-group"},f.a.createElement(N.a,{className:"mb-4"},f.a.createElement(k.a,{addonType:"prepend"},f.a.createElement(R.a,null,f.a.createElement("i",{className:"icon-lock"}))),f.a.createElement(b.a,{name:"password",placeholder:this.state.formControls.password.placeholder,value:this.state.formControls.password.value,onChange:this.changeHandler,touched:this.state.formControls.password.touched?1:0,valid:this.state.formControls.password.valid?1:0}))),f.a.createElement(w.a,null,f.a.createElement(E.a,{xs:"6"},f.a.createElement(S.a,{color:"primary",className:"px-4",type:"submit",disabled:!this.state.formIsValid,style:{cursor:"pointer"}},"Login")),f.a.createElement(E.a,{xs:"6",className:"text-right"},f.a.createElement(d.a,{to:"/forgot_password",style:{cursor:"pointer"}},f.a.createElement("button",{className:"px-0 btn btn-link",active:!0,tabIndex:-1},"Forgot password?"))))))),f.a.createElement(j.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},f.a.createElement(x.a,{className:"text-center"},f.a.createElement("div",null,f.a.createElement("h2",null,"Sign up"),f.a.createElement("p",null,"Create new user account."),f.a.createElement(d.a,{to:"/register",style:{cursor:"pointer"}},f.a.createElement(S.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"Register Now!"))))))))))}}]),t}(m.Component);t.default=q}}]);
//# sourceMappingURL=36.7bbb5351.chunk.js.map