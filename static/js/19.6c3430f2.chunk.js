(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{243:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},248:function(e,t,a){"use strict";var n=a(33),r=a(242),s=a(0),c=a.n(s),o=a(1),l=a.n(o),m=a(240),i=a.n(m),u=a(241),d={tag:u.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},p=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,o=e.tag,l=e.form,m=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.m)(i()(t,s?"no-gutters":null,l?"form-row":"row"),a);return c.a.createElement(o,Object(n.a)({},m,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},249:function(e,t,a){"use strict";var n=a(33),r=a(242),s=a(243),c=a.n(s),o=a(0),l=a.n(o),m=a(1),i=a.n(m),u=a(240),d=a.n(u),p=a(241),f=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),push:Object(p.h)(f,'Please use the prop "order"'),pull:Object(p.h)(f,'Please use the prop "order"'),order:f,offset:f})]),E={tag:p.q,xs:b,sm:b,md:b,lg:b,xl:b,className:i.a.string,cssModule:i.a.object,widths:i.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.widths,o=e.tag,m=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach(function(t,n){var r=e[t];if(delete m[t],r||""===r){var s=!n;if(c()(r)){var o,l=s?"-":"-"+t+"-",u=g(s,t,r.size);i.push(Object(p.m)(d()(((o={})[u]=r.size||""===r.size,o["order"+l+r.order]=r.order||0===r.order,o["offset"+l+r.offset]=r.offset||0===r.offset,o)),a))}else{var f=g(s,t,r);i.push(f)}}}),i.length||i.push("col");var u=Object(p.m)(d()(t,i),a);return l.a.createElement(o,Object(n.a)({},m,{className:u}))};v.propTypes=E,v.defaultProps=N,t.a=v},309:function(e,t,a){e.exports=a.p+"static/media/person.6ed9a4e4.png"},310:function(e,t,a){e.exports=a.p+"static/media/person1.8a09d673.png"},311:function(e,t,a){e.exports=a.p+"static/media/tree.5873459e.png"},312:function(e,t,a){e.exports=a.p+"static/media/tree1.7868a4e3.png"},313:function(e,t,a){e.exports=a.p+"static/media/animal.6d2c4580.png"},314:function(e,t,a){e.exports=a.p+"static/media/animal1.ae37c629.png"},515:function(e,t,a){"use strict";a.r(t);var n=a(85),r=a(86),s=a(88),c=a(87),o=a(89),l=a(0),m=a.n(l),i=a(248),u=a(249),d=a(317),p=a(309),f=a.n(p),b=a(310),E=a.n(b),N=a(311),g=a.n(N),v=a(312),h=a.n(v),x=a(313),y=a.n(x),j=a(314),w=a.n(j),O=(a(516),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn container container"},m.a.createElement(i.a,null,m.a.createElement(u.a,{xs:"12"},m.a.createElement("div",{className:"d-flex justify-content-center mb-1 mt-2"},m.a.createElement("div",{className:"p-2 pb-3"},m.a.createElement("span",{className:"AI-photo-head"}," ","Contribute to make this world a better place!"," "),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col"},m.a.createElement("div",{className:"row d-flex justify-content-center"},m.a.createElement("input",{className:"col-8 AI-photo-head-search",name:"search",type:"text",placeholder:"search image type"}),m.a.createElement("button",{className:"col-4 btn btn-secondary btn-search-submit"},"Submit")))))))),m.a.createElement(i.a,null,m.a.createElement(u.a,{xs:"12"},m.a.createElement("div",{className:"d-flex justify-content-center mb-2 mt-2"},m.a.createElement("div",{className:"p-2 AI-photo-head-container pb-5"},m.a.createElement("span",{className:"AI-photo-head"}," Feature Categories "))))),m.a.createElement(i.a,{className:"mt-2 d-flex justify-content-around"},m.a.createElement(u.a,{className:"col"},m.a.createElement("div",{className:"d-flex justify-content-around mb-3 mt-2"},m.a.createElement("div",{className:"p-2"},m.a.createElement("div",{className:"contribute-now-box",style:{cursor:"pointer"}},m.a.createElement(d.a,{to:"/FeatureIdentification/FeatureQuestion/".concat("person")},m.a.createElement("img",{className:"contribute-now-img",src:f.a,alt:"Person",onMouseOver:function(e){return e.currentTarget.src=E.a},onMouseOut:function(e){return e.currentTarget.src=f.a}})))))),m.a.createElement(u.a,{className:"col"},m.a.createElement("div",{className:"d-flex justify-content-around mb-3 mt-2"},m.a.createElement("div",{className:"p-2"},m.a.createElement("div",{className:"contribute-now-box",style:{cursor:"pointer"}},m.a.createElement(d.a,{to:"/FeatureIdentification/FeatureQuestion/".concat("animal")},m.a.createElement("img",{className:"contribute-now-img",src:y.a,alt:"Animal",onMouseOver:function(e){return e.currentTarget.src=w.a},onMouseOut:function(e){return e.currentTarget.src=y.a}})))))),m.a.createElement(u.a,{className:"col"},m.a.createElement("div",{className:"d-flex justify-content-around mb-3 mt-2"},m.a.createElement("div",{className:"p-2"},m.a.createElement("div",{className:"contribute-now-box",style:{cursor:"pointer"}},m.a.createElement(d.a,{to:"/FeatureIdentification/FeatureQuestion/".concat("tree")},m.a.createElement("img",{className:"contribute-now-img",src:g.a,alt:"Tree",onMouseOver:function(e){return e.currentTarget.src=h.a},onMouseOut:function(e){return e.currentTarget.src=g.a}}))))))),m.a.createElement(i.a,{className:"mt-2"},m.a.createElement(u.a,{xs:"5",style:{border:"0.3px solid lightslategray",minHeight:"150px",margin:"50px 0px"}},m.a.createElement("div",{className:"mb-3 mt-5"},m.a.createElement("div",{className:"p-2"}))),m.a.createElement(u.a,{xs:"7",style:{border:"0.3px solid lightslategray",minHeight:"150px",margin:"50px 0px"}},m.a.createElement("div",{className:"mb-3 mt-5"},m.a.createElement("div",{className:"p-2"},m.a.createElement("h3",null,"Newsletter"),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col"},m.a.createElement("input",{type:"text",className:"newsletter-subscription"})),m.a.createElement("div",{className:"col"},m.a.createElement("button",{className:"btn btn-secondary btn-subscription"},"Subscribe"))))))))}}]),t}(l.Component));t.default=O},516:function(e,t,a){}}]);
//# sourceMappingURL=19.6c3430f2.chunk.js.map