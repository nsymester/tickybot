!function u(i,c,l){function d(o,e){if(!c[o]){if(!i[o]){var r="function"==typeof require&&require;if(!e&&r)return r(o,!0);if(f)return f(o,!0);var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}var t=c[o]={exports:{}};i[o][0].call(t.exports,function(e){return d(i[o][1][e]||e)},t,t.exports,u,i,c,l)}return c[o].exports}for(var f="function"==typeof require&&require,e=0;e<l.length;e++)d(l[e]);return d}({1:[function(e,o,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.Goodbye=function(){return"Goodbye"},r.World="World"},{}],2:[function(e,o,r){"use strict";var n=e("./components/GoodbyeWorld");console.log((0,n.Goodbye)()+" "+n.World),document.getElementById("js-back-to-top-btn").addEventListener("click",function(e){e.preventDefault(),console.log("hello world")},!0)},{"./components/GoodbyeWorld":1}]},{},[2]);