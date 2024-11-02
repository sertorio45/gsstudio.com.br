import{a as k}from"./CCb-kr4I.js";import{u as M,b as N,_ as U}from"./DurcqPxx.js";import{u as C}from"./CHt3z8nR.js";import{u as F}from"./CsNBk8l-.js";import{d as H,c as l,w as R,q as V,E as i,G as e,F as G,X as j,Y as O,W as w,C as _,Z as q,_ as z,$ as S,H as p,D as r}from"./igMEG2lE.js";const W=H({name:"ArticleDetail",setup(){const s=l(null),o=l(!0),b=l(!1),g=l([]),h=M(),f=N(),a="https://str-gsstudio.gsstudio.com.br",c=l(""),d=l(!1),u=l(!1),m=l(!1),T=async t=>{try{const n=await k.get(`${a}/articles?slug=${t}`);n.data.length&&(s.value=n.data[0])}catch(n){console.error("Erro ao buscar o artigo:",n)}finally{o.value=!1}},v=t=>t.thumb&&t.thumb.url?new URL(t.thumb.url,a).href:"https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp",x=t=>{if(!t)return"";const n={weekday:"long",year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString("pt-BR",n)},y=t=>t&&t.thumb&&t.thumb.url,L=()=>{b.value=!0},$=t=>{const n=t.target;n.src="https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp"},D=()=>{f.go(-1)},E=t=>{t.name==="Link"?navigator.clipboard.writeText(t.url):window.open(t.url,"_blank","noopener,noreferrer")},I=async()=>{d.value=!0,u.value=!1,m.value=!1;const t="https://webhook.gsstudio.com.br/webhook/gsstudionewsletter";try{const n=await k.post(t,{email:c.value},{headers:{"Content-Type":"application/json"}});n.status>=200&&n.status<300?(u.value=!0,setTimeout(()=>{c.value="",u.value=!1},2e3)):m.value=!0}catch{m.value=!0}finally{d.value=!1}};return R(s,t=>{if(t){const n=window.location.href,B=y(t)?v(t):"https://gsstudio.com.br/img/thumb_gsstudio.jpg";C({title:t.titulo,description:t.seo_description,keywords:t.seo_keywords,ogTitle:t.titulo,ogDescription:t.seo_description,ogUrl:n,ogSiteName:"GS STUDIO",ogLocale:"pt_BR",ogType:"article"}),F({meta:[{name:"robots",content:"index, follow"},{name:"canonical",content:n},{property:"og:type",content:"article"},{property:"og:title",content:t.titulo},{property:"og:description",content:t.seo_description},{property:"og:url",content:n},{property:"og:site_name",content:"GS STUDIO"},{property:"og:image",content:B},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"600"},{property:"og:image:alt",content:t.titulo||"GS STUDIO - Marketing, comunicação e desenvolvimento web"}]})}}),console.log(h.params.slug),V(async()=>{const t=h.params.slug;await T(t),g.value=[{name:"Facebook",url:`https://facebook.com/sharer/sharer.php?u=${window.location.href}`,icon:"bx bxl-facebook"},{name:"Twitter",url:`https://twitter.com/intent/tweet?url=${window.location.href}`,icon:"bx bxl-twitter"},{name:"LinkedIn",url:`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`,icon:"bx bxl-linkedin"},{name:"WhatsApp",url:`https://wa.me/?text=${window.location.href}`,icon:"bx bxl-whatsapp"},{name:"Email",url:`mailto:?subject=Confira este artigo&body=${window.location.href}`,icon:"bx bx-envelope"},{name:"Link",url:window.location.href,icon:"bx bx-link"}]}),{article:s,loading:o,imageLoaded:b,email:c,socialNetworks:g,getArticleImage:v,hasThumbnail:y,formatDate:x,onImageLoad:L,goBack:D,share:E,submitNewsletterForm:I,handleImageError:$,isSubmitting:d,success:u,error:m}}}),X={class:"my-5",id:"article-detail"},Y={class:"container my-5"},Z={class:"row"},J={class:"col-lg-2 col-sm-12 col-md-12 mb-4"},K={class:"back-fixed"},P={class:"social-share d-flex"},Q=["href","title","onClick"],A={class:"col-sm-7 col-md-12 col-lg-7"},tt={key:0},et={key:1,class:"content_blog"},st={class:"mb-3 mx-0"},ot={class:"article-category"},nt=["innerHTML"],at=["innerHTML"],it={key:2},rt={class:"col-sm-12 col-md-12 col-lg-3"},lt={class:"newsletter-cta p-4 bg-light rounded news-fixed my-xl-0 my-4"},ct={class:"mb-3"},dt={class:""},ut=["disabled"],mt={key:0},pt={key:1},bt={key:2},gt={key:3};function ht(s,o,b,g,h,f){return r(),i("main",null,[e("section",X,[e("div",Y,[e("div",Z,[e("div",J,[e("div",K,[e("button",{onClick:o[0]||(o[0]=(...a)=>s.goBack&&s.goBack(...a)),class:"btn btn-primary-border"},"< Voltar"),e("div",P,[(r(!0),i(G,null,j(s.socialNetworks,(a,c)=>(r(),i("a",{key:c,href:a.url,target:"_blank",class:"social-icon",title:a.name,onClick:_(d=>s.share(a),["prevent"])},[e("i",{class:S(a.icon)},null,2)],8,Q))),128))])])]),e("div",A,[s.loading?(r(),i("div",tt,o[3]||(o[3]=[O('<div class="d-flex mb-3" data-v-3ba7c29f><div class="skeleton skeleton-category me-2" data-v-3ba7c29f></div><div class="skeleton skeleton-date" data-v-3ba7c29f></div></div><div class="skeleton skeleton-title mb-3" data-v-3ba7c29f></div><div class="skeleton skeleton-content mb-3" data-v-3ba7c29f></div>',3)]))):s.article?(r(),i("div",et,[e("div",st,[e("span",ot,w(s.article.category.title),1),e("span",{innerHTML:s.formatDate(s.article.published_at),class:"mx-3 publish_date"},null,8,nt)]),e("h1",null,w(s.article.titulo),1),e("div",{innerHTML:s.article.content,class:"my-4"},null,8,at)])):(r(),i("div",it,o[4]||(o[4]=[e("p",null,"Artigo não encontrado.",-1)])))]),e("div",rt,[e("div",lt,[o[9]||(o[9]=e("h3",null,"Assine para novas atualizações.",-1)),e("form",{onSubmit:o[2]||(o[2]=_((...a)=>s.submitNewsletterForm&&s.submitNewsletterForm(...a),["prevent"])),class:"form"},[e("div",ct,[q(e("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>s.email=a),type:"email",class:"form-control",id:"email",name:"email",placeholder:"E-mail",required:""},null,512),[[z,s.email]])]),e("div",dt,[e("button",{type:"submit",class:S(["btn",s.isSubmitting?"btn-secondary":s.success?"btn-success":s.error?"btn-danger":"btn-primary"]),disabled:s.isSubmitting},[s.isSubmitting?(r(),i("span",mt,o[5]||(o[5]=[e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),p(" Enviando... ")]))):s.success?(r(),i("span",pt,o[6]||(o[6]=[e("i",{class:"bx bx-check-circle"},null,-1),p(" Sucesso! ")]))):s.error?(r(),i("span",bt,o[7]||(o[7]=[e("i",{class:"bx bx-error"},null,-1),p(" Erro ao enviar! ")]))):(r(),i("span",gt,o[8]||(o[8]=[e("i",{class:"bx bx-send"},null,-1),p(" Inscrever-se ")])))],10,ut)])],32)])])])])])])}const _t=U(W,[["render",ht],["__scopeId","data-v-3ba7c29f"]]);export{_t as default};
