var config = {
	baseUrl:"wmc_blog/public/js",
	paths:{
		"jquery":"jquery-1.11.2.min",
		"bootstrap":"bootstrap.min",
		"angular":"angular.min",
		"angularRoute":"angular-route.min",
		"angularResource":"angular-resource.min",
		"route":"route"
	}
};
require.config(config);
require(['jquery','bootstrap','angular','angularRoute','angularResource','route']);
