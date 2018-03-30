webpackJsonp([1],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(125)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(117);

var _jquery2 = _interopRequireDefault(_jquery);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var style = __webpack_require__(118); //引入css
//引入jquery插件库
//const $ = require("jquery");//cmd方式
//es6方式


console.log((0, _moment2.default)().format());
__webpack_require__.e/* require.ensure */(0).then((function (require) {
	__webpack_require__(121).text;
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
(0, _jquery2.default)(function () {
	(0, _jquery2.default)(".header>li").on("click", function () {
		var index = (0, _jquery2.default)(this).index();
		var text = (0, _jquery2.default)(this).text();
		(0, _jquery2.default)(this).addClass("active").siblings().removeClass("active");
		(0, _jquery2.default)(".content").html(text);
	});
});

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(119)(undefined);
// imports


// module
exports.push([module.i, "*{padding:0px;margin:0px;}\r\n.header,.content{\r\n\twidth:200px;\r\n\theight:100px;\r\n\tborder:1px solid red;\r\n\tfloat:left;\r\n\tmargin:10px;\r\n}\r\n.app{\r\n\twidth:100px;\r\n\theight:200px;\r\n\tbackground:yellow;\r\n}\r\n.active{\r\n\tbackground:gray;\r\n\tcursor: pointer\r\n}\r\n.img{\r\n\tbackground:url(" + __webpack_require__(126) + ") no-repeat center;\r\n\twidth:300px;\r\n\theight:200px;\r\n\tbackground-size:50% auto;\r\n\tclear:both;\r\n}", ""]);

// exports


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dfd297d2534039071555540729a32280.png";

/***/ })

},[122]);