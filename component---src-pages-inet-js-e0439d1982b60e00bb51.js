(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8ypT":function(e,t,n){},L6Je:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("YjI2"),c=function(e){var t=l.a.useState("undefined"!=typeof window&&window.localStorage.getItem("mib32.locale")||"ru"),n=t[0],a=t[1],r=function(e){window.localStorage.setItem("mib32.locale",e),window.onLocaleChange&&window.onLocaleChange(e),a(e)};return l.a.createElement("div",{className:"iswitch"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"18px",height:"18px"},l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),l.a.createElement("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})),l.a.createElement("span",{onClick:function(){return r("ru")},className:"ru"==n?"iswitch-sel":"iswitch-unsel"},"Ru"),l.a.createElement("span",{onClick:function(){return r("en")},className:"en"==n?"iswitch-sel":"iswitch-unsel"},"Eng"))};n("8ypT"),t.a=function(e){var t=l.a.useState(0),n=t[0],a=t[1];return l.a.useEffect((function(){window.onLocaleChange=function(){a((function(e){return e+1}))}}),[]),l.a.createElement("div",{className:"main",key:n},l.a.createElement("div",{className:"layout-panel"},l.a.createElement("span",null,l.a.createElement(r.a,{ru:"Антон Мурыгин",en:"Anton Murygin"})),l.a.createElement(c,null)),e.children)}},YjI2:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a);t.a=function(e){var t,n="undefined"!=typeof window&&window.localStorage.getItem("mib32.locale")||"ru";return t=e[n]?e[n]:e.ru,l.a.createElement("span",null,t)}},dEtu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.OutboundLink=void 0;var l=a(n("pVnL")),r=a(n("8OQS")),c=a(n("q1tI")),i=a(n("17x9")),u=c.default.forwardRef((function(e,t){var n=e.children,a=(0,r.default)(e,["children"]);return c.default.createElement("a",(0,l.default)({ref:t},a,{onClick:function(e){"function"==typeof a.onClick&&a.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),a.target&&"_self"!==a.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:a.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=a.href)}}):t&&(document.location=a.href),!1}}),n)}));t.OutboundLink=u,u.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func}},xt7K:function(e,t,n){"use strict";n.r(t);var a=n("Wbzz"),l=n("dEtu"),r=n("q1tI"),c=n.n(r),i=n("YjI2"),u=n("L6Je"),o=function(e){var t=e.options,n=e.onChange,a=c.a.useState(t[0].value),l=a[0],r=a[1];return c.a.createElement("div",{className:"tswitch"},t.map((function(e){return c.a.createElement("span",{onClick:function(){return function(e){r(e),n&&n(e)}(e.value)},className:l==e.value?"tswitch-sel":"tswitch-unsel"},c.a.createElement(i.a,e.label))})))},s=[{name:{en:"Strelochka",ru:"Стрелочка"},since:"2016",url:"https://www.strelchka.ru",description:{en:"Price calendar for Russian Railway tickets.",ru:"Календарь цен на ЖД билеты."},tags:["civil"]},{name:{en:"Xran",ru:"Хранилище"},since:"2020",url:"https://www.xran.ru",description:{en:"Make your Telegram into an awesome cloud storage.",ru:"Сервис, превращающий Телеграм в самое лучшее облачное хранилище."},tags:["civil"]},{name:{en:"Taas",ru:"Таас"},since:"2019",url:"https://www.t-a-a-s.ru",description:{en:"Taas offers managed TDLib as cloud service. TDlib - is a complete headless Telegram client controlled by API - you can get channel history, send messages and many other things, go to Taas site to find out more.",ru:"Хотите использовать TDLib но ничего не устанавливать? Таас предоставляет TDLib как облачную услугу. TDLib - это целый headless Телеграм клиент управляемый по API - можно получать историю канала, отправлять сообщения и многое другое, смотри подробнее на сайте."},tags:["devs"]}],m=[{label:{en:"No filter",ru:"Без фильтра"},value:null},{label:{en:"For civils",ru:"Для всех"},value:"civil"},{label:{en:"For devs",ru:"Для разработчиков"},value:"devs"}];t.default=function(){var e=r.useState(),t=e[0],n=e[1],c=r.useMemo((function(){return t?s.filter((function(e){return e.tags.includes(t)})):s}),[t]);return r.createElement("main",null,r.createElement(u.a,null,r.createElement("div",null,r.createElement(a.a,{to:"/"},r.createElement(i.a,{ru:"Назад",en:"Back"}))),r.createElement("div",{className:"page"},r.createElement(o,{options:m,onChange:function(e){return n(e)}}),c.map((function(e){return r.createElement("div",{className:"inet-block"},r.createElement("p",{className:"pp"},r.createElement("h3",null,r.createElement(i.a,e.name)),r.createElement("div",{className:"subtitle"},r.createElement(i.a,{ru:"осн. "+e.since+" г.",en:"since "+e.since}),r.createElement("div",null,r.createElement(l.OutboundLink,{href:e.url},e.url)))),r.createElement("p",{className:"pp"},r.createElement(i.a,e.description)))})))))}}}]);
//# sourceMappingURL=component---src-pages-inet-js-e0439d1982b60e00bb51.js.map