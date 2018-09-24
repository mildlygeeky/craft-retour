/*!
 * @project        nystudio107
 * @name           redirects-table-legacy.09050dc3d8db5074056b.js
 * @author         andrew@nystudio107.com
 * @build          Mon, Sep 24, 2018 11:03 PM ET
 * @release        19fdb6eec433aaa47471758e1068f4295a6caecb [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,9,11,13],{1:function(t,e,r){"use strict";function n(t,e,r,n,i,a,s,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}r.d(e,"a",function(){return n})},17:function(t,e,r){var n=r(46),i=r(47),a=r(48);t.exports=function(t,e){return n(t)||i(t,e)||a()}},18:function(t,e,r){"use strict";e.a=[{name:"redirectSrcUrl",sortField:"redirectSrcUrl",title:"Legacy URL Pattern",titleClass:"center",dataClass:"center",callback:"srcUrlFormatter"},{name:"redirectDestUrl",sortField:"redirectDestUrl",title:"Redirect To",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"redirectMatchType",sortField:"redirectMatchType",title:"Match Type",titleClass:"text-left",dataClass:"text-left",callback:"matchFormatter"},{name:"redirectHttpCode",sortField:"redirectHttpCode",title:"Status",titleClass:"text-left",dataClass:"text-left"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"deleteRedirectFormatter"}]},46:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},47:function(t,e){t.exports=function(t,e){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){i=!0,a=t}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}return r}},48:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}]);
//# sourceMappingURL=redirects-table-legacy.09050dc3d8db5074056b.js.map