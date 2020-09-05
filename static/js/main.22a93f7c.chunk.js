(this["webpackJsonpcoffee-project"]=this["webpackJsonpcoffee-project"]||[]).push([[0],{27:function(e,t,n){e.exports=n(44)},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(32),n(15)),l=n(1),s=(n(33),n(26)),u=n(13),f=n(19),p=n(10),m=n.n(p),d=n(14),h=n(7),v=(n(35),n(36),function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"variety-item"},r.a.createElement(v,{className:"variety-item__content"},r.a.createElement(i.b,{to:"/".concat(e.name)},r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("hr",null),r.a.createElement("p",null,e.description),r.a.createElement("hr",null),r.a.createElement("p",null,"Quality: ",e.quality.replace(/_/g," ").toLowerCase()))))))},b=(n(42),function(e){return 0===e.items.length?r.a.createElement("div",{className:"center"},r.a.createElement(v,null,r.a.createElement("h2",null," No coffee varieties found."))):r.a.createElement("ul",{className:"varieties-list"},e.items.map((function(e){return r.a.createElement(g,{key:e.name,name:e.name,description:e.description,quality:e.quality_potential})})))}),E=(n(43),n(16)),w=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Coffee"),r.a.createElement("div",{className:"filter-wrapper"},r.a.createElement(E.a,{className:"element",value:e.filters.producing_countries,onChange:e.handleSelect,options:e.options.countryOptions,isMulti:!0,placeholder:"Country",name:"producing_countries"}),r.a.createElement(E.a,{className:"element",isClearable:!0,value:e.filters.quality_potential,onChange:e.handleSelect,options:e.options.qualityOptions,placeholder:"Quality",name:"quality_potential"}),r.a.createElement(E.a,{className:"element",isClearable:!0,value:e.filters.leaf_rust,onChange:e.handleSelect,options:e.options.diseaseOptions,placeholder:"Leaf rust",name:"leaf_rust"})))},_=function(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),i=Object(h.a)(c,2),l=i[0],p=i[1],v=Object(a.useState)({producing_countries:[],quality_potential:"",leaf_rust:""}),g=Object(h.a)(v,2),E=g[0],_=g[1],y=Object(a.useState)(),j=Object(h.a)(y,2),O=j[0],C=j[1],k=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(),c=Object(h.a)(o,2),i=c[0],l=c[1],s=Object(a.useRef)([]),u=Object(a.useCallback)(function(){var e=Object(d.a)(m.a.mark((function e(t){var n,a,o,c,i,u,f=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:"GET",a=f.length>2&&void 0!==f[2]?f[2]:null,o=f.length>3&&void 0!==f[3]?f[3]:{},r(!0),c=new AbortController,s.current.push(c),e.prev=6,e.next=9,fetch(t,{method:n,body:a,headers:o,signal:c.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(u=e.sent,s.current=s.current.filter((function(e){return e!==c})),i.ok){e.next=16;break}throw new Error(u.message);case 16:return r(!1),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(6),l(e.t0.message),r(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){return function(){s.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:i,sendRequest:u,clearError:function(){l(null)}}}(),q=k.isLoading,S=k.sendRequest;Object(a.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t,n,a,r,c,i,l,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("https://coffee-varieties.now.sh/api");case 3:t=e.sent,n=t.map((function(e){for(var t,n=e.producing_countries,a=e.quality_potential,r=e.disease_resistance,o=0;o<r.length;o++){var c=r[o];c.leaf_rust&&(t=c.leaf_rust)}return{producing_countries:n,quality_potential:a,leaf_rust:t}})),a=n.map((function(e){return e.producing_countries})).flat(),r=n.map((function(e){return e.quality_potential})),c=n.map((function(e){return e.leaf_rust})),i=N(r),l=N(a),s=N(c),C({qualityOptions:i,countryOptions:l,diseaseOptions:s}),o(t),p(t),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(0);case 19:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}})()()}),[S]);var N=function(e){return Object(s.a)(new Set(e)).map((function(e){return{value:e,label:e.replace(/_/g," ").toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")}}))},L=function(e){var t=n.filter((function(t){var n=!e.quality_potential||""===e.quality_potential||t.quality_potential.toLowerCase()===e.quality_potential.value.toLowerCase(),a=!e.leaf_rust||""===e.leaf_rust||t.disease_resistance.find((function(t){return t.leaf_rust&&t.leaf_rust.toLowerCase()===e.leaf_rust.value.toLowerCase()})),r=!(e.producing_countries&&e.producing_countries.length>0)||e.producing_countries.some((function(e){return e&&t.producing_countries.includes(e.value)}));return n&&a&&r}));p(t)};return r.a.createElement(r.a.Fragment,null,q&&r.a.createElement("div",{className:"center"},"Loading..."),!q&&l&&r.a.createElement(w,{options:O,filters:E,handleSelect:function(e,t){var n;n=Object(f.a)(Object(f.a)({},E),{},Object(u.a)({},t.name,e)),_(n),L(n)}}),!q&&l&&r.a.createElement(b,{items:l}))};var y=function(){return r.a.createElement(i.a,null,r.a.createElement("main",null,r.a.createElement(l.b,{path:"/",exact:!0},r.a.createElement(_,null)),r.a.createElement(l.b,{path:"/:cid",exact:!0}),r.a.createElement(l.a,{to:"/"})))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/coffee-project",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/coffee-project","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.22a93f7c.chunk.js.map