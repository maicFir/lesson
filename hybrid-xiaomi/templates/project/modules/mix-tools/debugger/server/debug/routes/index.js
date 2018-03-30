"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(o,i){try{var a=r[o](i),u=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.redirectHtmlReq=void 0;var appRegister=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(r,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _utils.colorconsole.info("### App Server ### 收到App注册信息, 格式:\n"+JSON.stringify(r.request.body)+"\n"),e.next=3,t();case 3:(0,_service.printInspectorUrl)(r);case 4:case"end":return e.stop()}},e,this)}));return function(r,t){return e.apply(this,arguments)}}(),adapterForBackwardComp=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(r,t){var n,o,i,a,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=r.request.body,o=r.method,i=r.path,a="ws"in n&&n.ws.indexOf("inspector")>=0,u="application"in n&&n.application.indexOf("hybrid.loader")>=0,"post"!==o.toLowerCase()||"/"!==i||!a||!u){e.next=10;break}(0,_service.informToUpdateApk)(r),(0,_service.printInspectorUrl)(r),e.next=12;break;case 10:return e.next=12,t();case 12:e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(0),_utils.colorconsole.error("### App Server ### error:\n"+JSON.stringify(e.t0)),_utils.colorconsole.error("### App Server ### 当前应用加载器与mix-tools不兼容，请更新应用加载器。"),e.next=20,t();case 20:case"end":return e.stop()}},e,this,[[0,14]])}));return function(r,t){return e.apply(this,arguments)}}(),redirectHtmlReq=exports.redirectHtmlReq=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(r,t){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.req,o=_url2.default.parse(n.url),!/.*\.html?$/.test(o.pathname)||/^\/html/.test(o.pathname)){e.next=7;break}_utils.colorconsole.info("### App Server ### redirecting html file"),r.redirect("/html"+o.path),e.next=9;break;case 7:return e.next=9,t();case 9:case"end":return e.stop()}},e,this)}));return function(r,t){return e.apply(this,arguments)}}(),_url=require("url"),_url2=_interopRequireDefault(_url),_utils=require("../../../lib/utils"),_service=require("../service");exports.default={appRegister:appRegister,adapterForBackwardComp:adapterForBackwardComp,redirectHtmlReq:redirectHtmlReq};