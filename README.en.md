<div><a href="https://gitee.com/wilkwo/nuxt-web/blob/master/README.md">中文</a>  |  <a href="https://gitee.com/wilkwo/nuxt-web/blob/master/README.en.md">english</a></div>

<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">nuxt-web</h1>
<h4 align="center">Blog system developed based on nuxtjs</h4>
<p align="center">
	<a href="https://gitee.com/wilkwo/nuxt-web.git"><img src="https://gitee.com/wilkwo/nuxt-web/badge/star.svg?theme=dark"></a>
	<a href="https://gitee.com/wilkwo/nuxt-web.git"><img src="https://gitee.com/wilkwo/nuxt-web/badge/fork.svg?theme=dark"></a>
</p>


### Project Introduction:
- Main technology: Nuxtjs 2.0, ElementUI 2.0

- Mainly use plugins: axios (request), less (css compilation), highlight.js (code highlighting), @nuxtjs/component-cache (cache)

- Suitable for small sites, personal websites

### Associated project
- Background management: vueAdmin (https://gitee.com/wilkwo/vueAdmin, https://github.com/esplori/vueAdmin.git)

- Address: http://admin.dsiab.com

- Test account and password: test / test

### demo address
- Official website: https://www.dsiab.com

- After pulling the code, you can see the effect (if an error is reported, please configure cross-domain), you do not need to run the back-end service, but directly call the official website interface.

### Reasons to choose nuxt:
- Projects developed by nuxt can be indexed by search engines and can be used for seo.

- It is easy to get started, and the syntax is basically the same as that of Vue. Some of the writing methods are different. You only need to create a new file according to the directory, and nuxt will automatically generate the corresponding route.

- Can access statistics and advertising code normally

### insufficient
- Since Nuxt uses server-side rendering, there are many factors that affect the page opening speed, including page content size, server performance, and network bandwidth. The nuxt project can render the main content of the page on the server side, and other content that does not need to consider the search engine can be rendered in the browser, that is, the ajax request is made after the page is loaded, which can greatly reduce the pressure on the server.

- Some functions of element-ui are not friendly to search engines and seo, and some components need to be handwritten or modified on the basis of element-ui. For example, the menu part and paging components need to be modified, because there is no a link, and a link is more friendly to search engines. This project has rewritten paging components, which is convenient for SEO. Of course, you can also choose other component libraries or not use component libraries.

### Improve loading performance
- Sometimes some interfaces do not need to be rendered on the server side, but can be rendered in the browser. For example, the current home page list is rendered by server-side calls, and the recommendations and categories on the right menu are browser rendering, which is the same as normal ajax calls

- Note that the browser interface needs to be configured with nginx reverse proxy. For details, please refer to: https://www.dsiab.com/post/4421

- This project uses @nuxtjs/component-cache to improve loading performance

### How to start the app
```
# download code
github: git clone https://gitee.com/wilkwo/nuxt-web.git

or

gitee: git clone https://github.com/esplori/nuxt-web.git


# install dependencies
$ npm install

# Start locally at localhost:3000
$ npm run dev

# Deploy to the server, build first, then execute start to start

$ npm run build

$ npm run start

# Generate static project

$ npm run generate
```

### Thanks appreciate
Creation is not easy, your appreciation and recognition are the driving force for continuous updating!

<img src="./assets/img/zanshan.jpeg" alt="赞赏" width="400px" />