import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';

const teste = defineEventHandler(async (event) => {
  return "Hello Nitro";
});

export { teste as default };
//# sourceMappingURL=teste.mjs.map
