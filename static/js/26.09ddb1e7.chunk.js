(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{243:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},247:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},l=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.forEach(function(a){n(e,a,t[a])})}return e}t.d(a,"a",function(){return l})},248:function(e,a,t){"use strict";var n=t(33),l=t(242),s=t(0),r=t.n(s),c=t(1),i=t.n(c),o=t(240),u=t.n(o),m=t(241),f={tag:m.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},d=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,c=e.tag,i=e.form,o=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(m.m)(u()(a,s?"no-gutters":null,i?"form-row":"row"),t);return r.a.createElement(c,Object(n.a)({},o,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},249:function(e,a,t){"use strict";var n=t(33),l=t(242),s=t(243),r=t.n(s),c=t(0),i=t.n(c),o=t(1),u=t.n(o),m=t(240),f=t.n(m),d=t(241),b=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(d.h)(b,'Please use the prop "order"'),pull:Object(d.h)(b,'Please use the prop "order"'),order:b,offset:b})]),h={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,s=e.widths,c=e.tag,o=Object(l.a)(e,["className","cssModule","widths","tag"]),u=[];s.forEach(function(a,n){var l=e[a];if(delete o[a],l||""===l){var s=!n;if(r()(l)){var c,i=s?"-":"-"+a+"-",m=E(s,a,l.size);u.push(Object(d.m)(f()(((c={})[m]=l.size||""===l.size,c["order"+i+l.order]=l.order||0===l.order,c["offset"+i+l.offset]=l.offset||0===l.offset,c)),t))}else{var b=E(s,a,l);u.push(b)}}}),u.length||u.push("col");var m=Object(d.m)(f()(a,u),t);return i.a.createElement(c,Object(n.a)({},o,{className:m}))};y.propTypes=h,y.defaultProps=g,a.a=y},250:function(e,a,t){"use strict";var n=t(33),l=t(242),s=t(0),r=t.n(s),c=t(1),i=t.n(c),o=t(240),u=t.n(o),m=t(241),f={tag:m.q,inverse:i.a.bool,color:i.a.string,block:Object(m.h)(i.a.bool,'Please use the props "body"'),body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.color,c=e.block,i=e.body,o=e.inverse,f=e.outline,d=e.tag,b=e.innerRef,p=Object(l.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),h=Object(m.m)(u()(a,"card",!!o&&"text-white",!(!c&&!i)&&"card-body",!!s&&(f?"border":"bg")+"-"+s),t);return r.a.createElement(d,Object(n.a)({},p,{className:h,ref:b}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},251:function(e,a,t){"use strict";var n=t(33),l=t(242),s=t(0),r=t.n(s),c=t(1),i=t.n(c),o=t(240),u=t.n(o),m=t(241),f={tag:m.q,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,c=e.tag,i=Object(l.a)(e,["className","cssModule","innerRef","tag"]),o=Object(m.m)(u()(a,"card-body"),t);return r.a.createElement(c,Object(n.a)({},i,{className:o,ref:s}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},252:function(e,a,t){"use strict";var n=t(33),l=t(242),s=t(0),r=t.n(s),c=t(1),i=t.n(c),o=t(240),u=t.n(o),m=t(241),f={tag:m.q,className:i.a.string,cssModule:i.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),i=Object(m.m)(u()(a,"card-header"),t);return r.a.createElement(s,Object(n.a)({},c,{className:i}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},262:function(e,a,t){"use strict";var n=t(33),l=t(242),s=t(247),r=t(0),c=t.n(r),i=t(1),o=t.n(i),u=t(240),m=t.n(u),f=t(255),d=t(241),b=Object(s.a)({},f.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:d.q,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),p=Object(s.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function h(e){var a=e.tag,t=e.baseClass,s=e.baseClassActive,r=e.className,i=e.cssModule,o=e.children,u=e.innerRef,b=Object(l.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(d.o)(b,d.c),h=Object(d.n)(b,d.c);return c.a.createElement(f.Transition,p,function(e){var l="entered"===e,f=Object(d.m)(m()(r,t,l&&s),i);return c.a.createElement(a,Object(n.a)({className:f},h,{ref:u}),o)})}h.propTypes=b,h.defaultProps=p,a.a=h},454:function(e,a,t){"use strict";var n=t(33),l=t(242),s=t(247),r=t(0),c=t.n(r),i=t(1),o=t.n(i),u=t(240),m=t.n(u),f=t(241),d=t(262),b={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.q,transition:o.a.shape(d.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(s.a)({},d.a.defaultProps,{unmountOnExit:!0})};function h(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,i=e.cssModule,o=e.tag,u=e.color,b=e.isOpen,p=e.toggle,h=e.children,g=e.transition,E=e.fade,y=e.innerRef,O=Object(l.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),j=Object(f.m)(m()(a,"alert","alert-"+u,{"alert-dismissible":p}),i),k=Object(f.m)(m()("close",t),i),v=Object(s.a)({},d.a.defaultProps,g,{baseClass:E?g.baseClass:"",timeout:E?g.timeout:0});return c.a.createElement(d.a,Object(n.a)({},O,v,{tag:o,className:j,in:b,role:"alert",innerRef:y}),p?c.a.createElement("button",{type:"button",className:k,"aria-label":r,onClick:p},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,h)}h.propTypes=b,h.defaultProps=p,a.a=h},508:function(e,a,t){"use strict";t.r(a);var n=t(85),l=t(86),s=t(88),r=t(87),c=t(89),i=t(90),o=t(0),u=t.n(o),m=t(248),f=t(249),d=t(250),b=t(252),p=t(251),h=t(454),g=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).state={visible:!0},t.onDismiss=t.onDismiss.bind(Object(i.a)(Object(i.a)(t))),t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,u.a.createElement(f.a,{xs:"12",md:"6"},u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Alerts"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(p.a,null,u.a.createElement(h.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),u.a.createElement(h.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),u.a.createElement(h.a,{color:"success"},"This is a success alert \u2014 check it out!"),u.a.createElement(h.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),u.a.createElement(h.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),u.a.createElement(h.a,{color:"info"},"This is a info alert \u2014 check it out!"),u.a.createElement(h.a,{color:"light"},"This is a light alert \u2014 check it out!"),u.a.createElement(h.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),u.a.createElement(f.a,{xs:"12",md:"6"},u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Alerts"),u.a.createElement("small",null," use ",u.a.createElement("code",null,".alert-link")," to provide links")),u.a.createElement(p.a,null,u.a.createElement(h.a,{color:"primary"},"This is a primary alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"secondary"},"This is a secondary alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"success"},"This is a success alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"danger"},"This is a danger alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"warning"},"This is a warning alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"info"},"This is a info alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"light"},"This is a light alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"dark"},"This is a dark alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),u.a.createElement(m.a,null,u.a.createElement(f.a,{xs:"12",md:"6"},u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Alerts"),u.a.createElement("small",null,"additional content")),u.a.createElement(p.a,null,u.a.createElement(h.a,{color:"success"},u.a.createElement("h4",{className:"alert-heading"},"Well done!"),u.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),u.a.createElement("hr",null),u.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),u.a.createElement(f.a,{xs:"12",md:"6"},u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Alerts"),u.a.createElement("small",null,"dismissing")),u.a.createElement(p.a,null,u.a.createElement(h.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),a}(o.Component);a.default=g}}]);
//# sourceMappingURL=26.09ddb1e7.chunk.js.map