import { d as defineEventHandler } from '../../api/portifolio.mjs';
import { f as fontEventHandler } from '../../../_/eventHandlers.mjs';
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
import 'lru-cache';
import 'devalue';
import '@unhead/ssr';
import 'unhead';

const font = defineEventHandler(fontEventHandler);

export { font as default };
//# sourceMappingURL=font.mjs.map
