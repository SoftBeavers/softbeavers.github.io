import{d as s,a as r,n as i,c as u}from"./entry.d243ce33.js";import{u as c}from"./useAuth.0993ce50.js";import{j as p,$ as m,I as d,J as l}from"./swiper-vue.0447e045.js";import"./useToast.d3c6b3bf.js";const T=p({__name:"activation",setup(y){const{updateUser:t}=c(),e=s("authorizationToken"),{$api:o}=u(),n=r();return m(async()=>{try{return e.value=await o(`/users/activate/${n.query.activationToken}`,{method:"POST"}),t(),i("/")}catch(a){throw alert("Link wygasł. Wysłaliśmy nowy na podany adres e-mail"),a}}),(a,_)=>(d(),l("div"))}});export{T as default};
