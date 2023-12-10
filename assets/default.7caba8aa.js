import{_ as X}from"./Button.e2762217.js";import{a as O,al as re,I as s,J as l,k as y,W as t,a0 as h,u as g,a6 as x,a7 as S,Y as v,X as w,L as _,M as C,a1 as f,N as z,Z as Q,_ as ee,j as R,t as V,b as ce,H as A,ac as L,ah as te,$ as se,w as ue,q as de,a2 as P,a8 as me,T as pe,am as he,O as fe,P as _e,af as ge,a5 as J}from"./swiper-vue.0447e045.js";import{_ as T,a as ve,r as D,m as W,e as j,t as F,z as oe,x as ye,A as ne,d as we}from"./entry.d243ce33.js";import{_ as E}from"./nuxt-link.f906fa51.js";import be from"./Icon.1faf44f7.js";import{u as Y}from"./categories.302704ca.js";import{d as K,e as ke,f as $e,g as Ce,_ as N,u as Z,a as H}from"./index.cdac5dfc.js";import{m as Se}from"./common.341c6598.js";import{u as ze}from"./useToast.d3c6b3bf.js";const xe={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},Ae={wrapper:"w-full pointer-events-auto",container:"relative overflow-hidden",title:"text-sm font-medium text-gray-900 dark:text-white",description:"mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",actions:"flex items-center gap-2 mt-3 flex-shrink-0",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",ring:"ring-1 ring-gray-200 dark:ring-gray-800",icon:{base:"flex-shrink-0 w-5 h-5",color:"text-{color}-500 dark:text-{color}-400"},avatar:{base:"flex-shrink-0 self-center",size:"md"},progress:{base:"absolute bottom-0 end-0 start-0 h-1",background:"bg-{color}-500 dark:bg-{color}-400"},transition:{enterActiveClass:"transform ease-out duration-300 transition",enterFromClass:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterToClass:"translate-y-0 opacity-100 sm:translate-x-0",leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},default:{color:"primary",icon:null,timeout:5e3,closeButton:{icon:"i-heroicons-x-mark-20-solid",color:"gray",variant:"link",padded:!1},actionButton:{size:"xs",color:"white"}}},Me={wrapper:"fixed flex flex-col justify-end z-[55]",position:"bottom-0 end-0",width:"w-full sm:w-96",container:"px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"},Fe=Ce?window:void 0;function je(e,o={}){const{immediate:r=!0,fpsLimit:d=void 0,window:n=Fe}=o,m=O(!1),c=d?1e3/d:null;let i=0,u=null;function a(k){if(!m.value||!n)return;const M=k-(i||k);if(c&&M<c){u=n.requestAnimationFrame(a);return}e({delta:M,timestamp:k}),i=k,u=n.requestAnimationFrame(a)}function p(){!m.value&&n&&(m.value=!0,u=n.requestAnimationFrame(a))}function b(){m.value=!1,u!=null&&n&&(n.cancelAnimationFrame(u),u=null)}return r&&p(),$e(b),{isActive:re(m),pause:b,resume:p}}function Te(e={}){const{controls:o=!1,offset:r=0,immediate:d=!0,interval:n="requestAnimationFrame",callback:m}=e,c=O(K()+r),i=()=>c.value=K()+r,u=m?()=>{i(),m(c.value)}:i,a=n==="requestAnimationFrame"?je(u,{immediate:d}):ke(u,n,{immediate:d});return o?{timestamp:c,...a}:c}const Be=""+globalThis.__publicAssetsURL("images/icons/logo.png");const Le={},Ue={src:Be,class:"fy-logo"};function Ie(e,o){return s(),l("img",Ue)}const ie=T(Le,[["render",Ie]]),He=""+globalThis.__publicAssetsURL("images/menu/banner-1.jpg"),Oe=""+globalThis.__publicAssetsURL("images/menu/black-man.png");const U=e=>(Q("data-v-4c62ea3a"),e=e(),ee(),e),Pe={class:"main-nav"},Ee={class:"menu sf-arrows"},Ne=U(()=>t("a",{class:"sf-with-ul"},"Kobiety",-1)),qe={class:"megamenu megamenu-md"},De={class:"row no-gutters"},Re={class:"col-md-8"},Ve={class:"menu-col"},We={key:0,class:"row"},Ye={class:"menu-title"},Ze={class:"col-md-4"},Ge={class:"banner banner-overlay"},Je=U(()=>t("img",{src:He,loading:"lazy",alt:"Gotowi na jesień"},null,-1)),Ke=U(()=>t("div",{class:"banner-content banner-content-top"},[t("div",{class:"banner-title text-white"},[v(" Gotowe "),t("br"),v("na "),t("br"),t("span",null,[t("strong",null,"jesień")])])],-1)),Xe=U(()=>t("a",{class:"sf-with-ul"},"Mężczyźni",-1)),Qe={class:"megamenu megamenu-md"},et={class:"row no-gutters"},tt={class:"col-md-8"},st={class:"menu-col"},ot={key:0,class:"row"},nt={class:"menu-title"},it={class:"col-md-4"},at={class:"banner banner-overlay"},lt=U(()=>t("img",{src:Oe,loading:"lazy",alt:"Sacha Moreau"},null,-1)),rt=U(()=>t("div",{class:"banner-content banner-content-top"},[t("div",{class:"banner-title text-white"},[v(" Cali "),t("br"),v("na "),t("br"),t("span",null,[t("strong",null,"czarno")])])],-1)),ct={__name:"MainMenu",setup(e){const o=Y(),r=y(()=>o.categories),d=ve();return console.log(d),(n,m)=>{const c=E;return s(),l("nav",Pe,[t("ul",Ee,[t("li",{class:h({active:g(d).path.includes("kobiety")})},[Ne,t("div",qe,[t("div",De,[t("div",Re,[t("div",Ve,[g(r)?(s(),l("div",We,[(s(!0),l(x,null,S(g(r),(i,u)=>(s(),l("div",{key:u,class:"col-md-6"},[t("div",Ye,[v(w(i.name)+" ",1),t("ul",null,[(s(!0),l(x,null,S(i.subcategories,a=>(s(),l("li",null,[_(c,{to:{path:"/kobiety/"+i.slug+"/"+a.slug}},{default:C(()=>[v(w(a.name),1)]),_:2},1032,["to"])]))),256))])])]))),128))])):f("",!0)])]),t("div",Ze,[t("div",Ge,[_(c,{to:("routeAliases"in n?n.routeAliases:g(D))["/women/autumn"],class:"banner banner-menu"},{default:C(()=>[Je,Ke]),_:1},8,["to"])])])])])],2),t("li",{class:h({active:g(d).path.includes("mezczyzni")})},[Xe,t("div",Qe,[t("div",et,[t("div",tt,[t("div",st,[g(r)?(s(),l("div",ot,[(s(!0),l(x,null,S(g(r),(i,u)=>(s(),l("div",{key:u,class:"col-md-6"},[t("div",nt,[v(w(i.name)+" ",1),t("ul",null,[(s(!0),l(x,null,S(i.subcategories,a=>(s(),l("li",null,[a.male!==!1?(s(),z(c,{key:0,to:{path:"/mezczyzni/"+i.slug+"/"+a.slug}},{default:C(()=>[v(w(a.name),1)]),_:2},1032,["to"])):f("",!0)]))),256))])])]))),128))])):f("",!0)])]),t("div",it,[t("div",at,[_(c,{to:("routeAliases"in n?n.routeAliases:g(D))["/men/all-in-black"],class:"banner banner-menu"},{default:C(()=>[lt,rt]),_:1},8,["to"])])])])])],2)])])}}},ut=T(ct,[["__scopeId","data-v-4c62ea3a"]]),B=W(j.ui.strategy,j.ui.avatar,xe),dt=R({components:{UIcon:N},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>B.default.icon},size:{type:String,default:()=>B.default.size,validator(e){return Object.keys(B.size).includes(e)}},chipColor:{type:String,default:()=>B.default.chipColor,validator(e){return["gray",...j.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>B.default.chipPosition,validator(e){return Object.keys(B.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:o,attrs:r}=Z("avatar",V(e,"ui"),B),d=y(()=>typeof e.src=="boolean"?null:e.src),n=y(()=>(e.alt||"").split(" ").map(b=>b.charAt(0)).join("").substring(0,2)),m=y(()=>H(F(o.value.wrapper,(a.value||!d.value)&&o.value.background,o.value.rounded,o.value.size[e.size]),e.class)),c=y(()=>H(F(o.value.rounded,o.value.size[e.size]),e.imgClass)),i=y(()=>F(o.value.icon.base,o.value.icon.size[e.size])),u=y(()=>F(o.value.chip.base,o.value.chip.size[e.size],o.value.chip.position[e.chipPosition],o.value.chip.background.replaceAll("{color}",e.chipColor))),a=O(!1);ce(()=>e.src,()=>{a.value&&(a.value=!1)});function p(){a.value=!0}return{ui:o,attrs:r,wrapperClass:m,imgClass:c,iconClass:i,chipClass:u,url:d,placeholder:n,error:a,onError:p}}}),mt=["alt","src"];function pt(e,o,r,d,n,m){const c=N;return s(),l("span",{class:h(e.wrapperClass)},[e.url&&!e.error?(s(),l("img",A({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:o[0]||(o[0]=(...i)=>e.onError&&e.onError(...i))}),null,16,mt)):e.text?(s(),l("span",{key:1,class:h(e.ui.text)},w(e.text),3)):e.icon?(s(),z(c,{key:2,name:e.icon,class:h(e.iconClass)},null,8,["name","class"])):e.placeholder?(s(),l("span",{key:3,class:h(e.ui.placeholder)},w(e.placeholder),3)):f("",!0),e.chipColor?(s(),l("span",{key:4,class:h(e.chipClass)},w(e.chipText),3)):f("",!0),L(e.$slots,"default")],2)}const G=T(dt,[["render",pt]]),ht={props:{wrapperClass:{type:String,default:"header"},top:{type:Number,default:210}},data:function(){return{isSticky:!1,firstHeight:0}},watch:{$route:function(){this.$el.children[0],this.$el.style.height=""}},mounted:function(){let e=this.$el.children[0];this.$el.style.height=e.offsetHeight+"px",window.addEventListener("scroll",this.scrollHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0})},destroyed:function(){window.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.resizeHandler)},methods:{scrollHandler:function(){let e=this.$el.children[0];window.pageYOffset>this.top?this.isSticky||(e.classList.add("fixed"),this.isSticky=!0):this.isSticky?(e.classList.remove("fixed"),this.isSticky=!1):this.$el.style.height=e.offsetHeight+"px"},resizeHandler:function(){let e=this.$el.children[0];this.$el.style.height=e.offsetHeight+"px",this.scrollHandler()}}};function ft(e,o,r,d,n,m){return s(),l("div",{class:h(["sticky-wrapper",{sticky:e.isSticky}])},[L(e.$slots,"default")],2)}const _t=T(ht,[["render",ft]]),gt=()=>oe("color-mode").value;const q=e=>(Q("data-v-70aa85a4"),e=e(),ee(),e),vt={class:"header header-6 z-10"},yt={class:"header-middle dark:bg-darkSecondary"},wt={class:"header-center"},bt=q(()=>t("h5",{class:"dark:text-white mb-0"},"Fashionly",-1)),kt={class:"header-right"},$t={class:"header-bottom sticky-header"},Ct={class:"header-left"},St=q(()=>t("span",{class:"sr-only"},"Toggle mobile menu",-1)),zt=q(()=>t("i",{class:"icon-bars"},null,-1)),xt=[St,zt],At={key:0,class:"header-right"},Mt={key:1,class:"header-right overflow-hidden"},Ft=q(()=>t("i",{class:"la la-lightbulb-o"},null,-1)),jt={class:"font-weight-semibold"},Tt={computed:{isFullwidth:function(){return this.$route.path.includes("fullwidth")}},methods:{openMobileMenu:function(){document.querySelector("body").classList.add("mmenu-active")},debug:()=>{}}},Bt=Object.assign(Tt,{__name:"Default",setup(e){const o=ye(),r=ne(),d=y(()=>r.maxDiscount),n=gt();y({get(){return n.value==="dark"},set(){n.preference=n.value==="dark"?"light":"dark"}});const m=()=>{const c=we("authorizationToken");c.value=null,o.clearUser(),window.FB.logout(function(i){console.log(i)})};return(c,i)=>{const u=ie,a=E,p=be,b=ut,k=G,M=_t;return s(),l("header",vt,[t("div",yt,[t("div",{class:h(c.isFullwidth?"container-fluid":"container")},[f("",!0),t("div",wt,[_(a,{to:"/",class:"logo"},{default:C(()=>[bt,_(u,{style:{"margin-left":"10px"}})]),_:1})]),t("div",kt,[g(o).email?(s(),l("a",{key:0,onClick:m,class:"hover:text-red cursor-pointer"},[v(" Wyloguj "),_(p,{name:"system-uicons:door",size:"1.5em"})])):(s(),z(a,{key:1,to:"/logowanie",title:"Zaloguj"},{default:C(()=>[t("span",null,[_(p,{name:"fluent-mdl2:signin"}),v(" Zaloguj się ")])]),_:1}))])],2)]),_(M,null,{default:C(()=>[t("div",$t,[t("div",{class:h(c.isFullwidth?"container-fluid":"container")},[t("div",Ct,[_(b),t("button",{class:"mobile-menu-toggler",onClick:i[1]||(i[1]=(...$)=>c.openMobileMenu&&c.openMobileMenu(...$))},xt)]),g(o).email?(s(),l("div",At,[_(k,{alt:g(o).email.toUpperCase(),size:"sm",class:"mr-3"},null,8,["alt"]),v(" "+w(g(o).email),1)])):(s(),l("div",Mt,[Ft,t("p",jt,"Promocje do "+w(g(d))+"%",1)]))],2)])]),_:1})])}}}),Lt=T(Bt,[["__scopeId","data-v-70aa85a4"]]),Ut={data:function(){return{bottomSticky:!1}},computed:{routeAliases(){return D},isFullwidth:function(){return this.$route.path.includes("fullwidth")}},watch:{$route:function(){this.handleBottomSticky()}},mounted:function(){this.handleBottomSticky(),window.addEventListener("resize",this.handleBottomSticky,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.handleBottomSticky)},methods:{handleBottomSticky:function(){this.bottomSticky=this.$route.path.includes("/product/default")&&window.innerWidth>991}}},It={class:"footer"},Ht={class:"footer-middle"},Ot={class:"container"},Pt={class:"row"},Et=te('<div class="col-sm-6 col-lg-3"><div class="widget widget-about"><h6 class="widget-title">O Fashionly</h6><p>Dewizą Fashionly jest oferowanie dopasowanych do potrzeb ubrań po najniższych cenach. </p><div class="social-icons"><a href="https://www.facebook.com/Fashionly-264630524152515" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a><a href="https://www.instagram.com/fashionlypl" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a></div></div></div>',1),Nt={class:"col-sm-6 col-lg-3"},qt={class:"widget"},Dt=t("h6",{class:"widget-title"},"Pomoc",-1),Rt={class:"widget-list"},Vt={class:"footer-bottom"},Wt={class:"container"},Yt={class:"footer-copyright text-xs"},Zt={key:0,class:"mb-10"};function Gt(e,o,r,d,n,m){const c=E,i=ie;return s(),l("footer",It,[t("div",Ht,[t("div",Ot,[t("div",Pt,[Et,t("div",Nt,[t("div",qt,[Dt,t("ul",Rt,[t("li",null,[_(c,{to:m.routeAliases["/privacy-policy"]},{default:C(()=>[v(" Polityka prywatności ")]),_:1},8,["to"])]),t("li",null,[_(c,{to:m.routeAliases["/terms-and-conditions"]},{default:C(()=>[v(" Regulamin ")]),_:1},8,["to"])])])])])])])]),t("div",Vt,[t("div",Wt,[_(i),t("p",Yt,"Copyright © "+w(new Date().getFullYear())+" Fashionly. Wszystkie prawa zastrzeżone.",1)])]),e.bottomSticky?(s(),l("div",Zt)):f("",!0)])}const Jt=T(Ut,[["render",Gt]]),Kt={class:"mobile-menu-container"},Xt={class:"mobile-menu-wrapper"},Qt=t("i",{class:"icon-close"},null,-1),es=[Qt],ts={class:"mobile-nav"},ss=t("div",{class:"mobile-nav-gender"},"Kobiety",-1),os={key:0,class:"mobile-menu"},ns=t("div",{class:"mobile-nav-gender"},"Mężczyźni",-1),is={key:1,class:"mobile-menu"},as={href:"javascript:void(0);",class:"mobile-nav-item-no-redirect"},ls=te('<div class="social-icons"><a class="social-icon" target="_blank" title="Facebook" href="https://www.facebook.com/Fashionly-264630524152515"><i class="icon-facebook-f"></i></a><a class="social-icon" target="_blank" title="Instagram" href="https://www.instagram.com/fashionlypl"><i class="icon-instagram"></i></a></div>',1),rs={__name:"Menu",setup(e){const o=Y(),r=y(()=>o.categories),d=()=>{document.querySelector("body").classList.remove("mmenu-active")},n=m=>{m.srcElement.querySelector(".mmenu-btn").click()};return se(()=>{Se()}),(m,c)=>{const i=E;return s(),l("div",Kt,[t("div",Xt,[t("span",{class:"mobile-menu-close",onClick:d},es),t("nav",ts,[ss,g(r)?(s(),l("ul",os,[(s(!0),l(x,null,S(g(r),(u,a)=>(s(),l("li",{key:a},[t("a",{onClick:n,href:"javascript:void(0);",class:"mobile-nav-item-no-redirect"},w(u.name),1),t("ul",null,[(s(!0),l(x,null,S(u.subcategories,p=>(s(),l("li",null,[_(i,{to:{path:"/kobiety/"+u.slug+"/"+p.slug}},{default:C(()=>[v(w(p.name),1)]),_:2},1032,["to"])]))),256))])]))),128))])):f("",!0),ns,g(r)?(s(),l("ul",is,[(s(!0),l(x,null,S(g(r),(u,a)=>(s(),l("li",{key:a},[t("a",as,w(u.name),1),t("ul",null,[(s(!0),l(x,null,S(u.subcategories,p=>(s(),l("li",null,[p.male!==!1?(s(),z(i,{key:0,to:{path:"/mezczyzni/"+u.slug+"/"+p.slug}},{default:C(()=>[v(w(p.name),1)]),_:2},1032,["to"])):f("",!0)]))),256))])]))),128))])):f("",!0)]),ls])])}}};function cs(e,o,r){let d=null;const{pause:n,resume:m,timestamp:c}=Te({...r||{},controls:!0}),i=O(null),u=y(()=>i.value?o-(c.value-i.value):0);function a(...le){d=setTimeout(()=>{d=null,i.value=null,e(...le)},u.value)}function p(){d&&(clearTimeout(d),d=null)}function b(){i.value=Date.now(),a()}function k(){p(),n()}function M(){p(),n()}function $(){a(),m(),i.value=(i.value||0)+(Date.now()-c.value)}return b(),{start:b,stop:k,pause:M,resume:$,remaining:u}}const I=W(j.ui.strategy,j.ui.notification,Ae),us=R({components:{UIcon:N,UAvatar:G,UButton:X},inheritAttrs:!1,props:{id:{type:[String,Number],required:!0},title:{type:String,required:!0},description:{type:String,default:null},icon:{type:String,default:()=>I.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>I.default.closeButton},timeout:{type:Number,default:()=>I.default.timeout},actions:{type:Array,default:()=>[]},callback:{type:Function,default:null},color:{type:String,default:()=>I.default.color,validator(e){return["gray",...j.ui.colors].includes(e)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["close"],setup(e,{emit:o}){const{ui:r,attrs:d}=Z("notification",V(e,"ui"),I);let n=null;const m=O(e.timeout),c=y(()=>H(F(r.value.wrapper,r.value.background,r.value.rounded,r.value.shadow),e.class)),i=y(()=>{var $;return F(r.value.progress.base,($=r.value.progress.background)==null?void 0:$.replaceAll("{color}",e.color))}),u=y(()=>({width:`${m.value/e.timeout*100||0}%`})),a=y(()=>{var $;return F(r.value.icon.base,($=r.value.icon.color)==null?void 0:$.replaceAll("{color}",e.color))});function p(){n&&n.pause()}function b(){n&&n.resume()}function k(){n&&n.stop(),e.callback&&e.callback(),o("close")}function M($){n&&n.stop(),$.click&&$.click(),o("close")}return se(()=>{e.timeout&&(n=cs(()=>{k()},e.timeout),ue(()=>{m.value=n.remaining.value}))}),de(()=>{n&&n.stop()}),{ui:r,attrs:d,wrapperClass:c,progressClass:i,progressStyle:u,iconClass:a,onMouseover:p,onMouseleave:b,onClose:k,onAction:M,twMerge:H}}}),ds={class:"w-0 flex-1"};function ms(e,o,r,d,n,m){const c=N,i=G,u=X;return s(),z(pe,A({appear:""},e.ui.transition),{default:C(()=>[t("div",A({class:e.wrapperClass,role:"status"},e.attrs,{onMouseover:o[0]||(o[0]=(...a)=>e.onMouseover&&e.onMouseover(...a)),onMouseleave:o[1]||(o[1]=(...a)=>e.onMouseleave&&e.onMouseleave(...a))}),[t("div",{class:h([e.ui.container,e.ui.rounded,e.ui.ring])},[t("div",{class:h(["flex",[e.ui.padding,e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[e.icon?(s(),z(c,{key:0,name:e.icon,class:h(e.iconClass)},null,8,["name","class"])):f("",!0),e.avatar?(s(),z(i,A({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):f("",!0),t("div",ds,[t("p",{class:h(e.ui.title)},[L(e.$slots,"title",{title:e.title},()=>[v(w(e.title),1)])],2),e.description||e.$slots.description?(s(),l("p",{key:0,class:h(e.ui.description)},[L(e.$slots,"description",{description:e.description},()=>[v(w(e.description),1)])],2)):f("",!0),(e.description||e.$slots.description)&&e.actions.length?(s(),l("div",{key:1,class:h(e.ui.actions)},[(s(!0),l(x,null,S(e.actions,(a,p)=>(s(),z(u,A({key:p},{...e.ui.default.actionButton,...a},{onClick:P(b=>e.onAction(a),["stop"])}),null,16,["onClick"]))),128))],2)):f("",!0)]),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(s(),l("div",{key:2,class:h(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(s(!0),l(x,{key:0},S(e.actions,(a,p)=>(s(),z(u,A({key:p},{...e.ui.default.actionButton,...a},{onClick:P(b=>e.onAction(a),["stop"])}),null,16,["onClick"]))),128)):f("",!0),e.closeButton?(s(),z(u,A({key:1,"aria-label":"Close"},{...e.ui.default.closeButton,...e.closeButton},{onClick:P(e.onClose,["stop"])}),null,16,["onClick"])):f("",!0)],2)):f("",!0)],2),e.timeout?(s(),l("div",{key:0,class:h(e.progressClass),style:me(e.progressStyle)},null,6)):f("",!0)],2)],16)]),_:3},16)}const ae=T(us,[["render",ms]]),ps=W(j.ui.strategy,j.ui.notifications,Me),hs=R({components:{UNotification:ae},inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:o,attrs:r}=Z("notifications",V(e,"ui"),ps),d=ze(),n=oe("notifications",()=>[]),m=y(()=>H(F(o.value.wrapper,o.value.position,o.value.width),e.class));return{ui:o,attrs:r,toast:d,notifications:n,wrapperClass:m}}});function fs(e,o,r,d,n,m){const c=ae;return s(),z(ge,{to:"body"},[t("div",A({class:e.wrapperClass,role:"region"},e.attrs),[e.notifications.length?(s(),l("div",{key:0,class:h(e.ui.container)},[(s(!0),l(x,null,S(e.notifications,i=>(s(),l("div",{key:i.id},[_(c,A(i,{class:i.click&&"cursor-pointer",onClick:u=>i.click&&i.click(i),onClose:u=>e.toast.remove(i.id)}),he({_:2},[S(e.$slots,(u,a)=>({name:a,fn:C(p=>[L(e.$slots,a,fe(_e(p)))])}))]),1040,["class","onClick","onClose"])]))),128))],2)):f("",!0)],16)])}const _s=T(hs,[["render",fs]]),gs={class:"page-wrapper"},vs=["onClick"],ys=t("i",{class:"icon-arrow-up"},null,-1),ws=[ys],Fs={__name:"default",async setup(e){let o,r;const{fetchCategories:d}=Y();[o,r]=J(()=>d()),await o,r();const{updateConfig:n}=ne();console.log(n),[o,r]=J(()=>n()),await o,r();const m=()=>{document.querySelector("body").classList.remove("mmenu-active")},c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(i,u)=>{const a=Lt,p=Jt,b=rs,k=_s;return s(),l("div",null,[t("div",gs,[_(a),L(i.$slots,"default"),_(p),t("button",{id:"scroll-top",ref:"scrollTop",title:"Back to Top",onClick:P(c,["prevent"])},ws,8,vs)]),t("div",{class:"mobile-menu-overlay",onClick:m}),_(b),_(k)])}}};export{Fs as default};
