import{c as U,a as k,_ as w}from"./CVvX2pY7.js";import{_ as V}from"./CgaGhswL.js";import{u as q}from"./CYGrraCV.js";import{d as A,c as u,q as P,a0 as T,D as i,E as n,G as t,C as O,_ as d,$ as v,a1 as h,F as x,X as _,W as y,a2 as F,H as m,z as b,I as C,Z as I,Y as B}from"./BvFpDmto.js";import{u as D}from"./DQYZeau4.js";import{u as L}from"./CqTZemqV.js";const j={class:"container"},G={class:"gscard-border p-5"},R={class:"row"},H={class:"col-md-6 mb-4"},J={class:"input-group"},W={class:"col-md-6 mb-4"},Y={class:"input-group"},Z={class:"row"},X={class:"col-md-6 mb-4"},K={class:"input-group"},Q=["value"],tt={class:"col-md-6 mb-4"},ot={class:"input-group"},et=["value"],st={class:"row"},at={class:"col-md-6 mb-4"},it={class:"input-group"},nt={class:"col-md-6 mb-4"},lt={class:"input-group"},dt={class:"form-group mb-4"},rt={class:"form-group mb-4 form-check"},ct={class:"form-check-label"},mt={class:"form-group text-center"},pt=["disabled"],ut={key:0},vt={key:1},gt={key:2},bt=A({__name:"Form",setup(f){const e=u({name:"",email:"",phone:"",city:"",uf:"",company:"",message:"",terms:!1}),a=u([]),g=u([]),r=u(!1),p=u(!1),$=U();P(async()=>{try{const o=await(await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")).json();a.value=o.map(c=>({sigla:c.sigla,nome:c.nome}))}catch(l){console.error("Erro ao carregar os estados:",l)}});const E=async()=>{if(e.value.uf)try{const o=await(await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.value.uf}/municipios`)).json();g.value=o.map(c=>({id:c.id,nome:c.nome}))}catch(l){console.error("Erro ao carregar as cidades:",l)}},z=()=>{e.value={name:"",email:"",phone:"",city:"",uf:"",company:"",message:"",terms:!1},p.value=!1},M=async()=>{r.value=!0,p.value=!1;try{await $.$mail.send({from:"GS STUDIO <noreply@gsstudio.com.br>",to:'"GS STUDIO" <noreply@gsstudio.com.br>',subject:`Novo contato de ${e.value.name}`,html:`
        <html>
          <body style='margin: 0; padding: 0; font-family: "Montserrat", sans-serif; background-color: #f4f4f4; font-size: 14px;'>
            <div style='background-color: #000; text-align: center; padding: 20px 0;'>
              <img src='https://s3.gsstudio.com.br/images-email-marketing/logotipogssstudio.png' alt='Logo da Empresa' style='max-width: 200px;'>
            </div>
            <div style='max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); padding: 40px;'>
              <p><strong>Nome:</strong> ${e.value.name}</p>
              <p><strong>Email:</strong> ${e.value.email}</p>
              <p><strong>Telefone:</strong> ${e.value.phone}</p>
              <p><strong>Cidade:</strong> ${e.value.city}</p>
              <p><strong>UF:</strong> ${e.value.uf}</p>
              <p><strong>Empresa:</strong> ${e.value.company}</p>
              <p><strong>Mensagem:</strong> ${e.value.message}</p>
            </div>
            <div style='background-color: #000; text-align: center; color: #fff; padding: 20px 0;'>
              <p>Dúvidas?</p>
              <p><b><a href='https://wa.me/551640422901?text=Ol%C3%A1%2C+gostaria+de+tirar+algumas+d%C3%BAvidas.' style='color: #fff; text-decoration: none;'>Clique aqui e fale conosco.</a></b></p>
              <div style='margin: 25px 0;'>
                <a href='https://www.instagram.com/agenciagsstudio/' target='_blank' style='margin: 0 10px;'>
                  <img src='https://s3.gsstudio.com.br/gsstudio/social%20icons/instagram-light.webp' alt='Instagram' style='width: 30px; height: 30px;'>
                </a>
                <a href='https://www.linkedin.com/company/agenciagsstudio/' target='_blank' style='margin: 0 10px;'>
                  <img src='https://s3.gsstudio.com.br/gsstudio/social%20icons/linkedin-light.webp' alt='LinkedIn' style='width: 30px; height: 30px;'>
                </a>
              </div>
              <p><a href='https://www.gsstudio.com.br/politica-de-privacidade' target='_blank' style='color: #fff; text-decoration: none;'>política de privacidade</a> | <a href='https://gsstudio.com.br' style='color: #fff; text-decoration: none;'>gsstudio.com.br</a> | <a href='mailto:hello@gsstudio.com.br' style='color: #fff; text-decoration: none;'>hello@gsstudio.com.br</a></p>
            </div>
          </body>
        </html>
      `}),p.value=!0,setTimeout(()=>{z()},2e3)}catch(l){alert("Erro ao enviar email: "+l)}finally{r.value=!1}};return(l,o)=>{const c=k,N=T("mask");return i(),n("div",j,[t("div",G,[t("form",{onSubmit:O(M,["prevent"])},[t("div",R,[t("div",H,[t("div",J,[o[8]||(o[8]=t("span",{class:"input-group-text"},[t("i",{class:"bx bx-user"})],-1)),d(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.value.name=s),placeholder:"Seu nome completo*",class:"form-control input-text-size",required:""},null,512),[[v,e.value.name]])])]),t("div",W,[t("div",Y,[o[9]||(o[9]=t("span",{class:"input-group-text"},[t("i",{class:"bx bx-envelope"})],-1)),d(t("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>e.value.email=s),type:"email",placeholder:"Seu melhor e-mail*",class:"form-control input-text-size",required:""},null,512),[[v,e.value.email]])])])]),t("div",Z,[t("div",X,[t("div",K,[o[11]||(o[11]=t("span",{class:"input-group-text"},[t("i",{class:"bx bx-globe"})],-1)),d(t("select",{"onUpdate:modelValue":o[2]||(o[2]=s=>e.value.uf=s),onChange:E,class:"form-control input-text-size",required:""},[o[10]||(o[10]=t("option",{value:"",disabled:"",selected:""},"Selecione o UF*",-1)),(i(!0),n(x,null,_(a.value,s=>(i(),n("option",{key:s.sigla,value:s.sigla},y(s.nome),9,Q))),128))],544),[[h,e.value.uf]])])]),t("div",tt,[t("div",ot,[o[13]||(o[13]=t("span",{class:"input-group-text"},[t("i",{class:"bx bx-map"})],-1)),d(t("select",{"onUpdate:modelValue":o[3]||(o[3]=s=>e.value.city=s),class:"form-control input-text-size",required:""},[o[12]||(o[12]=t("option",{value:"",disabled:"",selected:""},"Selecione a cidade*",-1)),(i(!0),n(x,null,_(g.value,s=>(i(),n("option",{key:s.id,value:s.nome},y(s.nome),9,et))),128))],512),[[h,e.value.city]])])])]),t("div",st,[t("div",at,[t("div",it,[o[14]||(o[14]=t("span",{class:"input-group-text"},[t("i",{class:"bx bx-phone"})],-1)),d(t("input",{"onUpdate:modelValue":o[4]||(o[4]=s=>e.value.phone=s),placeholder:"Celular*",class:"form-control input-text-size",required:""},null,512),[[v,e.value.phone],[N,"(00) 00000-0000"]])])]),t("div",nt,[t("div",lt,[o[15]||(o[15]=t("span",{class:"input-group-text"},[t("i",{class:"bx bx-building"})],-1)),d(t("input",{"onUpdate:modelValue":o[5]||(o[5]=s=>e.value.company=s),placeholder:"Nome da empresa*",class:"form-control input-text-size",required:""},null,512),[[v,e.value.company]])])])]),t("div",dt,[d(t("textarea",{"onUpdate:modelValue":o[6]||(o[6]=s=>e.value.message=s),placeholder:"Nos conte um pouco sobre sua necessidade*",class:"form-control textarea-height input-text-size",required:""},null,512),[[v,e.value.message]])]),t("div",rt,[d(t("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":o[7]||(o[7]=s=>e.value.terms=s),required:""},null,512),[[F,e.value.terms]]),t("label",ct,[o[17]||(o[17]=m(" Ao enviar você será protegido por Google reCAPTCHA e sujeito à ")),b(c,{to:"/politica-de-privacidade",class:"privacy-policy-link"},{default:C(()=>o[16]||(o[16]=[m("Política de privacidade")])),_:1})])]),t("div",mt,[t("button",{type:"submit",class:I(["btn m-0",r.value?"btn-secondary":p.value?"btn-success":"btn-primary"]),disabled:r.value},[r.value?(i(),n("span",ut,o[18]||(o[18]=[t("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),m(" Enviando... ")]))):p.value?(i(),n("span",vt,o[19]||(o[19]=[t("i",{class:"bx bx-check-circle"},null,-1),m(" Sucesso! ")]))):(i(),n("span",gt,o[20]||(o[20]=[t("i",{class:"bx bx-send"},null,-1),m(" Enviar ")])))],10,pt)])],32)])])}}}),S=w(bt,[["__scopeId","data-v-2f4c6097"]]),ft={class:"py-5 bg-dark d-flex my-5",id:"topo"},xt={class:"container d-flex justify-content-center align-items-center my-5 py-5"},ht={class:"row"},_t={class:"col text-center text-light my-2"},yt={class:"my-2"},kt={href:"#form"},wt={id:"contato",class:"my-3"},Ct={class:"container"},St={class:"row"},$t={class:"col my-5 py-5 d-sm-block",id:"form"},Et={components:{Form:S},data(){return{currentComponent:null}},methods:{showComponent(f){this.currentComponent=f},resetComponent(){this.currentComponent=null}}},zt=Object.assign(Et,{__name:"contato",setup(f){return L({meta:[{name:"lang",content:"pt-BR"},{name:"language",content:"pt-BR"},{name:"robots",content:"index, follow"},{name:"googlebot",content:"index, follow"},{name:"canonical",content:"https://www.gsstudio.com.br/contato"},{name:"keywords",content:"marketing digital, criação de sites, otimização de sites (SEO), Google Ads, campanhas online, agência digital, agência de marketing, lojas virtuais, e-commerce, gestão de redes sociais, desenvolvimento web, design responsivo, tráfego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sertãozinho, marketing em Ribeirão Preto, SEO local, social media marketing, estratégia de marketing digital, anúncios online, agência de SEO, criação de conteúdo, marketing de conteúdo, hospedagem de sites, otimização de conversão (CRO), email marketing, automação de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, criação de blogs, gestão de tráfego, otimização de desempenho do site, desenvolvimento de sistemas web, produção audiovisual, estratégias de marketing SP, agência de marketing em SP."},{name:"canonical",content:"https://www.gsstudio.com.br/contato"}]}),D({title:"Contato",ogTitle:"Contato",ogUrl:"https://gsstudio.com.br/contato",ogSiteName:"GS STUDIO",ogLocale:"pt_BR"}),q(),(e,a)=>{const g=k,r=V;return i(),n(x,null,[t("section",ft,[t("div",xt,[t("div",ht,[t("div",_t,[t("div",yt,[b(g,{to:"/",class:"text-light"},{default:C(()=>a[0]||(a[0]=[m("Página inicial")])),_:1}),a[1]||(a[1]=m(" / ")),a[2]||(a[2]=t("span",null,"Contato",-1))]),a[3]||(a[3]=t("h1",{class:"text-light"},"Contato",-1)),t("a",kt,[b(r,{icon:"bx bxs-chevrons-down my-3",fontSize:"3em",color:"#fff"})])])])])]),t("section",wt,[t("div",Ct,[t("div",St,[t("div",$t,[b(S)])])])]),a[4]||(a[4]=B('<section class="contact-options text-dark py-5 my-3" data-v-57c548c5><div class="container" data-v-57c548c5><div class="row text-center" data-v-57c548c5><div class="col-md-4 mb-4" data-v-57c548c5><div class="contact-option gscard gscard-border p-4 h-100" data-v-57c548c5><div class="icon-circle bg-white mb-3 mx-auto" data-v-57c548c5><i class="bx bx-envelope" data-v-57c548c5></i></div><h4 data-v-57c548c5>E-mail</h4><p data-v-57c548c5>Tem alguma dúvida?</p><a href="mailto:hello@gsstudio.com.br" class="text-dark" data-v-57c548c5>hello@gsstudio.com.br</a></div></div><div class="col-md-4 mb-4" data-v-57c548c5><div class="contact-option gscard gscard-border p-4 h-100" data-v-57c548c5><div class="icon-circle bg-white mb-3 mx-auto" data-v-57c548c5><i class="bx bx-phone" data-v-57c548c5></i></div><h4 data-v-57c548c5>Localização</h4><p data-v-57c548c5><a href="https://maps.app.goo.gl/8h4Ee8B4VMYssSNM8" class="text-dark" target="_blank" data-v-57c548c5>Av. Maria de Jesus Condeixa, 600, Jardim Palma Travassos, CEP: 14091-240, Condomínio NEO, Ribeirão Preto - SP</a></p></div></div><div class="col-md-4 mb-4" data-v-57c548c5><div class="contact-option gscard gscard-border p-4 h-100" data-v-57c548c5><div class="icon-circle bg-white mb-3 mx-auto" data-v-57c548c5><i class="bx bx-chat" data-v-57c548c5></i></div><h4 data-v-57c548c5>Atendimento</h4><p data-v-57c548c5>Fale com nossa atendente Zoe</p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#botModal" data-v-57c548c5> Abrir Chat </button></div></div></div></div></section><div class="modal fade" id="botModal" tabindex="-1" aria-labelledby="botModalLabel" aria-hidden="true" data-v-57c548c5><div class="modal-dialog modal-lg modal-dialog-centered" data-v-57c548c5><div class="modal-content" data-v-57c548c5><div class="modal-header" data-v-57c548c5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-57c548c5></button></div><div class="modal-body" data-v-57c548c5><iframe src="https://bot.gsstudio.com.br/iniciar" style="border:none;width:100%;height:600px;" data-v-57c548c5></iframe></div></div></div></div>',2))],64)}}}),Pt=w(zt,[["__scopeId","data-v-57c548c5"]]);export{Pt as default};
