import{d as s,a as r,n as i,c as u}from"./entry.199227a5.js";import{u as c}from"./useAuth.0ab57fe2.js";import{j as p,_ as m,H as d,I as _}from"./swiper-vue.1d376ba0.js";import"./useToast.3a412ab8.js";const T=p({__name:"activation",setup(l){const{updateUser:t}=c(),e=s("authorizationToken"),{$api:o}=u(),n=r();return m(async()=>{try{return e.value=await o(`/users/activate/${n.query.activationToken}`,{method:"POST"}),t(),i("/")}catch(a){throw alert("Link wygasł. Wysłaliśmy nowy na podany adres e-mail"),a}}),(a,y)=>(d(),_("div"))}});export{T as default};