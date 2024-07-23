import{g as P,c as k,o as B,k as T,l as R,m as E,n as U,q as O,h as w,j as I,s as V,f as D,t as F,v as H}from"./CmsOxrMn.js";import{d as z,c as S,o as M,l as $,j as _,a2 as q,f as b}from"./BiXghscm.js";async function L(t,r=P()){const{path:s,matched:p}=r.resolve(t);if(!p.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(s)))return;const e=r._preloadPromises=r._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>L(t,r));r._routePreloaded.add(s);const a=p.map(o=>{var n;return(n=o.components)==null?void 0:n.default}).filter(o=>typeof o=="function");for(const o of a){const n=Promise.resolve(o()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}const Q=(...t)=>t.find(r=>r!==void 0);function W(t){const r=t.componentName||"NuxtLink";function s(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return A(e,t.trailingSlash);const o="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:A(o,t.trailingSlash)}}function p(e){const a=P(),o=D(),n=b(()=>!!e.target&&e.target!=="_self"),c=b(()=>{const f=e.to||e.href||"";return typeof f=="string"&&w(f,{acceptRelative:!0})}),y=q("RouterLink"),h=y&&typeof y!="string"?y.useLink:void 0,d=b(()=>{if(e.external)return!0;const f=e.to||e.href||"";return typeof f=="object"?!1:f===""||c.value}),u=b(()=>{const f=e.to||e.href||"";return d.value?f:s(f,a.resolve)}),v=d.value||h==null?void 0:h({...e,to:u}),m=b(()=>{var f;if(!u.value||c.value)return u.value;if(d.value){const i=typeof u.value=="object"&&"path"in u.value?R(u.value):u.value,g=typeof i=="object"?a.resolve(i).href:i;return s(g,a.resolve)}return typeof u.value=="object"?((f=a.resolve(u.value))==null?void 0:f.href)??null:s(I(o.app.baseURL,u.value),a.resolve)});return{to:u,hasTarget:n,isAbsoluteUrl:c,isExternal:d,href:m,isActive:(v==null?void 0:v.isActive)??b(()=>u.value===a.currentRoute.value.path),isExactActive:(v==null?void 0:v.isExactActive)??b(()=>u.value===a.currentRoute.value.path),route:(v==null?void 0:v.route)??b(()=>a.resolve(u.value)),async navigate(){await V(m.value,{replace:e.replace,external:d.value||n.value})}}}return z({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:p,setup(e,{slots:a}){const o=P(),{to:n,href:c,navigate:y,isExternal:h,hasTarget:d,isAbsoluteUrl:u}=p(e),v=S(!1),m=S(null),f=i=>{var g;m.value=e.custom?(g=i==null?void 0:i.$el)==null?void 0:g.nextElementSibling:i==null?void 0:i.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!J()){const g=k();let x,l=null;M(()=>{const j=G();B(()=>{x=T(()=>{var C;(C=m==null?void 0:m.value)!=null&&C.tagName&&(l=j.observe(m.value,async()=>{l==null||l(),l=null;const N=typeof n.value=="string"?n.value:h.value?R(n.value):o.resolve(n.value).fullPath;await Promise.all([g.hooks.callHook("link:prefetch",N).catch(()=>{}),!h.value&&!d.value&&L(n.value,o).catch(()=>{})]),v.value=!0}))})})}),$(()=>{x&&E(x),l==null||l(),l=null})}return()=>{var x;if(!h.value&&!d.value){const l={ref:f,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(l.class=e.prefetchedClass||t.prefetchedClass),l.rel=e.rel||void 0),_(q("RouterLink"),l,a.default)}const i=e.target||null,g=Q(e.noRel?"":e.rel,t.externalRelAttribute,u.value||d.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:c.value,navigate:y,get route(){if(!c.value)return;const l=new URL(c.value,window.location.href);return{path:l.pathname,fullPath:l.pathname,get query(){return U(l.search)},hash:l.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c.value}},rel:g,target:i,isExternal:h.value||d.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:m,href:c.value||null,rel:g,target:i},(x=a.default)==null?void 0:x.call(a))}}})}const Y=W(O);function A(t,r){const s=r==="append"?F:H;return w(t)&&!t.startsWith("http")?t:s(t,!0)}function G(){const t=k();if(t._observer)return t._observer;let r=null;const s=new Map,p=(a,o)=>(r||(r=new IntersectionObserver(n=>{for(const c of n){const y=s.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&y&&y()}})),s.set(a,o),r.observe(a),()=>{s.delete(a),r.unobserve(a),s.size===0&&(r.disconnect(),r=null)});return t._observer={observe:p}}function J(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{Y as _};
