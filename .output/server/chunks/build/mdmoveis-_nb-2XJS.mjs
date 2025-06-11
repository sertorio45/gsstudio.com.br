import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../../index.mjs';
import 'lru-cache';
import 'devalue';
import 'node:cluster';
import 'node:os';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';
import 'pinia';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cases/mdmoveis.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mdmoveis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { mdmoveis as default };
//# sourceMappingURL=mdmoveis-_nb-2XJS.mjs.map
