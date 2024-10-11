import{_ as M,a as x}from"./BB7UD-Zf.js";import{_ as z}from"./CgaGhswL.js";import{a as w}from"./CCb-kr4I.js";import{u as N}from"./Be2p1QEg.js";import{u as P}from"./CKlwbh7s.js";import{d as R,c as m,f as A,q as D,E as r,G as e,z as v,I as f,H as _,F as h,X as S,D as d,Y as V,Z as O,W as E}from"./BvFpDmto.js";const j=R({name:"Blog",setup(){const o=m([]),t=m([]),b=m(!0),c=m(!1),u="https://str-gsstudio.gsstudio.com.br",y="1",n=4,l=m(n);P({meta:[{name:"lang",content:"pt-BR"},{name:"language",content:"pt-BR"},{name:"robots",content:"index, follow"},{name:"googlebot",content:"index, follow"},{name:"canonical",content:"https://www.gsstudio.com.br/blog"},{name:"keywords",content:"marketing digital, criação de sites, otimização de sites (SEO), Google Ads, campanhas online, agência digital, agência de marketing, lojas virtuais, e-commerce, gestão de redes sociais, desenvolvimento web, design responsivo, tráfego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sertãozinho, marketing em Ribeirão Preto, SEO local, social media marketing, estratégia de marketing digital, anúncios online, agência de SEO, criação de conteúdo, marketing de conteúdo, hospedagem de sites, otimização de conversão (CRO), email marketing, automação de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, criação de blogs, gestão de tráfego, otimização de desempenho do site, desenvolvimento de sistemas web, produção audiovisual, estratégias de marketing SP, agência de marketing em SP."},{name:"canonical",content:"https://www.gsstudio.com.br/blog"}]}),N({title:"Blog",description:"Artigos para você aprender, novidades sobre tecnologia, marketing e toda área de comunicação on e offline.",ogTitle:"Blog",ogDescription:"Artigos para você aprender, novidades sobre tecnologia, marketing e toda área de comunicação on e offline.",ogUrl:"https://gsstudio.com.br/blog",ogSiteName:"GS STUDIO",ogLocale:"pt_BR"});const s=async a=>{try{const i=await w.get(`${u}/tenants/${a}`);o.value=i.data.articles.sort((g,L)=>new Date(L.published_at).getTime()-new Date(g.published_at).getTime()).map(g=>({...g,imageLoaded:!1}))}catch(i){console.error("Error fetching articles:",i)}finally{b.value=!1}},p=()=>{c.value||!k.value||(c.value=!0,setTimeout(()=>{l.value+=n,c.value=!1},1e3))},T=A(()=>o.value.slice(0,l.value)),k=A(()=>l.value<o.value.length),B=async()=>{try{const a=await w.get(`${u}/categories`);t.value=a.data}catch(a){console.error("Error fetching categories:",a)}},I=a=>a.thumb&&a.thumb.url?new URL(a.thumb.url,u).href:"https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp",$=a=>{const i=a.target;i.src="https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp"},C=a=>{const i=t.value.find(g=>g.id===a);return i?i.title:"Categoria desconhecida"};return D(()=>{s(y),B()}),{articles:T,loading:b,loadingMore:c,getArticleImage:I,getCategoryTitle:C,loadMoreArticles:p,hasMoreArticles:k,handleImageError:$}}}),G={class:"py-5 bg-dark d-flex my-5",id:"topo"},U={class:"container d-flex justify-content-center align-items-center my-5 py-5"},q={class:"row"},F={class:"col text-center text-light my-2"},H={class:"my-2"},W={href:"#blog"},X={class:"py-5 justify-content-center align-content-center",id:"blog"},Y={class:"container my-5"},Z={class:"row"},J={class:"card"},K={class:"image-container"},Q=["src","alt","onLoad"],ee={class:"card-body"},te={class:"mb-2"},oe={class:"article-category"},se={class:"row my-5"},ae={class:"col d-flex align-content-center justify-content-center"},ie=["disabled"],ne={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},re={key:1};function de(o,t,b,c,u,y){const n=x,l=z;return d(),r(h,null,[e("section",G,[e("div",U,[e("div",q,[e("div",F,[e("div",H,[v(n,{to:"/",class:"text-light"},{default:f(()=>t[2]||(t[2]=[_("Página inicial")])),_:1}),t[3]||(t[3]=_(" / ")),t[4]||(t[4]=e("span",null,"Blog",-1))]),t[5]||(t[5]=e("h1",{class:"text-light"},"Blog",-1)),e("a",W,[v(l,{icon:"bx bxs-chevrons-down my-3",fontSize:"3em",color:"#fff"})])])])])]),e("section",X,[e("div",Y,[e("div",Z,[o.loading&&o.articles.length===0?(d(),r(h,{key:0},S(4,s=>e("div",{class:"col-md-3 my-5",key:s},t[6]||(t[6]=[V('<div class="card" data-v-7b0ccee6><div class="image-container" data-v-7b0ccee6><div class="skeleton skeleton-img" data-v-7b0ccee6></div></div><div class="card-body" data-v-7b0ccee6><div class="mb-2" data-v-7b0ccee6><div class="skeleton skeleton-category" data-v-7b0ccee6></div></div><div class="skeleton skeleton-title" data-v-7b0ccee6></div></div></div>',1)]))),64)):(d(!0),r(h,{key:1},S(o.articles,s=>(d(),r("div",{class:"col-sm-3 my-2",key:s.id},[e("div",J,[e("div",K,[v(n,{to:`${s.slug}`},{default:f(()=>[e("img",{src:o.getArticleImage(s),class:O(["img-fluid blur-effect",{blurred:!s.imageLoaded}]),alt:s.titulo,onLoad:p=>s.imageLoaded=!0,onError:t[0]||(t[0]=p=>o.handleImageError(p)),loading:"lazy"},null,42,Q)]),_:2},1032,["to"])]),e("div",ee,[e("div",te,[e("span",oe,E(o.getCategoryTitle(s.category)),1)]),v(n,{to:`${s.slug}`},{default:f(()=>[_(E(s.titulo),1)]),_:2},1032,["to"])])])]))),128))]),e("div",se,[e("div",ae,[e("button",{onClick:t[1]||(t[1]=(...s)=>o.loadMoreArticles&&o.loadMoreArticles(...s)),disabled:o.loadingMore||!o.hasMoreArticles,class:"btn btn-primary"},[o.loadingMore?(d(),r("span",ne)):(d(),r("span",re,"Ver mais artigos"))],8,ie)])])])])],64)}const ve=M(j,[["render",de],["__scopeId","data-v-7b0ccee6"]]);export{ve as default};
