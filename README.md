# HTML-CSS-JS

使用`html`，`css`，`js(ts)`书写简单`demo`。`webpack`构建多页面应用，可配置，命令行快速创建模板文件，`Github Action`持续集成部署预览：🍵 [预览地址](https://xszi.github.io/html-css-js/index.html)

本项目构建参考了一位`Github`大神开源的代码（链接找不回来了，特此感谢！），然后自己修改了部分`webpack`配置，使之符合本项目需求。

* 多页面应用
* 快速创建新页面模板
* 添加Github Action部署，使用线上绝对路径引用图片（相对路径图片地址不对）
* Pug模板改为原生Html, stylus换成原生css（css变量）
* 可配置化使用Eslint, typescript, jquery, pug

# 运行项目

~~~
// 开发
$ npm install
$ npm run dev
~~~

~~~
// 生产
$ npm install
$ npm run build
~~~

~~~
// 自动生成页面
$ npm run new:view 
~~~

# 项目配置

* pug
* eslint
* jquery
* typescript

可在`config.js`配置文件中选择是否开启

