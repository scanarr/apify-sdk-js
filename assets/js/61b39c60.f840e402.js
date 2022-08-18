"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7470,4204,9514],{3660:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=r},36454:(e,t,n)=>{var r=["options","packages"];function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n(20060),n(98878);var o=n(67294),l=n(40683),c=n(3660),i=function(e){return e&&e.__esModule?e:{default:e}},u=i(o),f=i(l);function s(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function d(e,t,n){return Object.entries(e).forEach((function(r){var a=r[0],o=r[1];if("id"===a){var l="type"in e;(!l||l&&"reference"!==e.type)&&(t[Number(o)]=e,n&&(e.parentId=n.id))}else Array.isArray(o)?o.forEach((function(n){s(n)&&d(n,t,e)})):s(o)&&d(o,t,e)})),t}function m(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){d(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,l=a(e,r),i=o.useMemo((function(){return{options:t,reflections:m(n)}}),[t,n]);return u.default.createElement(c.ApiDataContext.Provider,{value:i},u.default.createElement("div",{className:"apiPage"},u.default.createElement(f.default,l)))}},84204:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),a=n(44996),o=n(72389),l=n(10833),c=n(92622),i=n(39960);function u(){var e=(0,a.Z)("/docs/api"),t=(0,a.Z)("/docs/1.3.1/api"),n=(0,a.Z)("/docs/2.3/api/"),u=(0,a.Z)("/docs/1.3/api/");if((0,o.Z)()){var f=window.location.pathname,s="",d=!1;if(f.startsWith(e)&&(s=n+f.substring(e.length+1),d=!0),f.match(/\/docs\/2\.\d+\.\d+\/api/)&&(s=u+f.substring(t.length+1),d=!0),f.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/))s=u+f.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/)[1],d=!0;d&&window.location.href!==s&&(window.location.href=s)}return r.createElement(r.Fragment,null,r.createElement(l.d,{title:"Page Not Found"}),r.createElement(c.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},"Page Not Found"),r.createElement("p",null,"We could not find what you were looking for \ud83d\ude22"),r.createElement("p",null,"Recently we ",r.createElement("b",null,"released Apify SDK v3 "),"and we significantly upgraded the documentation."),r.createElement("p",null,"If you're looking for documentation of ",r.createElement("b",null,"Apify SDK v2"),",",r.createElement(i.default,{to:"/docs/2.3/guides/apify-platform"}," you can find it here"),"."),r.createElement("p",null,"For ",r.createElement("b",null,"Apify SDK v3 docs"),", go to the ",r.createElement(i.default,{to:"/"},"homepage"),"."))))))}},20060:(e,t,n)=>{n.r(t)},98878:(e,t,n)=>{n.r(t)}}]);