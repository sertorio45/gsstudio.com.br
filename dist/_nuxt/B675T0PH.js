import{g as a,h as o,d as c,j as i}from"./nFDv636E.js";import{a as l}from"./CCb-kr4I.js";import"./DEIQAQ4v.js";const u=a("articles",{state:()=>({article:null}),actions:{async fetchArticleBySlug(e){try{const t=await l.get(`https://str-gsstudio.gsstudio.com.br/articles?slug=${e}`);t.data.length&&(this.article=t.data[0])}catch(t){console.error("Erro ao buscar o artigo:",t)}}}}),h=o(async()=>{let e,t;const s=u(),r=c().params.slug;(!s.article||s.article.slug!==r)&&([e,t]=i(()=>s.fetchArticleBySlug(r)),await e,t())});export{h as default};