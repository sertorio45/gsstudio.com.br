import{a as D,_ as R}from"./ukfn_9CB.js";import{d as x,c as g,C as v,m as _,D as S,u as k,B as u,F as y,X as $,E as U,O as e,Y as G,Z as F,_ as H,R as I,U as T,o as N,f as Q,V as W,P as L,Q as P,W as B}from"./I6lEao-9.js";import{_ as C,N as X}from"./DrgGkaeD.js";import{_ as Y}from"./CMq9qNA5.js";import"./Bx5Wh2hq.js";const V=s=>(I("data-v-8d50a90e"),s=s(),T(),s),Z={class:"swiper-container my-5"},J=["src","alt"],K=V(()=>e("div",{class:"swiper-gradient-left"},null,-1)),ee=V(()=>e("div",{class:"swiper-gradient-right"},null,-1)),se=x({__name:"CarouselParceiros",setup(s){const t=g(["img/parceiros/cliente-1.webp","img/parceiros/cliente-2.webp","img/parceiros/cliente-3.webp","img/parceiros/cliente-4.webp","img/parceiros/cliente-5.webp","img/parceiros/cliente-6.webp","img/parceiros/cliente-7.webp","img/parceiros/cliente-8.webp","img/parceiros/cliente-9.webp","img/parceiros/cliente-10.webp","img/parceiros/cliente-11.webp","img/parceiros/cliente-12.webp","img/parceiros/cliente-13.webp","img/parceiros/cliente-14.webp","img/parceiros/cliente-15.webp","img/parceiros/cliente-16.webp","img/parceiros/cliente-17.webp","img/parceiros/cliente-18.webp","img/parceiros/cliente-19.webp","img/parceiros/cliente-20.webp","img/parceiros/cliente-21.webp","img/parceiros/cliente-22.webp","img/parceiros/cliente-23.webp","img/parceiros/cliente-24.webp","img/parceiros/cliente-25.webp","img/parceiros/cliente-26.webp","img/parceiros/cliente-27.webp","img/parceiros/cliente-28.webp","img/parceiros/cliente-29.webp","img/parceiros/cliente-30.webp","img/parceiros/cliente-31.webp","img/parceiros/cliente-32.webp","img/parceiros/cliente-33.webp"]);return(c,i)=>(u(),v("div",Z,[_(k(H),{modules:["SwiperAutoplay"in c?c.SwiperAutoplay:k(F)],"slides-per-view":7,"space-between":10,loop:!0,autoplay:{delay:500,disableOnInteraction:!1}},{default:S(()=>[(u(!0),v(y,null,$(t.value,(n,l)=>(u(),U(k(G),{key:l},{default:S(()=>[e("img",{src:n,class:"d-block w-100 parceiro-img",alt:"Parceiro "+(l+1)},null,8,J)]),_:2},1024))),128))]),_:1},8,["modules"]),K,ee]))}}),q=C(se,[["__scopeId","data-v-8d50a90e"]]),te=s=>(I("data-v-404886bc"),s=s(),T(),s),oe={class:"portfolio-section my-5 min-vh-100 text-center"},ae={class:"container-fluid my-5"},ce=te(()=>e("div",{class:"row"},[e("div",{class:"col-12 text-center"},[e("h2",null,"Portifolio")])],-1)),ie={class:"row justify-content-center m-5"},ne={class:"row justify-content-center"},re=["src","onClick"],le={class:"row justify-content-center"},de={class:"col-auto"},me=["disabled"],_e={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ue={key:1},E=4,pe=x({__name:"Portifolio",setup(s){const t=g([]),c=g(2),i=g(!1),n=g(!1),l=g(0),d=async()=>{try{const o=await(await fetch("api/portifolio")).json();t.value=o.map(m=>({src:`img/portifolio/${m}`}))}catch(p){console.error("Error fetching images:",p)}};N(()=>{d()});const h=Q(()=>{const p=[];for(let o=0;o<c.value;o++)p.push(t.value.slice(o*E,(o+1)*E));return p}),r=async()=>{i.value=!0,await new Promise(p=>setTimeout(p,1e3)),c.value+=1,i.value=!1},w=p=>{l.value=p,n.value=!0},f=()=>{n.value=!1};return(p,o)=>(u(),v("section",oe,[e("div",ae,[ce,e("div",ie,[(u(!0),v(y,null,$(h.value,(m,b)=>(u(),v("div",{key:b,class:"col-12 image-row"},[e("div",ne,[(u(!0),v(y,null,$(m,(A,j)=>(u(),v("div",{key:j,class:"col-4 col-md-2 mb-4"},[e("img",{src:A.src,onClick:zs=>w(b*E+j),class:"image-thumbnail img-fluid"},null,8,re)]))),128))])]))),128))]),e("div",le,[e("div",de,[e("button",{onClick:r,disabled:i.value,class:"btn btn-primary"},[i.value?(u(),v("span",_e)):(u(),v("span",ue,"Ver mais"))],8,me)])]),_(k(X),{visible:n.value,imgs:t.value,index:l.value,onHide:f},null,8,["visible","imgs","index"])])]))}}),z=C(pe,[["__scopeId","data-v-404886bc"]]);var ve={};const ge=x({name:"Blog",setup(){const s=g([]),t=g([]),c=g(!0),i=ve.VITE_STRAPI_URL||"https://str-gsstudio.gsstudio.com.br",n="1",l=async o=>{try{const m=await D.get(`${i}/tenants/${o}`);s.value=m.data.articles.sort((b,A)=>new Date(A.published_at)-new Date(b.published_at)).slice(0,4).map(b=>({...b,imageLoaded:!1}))}catch(m){console.error("Error fetching articles:",m)}finally{c.value=!1}},d=async()=>{try{const o=await D.get(`${i}/categories`);t.value=o.data}catch(o){console.error("Error fetching categories:",o)}},h=o=>{if(o.thumb&&o.thumb.url){const m=new URL(o.thumb.url,i).href;return console.log("Generated image URL:",m),m}return"thumb_blog_gsstudio.webp"},r=o=>{if(!o)return"";const m={weekday:"long",year:"numeric",month:"long",day:"numeric"};return new Date(o).toLocaleDateString("pt-BR",m)},w=o=>{if(!o)return"";const m=t.value.find(b=>b.id===o);return m?m.title:""},f=o=>{o[0].isIntersecting&&(l(n),d(),p.unobserve(document.querySelector("#blog")))};let p;return N(()=>{p=new IntersectionObserver(f),p.observe(document.querySelector("#blog"))}),{articles:s,categories:t,loading:c,getArticleImage:h,getCategoryTitle:w,formatDate:r}}}),O=s=>(I("data-v-c4f75634"),s=s(),T(),s),he={class:"my-5 min-vh-100 justify-content-center align-content-center bg-light",id:"blog"},be={class:"container my-5"},fe={class:"row"},we=O(()=>e("h2",{class:"text-center"},"Blog",-1)),ye=B('<div class="card" data-v-c4f75634><div class="image-container" data-v-c4f75634><div class="skeleton skeleton-img" data-v-c4f75634></div></div><div class="card-body" data-v-c4f75634><div class="mb-2" data-v-c4f75634><div class="skeleton skeleton-category" data-v-c4f75634></div></div><div class="skeleton skeleton-title" data-v-c4f75634></div></div></div>',1),$e=[ye],ke={class:"card"},Se={class:"image-container"},xe={class:"card-body"},Ie={class:"mb-2"},Te={class:"article-category"},Ce=O(()=>e("div",{class:"row"},[e("div",{class:"col d-flex align-content-center justify-content-center"},[e("button",{class:"btn btn-primary"},"Ver mais artigos")])],-1));function Ae(s,t,c,i,n,l){const d=R,h=Y;return u(),v("section",he,[e("div",be,[e("div",fe,[we,s.loading?(u(),v(y,{key:0},$(4,r=>e("div",{class:"col-md-3 my-5",key:r},$e)),64)):(u(!0),v(y,{key:1},$(s.articles,r=>(u(),v("div",{class:"col-md-3 my-5",key:r.id},[e("div",ke,[e("div",Se,[_(h,{to:`/artigos/${r.slug}`},{default:S(()=>[_(d,{src:s.getArticleImage(r),class:W(["img-fluid blur-effect",{blurred:!r.imageLoaded}]),alt:r.titulo,onLoad:w=>r.imageLoaded=!0,lazy:"loading"},null,8,["src","class","alt","onLoad"])]),_:2},1032,["to"])]),e("div",xe,[e("div",Ie,[e("span",Te,L(s.getCategoryTitle(r.category)),1)]),_(h,{to:`/artigos/${r.slug}`},{default:S(()=>[P(L(r.titulo),1)]),_:2},1032,["to"])])])]))),128))]),Ce])])}const M=C(ge,[["render",Ae],["__scopeId","data-v-c4f75634"]]),Ee=x({name:"IndexPage",components:{CarouselParceiros:q,Portifolio:z,Blog:M},methods:{importAll(s){return s.keys().map(s)},initCardAnimation(){const s=document.querySelectorAll(".gscard"),t=new IntersectionObserver(c=>{c.forEach(i=>{if(i.isIntersecting){const n=Math.random()*1e3;setTimeout(()=>{i.target.classList.add("animate"),t.unobserve(i.target)},n)}})},{threshold:.5});s.forEach(c=>{t.observe(c)})},initCounters(){const s=document.querySelectorAll(".count"),t=9e3,c=new IntersectionObserver(n=>{n.forEach(l=>{l.isIntersecting&&(this.startCounting(s,t),c.unobserve(l.target))})},{threshold:1}),i=document.getElementById("conquistas");i&&c.observe(i)},startCounting(s,t){s.forEach(c=>{const i=()=>{const n=+c.getAttribute("data-count"),l=+c.innerText,d=n/(t/100);l<n?(c.innerText=Math.ceil(l+d),setTimeout(i,10)):c.innerText=n};i()})},scrollToElement(s){const i=document.querySelector(s).offsetTop-50;window.scrollTo({top:i,behavior:"smooth"})}},mounted(){this.initCardAnimation(),this.initCounters(),this.$router.afterEach((s,t)=>{s.name==="index"&&setTimeout(()=>{this.initCardAnimation()},100)})}}),a=s=>(I("data-v-a43378b0"),s=s(),T(),s),Pe={class:"d-flex align-items-center min-vh-100",id:"index"},je={class:"container text-center"},De={class:"row"},Le={class:"col"},Re=a(()=>e("h1",null,[P("Aumente a "),e("em",null,"performance"),P(" da sua "),e("em",null,"empresa.")],-1)),Ne=a(()=>e("p",{class:"my-4"},"Destaque sua empresa à frente de seus concorrentes com estratégias de branding, marketing e tecnologia.",-1)),Be={class:"d-flex justify-content-center"},Ve={class:"d-flex align-items-center bg-light py-5",id:"sobre"},qe={class:"container"},ze={class:"row"},Oe=a(()=>e("div",{class:"col-5"},[e("h2",null,"Somos especialistas"),e("p",{class:"my-3 d-block"}," Design publicitário, marketing online/offline e websites. Na GS STUDIO, combinamos criatividade e estratégias comprovadas para desenvolver campanhas de marketing eficazes e impactantes. Nossos especialistas em tecnologia oferecem soluções personalizadas para maximizar a eficiência do seu negócio. ")],-1)),Me={class:"col-7 text-center align-content-center content-justify-center px-5"},Ue={class:"d-flex"},Ge={class:"col-4 gscard gscard-border"},Fe=a(()=>e("h3",null,"Design",-1)),He=a(()=>e("a",{href:"#none"},"Saiba mais",-1)),Qe={class:"col-4 gscard gscard-border"},We=a(()=>e("h3",null,"Marketing",-1)),Xe=a(()=>e("a",{href:"#none"},"Saiba mais",-1)),Ye={class:"col-4 gscard gscard-border"},Ze=a(()=>e("h3",null,"Tecnologia",-1)),Je=a(()=>e("a",{href:"#none"},"Saiba mais",-1)),Ke=B('<section class="py-5 text-center" id="conquistas" data-v-a43378b0><div class="container my-3" data-v-a43378b0><div class="row" data-v-a43378b0><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0><h3 data-v-a43378b0><em data-v-a43378b0>+ de <em class="count" data-count="65" data-v-a43378b0>0</em></em></h3><span data-v-a43378b0>Sites produzidos</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0><h3 data-v-a43378b0><em data-v-a43378b0>+ de <em class="count" data-count="250" data-v-a43378b0>0</em></em></h3><span data-v-a43378b0>Clientes ativos</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0><h3 data-v-a43378b0><em data-v-a43378b0>+ de <em class="count" data-count="80" data-v-a43378b0>0</em></em></h3><span data-v-a43378b0>Marcas desenvolvidas</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0><h3 data-v-a43378b0><em data-v-a43378b0>+ de <em class="count" data-count="7" data-v-a43378b0>0</em></em></h3><span data-v-a43378b0>Anos de mercado</span></div></div></div></div></section>',1),es={class:"my-5 align-content-center justify-content-center",id:"parceiros"},ss={class:"container text-center my-5"},ts={class:"row"},os=a(()=>e("h2",null,"Parceiros e clientes",-1)),as={id:"app"},cs={class:"col"},is={class:"min-vh-100 align-content-center justify-content-center bg-light",id:"servicos"},ns={class:"container text-center"},rs={class:"row justify-content-center align-content-center"},ls=a(()=>e("h2",null,"Soluções e serviços",-1)),ds=a(()=>e("p",{class:"my-3"}," A GS STUDIO está comprometida com resultados. Acreditamos que a criatividade e o design, alinhados com uma estratégia eficaz, geram resultados melhores e duradouros. ",-1)),ms={class:"row mt-3"},_s={class:"col-12 col-sm-6 col-md-3"},us={class:"gscard gscard-border"},ps=a(()=>e("h3",null,"Sites",-1)),vs=a(()=>e("span",null,[e("a",{href:"#none"},"Saiba mais")],-1)),gs={class:"col-12 col-sm-6 col-md-3"},hs={class:"gscard gscard-border"},bs=a(()=>e("h3",null,"Redes sociais",-1)),fs=a(()=>e("span",null,[e("a",{href:"#none"},"Saiba mais")],-1)),ws={class:"col-12 col-sm-6 col-md-3"},ys={class:"gscard gscard-border"},$s=a(()=>e("h3",null,"Lojas virtuais",-1)),ks=a(()=>e("span",null,[e("a",{href:"#none"},"Saiba mais")],-1)),Ss={class:"col-12 col-sm-6 col-md-3"},xs={class:"gscard gscard-border"},Is=a(()=>e("h3",null,"Lojas virtuais",-1)),Ts=a(()=>e("h3",null,"Marcas",-1)),Cs=a(()=>e("span",null,[e("a",{href:"#none"},"Saiba mais")],-1)),As={class:"row mt-5"},Es={class:"col"},Ps={class:"text-center gscard my-5",id:"cta"},js={class:"container justify-content-center align-content-center bg-cta my-5"},Ds={class:"row"},Ls={class:"col text-light"},Rs=a(()=>e("h2",{class:"text-light"},"Transforme Resultados com Design, Marketing e Tecnologia!",-1)),Ns=a(()=>e("div",{class:"subheadline d-flex justify-content-center py-2"},[e("p",null,"Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.")],-1)),Bs=a(()=>e("em",null,"Começar orçamento",-1)),Vs=[Bs];function qs(s,t,c,i,n,l){const d=R,h=q,r=z,w=M;return u(),v("main",null,[e("section",Pe,[e("div",je,[e("div",De,[e("div",Le,[Re,Ne,e("div",Be,[e("button",{onClick:t[0]||(t[0]=f=>s.scrollToElement("#sobre")),class:"btn btn-primary"},"Nos conheça um pouco"),e("button",{onClick:t[1]||(t[1]=f=>s.scrollToElement("#contato")),class:"btn btn-primary-border"},"Entre em contato rapidamente")])])])])]),e("section",Ve,[e("div",qe,[e("div",ze,[Oe,e("div",Me,[e("div",null,[e("div",Ue,[e("div",Ge,[_(d,{src:"icons/icon-design.svg",class:"p-2 m-2"}),Fe,He]),e("div",Qe,[_(d,{src:"icons/icon-marketing.svg",class:"p-2 m-2"}),We,Xe]),e("div",Ye,[_(d,{src:"icons/icon-tecnologia.svg",class:"p-2 m-2"}),Ze,Je])])])])])])]),Ke,e("section",es,[e("div",ss,[e("div",ts,[os,e("div",as,[e("div",cs,[_(h)])])])])]),_(r),e("section",is,[e("div",ns,[e("div",rs,[ls,ds,e("div",ms,[e("div",_s,[e("div",us,[_(d,{src:"icons/servicos/sites.svg",class:"p-2 m-2"}),ps,vs])]),e("div",gs,[e("div",hs,[_(d,{src:"icons/servicos/gestao_de_conteudo.svg",class:"p-2 m-2"}),bs,fs])]),e("div",ws,[e("div",ys,[_(d,{src:"icons/servicos/lojas_virtuais.svg",class:"p-2 m-2"}),$s,ks])]),e("div",Ss,[e("div",xs,[_(d,{src:"icons/servicos/branding.svg",class:"p-2 m-2"}),Is,Ts,Cs])])]),e("div",As,[e("div",Es,[e("button",{onClick:t[2]||(t[2]=f=>s.scrollToElement("#none")),class:"btn btn-primary"}," Veja mais serviços")])])])])]),e("section",Ps,[e("div",js,[e("div",Ds,[e("div",Ls,[Rs,Ns,e("button",{onClick:t[3]||(t[3]=f=>s.scrollToElement("#none")),class:"btn btn-white"},Vs)])])])]),_(w)])}const Hs=C(Ee,[["render",qs],["__scopeId","data-v-a43378b0"]]);export{Hs as default};
