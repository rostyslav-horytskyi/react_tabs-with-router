(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),i=a(6),s=a(1),m=(a(21),a(22),function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Home Page"))}),o=function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement(i.b,{to:"/",exact:!0,className:"button is-light",activeClassName:"is-dark"},"Home"),l.a.createElement(i.b,{to:"/tabs",className:"button is-light",activeClassName:"is-dark"},"Tabs")))},u=function(e){var t=e.selectedTab;return l.a.createElement("div",{className:"emoji"},t?String.fromCodePoint(+t.content):l.a.createElement("p",null,"Please select a tab"))},b=function(e){var t=e.tabs,a=Object(s.e)().tabId,n=t.find((function(e){return e.id===a}));return l.a.createElement("div",null,l.a.createElement("h1",null,"Tabs Page"),l.a.createElement("div",null,t.map((function(e){return l.a.createElement(i.b,{to:"/tabs/".concat(e.id),key:e.id,className:"button is-small is-primary is-outlined",activeClassName:"is-link"},e.title)}))),l.a.createElement("div",null,l.a.createElement(u,{selectedTab:n})))},d=[{id:"tab-1",title:"Tab 1",content:"0x1F600"},{id:"tab-2",title:"Tab 2",content:"0x1F601"},{id:"tab-3",title:"Tab 3",content:"0x1F602"}],E=function(){return l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement(o,null)),l.a.createElement("div",{className:"body"},l.a.createElement(s.a,{path:"/",exact:!0,component:m}),l.a.createElement(s.a,{path:"/tabs/:tabId?"},l.a.createElement(b,{tabs:d})))))};r.a.render(l.a.createElement(i.a,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3257cbe0.chunk.js.map