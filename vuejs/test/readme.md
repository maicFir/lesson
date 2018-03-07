### 项目

* npm init ---初始化项目，生成package.json文件

* npm install --save-dev babel-cli babel-core babel-loader babel-preset-es2015 css-loader 等依赖模块、、

  ```javascript
  //package.json


  {
    "name": "test-vue-demo",
    "version": "1.0.0",
    "description": "a bill test vue demo",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "supervisor node server.js"//运行dev执行，启动端口，运行server.js
    },
    "author": "maic",
    "license": "ISC",
    "devDependencies": {//主要模块
      "autoprefixer": "^8.1.0",
      "babel-cli": "^6.26.0",
      "babel-core": "^6.26.0",
      "babel-loader": "^7.1.3",
      "babel-preset-es2015": "^6.24.1",
      "css-loader": "^0.28.10",
      "express": "^4.16.2",
      "extract-text-webpack-plugin": "^3.0.2",
      "file-loader": "^1.1.11",
      "http-proxy-middleware": "^0.17.4",
      "mockjs": "^1.0.1-beta3",
      "postcss-loader": "^2.1.1",
      "style-loader": "^0.20.1",
      "stylus": "^0.54.5",
      "stylus-loader": "^3.0.2",
      "supervisor": "^0.12.0",
      "url-loader": "^0.6.2",
      "webpack": "^3.6.0"
    }
  }

  ```

  ​

* 新建webpack.config.js文件，webpack配置入口文件，输出文件，加载的依赖模块以及压缩文件

  ```javascript
  let path = require('path');//path地址
  let ExtractTextPlugin = require('extract-text-webpack-plugin');//分离css
  let webpack = require('webpack');
  module.exports = {
  	entry: {
  		'index': [path.join(__dirname, '/src/js/index')],//入口js文件
  	},
  	output: {
  		path: path.join(__dirname, '/assets/dist'),//运行webpack -w 生成最终目录的文件
  		filename: '[name].js',//这里的name会根据src/js里面js文件名字而定
  	},
  	module: {
  	  	loaders: [
  		  	{
  		  	    test: /\.css$/,
  		  	    exclude: /src\/libs/,//exclude标识该目录不需要用babel-loader编译
  		  	    loader: ExtractTextPlugin.extract({ //将css分离出来
  					fallback: 'style-loader', 
  					use: ['css-loader','stylus-loader'] 
  				})
  		  	},
  			{
  				test: /\.js$/,
  				loader: 'babel-loader',
  				exclude: /node_modules/  //exclude标识该目录不需要用babel-loader编译
  			},
  			{
  				test: /\.styl$/,//加载styl,postcss-loader
  				loader: ExtractTextPlugin.extract({ 
  					fallback: 'style-loader', 
  					use: ['css-loader','postcss-loader','stylus-loader'] 
  				})
  			},
  			{
  			    test: /\.(png|jpg|gif|woff|woff2)$/,//图片资源会有一个class名加一个hash值
  			    loader: 'url-loader?limit=5000&name=img/[name]-[hash:6].[ext]'
  			},
  			{
  			    test: /\.(mp4|ogg|svg)$/,
  			    loader: 'file-loader?name=img/[name]-[hash:6].[ext]?'
  			},
  	  	]
  	},
  	resolve: {
  		extensions: ['.js'],
  	},
  	//插件
  	plugins: [
  		new ExtractTextPlugin("[name].css"),//提取css
  		// 压缩
  		new webpack.optimize.UglifyJsPlugin(),
  		require('autoprefixer')//postcss-loader，必须要依赖该插件(如果这里没有依赖这个autoprefixer，则外面加一个postcss.config.js文件)
  	],
  	externals: {
  		zepto: 'Zepto',
  		swiper: 'Swiper',
  		template: 'template',
  	}
  }

  ```

  在test目录下新建index.html

  ​