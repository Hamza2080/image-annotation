(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{256:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",function(){return a})},562:function(e,t,n){"use strict";n.r(t);var a=n(256),r=n(85),o=n(86),c=n(88),l=n(87),s=n(89),u=n(90),i=n(0),m=n.n(i),b=n(293),d=n(282),p=n(320),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).signout=n.signout.bind(Object(u.a)(Object(u.a)(n))),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props;e.children,Object(a.a)(e,["children"]);return m.a.createElement(m.a.Fragment,null,m.a.createElement(d.k,{className:"d-lg-none",display:"md",mobile:!0}),m.a.createElement(d.k,{className:"d-md-down-none",style:{float:"left"},display:"lg"}),m.a.createElement("span",{className:"bread-crumb-in-header"},m.a.createElement(d.b,{appRoutes:p.a})),this.renderCustomComponent())}},{key:"signout",value:function(){sessionStorage.removeItem("userId")}},{key:"renderCustomComponent",value:function(){return m.a.createElement("div",null,m.a.createElement("button",{className:"btn btn-secondary btn-md px-3 mx-3"},"Dashboard"),m.a.createElement(b.a,{to:"/login",style:{cursor:"pointer"}},m.a.createElement("button",{className:"btn btn-secondary btn-md px-3 mx-3",onClick:this.signout},"SIGNOUT")))}}]),t}(i.Component);f.defaultProps={},t.default=f}}]);
//# sourceMappingURL=62.73175b58.chunk.js.map