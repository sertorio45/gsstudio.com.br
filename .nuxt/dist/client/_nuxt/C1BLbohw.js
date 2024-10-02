import{_ as k}from"./C9F6Rhcp.js";import{_ as U}from"./CmFMxDQ4.js";import{u as E}from"./DaUH7cNf.js";import{d as N,c as m,o as P,Y as q,B as n,C as l,O as s,z as A,W as d,X as p,Z as f,F as _,R as h,P as y,_ as F,Q as b,q as g,D as w,V as T,U as j}from"./Cmk6LNsE.js";import{_ as C}from"./hu2dajrZ.js";import{u as L}from"./Bu8XvJ80.js";import"./Dvx6yiTJ.js";const B={class:"container"},D={class:"gscard-border p-5"},O={class:"row"},I={class:"col-md-6 mb-4"},R={class:"input-group"},G={class:"col-md-6 mb-4"},J={class:"input-group"},Y={class:"row"},Z={class:"col-md-6 mb-4"},H={class:"input-group"},Q=["value"],W={class:"col-md-6 mb-4"},X={class:"input-group"},K=["value"],ss={class:"row"},ts={class:"col-md-6 mb-4"},es={class:"input-group"},os={class:"col-md-6 mb-4"},as={class:"input-group"},is={class:"form-group mb-4"},ns={class:"form-group mb-4 form-check"},ls={class:"form-check-label"},ds={class:"form-group text-center"},rs=["disabled"],cs={key:0},bs={key:1},us={key:2},ms=N({__name:"Form",setup(x){const o=m({name:"",email:"",phone:"",city:"",uf:"",company:"",message:"",terms:!1}),a=m([]),v=m([]),r=m(!1),u=m(!1);P(async()=>{try{const t=await(await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")).json();a.value=t.map(c=>({sigla:c.sigla,nome:c.nome}))}catch(i){console.error("Erro ao carregar os estados:",i)}});const V=async()=>{if(o.value.uf)try{const t=await(await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${o.value.uf}/municipios`)).json();v.value=t.map(c=>({id:c.id,nome:c.nome}))}catch(i){console.error("Erro ao carregar as cidades:",i)}},$=()=>{o.value={name:"",email:"",phone:"",city:"",uf:"",company:"",message:"",terms:!1},u.value=!1},M=async()=>{r.value=!0,u.value=!1;try{const t=await(await fetch("https://gsstudio.com.br/send-email.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(o.value).toString()})).json();t.success?(u.value=!0,setTimeout(()=>{$()},2e3)):alert(t.message)}catch(i){alert("Erro ao enviar email: "+i)}finally{r.value=!1}};return(i,t)=>{const c=k,z=q("mask");return n(),l("div",B,[s("div",D,[s("form",{onSubmit:A(M,["prevent"])},[s("div",O,[s("div",I,[s("div",R,[t[8]||(t[8]=s("span",{class:"input-group-text"},[s("i",{class:"bx bx-user"})],-1)),d(s("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.value.name=e),placeholder:"Seu nome completo*",class:"form-control input-text-size",required:""},null,512),[[p,o.value.name]])])]),s("div",G,[s("div",J,[t[9]||(t[9]=s("span",{class:"input-group-text"},[s("i",{class:"bx bx-envelope"})],-1)),d(s("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.value.email=e),type:"email",placeholder:"Seu melhor e-mail*",class:"form-control input-text-size",required:""},null,512),[[p,o.value.email]])])])]),s("div",Y,[s("div",Z,[s("div",H,[t[11]||(t[11]=s("span",{class:"input-group-text"},[s("i",{class:"bx bx-globe"})],-1)),d(s("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.value.uf=e),onChange:V,class:"form-control input-text-size",required:""},[t[10]||(t[10]=s("option",{value:"",disabled:"",selected:""},"Selecione o UF*",-1)),(n(!0),l(_,null,h(a.value,e=>(n(),l("option",{key:e.sigla,value:e.sigla},y(e.nome),9,Q))),128))],544),[[f,o.value.uf]])])]),s("div",W,[s("div",X,[t[13]||(t[13]=s("span",{class:"input-group-text"},[s("i",{class:"bx bx-map"})],-1)),d(s("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.value.city=e),class:"form-control input-text-size",required:""},[t[12]||(t[12]=s("option",{value:"",disabled:"",selected:""},"Selecione a cidade*",-1)),(n(!0),l(_,null,h(v.value,e=>(n(),l("option",{key:e.id,value:e.nome},y(e.nome),9,K))),128))],512),[[f,o.value.city]])])])]),s("div",ss,[s("div",ts,[s("div",es,[t[14]||(t[14]=s("span",{class:"input-group-text"},[s("i",{class:"bx bx-phone"})],-1)),d(s("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.value.phone=e),placeholder:"Celular*",class:"form-control input-text-size",required:""},null,512),[[p,o.value.phone],[z,"(00) 00000-0000"]])])]),s("div",os,[s("div",as,[t[15]||(t[15]=s("span",{class:"input-group-text"},[s("i",{class:"bx bx-building"})],-1)),d(s("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>o.value.company=e),placeholder:"Nome da empresa*",class:"form-control input-text-size",required:""},null,512),[[p,o.value.company]])])])]),s("div",is,[d(s("textarea",{"onUpdate:modelValue":t[6]||(t[6]=e=>o.value.message=e),placeholder:"Nos conte um pouco sobre sua necessidade*",class:"form-control textarea-height input-text-size",required:""},null,512),[[p,o.value.message]])]),s("div",ns,[d(s("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[7]||(t[7]=e=>o.value.terms=e),required:""},null,512),[[F,o.value.terms]]),s("label",ls,[t[17]||(t[17]=b(" Ao enviar você será protegido por Google reCAPTCHA e sujeito à ")),g(c,{to:"/politica-de-privacidade",class:"privacy-policy-link"},{default:w(()=>t[16]||(t[16]=[b("Política de privacidade")])),_:1})])]),s("div",ds,[s("button",{type:"submit",class:T(["btn m-0",r.value?"btn-secondary":u.value?"btn-success":"btn-primary"]),disabled:r.value},[r.value?(n(),l("span",cs,t[18]||(t[18]=[s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),b(" Enviando... ")]))):u.value?(n(),l("span",bs,t[19]||(t[19]=[s("i",{class:"bx bx-check-circle"},null,-1),b(" Sucesso! ")]))):(n(),l("span",us,t[20]||(t[20]=[s("i",{class:"bx bx-send"},null,-1),b(" Enviar ")])))],10,rs)])],32)])])}}}),S=C(ms,[["__scopeId","data-v-24b81c3c"]]),ps={class:"py-5 bg-dark d-flex my-5",id:"topo"},vs={class:"container d-flex justify-content-center align-items-center my-5 py-5"},gs={class:"row"},xs={class:"col text-center text-light my-2"},_s={class:"my-2"},fs={href:"#form"},hs={id:"contato",class:"my-3"},ys={class:"container"},ks={class:"row"},ws={class:"col my-5 py-5 d-sm-block",id:"form"},Cs={components:{Form:S},data(){return{currentComponent:null}},methods:{showComponent(x){this.currentComponent=x},resetComponent(){this.currentComponent=null}}},Ss=Object.assign(Cs,{__name:"contato",setup(x){return L({title:"Contato - Gs Studio - Agência de marketing, design e tecnologia"}),E(),(o,a)=>{const v=k,r=U;return n(),l(_,null,[s("section",ps,[s("div",vs,[s("div",gs,[s("div",xs,[s("div",_s,[g(v,{to:"/",class:"text-light"},{default:w(()=>a[0]||(a[0]=[b("Página inicial")])),_:1}),a[1]||(a[1]=b(" / ")),a[2]||(a[2]=s("span",null,"Contato",-1))]),a[3]||(a[3]=s("h1",{class:"text-light"},"Contato",-1)),s("a",fs,[g(r,{icon:"bx bxs-chevrons-down my-3",fontSize:"3em",color:"#fff"})])])])])]),s("section",hs,[s("div",ys,[s("div",ks,[s("div",ws,[g(S)])])])]),a[4]||(a[4]=j('<section class="contact-options text-dark py-5 my-3" data-v-9c66bb8b><div class="container" data-v-9c66bb8b><div class="row text-center" data-v-9c66bb8b><div class="col-md-4 mb-4" data-v-9c66bb8b><div class="contact-option gscard gscard-border p-4 h-100" data-v-9c66bb8b><div class="icon-circle bg-white mb-3 mx-auto" data-v-9c66bb8b><i class="bx bx-envelope" data-v-9c66bb8b></i></div><h4 data-v-9c66bb8b>E-mail</h4><p data-v-9c66bb8b>Tem alguma dúvida?</p><a href="mailto:hello@gsstudio.com.br" class="text-dark" data-v-9c66bb8b>hello@gsstudio.com.br</a></div></div><div class="col-md-4 mb-4" data-v-9c66bb8b><div class="contact-option gscard gscard-border p-4 h-100" data-v-9c66bb8b><div class="icon-circle bg-white mb-3 mx-auto" data-v-9c66bb8b><i class="bx bx-phone" data-v-9c66bb8b></i></div><h4 data-v-9c66bb8b>Localização</h4><p data-v-9c66bb8b><a href="https://maps.app.goo.gl/8h4Ee8B4VMYssSNM8" class="text-dark" target="_blank" data-v-9c66bb8b>Av. Maria de Jesus Condeixa, 600, Jardim Palma Travassos, CEP: 14091-240, Condomínio NEO, Ribeirão Preto - SP</a></p></div></div><div class="col-md-4 mb-4" data-v-9c66bb8b><div class="contact-option gscard gscard-border p-4 h-100" data-v-9c66bb8b><div class="icon-circle bg-white mb-3 mx-auto" data-v-9c66bb8b><i class="bx bx-chat" data-v-9c66bb8b></i></div><h4 data-v-9c66bb8b>Atendimento</h4><p data-v-9c66bb8b>Fale com nossa atendente Zoe</p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#botModal" data-v-9c66bb8b> Abrir Chat </button></div></div></div></div></section><div class="modal fade" id="botModal" tabindex="-1" aria-labelledby="botModalLabel" aria-hidden="true" data-v-9c66bb8b><div class="modal-dialog modal-lg modal-dialog-centered" data-v-9c66bb8b><div class="modal-content" data-v-9c66bb8b><div class="modal-header" data-v-9c66bb8b><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-9c66bb8b></button></div><div class="modal-body" data-v-9c66bb8b><iframe src="https://bot.gsstudio.com.br/iniciar" style="border:none;width:100%;height:600px;" data-v-9c66bb8b></iframe></div></div></div></div>',2))],64)}}}),Ps=C(Ss,[["__scopeId","data-v-9c66bb8b"]]);export{Ps as default};
