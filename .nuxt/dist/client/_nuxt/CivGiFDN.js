import{_ as h,a as y}from"./eE9VRMCo.js";import{_ as k}from"./BZEoLkB3.js";import{u as x}from"./8WozGABw.js";import{d as M,J as n,L as s,z as r,N as p,M as d,F as l,$ as u,I as i,a0 as B,_ as f}from"./B1G-qIx4.js";import"./CCb-kr4I.js";const $=M({name:"Blog",setup(){const{articles:o,categories:t,loading:c,loadingMore:_,loadMoreArticles:m,hasMoreArticles:g,getCategoryTitle:a}=x();return{articles:o,categories:t,loading:c,loadingMore:_,loadMoreArticles:m,hasMoreArticles:g,getCategoryTitle:a}}}),C={class:"py-5 bg-dark d-flex my-5",id:"topo"},N={class:"container d-flex justify-content-center align-items-center my-5 py-5"},w={class:"row"},A={class:"col text-center text-light my-2"},V={class:"my-2"},j={href:"#blog"},L={class:"my-5 py-5 justify-content-center align-content-center",id:"blog"},S={class:"container my-5"},T={class:"row"},z={class:"card"},E={class:"card-body"},F={class:"mb-2"},I={class:"article-category"},D={class:"row my-3"},J={class:"col d-flex align-content-center justify-content-center"},P=["disabled"],q={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},G={key:1};function H(o,t,c,_,m,g){const a=y,v=k,b=y;return i(),n(l,null,[s("section",C,[s("div",N,[s("div",w,[s("div",A,[s("div",V,[r(a,{to:"/",class:"text-light"},{default:p(()=>t[1]||(t[1]=[d("Página inicial")])),_:1}),t[2]||(t[2]=d(" / ")),t[3]||(t[3]=s("span",null,"Blog",-1))]),t[4]||(t[4]=s("h1",{class:"text-light"},"Blog",-1)),s("a",j,[r(v,{icon:"bx bxs-chevrons-down my-3",fontSize:"3em",color:"#fff"})])])])])]),s("section",L,[s("div",S,[s("div",T,[o.loading?(i(),n(l,{key:0},u(4,e=>s("div",{class:"col-md-3 my-5",key:e},t[5]||(t[5]=[B('<div class="card"><div class="card-body"><div class="mb-2"><div class="skeleton skeleton-category"></div></div><div class="skeleton skeleton-title"></div></div></div>',1)]))),64)):(i(!0),n(l,{key:1},u(o.articles,e=>(i(),n("div",{class:"col-sm-3 my-2",key:e.id},[s("div",z,[s("div",E,[s("div",F,[s("span",I,f(o.getCategoryTitle(e.category)),1)]),r(b,{to:`${e.slug}`},{default:p(()=>[d(f(e.titulo),1)]),_:2},1032,["to"])])])]))),128))]),s("div",D,[s("div",J,[s("button",{onClick:t[0]||(t[0]=(...e)=>o.loadMoreArticles&&o.loadMoreArticles(...e)),disabled:o.loadingMore||!o.hasMoreArticles,class:"btn btn-primary"},[o.loadingMore?(i(),n("span",q)):(i(),n("span",G,"Ver mais artigos"))],8,P)])])])])],64)}const W=h($,[["render",H]]);export{W as default};
