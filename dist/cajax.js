!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var o in t)("object"==typeof exports?exports:n)[o]=t[o]}}(this,(function(){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}t(1);var i=function(){function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(o(this,n),this.onResponseFunction=function(){},this.catchFunction=function(){},this.thenFunction=function(){},null!=r)if(r instanceof FormData)this.data=r;else{var u,a=[];for(u in r)a.push(encodeURIComponent(u)+"="+encodeURIComponent(r[u]));this.data=a.join("&").replace(/%20/g,"+")}else this.data=null;this.method=t,r instanceof FormData||(this.contenttype=i.usinginput?"application/json; charset=utf-8":"application/x-www-form-urlencoded");var l=new XMLHttpRequest;if(null!=i)for(var c in i)l[c]=i[c];if(l.open(t,e+("GET"==this.method?"?"+this.data:"")),null!=i.header)for(var v in i.header)l.setRequestHeader(v,i.header[v]);this.xhr=l,i.usinginput&&null!=r&&(this.data=JSON.stringify(r))}var e,t,i;return e=n,(t=[{key:"response",value:function(n){var e=this;return this.onResponseFunction=function(){n(e.xhr)},this}},{key:"then",value:function(n){var e=this;return this.xhr.onload=function(){n(e.xhr)},this}},{key:"progress",value:function(n){var e=this;return this.xhr.upload.onprogress=function(t){n(e.xhr,t.loaded/t.total*100)},this}},{key:"catch",value:function(n){var e=this;return this.xhr.onerror=function(){n(e.xhr)},this.xhr.onblocked=function(){n(e.xhr)},this}},{key:"custom",value:function(n){return n(this.xhr),this}},{key:"contentType",value:function(n){return this.contenttype=n,this}},{key:"send",value:function(){return this.xhr.setRequestHeader("Content-type",this.contenttype),this.xhr.send(this.data),this}}])&&r(e.prototype,t),i&&r(e,i),n}();e.a=i},function(n,e,t){"use strict";t.r(e);var o=t(0);function r(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var i=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,i;return e=n,i=[{key:"post",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new o.a(n,"POST",e,t,r)}},{key:"get",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new o.a(n,"GET",e,t,r)}},{key:"put",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new o.a(n,"POST",e,t,r)}},{key:"delete",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new o.a(n,"DELETE",e,t,r)}},{key:"trace",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new o.a(n,"TRACE",e,t,r)}},{key:"connect",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new o.a(n,"CONNECT",e,t,r)}},{key:"options",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new o.a(n,"OPTIONS",e,t,r)}},{key:"ajax",value:function(n){return new o.a(null!=n.url&&n.url,null!=n.method&&n.method,null!=n.options&&n.options,null!=n.data&&n.data,null!=n.input&&n.input)}}],(t=null)&&r(e.prototype,t),i&&r(e,i),n}();e.default=i},function(n,e,t){"use strict";t.r(e);var o=t(1),r=t(0);var i=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise((function(i,u){var a=new r.a(n,e,t,o);a.then((function(n){i(n)})),a.catch((function(n){u(n)})),void 0!==o.cajax&&(void 0!==o.cajax.custom&&a.cajax.custom(o.cajax.custom),void 0!==o.cajax.response&&a.cajax.response(o.cajax.response)),a.send()}))};function u(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var a=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,o;return e=n,o=[{key:"post",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i(n,"POST",e,t,o)}},{key:"get",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i(n,"GET",e,t,o)}},{key:"put",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i(n,"POST",e,t,o)}},{key:"delete",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i(n,"DELETE",e,t,o)}},{key:"trace",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i(n,"TRACE",e,t,o)}},{key:"connect",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i(n,"CONNECT",e,t,o)}},{key:"options",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i(n,"OPTIONS",e,t,o)}},{key:"ajax",value:function(n){return i(null!=n.url&&n.url,null!=n.method&&n.method,null!=n.options&&n.options,null!=n.data&&n.data,null!=n.input&&n.input)}}],(t=null)&&u(e.prototype,t),o&&u(e,o),n}();e.default={Cajax:o.default,Prajax:a,PrajaxPromise:i,CajaxRequest:r.a}}]).default}));