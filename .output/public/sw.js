if(!self.define){let e,n={};const s=(s,t)=>(s=new URL(s+".js",t).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let r={};const l=e=>s(e,o),u={module:{uri:o},exports:r,require:l};n[o]=Promise.all(t.map((e=>u[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"038046674662b49331917093a53fcc0c"},{url:"_nuxt/builds/meta/c33d646d-91ef-4afb-8219-4c20f0301951.json",revision:null},{url:"_nuxt/builds/meta/dev.json",revision:null},{url:"manifest.webmanifest",revision:"65849feb831652846c16306d5339059d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
