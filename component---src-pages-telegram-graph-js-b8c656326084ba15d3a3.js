(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0Q5h":function(e,t,n){e.exports=n.p+"static/kedr2earthsfdp-9b920a9175ab20ba6b54ab2c9e504b8f.svg"},"313c":function(e,t,n){},"8ypT":function(e,t,n){},"Y6/8":function(e,t,n){e.exports=n.p+"static/kedr2earthsfdp-ea8577d794b2a6b8785799b971916301.png"},tAJA:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n("qhky"),r=(n("0Q5h"),n("Y6/8"),n("fQX0")),c=n.n(r);n("8ypT"),n("313c");t.default=function(){var e=a.useState(),t=e[0],n=e[1],r=a.useState(),s=r[0],u=r[1],m=a.useState(),i=m[0],o=m[1],d=a.useState(),h=d[0],p=d[1];a.useEffect((function(){var e=window.location.search.match(/\?q=(.+)&?/);e&&e[1]&&(n(e[1]),g(e[1]))}),[]);var g=function e(t,n){void 0===n&&(n=!0),n&&(u(null),p(null),o("подготовка..."),window.history.pushState(null,null,"?q="+t)),fetch("https://richei.t-a-a-s.ru/getGraph?username="+t).then((function(e){return e.json()})).then((function(n){"ready"==n.status?(o(null),u("https://richei.t-a-a-s.ru/graphs/"+n.id+".svg")):"not_found"==n.status?(o(null),p(!0)):"preparing_image"==n.status?(o("подготовка изображения..."),setTimeout((function(){return e(t,!1)}),1e3)):(o("осталось "+n.left+" шагов..."),setTimeout((function(){return e(t,!1)}),1e3))}))};return a.createElement("main",{className:"telegram-graph"},a.createElement(l.a,null,a.createElement("title",null,"Telegram Channel Connections graph")),a.createElement("div",{className:"tg-header"},a.createElement("span",{className:"tg-name"},"anton murygin")," ",a.createElement("a",{href:"https://t.me/joinchat/ELRK0xksBbAVmNzgYnAmGg"},"группа обсуждения")),a.createElement("div",{className:"tg-container"},a.createElement("div",{className:"tg-controls"},a.createElement("div",null,a.createElement("label",{className:"tg-title",htmlFor:"username"},"граф канала")),a.createElement("div",null,"@",a.createElement("input",{type:"text",name:"username",value:t,onChange:function(e){return n(e.target.value)}}),a.createElement("button",{type:"submit",onClick:function(){return g(t)}},"построить")),i&&a.createElement("div",null,i),h&&a.createElement("div",{className:"tg-alert"},"Чат с таким юзернеймом не найден"),a.createElement("div",null,a.createElement("small",{className:"tg-desc"},"программа получает на вход юзернейм канала и выдает граф связанных репостами с ним каналов"),a.createElement("br",null),"-",a.createElement("br",null),a.createElement("small",{className:"tg-desc"},"в кружочке - юзернейм, название, кол-во подписчиков"),a.createElement("br",null),"-",a.createElement("br",null),a.createElement("small",{className:"tg-desc"},"если канал связан с каким-либо каналом не только сам по себе, но и через другой канал - дополнительная связь не строится"))),a.createElement("div",{className:"tg-map"},a.createElement("img",{id:"graph",style:{width:"100%"},src:s,onLoad:function(){var e=document.querySelector("#graph");c()(e)}}))))}}}]);
//# sourceMappingURL=component---src-pages-telegram-graph-js-b8c656326084ba15d3a3.js.map