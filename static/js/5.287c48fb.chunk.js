(this["webpackJsonpcv-justin-rankin"]=this["webpackJsonpcv-justin-rankin"]||[]).push([[5],{508:function(n,e,r){"use strict";r.r(e);var t=r(1),a=r.n(t),o=r(506),c=r(61),i=r(122),s=r(3),l=r(68),d=r(496),u=r.n(d),b=r(47);function f(){var n=Object(c.a)(["\n  /* RESET */\n  appearance: none;\n  outline: none;\n  background: none;\n  border: none;\n  position: relative;\n  overflow: hidden;\n\n  /* Center text */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* border */\n  border-width: 2px;\n  border-style: solid;\n  margin: 0 0.1em !important;\n  /* padding: 0.33em 1em; */\n  /* border-radius: 5px; */\n\n  /* TEXT */\n  font-size: 1em;\n  font-weight: 600;\n\n  /* UX */\n  transition: background-color 300ms ease, border-color 300ms ease;\n  transform: scale(0.9);\n\n  &:disabled {\n    opacity: 0.33;\n    cursor: default;\n  }\n\n  &:not([disabled]) {\n    cursor: pointer;\n  }\n\n  /* ICON */\n  svg {\n    vertical-align: bottom;\n  }\n\n  svg + span {\n    margin-left: 0.25em;\n  }\n\n  span + svg {\n    margin-left: 0.25em;\n  }\n"]);return f=function(){return n},n}var g=Object(s.css)(f());function m(){var n=Object(c.a)(["\n        svg {\n          transform: scale(",");\n        }\n        svg + span {\n          margin-left: calc(0.4em * ",");\n        }\n        span + svg {\n          margin-left: calc(0.4em * ",");\n        }\n      "]);return m=function(){return n},n}function h(){var n=Object(c.a)(["\n    padding: 0.33em 0.5em;\n  "]);return h=function(){return n},n}function p(){var n=Object(c.a)(["\n        & {\n          background-color: ",";\n          color: ",";\n          border-color: ",";\n          padding: ",";\n          border-radius: ",";\n          transform: scale(",");\n        }\n        &:not([disabled]):hover {\n          background-color: ",";\n          color: ",";        <Drawer />\n      "]);return p=function(){return n},n}function v(){var n=Object(c.a)(["\n        & {\n          background-color: ",";\n          color: ",";\n          border-color: ",";\n          padding: ",";\n          border-radius: ",";\n          transform: scale(",");\n        }\n        &:not([disabled]):hover {\n          background-color: ",";\n          color: ",";\n          border-color: ",";\n        }\n      "]);return v=function(){return n},n}function j(){var n=Object(c.a)(["\n        & {\n          background-color: ",";\n          color: ",";\n          border-color: ",";\n          padding: ",";\n          border-radius: ",";\n          transform: scale(",");\n        }\n        &:not([disabled]):hover {\n          background-color: ",";\n          color: ",";\n          border-color: ",";\n        }\n      "]);return j=function(){return n},n}var O=function(n){var e=n.type,r=void 0===e?"button":e,t=n.variant,c=void 0===t?"solid":t,l=n.color,d=n.label,f=n.icon,O=n.iconPos,x=n.iconScale,k=void 0===x?1.4:x,w=Object(i.a)(n,["type","variant","color","label","icon","iconPos","iconScale"]);O&&"left"!==O&&"right"!==O&&(O="left");var y,E,S,T,D;switch(y=(l=l&&b.a[l]?u()(b.a[l]):l&&function(n){try{return u()(n)}catch(e){console.error(e)}}(l)?u()(l):b.a.default?u()(b.a.default).lighten(.75):u()(b.a.primary)).luminosity()<=.7?u()("white"):u()(b.a.text),f&&!d?(S="50%",T=1.2,D="0.1em 0.33em"):(S=b.b.borderRadius,T=.9,D="0.33em 1.5em"),c){case"outline":E=Object(s.css)(j(),l.alpha(0).string(),l.hex(),l.hex(),D,S,T,l.alpha(.25).string(),l.darken(.25).hex(),l.darken(.25).hex());break;case"clear":E=Object(s.css)(v(),l.alpha(0).string(),l.hex(),l.alpha(0).string(),D,S,T,l.alpha(.25).string(),l.darken(.25).hex(),l.alpha(0).string());break;case"solid":default:E=Object(s.css)(p(),l.hex(),y.hex(),l.hex(),D,S,T,l.darken(.25).hex(),y.hex())}var P=Object(s.css)(h()),R=new Set;return R.add(g),R.add(E),!d&&R.add(P),k&&R.add(Object(s.css)(m(),k,k,k)),Object(s.jsx)("button",Object.assign({type:r,"aria-label":d},w,{css:Object(o.a)(R)}),Object(s.jsx)((function(){return Object(s.jsx)(a.a.Fragment,null,f&&(!O||"left"===O)&&f,d&&Object(s.jsx)("span",null,d),f&&"right"===O&&f)}),null))},x=function(n){return Object(s.jsx)(l.b,{to:n.to},Object(s.jsx)(O,n))};e.default=function(n){return a.a.createElement("section",null,a.a.createElement("h3",null,"HomePage"),a.a.createElement("p",null,"This is the homepage."),a.a.createElement(x,{to:"dashboard",label:"View DASHBOARD"}))}}}]);