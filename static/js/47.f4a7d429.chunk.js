(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{243:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},248:function(e,t,a){"use strict";var o=a(33),n=a(242),i=a(0),s=a.n(i),l=a(1),r=a.n(l),c=a(240),u=a.n(c),d=a(241),m={tag:d.q,noGutters:r.a.bool,className:r.a.string,cssModule:r.a.object,form:r.a.bool},p=function(e){var t=e.className,a=e.cssModule,i=e.noGutters,l=e.tag,r=e.form,c=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(d.m)(u()(t,i?"no-gutters":null,r?"form-row":"row"),a);return s.a.createElement(l,Object(o.a)({},c,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},249:function(e,t,a){"use strict";var o=a(33),n=a(242),i=a(243),s=a.n(i),l=a(0),r=a.n(l),c=a(1),u=a.n(c),d=a(240),m=a.n(d),p=a(241),g=u.a.oneOfType([u.a.number,u.a.string]),h=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(p.h)(g,'Please use the prop "order"'),pull:Object(p.h)(g,'Please use the prop "order"'),order:g,offset:g})]),b={tag:p.q,xs:h,sm:h,md:h,lg:h,xl:h,className:u.a.string,cssModule:u.a.object,widths:u.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,i=e.widths,l=e.tag,c=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];i.forEach(function(t,o){var n=e[t];if(delete c[t],n||""===n){var i=!o;if(s()(n)){var l,r=i?"-":"-"+t+"-",d=O(i,t,n.size);u.push(Object(p.m)(m()(((l={})[d]=n.size||""===n.size,l["order"+r+n.order]=n.order||0===n.order,l["offset"+r+n.offset]=n.offset||0===n.offset,l)),a))}else{var g=O(i,t,n);u.push(g)}}}),u.length||u.push("col");var d=Object(p.m)(m()(t,u),a);return r.a.createElement(l,Object(o.a)({},c,{className:d}))};E.propTypes=b,E.defaultProps=f,t.a=E},250:function(e,t,a){"use strict";var o=a(33),n=a(242),i=a(244),s=a(245),l=a(0),r=a.n(l),c=a(1),u=a.n(c),d=a(240),m=a.n(d),p=a(241),g={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(Object(s.a)(a))),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,s=e.className,l=e.close,c=e.cssModule,u=e.color,d=e.outline,g=e.size,h=e.tag,b=e.innerRef,f=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof f.children&&(f.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(d?"-outline":"")+"-"+u,E=Object(p.m)(m()(s,{close:l},l||"btn",l||O,!!g&&"btn-"+g,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),c);f.href&&"button"===h&&(h="a");var y=l?"Close":null;return r.a.createElement(h,Object(o.a)({type:"button"===h&&f.onClick?"button":void 0},f,{className:E,ref:b,onClick:this.onClick,"aria-label":a||y}))},t}(r.a.Component);h.propTypes=g,h.defaultProps={color:"secondary",tag:"button"},t.a=h},263:function(e,t,a){"use strict";var o=a(33),n=a(242),i=a(247),s=a(0),l=a.n(s),r=a(1),c=a.n(r),u=a(240),d=a.n(u),m=a(257),p=a(241),g=Object(i.a)({},m.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:p.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),h=Object(i.a)({},m.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var t=e.tag,a=e.baseClass,i=e.baseClassActive,s=e.className,r=e.cssModule,c=e.children,u=e.innerRef,g=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),h=Object(p.o)(g,p.c),b=Object(p.n)(g,p.c);return l.a.createElement(m.Transition,h,function(e){var n="entered"===e,m=Object(p.m)(d()(s,a,n&&i),r);return l.a.createElement(t,Object(o.a)({className:m},b,{ref:u}),c)})}b.propTypes=g,b.defaultProps=h,t.a=b},550:function(e,t,a){"use strict";a.r(t);var o=a(85),n=a(86),i=a(88),s=a(87),l=a(89),r=a(90),c=a(0),u=a.n(c),d=a(248),m=a(249),p=a(251),g=a(253),h=a(252),b=a(250),f=a(247),O=a(33),E=a(244),y=a(245),v=a(1),j=a.n(v),C=a(240),N=a.n(C),k=a(91),q=a.n(k),M=a(241),x={children:j.a.node.isRequired,node:j.a.any},T=function(e){function t(){return e.apply(this,arguments)||this}Object(E.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return M.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),q.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(u.a.Component);T.propTypes=x;var D=T,w=a(263);function S(){}var _=j.a.shape(w.a.propTypes),P={isOpen:j.a.bool,autoFocus:j.a.bool,centered:j.a.bool,size:j.a.string,toggle:j.a.func,keyboard:j.a.bool,role:j.a.string,labelledBy:j.a.string,backdrop:j.a.oneOfType([j.a.bool,j.a.oneOf(["static"])]),onEnter:j.a.func,onExit:j.a.func,onOpened:j.a.func,onClosed:j.a.func,children:j.a.node,className:j.a.string,wrapClassName:j.a.string,modalClassName:j.a.string,backdropClassName:j.a.string,contentClassName:j.a.string,external:j.a.node,fade:j.a.bool,cssModule:j.a.object,zIndex:j.a.oneOfType([j.a.number,j.a.string]),backdropTransition:_,modalTransition:_,innerRef:j.a.oneOfType([j.a.object,j.a.string,j.a.func])},L=Object.keys(P),I={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:S,onClosed:S,modalTransition:{timeout:M.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:M.e.Fade}},z=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(y.a)(Object(y.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(y.a)(Object(y.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(y.a)(Object(y.a)(a))),a.handleEscape=a.handleEscape.bind(Object(y.a)(Object(y.a)(a))),a.handleTab=a.handleTab.bind(Object(y.a)(Object(y.a)(a))),a.onOpened=a.onOpened.bind(Object(y.a)(Object(y.a)(a))),a.onClosed=a.onClosed.bind(Object(y.a)(Object(y.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(E.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||S)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||S)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(M.i.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,o=this.getFocusedChild(),n=0,i=0;i<a;i+=1)if(t[i]===o){n=i;break}e.shiftKey&&0===n?(e.preventDefault(),t[a-1].focus()):e.shiftKey||n!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(M.j)(),Object(M.g)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=N()(document.body.className,Object(M.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(M.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(M.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(M.n)(this.props,L);return u.a.createElement("div",Object(O.a)({},a,{className:Object(M.m)(N()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),u.a.createElement("div",{className:Object(M.m)(N()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,o=e.backdropClassName,n=e.cssModule,i=e.isOpen,s=e.backdrop,l=e.role,r=e.labelledBy,c=e.external,d=e.innerRef,m={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":r,role:l,tabIndex:"-1"},p=this.props.fade,g=Object(f.a)({},w.a.defaultProps,this.props.modalTransition,{baseClass:p?this.props.modalTransition.baseClass:"",timeout:p?this.props.modalTransition.timeout:0}),h=Object(f.a)({},w.a.defaultProps,this.props.backdropTransition,{baseClass:p?this.props.backdropTransition.baseClass:"",timeout:p?this.props.backdropTransition.timeout:0}),b=s&&(p?u.a.createElement(w.a,Object(O.a)({},h,{in:i&&!!s,cssModule:n,className:Object(M.m)(N()("modal-backdrop",o),n)})):u.a.createElement("div",{className:Object(M.m)(N()("modal-backdrop","show",o),n)}));return u.a.createElement(D,{node:this._element},u.a.createElement("div",{className:Object(M.m)(t)},u.a.createElement(w.a,Object(O.a)({},m,g,{in:i,onEntered:this.onOpened,onExited:this.onClosed,cssModule:n,className:Object(M.m)(N()("modal",a),n),innerRef:d}),c,this.renderModalDialog()),b))}return null},t}(u.a.Component);z.propTypes=P,z.defaultProps=I,z.openCount=0;var F=z,B=a(242),U={tag:M.q,wrapTag:M.q,toggle:j.a.func,className:j.a.string,cssModule:j.a.object,children:j.a.node,closeAriaLabel:j.a.string,charCode:j.a.oneOfType([j.a.string,j.a.number]),close:j.a.object},W=function(e){var t,a=e.className,o=e.cssModule,n=e.children,i=e.toggle,s=e.tag,l=e.wrapTag,r=e.closeAriaLabel,c=e.charCode,d=e.close,m=Object(B.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),p=Object(M.m)(N()(a,"modal-header"),o);if(!d&&i){var g="number"===typeof c?String.fromCharCode(c):c;t=u.a.createElement("button",{type:"button",onClick:i,className:Object(M.m)("close",o),"aria-label":r},u.a.createElement("span",{"aria-hidden":"true"},g))}return u.a.createElement(l,Object(O.a)({},m,{className:p}),u.a.createElement(s,{className:Object(M.m)("modal-title",o)},n),d||t)};W.propTypes=U,W.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215};var R=W,A={tag:M.q,className:j.a.string,cssModule:j.a.object},K=function(e){var t=e.className,a=e.cssModule,o=e.tag,n=Object(B.a)(e,["className","cssModule","tag"]),i=Object(M.m)(N()(t,"modal-body"),a);return u.a.createElement(o,Object(O.a)({},n,{className:i}))};K.propTypes=A,K.defaultProps={tag:"div"};var G=K,J={tag:M.q,className:j.a.string,cssModule:j.a.object},$=function(e){var t=e.className,a=e.cssModule,o=e.tag,n=Object(B.a)(e,["className","cssModule","tag"]),i=Object(M.m)(N()(t,"modal-footer"),a);return u.a.createElement(o,Object(O.a)({},n,{className:i}))};$.propTypes=J,$.defaultProps={tag:"div"};var H=$,Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={modal:!1,large:!1,small:!1,primary:!1,success:!1,warning:!1,danger:!1,info:!1},a.toggle=a.toggle.bind(Object(r.a)(Object(r.a)(a))),a.toggleLarge=a.toggleLarge.bind(Object(r.a)(Object(r.a)(a))),a.toggleSmall=a.toggleSmall.bind(Object(r.a)(Object(r.a)(a))),a.togglePrimary=a.togglePrimary.bind(Object(r.a)(Object(r.a)(a))),a.toggleSuccess=a.toggleSuccess.bind(Object(r.a)(Object(r.a)(a))),a.toggleWarning=a.toggleWarning.bind(Object(r.a)(Object(r.a)(a))),a.toggleDanger=a.toggleDanger.bind(Object(r.a)(Object(r.a)(a))),a.toggleInfo=a.toggleInfo.bind(Object(r.a)(Object(r.a)(a))),a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large})}},{key:"toggleSmall",value:function(){this.setState({small:!this.state.small})}},{key:"togglePrimary",value:function(){this.setState({primary:!this.state.primary})}},{key:"toggleSuccess",value:function(){this.setState({success:!this.state.success})}},{key:"toggleWarning",value:function(){this.setState({warning:!this.state.warning})}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger})}},{key:"toggleInfo",value:function(){this.setState({info:!this.state.info})}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,u.a.createElement(m.a,null,u.a.createElement(p.a,null,u.a.createElement(g.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Bootstrap Modals"),u.a.createElement(h.a,null,u.a.createElement(b.a,{onClick:this.toggle,className:"mr-1"},"Launch demo modal"),u.a.createElement(F,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},u.a.createElement(R,{toggle:this.toggle},"Modal title"),u.a.createElement(G,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(H,null,u.a.createElement(b.a,{color:"primary",onClick:this.toggle},"Do Something")," ",u.a.createElement(b.a,{color:"secondary",onClick:this.toggle},"Cancel"))),u.a.createElement(b.a,{onClick:this.toggleLarge,className:"mr-1"},"Launch large modal"),u.a.createElement(F,{isOpen:this.state.large,toggle:this.toggleLarge,className:"modal-lg "+this.props.className},u.a.createElement(R,{toggle:this.toggleLarge},"Modal title"),u.a.createElement(G,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(H,null,u.a.createElement(b.a,{color:"primary",onClick:this.toggleLarge},"Do Something")," ",u.a.createElement(b.a,{color:"secondary",onClick:this.toggleLarge},"Cancel"))),u.a.createElement(b.a,{onClick:this.toggleSmall,className:"mr-1"},"Launch small modal"),u.a.createElement(F,{isOpen:this.state.small,toggle:this.toggleSmall,className:"modal-sm "+this.props.className},u.a.createElement(R,{toggle:this.toggleSmall},"Modal title"),u.a.createElement(G,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(H,null,u.a.createElement(b.a,{color:"primary",onClick:this.toggleSmall},"Do Something")," ",u.a.createElement(b.a,{color:"secondary",onClick:this.toggleSmall},"Cancel"))),u.a.createElement("hr",null),u.a.createElement(b.a,{color:"primary",onClick:this.togglePrimary,className:"mr-1"},"Primary modal"),u.a.createElement(F,{isOpen:this.state.primary,toggle:this.togglePrimary,className:"modal-primary "+this.props.className},u.a.createElement(R,{toggle:this.togglePrimary},"Modal title"),u.a.createElement(G,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(H,null,u.a.createElement(b.a,{color:"primary",onClick:this.togglePrimary},"Do Something")," ",u.a.createElement(b.a,{color:"secondary",onClick:this.togglePrimary},"Cancel"))),u.a.createElement(b.a,{color:"success",onClick:this.toggleSuccess,className:"mr-1"},"Success modal"),u.a.createElement(F,{isOpen:this.state.success,toggle:this.toggleSuccess,className:"modal-success "+this.props.className},u.a.createElement(R,{toggle:this.toggleSuccess},"Modal title"),u.a.createElement(G,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(H,null,u.a.createElement(b.a,{color:"success",onClick:this.toggleSuccess},"Do Something")," ",u.a.createElement(b.a,{color:"secondary",onClick:this.toggleSuccess},"Cancel"))),u.a.createElement(b.a,{color:"warning",onClick:this.toggleWarning,className:"mr-1"},"Warning modal"),u.a.createElement(F,{isOpen:this.state.warning,toggle:this.toggleWarning,className:"modal-warning "+this.props.className},u.a.createElement(R,{toggle:this.toggleWarning},"Modal title"),u.a.createElement(G,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(H,null,u.a.createElement(b.a,{color:"warning",onClick:this.toggleWarning},"Do Something")," ",u.a.createElement(b.a,{color:"secondary",onClick:this.toggleWarning},"Cancel"))),u.a.createElement(b.a,{color:"danger",onClick:this.toggleDanger,className:"mr-1"},"Danger modal"),u.a.createElement(F,{isOpen:this.state.danger,toggle:this.toggleDanger,className:"modal-danger "+this.props.className},u.a.createElement(R,{toggle:this.toggleDanger},"Modal title"),u.a.createElement(G,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(H,null,u.a.createElement(b.a,{color:"danger",onClick:this.toggleDanger},"Do Something")," ",u.a.createElement(b.a,{color:"secondary",onClick:this.toggleDanger},"Cancel"))),u.a.createElement(b.a,{color:"info",onClick:this.toggleInfo,className:"mr-1"},"Info modal"),u.a.createElement(F,{isOpen:this.state.info,toggle:this.toggleInfo,className:"modal-info "+this.props.className},u.a.createElement(R,{toggle:this.toggleInfo},"Modal title"),u.a.createElement(G,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(H,null,u.a.createElement(b.a,{color:"primary",onClick:this.toggleInfo},"Do Something")," ",u.a.createElement(b.a,{color:"secondary",onClick:this.toggleInfo},"Cancel"))))))))}}]),t}(c.Component);t.default=Q}}]);
//# sourceMappingURL=47.f4a7d429.chunk.js.map