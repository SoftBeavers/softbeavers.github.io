import{j as u,a as t,I as m,J as c,W as s,a3 as n,aj as i,u as l,y as d}from"./swiper-vue.0447e045.js";const f={class:"form-group"},w=s("label",{for:"register-password-2"},"Hasło *",-1),_={class:"form-group mb-2"},g=s("label",{for:"register-password-3"},"Powtórz hasło *",-1),y=s("div",{class:"fy-form-footer fy-form-footer__register"},[s("button",{type:"submit",class:"btn btn-outline-primary-2"},[s("span",null,"Zapisz hasło"),s("i",{class:"icon-long-arrow-right"})])],-1),z=u({__name:"reset-password",setup(b){const r=t(""),o=t(""),p=()=>{};return(h,e)=>(m(),c("form",{onSubmit:p},[s("div",f,[w,n(s("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>d(r)?r.value=a:null),type:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Musi zawierać przynajmniej jedną cyfrę, jedną dużą i małą literę oraz posiadać minimum 8 znaków",class:"form-control",id:"register-password-2",name:"register-password",required:""},null,512),[[i,l(r)]])]),s("div",_,[g,n(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>d(o)?o.value=a:null),type:"password",class:"form-control",id:"register-password-3",name:"register-password-repeat",required:""},null,512),[[i,l(o)]])]),y],32))}});export{z as default};
