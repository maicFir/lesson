### 从零开始配置一个自己的webpack项目

> webpack对于初学者来说，一说起webpack，总觉得那些复杂的配置令自己很遥远，很多人和我一样刚开始接触的时摸不着门路，官网demo以及网上案例看了无数遍，用法千奇百怪，层出不穷。 在本篇文章中将详细了解到一些关于你的平时所用遇到的一些困惑。

* npm init ---初始化项目，生成package.json文件
* npm install --save-dev babel-cli babel-core babel-loader babel-preset-es2015 css-loader 等依赖模块


```json
//package.json文件
{
"name": "test-demo",
"version": "1.0.0",
"description": "a webpack test demo",
"main": "index.js",
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w",
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
  					fallback: 'style-loader', //使用style-loader加载该文件
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
  		// 压缩js
  		new webpack.optimize.UglifyJsPlugin(),
  		require('autoprefixer')//postcss-loader，必须要依赖该插件(如果这里没有依赖这个autoprefixer，则外面加一个postcss.config.js文件)
  	],
  	externals: {
  		zepto: 'Zepto',
  		swiper: 'Swiper'
  	}
  }
  ```

  在test目录下新建index.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>测试页面</title>
		<link rel="stylesheet" href="assets/dist/index.css">
	</head>
	<body>
		<div id="js-main">
			<div class="test-bg">
			</div>
			我是一个测试页面
		</div>
     	//这里是引用output打包后的js
		<script src="./assets/dist/index.js"></script>
	</body>
<html>
```

*  命令行执行 npm run build


* npm run dev

* 此时访问http://loclhost:8011  即可打开一个页面

  ![](./assets/dist/img/1.png) 

  ​

* 我们再看页面结构与css

  ![](./assets/dist/img/2.png) 

  我们引入的css是绝对路径，引入的js是相对路径，引入的index.js是经过webpack打包后的输出的output配置中的js,我们在开发环境与线上环境中都是以绝对路径。

  故页面上地址可改成`assets/dist/index.js`

  * 当我们运行webpack -w时，在assets/dist目录下产生了3个文件夹

    ![](./assets/dist/img/3.png) 

    在我么每执行webpack -w 一次，在dist目录下就会产生3个文件夹，img文件夹是css引入背景图片资源而产生的，而且该图片的名称会发生变化，引入图片资源会有一串hash值

  * 在webpack.config.js中，有几个注意的配置

    ```javascript
    entry: {
      	'index': [path.join(__dirname, '/src/js/index')],//入口js文件
      }
     //2
     /*
     entry:__dirname+'/src/js/index'
     */
    ```

    这个entry可配置多个入口文件，也可直接配置单独文件，文中这样配置相当于取了一个别名，这里也可以采取第二种方式，只是采取第二种方式，输出的文件名就直接默认以main.js输出。这里命名一个别名，也是为了output输出文件的配置,这里的filename会根据别名统一自己输出后的最终js和css名称

```javascript
    output:{
      path: path.join(__dirname, '/assets/dist'),//运行webpack -w 生成最终目录的文件
      filename: '[name].js',//这里的name会根据src/js里面js文件名字而定
    }
```

 在提取css配置主要用了一个`extract-text-webpack-plugin` 的插件，这个插件用法主要是在loaders配置中加入，比如:在plugins中添加一个new ExtractTextPlugin("[name].css")指明需要提取的css类型即可提取css

```javascript
      module.exports = {
        
        module:{
          loades:[
            	{
                test: /\.css$/,//匹配以.css结尾的
                exclude: /src\/libs/,//exclude标识该目录不需要用babel-loader编译
                loader: ExtractTextPlugin.extract({ //将css分离出来
                  fallback: 'style-loader', 
                  use: ['css-loader','stylus-loader'] 
                })
            }
          ]
        },
        plugins:[
          new ExtractTextPlugin("[name].css"),
          require('autoprefixer')
        ]
      }
```

 在配置中，注意到右加载stylus模块，这个配置有用到postcss，因此需要postcss-loader加载器，使用postcss时，需要npm install autoprefixer  这个插件，当安装好该插件时，在plugins添加一个require('autoprefixer')即可，要不添加在根目录新建一个`postcss.config.js`的文件，内容是：

```javascript
module.exports = {
	plugins: {
		'autoprefixer': { 
			browsers:['iOS >= 7', 'Android >= 4', 'last 5 version']
		}
	}
}
```

当我们使用postcss这个插件时，我们就可以省去写css3中不同浏览器的内核的前端，这样就可大大减少浏览器因某个css3属性忘了加前缀而不兼容了。


