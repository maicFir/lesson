export default {
	// 获取url参数
	url2Params(url) {
		var seg, ret = {}, atag;
		atag = document.createElement('a');
		atag.href = url;
		seg = atag.search.replace(/^\?/, '').split('&');
		seg.forEach( function(p){
			var s = p.split('=');
			ret[s[0]] = s[1];
		});
		return ret;
	},

	// 存取localStorage
	storage() {
		var len = arguments.length;
		if (!len) {
			throw 'parameters can not be empty!';
		}
		if (typeof arguments[0] !== 'string') {
			throw 'parameter error!';
		}
		if (len === 1) {
			return localStorage.getItem && JSON.parse(localStorage.getItem(arguments[0]));
		}
		if (len >= 2) {
			localStorage.setItem(arguments[0], JSON.stringify(arguments[1]));
		}
	},

	toast(msg, msgtitle) {
		var titlestr = "";
		if (msgtitle) {
			titlestr = "<span class='popup-toast-title'>" + msgtitle + "</span>";
		}
		var htmlstr = "<div class='popup-toast'>" + titlestr + "<span>" + msg + "</span></div>";
		var toastdom = $(htmlstr);
		$("body").append(toastdom);

		setTimeout(function () {
			toastdom.css("opacity", 0);
		}, 2600);
		setTimeout(function () {
			toastdom.remove();
		}, 3000);
	}
}