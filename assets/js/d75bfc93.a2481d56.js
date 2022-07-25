"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5878],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4959:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),o=r(9960),a=r(4477),i=r(2263);const s=function(e){var t=e.to,r=e.children,s=(0,a.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning?n.createElement(o.default,{to:"/api/"+t},r):n.createElement(o.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},r)}},1715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=(r(4959),["components"]),s={id:"motivation",title:"Motivation",slug:"/"},l=void 0,p={unversionedId:"guides/motivation",id:"guides/motivation",title:"Motivation",description:"Thanks to tools like Playwright, Puppeteer or",source:"@site/../docs/guides/motivation.mdx",sourceDirName:"guides",slug:"/",permalink:"/apify-sdk-js/docs/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1658776639,formattedLastUpdatedAt:"Jul 25, 2022",frontMatter:{id:"motivation",title:"Motivation",slug:"/"}},c={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Thanks to tools like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio"),", it is easy to write Node.js code to extract data from web pages. But\neventually things will get complicated. For example, when you try to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Perform a deep crawl of an entire website using a persistent queue of URLs."),(0,a.kt)("li",{parentName:"ul"},"Run your scraping code on a list of 100k URLs in a CSV file, without losing any data when your code crashes."),(0,a.kt)("li",{parentName:"ul"},"Rotate proxies to hide your browser origin and keep user-like sessions."),(0,a.kt)("li",{parentName:"ul"},"Disable browser fingerprinting protections used by websites.")),(0,a.kt)("p",null,"Python has ",(0,a.kt)("a",{parentName:"p",href:"https://scrapy.org/",target:"_blank",rel:"noopener"},"Scrapy")," for these tasks, but there was no such library for ",(0,a.kt)("strong",{parentName:"p"},"JavaScript, the language of\nthe web"),". The use of JavaScript is natural, since the same language is used to write the scripts as well as the data extraction code running in a\nbrowser."),(0,a.kt)("p",null,"The goal of the Apify SDK is to fill this gap and provide a toolbox for generic web scraping, crawling and automation tasks in JavaScript. So don't\nreinvent the wheel every time you need data from the web, and focus on writing code specific to the target website, rather than developing\ncommonalities."))}d.isMDXComponent=!0}}]);