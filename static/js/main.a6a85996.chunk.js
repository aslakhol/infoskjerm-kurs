(this["webpackJsonpinfoskjerm-kurs"]=this["webpackJsonpinfoskjerm-kurs"]||[]).push([[0],{29:function(e,t,n){e.exports=n(73)},34:function(e,t,n){},35:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(27),c=n.n(r),i=(n(34),function(){return console.log("tittel lastet inn"),o.a.createElement("h1",null,"Infoskjerm")}),l=(n(35),n(5)),s=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((function(e){return e.json()})).then((function(e){return r(e.data.children[0].data)}))}),[]),o.a.createElement("div",{className:"DadJoke"},o.a.createElement("p",null,n.title),o.a.createElement("p",null,n.selftext))},u=n(28),m=n.n(u)()({clientName:"hollund-infoskjermkurs"}),f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){m.getBikeRentalStationsByPosition({latitude:63.428311,longitude:10.392514},230).then((function(e){return r(e)}))}),[]),o.a.createElement("div",{className:"Bikes"},n.map((function(e){return o.a.createElement(d,{key:e.id,station:e})})))},d=function(e){var t=e.station,n=t.name,a=t.bikesAvailable,r=t.spacesAvailable;return o.a.createElement("div",{className:"station"},n," - ",a," : ",r)};var h=function(){return console.log("Heisann"),o.a.createElement("div",{className:"App"},o.a.createElement(i,null),o.a.createElement(s,null),o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a6a85996.chunk.js.map