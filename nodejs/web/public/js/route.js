
	//ngRoute与ngResource两个组件
var mc = angular.module("mcBlog",["ngRoute","ngResource"]);
	//配置路由
	var commonUrl = {
		html:"wmc_blog/item/html",
		data:"wmc_blog/item/data"
	};
	mc.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/page=1",{
			templateUrl:commonUrl.html+"/template1.html",
			controller:"A"
		}).when('/page=2',{
			templateUrl:commonUrl.html+"/template2.html",
			controller:"A"
		}).when('/page=3',{
			templateUrl:commonUrl.html+"/template3.html",
			controller:"A"
		}).when('/page=4',{
			templateUrl:commonUrl.html+"/template4.html",
			controller:"A"
		}).when('/page=5',{
			templateUrl:commonUrl.html+"/template5.html",
			controller:"A"
		})
		.otherwise({
			redirectTo:'/page=1'//默认初始状态
		})
	}]);
	var pageLen = $(".pageDiver>.pagination").find("li").length;
	//alert(pageLen)----0???
	var index = 0;
	mc.controller("A",['$scope','$resource','$location',function($scope,$resource,$location){
		$scope.$location = $location;
		var adata = $resource(commonUrl.data+"/list.json").get();
		$scope.data = adata;
//				var str = JSON.stringify(adata);
//				console.log(str);
		//上一页
		$scope.pagePrev = function(obj){
		var $li = obj.$parent;
		index--;
		index = index<1?5:index;
		//$location.path("/page=+"index"+");
		$location.path("/page="+index+"");
		
		};
		//下一页
		$scope.pageNext = function(){
			index++;
			index = index>5?1:index;
			$location.path("/page="+index+"");
		};
		$scope.width = 0;
		$scope.height = 0;
		$scope.isshow = false;
		$scope.idex = null;//当前索引
		$scope.remarkArea = function(index){
			$scope.idex = index;
//			if(index == $scope.idex){
//				$scope.isshow = !$scope.isshow;
//			}
		};
		$scope.sureBtn = function(index){
			$scope.idex = index;
			if(index == $scope.idex){
				$scope.isshow = !$scope.isshow;
			}
		}
	}]);
	mc.controller("B",['$scope','$http',function($scope,$http){
	//$scope.dataArr = ;
		$http({
			url:commonUrl.data+"/rt-dec.json",//url地址
			method:"get"//get方式
			
		}).success(function(data){
			$scope.dataArr = data;
			//console.log(data);
		}).error(function(){
			alert("网络请求错误");
		})
	}])


	
		
		