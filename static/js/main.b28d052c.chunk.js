(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,n,t){e.exports={superInput:"SuperInputText_superInput__3bwYa",inputFocus:"SuperInputText_inputFocus__AN4qc",errorInput:"SuperInputText_errorInput__14dXb",error:"SuperInputText_error__3Gx4l"}},function(e,n,t){e.exports={blue:"HW4_blue__2GBdz",column:"HW4_column__dGeUl",testSpanError:"HW4_testSpanError__3s0y5"}},function(e,n,t){e.exports={default:"SuperButton_default__3Mbzn",red:"SuperButton_red__Sg1_w",button:"SuperButton_button__18NsM",blink:"SuperButton_blink__1Fikd",after:"SuperButton_after__2ONfk",before:"SuperButton_before__2qVP0"}},function(e,n,t){e.exports={label:"SuperCheckbox_label__2k-Lg",checkbox:"SuperCheckbox_checkbox__3gAr0",spanClassName:"SuperCheckbox_spanClassName__1SWl9"}},,,,function(e,n,t){e.exports={App:"App_App__2FC8Z"}},function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(8),o=t.n(c),l=(t(15),t(9)),s=t.n(l),u=t(6),p=t(1),m=t(2),i=t.n(m),_=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],h=function(e){e.type;var n=e.onChange,t=e.onChangeText,a=e.onKeyPress,c=e.onEnter,o=e.error,l=e.className,s=e.spanClassName,u=Object(p.a)(e,_),m="".concat(i.a.error," ").concat(s||""),h="".concat(i.a.input," ").concat(o?i.a.errorInput:i.a.superInput," ").concat(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:h},u)),o&&r.a.createElement("span",{className:m},o))},d=t(3),b=t.n(d),E=t(4),f=t.n(E),k=["red","className"],g=function(e){var n=e.red,t=e.className,a=Object(p.a)(e,k),c="".concat(n?f.a.red:f.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:c},a))},C=t(5),N=t.n(C),x=["type","onChange","onChangeChecked","className","spanClassName","children"],S=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),o=Object(p.a)(e,x),l="".concat(N.a.checkbox," ").concat(a||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)},className:l},o)),c&&r.a.createElement("span",{className:N.a.spanClassName},c))};var v=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1],o=t?"":"error",l=function(){o?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(a.useState)(!1),p=Object(u.a)(s,2),m=p[0],i=p[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:b.a.column},r.a.createElement(h,{value:t,onChangeText:c,onEnter:l,error:o}),r.a.createElement(h,{className:b.a.blue}),r.a.createElement(g,null,"default"),r.a.createElement(g,{red:!0,onClick:l},"delete "),r.a.createElement(g,{disabled:!0},"disabled"),r.a.createElement(S,{checked:m,onChangeChecked:i},"some text "),r.a.createElement(S,{checked:m,onChange:function(e){return i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var w=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.b28d052c.chunk.js.map