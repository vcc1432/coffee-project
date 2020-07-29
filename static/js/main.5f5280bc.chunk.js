(this["webpackJsonpcoffee-project"]=this["webpackJsonpcoffee-project"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(16),n(17),n(3)),l=n(5),u=n(10),s=n(2),f=n.n(s),m=n(7),p=n(1),v=(n(19),n(20),function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),d=function(e){return r.a.createElement("li",{className:"variety-item"},r.a.createElement(v,{className:"variety-item__content"},r.a.createElement("div",null,r.a.createElement("h2",null,e.name))))},E=(n(21),function(e){return 0===e.items.length?r.a.createElement("div",{className:"center"},r.a.createElement(v,null,r.a.createElement("h2",null," No coffee varieties found."))):r.a.createElement("ul",{className:"varieties-list"},e.items.map((function(e){return r.a.createElement(d,{key:e.name,name:e.name})})))}),h=function(e){return r.a.createElement("div",{className:"filter-wrapper"},r.a.createElement("select",{multiple:!0,className:"filter-select",name:"producing_countries",value:e.filters.producing_countries,onChange:e.handleSelect},r.a.createElement("option",{value:"Kenya"},"Kenya"),r.a.createElement("option",{value:"Burundi"},"Burundi"),r.a.createElement("option",{value:"Colombia"},"Colombia"),r.a.createElement("option",{value:"Costa Rica"},"Costa Rica"),r.a.createElement("option",{value:"Ethiopia"},"Ethiopia"),r.a.createElement("option",{value:"Honduras"},"Honduras"),r.a.createElement("option",{value:"Indonesia"},"Indonesia"),r.a.createElement("option",{value:"Mexico"},"Mexico"),r.a.createElement("option",{value:"Panama"},"Panama"),r.a.createElement("option",{value:"Papua New Guinea"},"Papua New Guinea"),r.a.createElement("option",{value:"Rwanda"},"Rwanda"),r.a.createElement("option",{value:"Tanzania"},"Tanzania"),r.a.createElement("option",{value:"Thailand"},"Thailand"),r.a.createElement("option",{value:"Vietnam"},"Vietnam"),r.a.createElement("option",{value:"Brazil"},"Brazil"),r.a.createElement("option",{value:"Peru"},"Peru")),r.a.createElement("select",{className:"filter-select",name:"quality_potential",value:e.filters.quality_potential,onChange:e.handleSelect},r.a.createElement("option",{value:""},"Search by Quality"),r.a.createElement("option",{value:"EXCEPTIONAL"},"EXCEPTIONAL"),r.a.createElement("option",{value:"VERY_GOOD"},"VERY_GOOD"),r.a.createElement("option",{value:"GOOD"},"GOOD"),r.a.createElement("option",{value:"LOW"},"LOW"),r.a.createElement("option",{value:"VERY_LOW"},"VERY_LOW")),r.a.createElement("select",{className:"filter-select",name:"leaf_rust",value:e.filters.leaf_rust,onChange:e.handleSelect},r.a.createElement("option",{value:""},"Search by leaf rust resistance"),r.a.createElement("option",{value:"RESISTANT"},"RESISTANT"),r.a.createElement("option",{value:"TOLERANT"},"TOLERANT"),r.a.createElement("option",{value:"SUSCEPTIBLE"},"SUSCEPTIBLE")))},g=function(){var e=Object(a.useState)(),t=Object(p.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),s=Object(p.a)(c,2),v=s[0],d=s[1],g=Object(a.useState)({producing_countries:[],quality_potential:"",leaf_rust:""}),b=Object(p.a)(g,2),w=b[0],O=b[1],j=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(),c=Object(p.a)(o,2),i=c[0],l=c[1],u=Object(a.useRef)([]),s=Object(a.useCallback)(function(){var e=Object(m.a)(f.a.mark((function e(t){var n,a,o,c,i,s,m=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>1&&void 0!==m[1]?m[1]:"GET",a=m.length>2&&void 0!==m[2]?m[2]:null,o=m.length>3&&void 0!==m[3]?m[3]:{},r(!0),c=new AbortController,u.current.push(c),e.prev=6,e.next=9,fetch(t,{method:n,body:a,headers:o,signal:c.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(s=e.sent,u.current=u.current.filter((function(e){return e!==c})),i.ok){e.next=16;break}throw new Error(s.message);case 16:return r(!1),e.abrupt("return",s);case 20:throw e.prev=20,e.t0=e.catch(6),l(e.t0.message),r(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){return function(){u.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:i,sendRequest:s,clearError:function(){l(null)}}}(),y=j.isLoading,_=j.error,S=j.sendRequest,N=j.clearError;Object(a.useEffect)((function(){(function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("https://coffee-varieties.now.sh/api");case 3:t=e.sent,o(t),d(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[S]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{error:_,onClear:N})," ",y&&r.a.createElement("div",{className:"center"},"Loading...")," ",!y&&v&&r.a.createElement(h,{filters:w,handleSelect:function(e){var t;if("producing_countries"===e.target.name){var a=[];Object(u.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return a.push(e.value)})),t=Object(l.a)(Object(l.a)({},w),{},Object(i.a)({},e.target.name,a))}else t=Object(l.a)(Object(l.a)({},w),{},Object(i.a)({},e.target.name,e.target.value));O(t);var r=n.filter((function(e){var n=""===t.quality_potential||e.quality_potential.toLowerCase()===t.quality_potential.toLowerCase(),a=""===t.leaf_rust||e.disease_resistance.find((function(e){return e.leaf_rust&&e.leaf_rust.toLowerCase()===t.leaf_rust.toLowerCase()})),r=!(t.producing_countries.length>0)||t.producing_countries.every((function(t){return t&&e.producing_countries.includes(t)}));return n&&a&&r}));d(r)}})," ",!y&&v&&r.a.createElement(E,{items:v})," ")};var b=function(){return r.a.createElement(g,null)},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/coffee-project",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/coffee-project","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.5f5280bc.chunk.js.map