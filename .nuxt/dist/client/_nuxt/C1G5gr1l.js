import{_ as b}from"./CGX74RtV.js";import{a as f}from"./CCb-kr4I.js";import{u as B,a as A,_ as T}from"./hu2dajrZ.js";import{d as R,c,o as C,C as i,O as e,U as D,P as h,q as E,V as v,E as F,B as l}from"./Cmk6LNsE.js";const M=R({name:"ArticleDetail",setup(){const s=c(null),o=c([]),d=c(!0),m=c(!1),g=B(),p=A(),n="https://str-gsstudio.gsstudio.com.br",u=async t=>{try{console.log(`Fetching article from ${n}/articles?slug=${t}`);const a=await f.get(`${n}/articles?slug=${t}`);console.log("Response:",a),a.data.length?s.value=a.data[0]:console.error("Article not found")}catch(a){console.error("Error fetching article:",a.response?a.response.data:a.message)}finally{d.value=!1}},r=async()=>{try{console.log(`Fetching categories from ${n}/categories`);const t=await f.get(`${n}/categories`);console.log("Response:",t),o.value=t.data}catch(t){console.error("Error fetching categories:",t.response?t.response.data:t.message)}},k=t=>{if(t.thumb&&t.thumb.url){const a=new URL(t.thumb.url,n).href;return console.log("Generated image URL:",a),a}return"/thumb_blog_gsstudio.webp"},y=t=>{if(!t)return"";const a={weekday:"long",year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString("pt-BR",a)},_=t=>{if(!t)return"";const a=o.value.find($=>$.id===t);return a?a.title:""},w=t=>t&&t.thumb&&t.thumb.url,L=()=>{m.value=!0},I=()=>{p.go(-1)};return C(async()=>{const t=g.params.slug;console.log("Fetching article with slug:",t),await u(t),await r(),console.log("Article:",s.value),console.log("Categories:",o.value)}),{article:s,categories:o,loading:d,imageLoaded:m,getArticleImage:k,getCategoryTitle:_,formatDate:y,hasThumbnail:w,onImageLoad:L,goBack:I}}}),S={class:"my-5",id:"article-detail"},V={class:"container my-5"},z={class:"row"},H={class:"col-2"},N={class:"sticky-top"},U={class:"col-7"},q={key:0},O={key:1},P={class:"mb-3"},G={class:"article-category"},j=["innerHTML"],J={class:"my-4"},K={key:0},Q=["srcset"],W=["innerHTML"],X={key:2};function Y(s,o,d,m,g,p){const n=b,u=b;return l(),i("main",null,[e("section",S,[e("div",V,[e("div",z,[e("div",H,[e("div",N,[e("button",{onClick:o[0]||(o[0]=(...r)=>s.goBack&&s.goBack(...r)),class:"btn btn-primary-border"},"< Voltar")])]),e("div",U,[s.loading?(l(),i("div",q,o[2]||(o[2]=[D('<div class="d-flex mb-3" data-v-15d43160><div class="skeleton skeleton-category me-2" data-v-15d43160></div> <div class="skeleton skeleton-date" data-v-15d43160></div></div><div class="skeleton skeleton-title mb-3" data-v-15d43160></div><div class="skeleton skeleton-img mb-3" data-v-15d43160></div><div class="skeleton skeleton-content mb-3" data-v-15d43160></div>',4)]))):s.article?(l(),i("div",O,[e("div",P,[e("span",G,h(s.article.category.title),1),e("span",{innerHTML:s.formatDate(s.article.published_at),class:"mx-5"},null,8,j)]),e("h1",null,h(s.article.titulo),1),e("div",J,[s.hasThumbnail(s.article)?(l(),i("picture",K,[e("source",{srcset:s.getArticleImage(s.article),onLoad:o[1]||(o[1]=(...r)=>s.onImageLoad&&s.onImageLoad(...r))},null,40,Q),E(n,{src:s.getArticleImage(s.article),class:v(["img-fluid blur-effect",{blurred:!s.imageLoaded}]),alt:s.article.titulo,onLoad:s.onImageLoad,lazy:"loading"},null,8,["src","class","alt","onLoad"])])):(l(),F(u,{key:1,src:"/thumb_blog_gsstudio.webp",class:v(["img-fluid blur-effect",{blurred:!s.imageLoaded}]),alt:"Default Image",lazy:"loading",onLoad:s.onImageLoad},null,8,["class","onLoad"]))]),e("div",{innerHTML:s.article.content},null,8,W)])):(l(),i("div",X,o[3]||(o[3]=[e("p",null,"Artigo não encontrado.",-1)])))]),o[4]||(o[4]=e("div",{class:"col-3 p-5"},[e("div",{class:"sticky-top"},[e("div",{class:"social-links mb-4"},[e("a",{href:"https://www.facebook.com",class:"d-block mb-2",target:"_blank"},"Facebook"),e("a",{href:"https://www.twitter.com",class:"d-block mb-2",target:"_blank"},"Twitter"),e("a",{href:"https://www.linkedin.com",class:"d-block mb-2",target:"_blank"},"LinkedIn")]),e("div",{class:"newsletter-cta p-4 sticky-top bg-light rounded"},[e("h3",null,"Assine para novas atualizações."),e("form",{method:"POST",action:"https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/20534155/d57a69e4-6f43-4768-a600-5f7d30306260",class:"form"},[e("div",{class:"mb-3"},[e("input",{type:"email",class:"form-control",id:"email",name:"email",placeholder:"E-mail",required:""})]),e("button",{type:"submit",class:"btn btn-primary"},"Inscrever-se")])])])],-1))])])])])}const te=T(M,[["render",Y],["__scopeId","data-v-15d43160"]]);export{te as default};
