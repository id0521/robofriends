(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(9),c=n.n(a),i=(n(24),n(10)),s=n(2),l=n(16),u=n(17),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(32);var f=n(4),p=n(5),b=n(7),m=n(6),E=n(8),g=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"Robofriends"))}}]),t}(r.Component),v=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},O=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,t){return o.a.createElement(v,{key:e.id,id:e.id,name:e.name,email:e.email})})))},y=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},w=function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},j=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(b.a)(this,Object(m.a)(t).call(this))).state={hasError:!1},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"An error has occurred"):this.props.children}}]),t}(r.Component),R=(n(33),function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement(g,null),o.a.createElement(y,{searchChange:n}),o.a.createElement(w,null,a?o.a.createElement("h1",null,"Loading"):o.a.createElement(j,null,o.a.createElement(O,{robots:c}))))}}]),t}(o.a.Component)),S=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R),C=n(18);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(C.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={searchField:""},D={isPending:!1,robots:[],error:""},N=Object(s.combineReducers)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_FIELD":return P({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ROBOTS_PENDING":return P({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return P({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return P({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(s.createStore)(N,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(l.a)));c.a.render(o.a.createElement(i.a,{store:T},o.a.createElement(S,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");h?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):d(e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.336240b4.chunk.js.map