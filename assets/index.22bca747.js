import{g as O,_ as T,a as R,b as A,c as F}from"./gender.a8d1d487.js";import{_ as G}from"./nuxt-link.f906fa51.js";import{a as Y,b as E,c as H}from"./entry.d243ce33.js";import{j as I,a as s,k as S,b as J,$ as U,I as p,J as v,L as a,u as e,W as t,M as m,Y as d,a0 as g,X as y,a1 as f,a2 as N,a3 as W,a4 as X,y as K,N as Q}from"./swiper-vue.0447e045.js";import"./ProductTen.0771a53a.js";import"./categories.302704ca.js";const Z={class:"main"},ee={"aria-label":"breadcrumb",class:"breadcrumb-nav mb-2"},te={class:"container-fluid"},oe={class:"breadcrumb"},se={class:"breadcrumb-item"},ae={key:1,class:"breadcrumb-item active"},ce={class:"page-content"},ne={class:"container-fluid"},re={class:"toolbox"},le={class:"toolbox-left"},de=["onClick"],ie=t("i",{class:"icon-bars"},null,-1),ue={class:"toolbox-right"},_e={class:"toolbox-sort"},pe=t("label",{for:"sortby"},"Sortuj:",-1),me={class:"select-custom"},be=["onChange"],he=t("option",{value:"cheap"},"Najtańsze",-1),ve=t("option",{value:"expensive"},"Najdroższe",-1),ge=t("option",{value:"promoted"},"Największa okazja",-1),ye=[he,ve,ge],Pe=I({__name:"index",setup(fe){const o=Y(),n=s(o.params.category),r=s(o.params.subcategory),c=S(()=>O(o.params.gender)),w=S(()=>o.query.page||1),b=s(null),i=s(!1),u=s("promoted"),k=s(12),x=s([]),{$api:P}=H(),j=l=>{x.value=l.value.products,b.value=l.value.totalCount,i.value=!0},q=()=>E("products",()=>P("/products/list",{params:{...o.query,orderBy:u.value,page:w.value,subcategorySlug:r.value,gender:c.value,brand:o.query.brand}})),h=async()=>{i.value=!1;const{data:l}=await q();j(l)};J(()=>o.query,async()=>h());const B=()=>{document.querySelector("body").classList.remove("sidebar-filter-active")},$=()=>{document.querySelector("body").classList.add("sidebar-filter-active")};return U(async()=>{await h()}),(l,C)=>{const z=T,_=G,V=R,D=A,L=F;return p(),v("main",Z,[a(z,{title:e(o).params.gender,subtitle:"TODO GPT COPY"},null,8,["title"]),t("nav",ee,[t("div",te,[t("ol",oe,[t("li",se,[a(_,{to:"/"},{default:m(()=>[d("Home")]),_:1})]),t("li",{class:g(["breadcrumb-item",{active:e(c)===e(n)}])},[a(_,{to:`/${e(c)}`},{default:m(()=>[d(y(e(c)),1)]),_:1},8,["to"])],2),e(n)&&e(c)!==e(n)?(p(),v("li",{key:0,class:g(["breadcrumb-item",{active:!e(r)}])},[a(_,{to:"/"},{default:m(()=>[d(y(e(n)),1)]),_:1})],2)):f("",!0),e(r)?(p(),v("li",ae,[a(_,{to:"/"},{default:m(()=>[d(y(e(r)),1)]),_:1})])):f("",!0)])])]),t("div",ce,[t("div",ne,[t("div",re,[t("div",le,[t("a",{href:"#",class:"sidebar-toggler mr-0 mr-md-5",onClick:N($,["prevent"])},[ie,d("Filtry ")],8,de)]),t("div",ue,[t("div",_e,[pe,t("div",me,[W(t("select",{name:"sortby",id:"sortby",class:"form-control",onChange:N(h,["prevent"]),"onUpdate:modelValue":C[0]||(C[0]=M=>K(u)?u.value=M:null)},ye,40,be),[[X,e(u)]])])])])]),a(V,{products:e(x),"per-page":e(k),loaded:e(i),class:g([{loaded:e(i)},"skeleton-body skel-shop-products"])},null,8,["products","per-page","loaded","class"]),e(b)?(p(),Q(D,{key:0,"per-page":e(k),total:e(b)},null,8,["per-page","total"])):f("",!0),t("div",{class:"sidebar-filter-overlay",onClick:B}),a(L,{"is-sidebar":!0,gender:e(c),category:e(n),subcategory:e(r)},null,8,["gender","category","subcategory"])])])])}}});export{Pe as default};