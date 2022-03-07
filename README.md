
<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">Nuxt-web</h1>
<h4 align="center">基于nuxtjs开发的博客系统</h4>
<p align="center">
	<a href="https://gitee.com/wilkwo/nuxt-web.git"><img src="https://gitee.com/wilkwo/nuxt-web/badge/star.svg?theme=dark"></a>
	<a href="https://gitee.com/wilkwo/nuxt-web.git"><img src="https://gitee.com/wilkwo/nuxt-web/badge/fork.svg?theme=dark"></a>
</p>


### 项目介绍：

- 主要技术: Nuxtjs 2.0 、ElementUI 2.0

- 主要使用插件： axios（请求）  、 less（css编译） 、 highlight.js（代码高亮） 、 @nuxtjs/component-cache （缓存）


### 关联项目

同另外两个项目一起组成了一个博客系统：

* 后端服务：springbootAdmin ( https://gitee.com/wilkwo/springbootAdmin )

* 后台管理：vueAdmin ( https://gitee.com/wilkwo/vueAdmin ) 


### 演示地址

* 官网：[https: //www.dsiab.com](https://www.dsiab.com)

* 拉取代码后运行可看到效果（如果报错请配置跨域），不用跑后端服务，直接调用官网接口。



### 后台管理： 

- 地址：http://admin.dsiab.com

- 测试账号、密码：test / test


### 选择nuxt的原因：

- nuxt开发的项目能被搜索引擎收录,能进行seo。

- 上手简单，语法跟vue基本一致，部分写法有差异，只需要将文件按目录新建好，nuxt会自动生成对应路由。

- 能正常接入统计跟广告代码


### 不足

- 由于Nuxt采用服务端渲染，所以影响页面打开速度的因素很多，包括页面内容大小，服务器性能，网络带宽等。nuxt项目可以将页面的主要内容进行服务端渲染，其他不用考虑搜索引擎的的内容可以在浏览器渲染，即在页面加载完成后再进行ajax请求，这样可以大大减少服务器压力。

- element-ui部分功能对搜索引擎及seo不够友好，因为element-ui组件需要跳转的链接都不是通过a链接，所以这些组件需要手写或者在element-ui的基础上做修改。比如 菜单部分、分页组件都需要进行修改。本项目有重写分页组件，方便seo。


### 提升加载性能


- 某些时候某些接口并不需要都在服务端渲染，可以在浏览器渲染。比如目前首页列表是服务端调用渲染，右侧菜单的推荐跟分类是浏览器渲染，即跟正常的ajax调用一样

- 注意浏览器调接口需要配置nginx反向代理，具体可参考：https://www.dsiab.com/post/4421

- 本项目使用@nuxtjs/component-cache 提升加载性能


### 如何启动应用

```bash

# 下载代码
git clone https://gitee.com/wilkwo/nuxt-web.git

# 安装依赖
$ npm install

# 本地启动在 localhost:3000
$ npm run dev

# 部署到服务器，先build，再执行start启动

$ npm run build

$ npm run start

# 生成静态项目

$ npm run generate
```


### 感谢赞赏

您的支持是持续更新的动力！

<img src="./assets/img/zanshan.jpeg" alt="赞赏" width="400px" />



