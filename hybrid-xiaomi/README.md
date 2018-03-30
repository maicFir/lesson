# toolkit

npm全局安装后，提供命令，打包开发者的项目为ZIP包


## 版本更新

1. toolkit保持一致：

toolkit/package.json的version
tooklit/templates/project/package.json中的subversion/toolkit

2. packager保持一致：

- packager/package.json中的version
- packager/package.json中的subversion/packager
- tooklit/templates/project/package.json中的subversion/packager
- tooklit/templates/project/modules/tools/package.json中的subversion/packager(JS Bundle中打包的版本)


## 说明

- 说明：update命令执行时，检查开发者目录的subversion/toolkit是否低于全局命令toolkit/package.json中的version
- 说明：tooklit/templates/project/package.json中的subversion会覆盖开发者项目中的subversion
