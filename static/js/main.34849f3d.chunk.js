(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{38:function(n,e,t){n.exports=t(58)},58:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(19),o=t.n(c),i=t(37),u=t(2),l=t(10),d=t(4),m=t(3),s=t(5),b={mainBG:"#fff",secondaryBG:"#000",accentBG:"#23968f"},f={lightBg:"lightgrey",darkBg:"grey",deleteBg:"#c1392b",accentBg:"blue"},h={boxShadow:"0px 3px 7px 0px rgba(65,65,65,0.20)"},g={mainPad:"1rem",smollPad:"0.5rem",midBR:"0.5rem",smollBR:"0.3rem"},p={base:Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},b),f),h),g)},E=t(13);function v(){var n=Object(d.a)(["\n  width: 45%;\n  min-width: 35rem;\n  min-height: 8rem;\n  margin-bottom: 2rem;\n  padding: ",";\n  background-color: ",";\n  box-shadow: ",";\n"]);return v=function(){return n},n}var O=m.c.div(v(),(function(n){return n.theme.smollPad}),(function(n){return n.theme.mainBG}),(function(n){return n.theme.boxShadow})),j=function(n){var e=n.children;return a.a.createElement(O,null,e)},k=t(16),y=t.n(k),w=t(21),x=t(24),T=t.n(x);function B(){var n=Object(d.a)(["\n  padding: ",";\n  min-height: ",";\n  border: 0.1rem solid ",";\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  transition: 0.2s ease;\n  ",";\n  :active {\n    transform: scale(0.97);\n  }\n  :disabled {\n    cursor: default;\n    background-color: ",";\n  }\n"]);return B=function(){return n},n}var R=m.c.button(B(),(function(n){return n.theme.smollPad}),(function(n){return n.height?"4.2rem":"unset"}),(function(n){return n.theme[n.bg]}),(function(n){return n.theme.smollBR}),(function(n){var e=n.theme,t=n.bg;return n.del?e.lightBg:e[t]}),(function(n){var e=n.theme,t=n.bg;return n.del?e[t]:e.mainBG}),(function(n){var e=n.del,t=n.theme;return e?":hover{background-color: ".concat(t.deleteBg,"; color: ").concat(t.mainBG,"}"):null}),(function(n){return n.theme.lightBg})),C=function(n){var e=n.del,t=void 0!==e&&e,r=n.bg,c=void 0===r?"accentBg":r,o=n.type,i=void 0===o?"button":o,u=n.label,l=void 0===u?"default":u,d=n.height,m=void 0!==d&&d,s=n.disabled,b=void 0!==s&&s,f=n.id,h=n.onClick,g=void 0===h?function(){}:h;return a.a.createElement(R,{height:m,del:t,bg:c,type:i,onClick:g,id:f,disabled:b},l)};function S(){var n=Object(d.a)(["\n  width: 60%;\n  padding: ",";\n  border: 0.1rem solid ",";\n  border-radius: ",";\n  resize: none;\n"]);return S=function(){return n},n}function N(){var n=Object(d.a)(["\n  width: 70%;\n  padding: ",";\n  border: 0.1rem solid ",";\n  border-radius: ",";\n"]);return N=function(){return n},n}function _(){var n=Object(d.a)(["\n  position: absolute;\n  bottom: -6rem;\n  right: -9rem;\n  width: 10rem;\n  height: 6rem;\n  background-color: grey;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  button {\n    width: 3rem;\n    height: 3rem;\n    cursor: poiner;\n  }\n  .black {\n    background-color: black;\n  }\n  .green {\n    background-color: green;\n  }\n  .red {\n    background-color: red;\n  }\n"]);return _=function(){return n},n}function P(){var n=Object(d.a)(["\n  position: relative;\n  width: 4.2rem;\n  min-height: 4.2rem;\n  padding: ",";\n  border: 0.1rem solid ",";\n  border-radius: ",";\n  background-color: ",";\n"]);return P=function(){return n},n}function G(){var n=Object(d.a)(["\n  width: 100%;\n  padding: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return G=function(){return n},n}var D=m.c.form(G(),(function(n){return n.theme.smollPad})),L=m.c.div(P(),(function(n){return n.theme.smollPad}),(function(n){return n.theme.darkBg}),(function(n){return n.theme.smollBR}),(function(n){return n.bg})),M=m.c.div(_()),U=m.c.input(N(),(function(n){return n.theme.smollPad}),(function(n){return n.theme.darkBg}),(function(n){return n.theme.smollBR})),z=m.c.textarea(S(),(function(n){return n.theme.smollPad}),(function(n){return n.theme.darkBg}),(function(n){return n.theme.smollBR})),A=function(n){var e=n.comment,t=void 0!==e&&e,c=n.id,o=void 0===c?null:c,i=Object(l.b)(),u=document.querySelector("#new"),d=Object(r.useState)("new"),m=Object(E.a)(d,2),s=m[0],b=m[1],f=Object(r.useState)(""),h=Object(E.a)(f,2),g=h[0],p=h[1],v=Object(r.useState)(""),O=Object(E.a)(v,2),j=O[0],k=O[1],x=Object(r.useState)("black"),B=Object(E.a)(x,2),R=B[0],S=B[1],N=Object(r.useState)(!1),_=Object(E.a)(N,2),P=_[0],G=_[1];Object(r.useEffect)((function(){t&&b("comment")}),[t,o]);var A=function(n){S(n)},I=function(n){var e=n.target.name,t=n.target.value;switch(e){case"label":p(t);break;case"comment":k(t)}},J=function(){var n=Object(w.a)(y.a.mark((function n(e,t,r){var a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),!(g.length<=0&&"new"===e)){n.next=4;break}return alert("please write title"),n.abrupt("return");case 4:if(!(j.length<=0&&"comment"===e)){n.next=7;break}return alert("please write comment"),n.abrupt("return");case 7:n.t0=e,n.next="new"===n.t0?10:"comment"===n.t0?16:20;break;case 10:return a=T.a.generate(),n.next=13,i({type:"CREATE",todo:{id:a,label:g,comments:[]}});case 13:return i({type:"SET_CURRENT",id:a}),p(""),n.abrupt("break",21);case 16:return n.next=18,i({type:"SET_COMMENT",id:t,comment:{id:T.a.generate(),text:j,color:R}});case 18:return k(""),n.abrupt("break",21);case 20:return n.abrupt("break",21);case 21:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),q=function(n){"Enter"===n.code&&n.ctrlKey&&document.querySelector("#comment").click(),"Enter"===n.code&&!n.ctrlKey&&u&&u.click()};return Object(r.useEffect)((function(){return document.addEventListener("keydown",q),function(){return document.removeEventListener("keydown",q)}}),[]),a.a.createElement(D,{onSubmit:J},t&&a.a.createElement(L,{onClick:function(){G(!P)},bg:R},P&&a.a.createElement(M,null,a.a.createElement("button",{className:"green",onClick:function(){return A("green")}}),a.a.createElement("button",{className:"black",onClick:function(){return A("black")}}),a.a.createElement("button",{className:"red",onClick:function(){return A("red")}}))),t?a.a.createElement(z,{placeholder:"write comment...",name:"comment",value:j,onChange:I}):a.a.createElement(U,{placeholder:"write title",name:"label",value:g,onChange:I}),a.a.createElement(C,{bg:t?"accentBg":"accentBG",type:"subbmit",label:"Add New",height:!!t,onClick:function(n){return J(s,o,n)},disabled:!!t&&null===o,id:t?"comment":"new"}))};function I(){var n=Object(d.a)(["\n  position: absolute;\n  top: 50%;\n  right: 17%;\n  padding: ",";\n  transform: translateY(-50%);\n  background-color: ",";\n  border-radius: ",";\n  color: ",";\n"]);return I=function(){return n},n}function J(){var n=Object(d.a)(["\n  position: relative;\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: 0.2s ease;\n  ",";\n\n  ::last-child {\n    margin-bottom: 0;\n  }\n  h5 {\n    margin-left: 5%;\n  }\n"]);return J=function(){return n},n}var q=m.c.div(J(),(function(n){return n.theme.smollPad}),(function(n){var e=n.active,t=n.theme;return e?"transform:scale(1.02); border: 0.1rem solid ".concat(t.darkBg,";\n  border-radius: ").concat(t.smollBR,";"):null})),H=m.c.p(I(),(function(n){return n.theme.smollPad}),(function(n){return n.theme.accentBG}),(function(n){return n.theme.midBR}),(function(n){return n.theme.mainBG})),K=function(n){var e=n.item,t=n.currentId,r=Object(l.b)(),c=Object(l.c)((function(n){return n.todo.list})),o=e.label,i=e.comments,u=e.id,d=function(){var n=Object(w.a)(y.a.mark((function n(e){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r({type:"DELETE",id:e});case 2:c.length<=0?r({type:"SET_CURRENT",id:null}):(console.log("else",c.map((function(n){return n.id}))),r({type:"SET_CURRENT",id:c[0].id}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement(q,{active:u===t,onClick:function(){r({type:"SET_CURRENT",id:u})}},a.a.createElement("h5",null,o),a.a.createElement(H,null,i.length),a.a.createElement(C,{del:!0,label:"delete",bg:"deleteBg",onClick:function(){return function(n){d(n)}(u)}}))};function W(){var n=Object(d.a)(["\n  width: 4.2rem;\n  min-height: 4.2rem;\n  margin-right: 1rem;\n  padding: ",";\n  border: 0.1rem solid ",";\n  border-radius: ",";\n  background-color: ",";\n"]);return W=function(){return n},n}function Y(){var n=Object(d.a)(["\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: ",";\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]);return Y=function(){return n},n}var F=m.c.div(Y(),(function(n){return n.theme.smollPad})),Q=m.c.div(W(),(function(n){return n.theme.smollPad}),(function(n){return n.theme.darkBg}),(function(n){return n.theme.smollBR}),(function(n){return n.bg})),V=function(n){var e=n.comment,t=e.text,r=e.color;return a.a.createElement(F,null,a.a.createElement(Q,{bg:r}),a.a.createElement("p",null,t))};function X(){var n=Object(d.a)(["\n  width: 100%;\n  min-width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  padding: ",";\n  background-color: ",";\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  h4 {\n    padding-left: ",";\n  }\n  @media screen and (max-width: 900px) {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n"]);return X=function(){return n},n}var Z=m.c.div(X(),(function(n){return n.theme.mainPad}),(function(n){return n.theme.lightBg}),(function(n){return n.theme.smollPad})),$=function(){var n=Object(l.c)((function(n){return n.todo.list})),e=Object(l.c)((function(n){return n.todo.current})),t=Object(l.b)(),c=Object(r.useState)(null),o=Object(E.a)(c,2),i=o[0],u=o[1];return Object(r.useEffect)((function(){var n=JSON.parse(localStorage.getItem("todoList"));n&&n.length>0&&(t({type:"GET_TODO",payload:n}),t({type:"SET_CURRENT",id:n[0].id}))}),[]),Object(r.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(n))}),[n]),Object(r.useEffect)((function(){var t=n.map((function(n){return n.id})).includes(e);console.log("todo",n),console.log("current",e,typeof e),console.log("isHave",t),e&&t&&u(n.find((function(n){var t=n.id;return e===t})).comments)}),[e,n]),a.a.createElement(Z,null,a.a.createElement(j,null,a.a.createElement("h4",null,"List"),a.a.createElement(A,null),n&&n.length>0&&n.map((function(n){return a.a.createElement(K,{key:n.id,item:n,currentId:e})}))),a.a.createElement(j,null,a.a.createElement("h4",null,e?"Comment  for: ".concat(e):"Comment"),i&&i.length>0&&i.map((function(n){return a.a.createElement(V,{key:n.id,comment:n})})),a.a.createElement(A,{comment:!0,id:e})))},nn=function(){return a.a.createElement($,null)};function en(){var n=Object(d.a)(["\n  * {\n    box-sizing: border-box;\n    ::-webkit-scrollbar {\n    width: 4px;\n    background: grey;\n    border-radius: 2.5px;\n  }\n  ::-webkit-scrollbar-thumb {\n    border-radius: 2.5px;\n    background-color: black;\n    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n  }\n  }\n\n  *:after, *:before {\n    box-sizing: inherit;\n  }\n\n  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{\n    margin: 0;\n    padding: 0;\n  }\n  li{\n    list-style-type: none;\n  }\n  h1, h2, h3, h4,h5, h6{\n    font-weight: normal;\n  }\n  \n  input, textarea, button{\n    outline: none;\n    border:none;\n    background:none;\n  }\n  html{\n    font-size: 62.5%;  /* 1rem = 10px */\n  }\n\n  body{\n    font-family: 'Helvetica', sans-serif;\n    font-size:1.4rem;\n    color: #000000;\n    font-weight: 400;\n    min-width: 320px;\n    overflow-x: hidden;\n    background: #ffffff;\n    line-height: normal;\n  }\n\n  @media (min-width: 1921px) {\n  body {\n    font-size: 1.6rem;\n  }\n}\n"]);return en=function(){return n},n}var tn=Object(m.b)(en());var rn=function(){return a.a.createElement(m.a,{theme:p.base},a.a.createElement(tn,null),a.a.createElement(nn,null))},an=t(11),cn=t(35),on=t(36),un=t(27),ln={GET_TODO:"GET_TODO",CREATE:"CREATE",DELETE:"DELETE",SET_CURRENT:"SET_CURRENT",SET_COMMENT:"SET_COMMENT"},dn={list:[],current:null},mn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ln.GET_TODO:return Object(s.a)(Object(s.a)({},n),{},{list:e.payload});case ln.SET_CURRENT:return Object(s.a)(Object(s.a)({},n),{},{current:e.id});case ln.CREATE:return Object(s.a)(Object(s.a)({},n),{},{list:[].concat(Object(un.a)(n.list),[e.todo])});case ln.DELETE:return Object(s.a)(Object(s.a)({},n),{},{list:n.list.filter((function(n){return n.id!==e.id}))});case ln.SET_COMMENT:return Object(s.a)(Object(s.a)({},n),{},{list:n.list.map((function(n){return e.id===n.id?Object(s.a)(Object(s.a)({},n),{},{comments:[].concat(Object(un.a)(n.comments),[e.comment])}):n}))});default:return n}},sn=Object(an.combineReducers)({todo:mn}),bn=Object(an.createStore)(sn,Object(cn.composeWithDevTools)(Object(an.applyMiddleware)(on.a)));o.a.render(a.a.createElement(l.a,{store:bn},a.a.createElement(i.a,{basename:"/"},a.a.createElement(u.a,{component:rn}))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.34849f3d.chunk.js.map