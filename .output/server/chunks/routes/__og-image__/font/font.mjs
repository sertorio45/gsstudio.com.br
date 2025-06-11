import { d as defineEventHandler } from '../../../../index.mjs';
import { f as fontEventHandler } from '../../../_/eventHandlers.mjs';
import 'lru-cache';
import 'devalue';
import 'node:cluster';
import 'node:os';
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
import '@unhead/ssr';
import 'unhead';

const font = defineEventHandler(fontEventHandler);

export { font as default };
//# sourceMappingURL=font.mjs.map
