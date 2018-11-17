
![](https://user-gold-cdn.xitu.io/2018/11/17/167206e94a9c5c11?w=1891&h=533&f=png&s=491556)常见的<font color=red>Vue单页SPA</font>构建之后的index.html只是一个包含根节点的空白页面，当所有需要的js加载完毕之后，才会开始解析并创建<font color=red>vnode</font>,然后再渲染出真实的DOM。当这些js文件过大而网速又很慢或者出现意料之外的报错时，就会出现所谓的白屏。

而且单页SPA还有一个很大的弊端就是对SEO很不友好。那么如何解决这些问题呢?

<font color=red>SSR(Nuxt)--</font>当然是很好的解决方案，但这也意味着一定的学习成本和运维成本，而如果你已经有了一个现成的<font color=red>Vue单页应用</font>，转向<font color=red>SSR</font>也并不是一个无缝的过程，需要投入更大的学习成本去开发。

那么<font color=red>预渲染</font>就显得更加合适了。只需要安装一个<font color=red>Webpack</font>的插件+一些简单的<font color=red>Webpack</font>配置就可以解决上述的两个问题。

## 项目实战预览

<font color=orange>用手机预览效果更佳(PC端请用手机调试模式)</font>


### 没有预渲染:

预览地址:[http:fancy.czero.cn](http:fancy.czero.cn)

Github:[https://github.com/czero1995/fancy-store](https://github.com/czero1995/fancy-store)

打包完成的项目结构:

![](https://user-gold-cdn.xitu.io/2018/11/17/1672097e1f04732d?w=193&h=150&f=png&s=10733)
### 有预渲染:

预览地址:[http:router.czero.cn](http:router.czero.cn)

Github:[https://github.com/czero1995/fancy-store/tree/prerender](https://github.com/czero1995/fancy-store/tree/prerender)

打包完成的项目结构:

![](https://user-gold-cdn.xitu.io/2018/11/17/16720960cccc7174?w=203&h=416&f=png&s=26557)
查看源码:<font color=red>经过prerender预渲染过后的代码</font>:
![](https://user-gold-cdn.xitu.io/2018/11/17/167207774db2257b?w=1887&h=896&f=png&s=1061879)

## 将Vue-cli单页SPA转为预渲染
1.需要将<font color=red>router</font>设为<font color=red>history</font>模式。

2.修改服务器<font color=red>nginx</font>的配置(刷新页面的时候会做重定向跳转)

    try_files $uri /index.html;
    
<font color=orange>提个醒:</font>如下图，这里有个大坑，当需要用懒加载来做预渲染，nginx上配置
<font color=red> try_files $uri $uri/ /index.html;</font>

没在首页刷新页面的时候，会报错。

![](https://user-gold-cdn.xitu.io/2018/11/17/167207c2c179a9f5?w=349&h=166&f=png&s=12520)


3.安装<font color=red>prerender-spa-plugin</font>

    cnpm install prerender-spa-plugin --save
    
4.修改<font color=red>build/webpack.prod.conf.js</font>下的配置为:

![](https://user-gold-cdn.xitu.io/2018/11/17/167208422eb26566?w=1114&h=433&f=png&s=83783)


5.将<font color=red>config/index.js</font>里的<font color=red>build</font>中的<font color=red>assetsPublicPath</font>字段设置为<font color=red>'/'</font>

6.调整<font color=red>main.js</font>

    new Vue({
      i18n,
      router,
      store,
      render: h => h(App)
    }).$mount('#app', true)
    
7.执行<font color=red>npm run build</font>你会发现，最后打包出来的目录和之前不太一样，都是一些渲染完成好的页面


![](https://user-gold-cdn.xitu.io/2018/11/17/167208775be9a036?w=203&h=416&f=png&s=26557)

![](https://user-gold-cdn.xitu.io/2018/11/17/16720883883f40d5?w=965&h=921&f=png&s=399356)


## 加持vue-meta-info提高SEO

    npm install vue-meta-info --save

### 全局引入 vue-meta-info

    import Vue from 'vue'
    import MetaInfo from 'vue-meta-info'
    
    Vue.use(MetaInfo)

### 组件内静态使用 metaInfo

      export default {
        metaInfo: {
          title: 'My Example App', // set a title
          meta: [{                 // set meta
            name: 'keyWords',
            content: 'My Example App'
          }]
          link: [{                 // set link
            rel: 'asstes',
            href: 'https://assets-cdn.github.com/'
          }]
        }
      }

## Github
无预渲染:[https://github.com/czero1995/fancy-store](https://github.com/czero1995/fancy-store)

有预渲染:[https://github.com/czero1995/fancy-store/tree/prerender](https://github.com/czero1995/fancy-store/tree/prerender)