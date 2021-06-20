# nuxt-web

## 项目简洁：

主要技术: nuxtjs + element-ui

使用到的插件： axios  + less


演示地址：[www.dsiab.com](https://www.dsiab.com)

![avatar](https://gitee.com/wilkwo/nuxt-web/raw/master/assets/img/site.jpg)

## 选择nuxt的原因：

1.nuxt开发的项目能被搜索引擎收录

2.相比其他语言，nuxt更简单，跟vue开发一样简单，会前端就可以开发

3.能正常接入统计跟广告代码

## 不足

采用element-ui部分功能对搜索引擎不够友好。

因为element-ui组件需要跳转的链接都不是通过a链接。

所以这些组件需要手写或者在element-ui的基础上做修改。

比如 菜单部分、分页组件都需要进行修改。


## 如何启动应用

```bash
#下载代码
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


