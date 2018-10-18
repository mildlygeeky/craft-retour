/*!
 * @project        Retour
 * @name           dashboard.796f879d41d5291e983f.js
 * @author         Andrew Welch
 * @build          Thu, Oct 18, 2018 3:37 PM ET
 * @release        01c17d517f1e05e37165d14f1d2a19491aa17c06 [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */!function(e){function t(t){for(var n,o,a=t[0],c=t[1],i=0,l=[];i<a.length;i++)o=a[i],r[o]&&l.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);l.length;)l.shift()()}var n={},r={1:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=a);var c,i=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(e){return o.p+"js/"+({0:"vendors~confetti~dashboard-table~redirects-table~vue",6:"vue-events",7:"confetti",8:"dashboard-chart",9:"dashboard-table",13:"vuetable-pagination",14:"vuetable-pagination-info",15:"vuetable-filter-bar",16:"vendors~vuetable",17:"vendors~axios",18:"vendors~apexcharts"}[e]||e)+"."+{0:"f390ce749005dc3bf756",6:"b35eae37d7fb1773e8ec",7:"c94d59c6550b9d6d4e3f",8:"d689c0b81ea0163af1b4",9:"5115f74202e12383f56b",13:"e823efa81d1203bdc01b",14:"299bbc47ae8ec0c3a9aa",15:"3497984a6996e9617b8c",16:"9b044cacc88353d7f344",17:"dd0f857fee27d2cdde5c",18:"8c17ac6c04c08c27d0f3"}[e]+".js"}(e),c=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,i.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/cpresources/retour/",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=c;o(o.s=2)}({2:function(e,t,n){(async()=>{const e=await n.e(0).then(n.bind(null,0)),t=await n.e(6).then(n.t.bind(null,1,7));e.default.use(t.default);new e.default({el:"#cp-nav-content",components:{confetti:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,11)),"dashboard-chart":()=>n.e(8).then(n.bind(null,12)),"dashboard-table":()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,9))},data:{},methods:{onTableRefresh(t){console.log("onTableRefresh"),e.default.nextTick(()=>t.refresh())}},mounted(){this.$events.$on("refresh-table",e=>this.onTableRefresh(e))}})})().then(e=>{})}});
//# sourceMappingURL=dashboard.796f879d41d5291e983f.js.map