import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { i as imageEventHandler } from '../../../_/eventHandlers.mjs';
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
import '@unhead/ssr';
import 'unhead';

const image = defineEventHandler(imageEventHandler);

export { image as default };
//# sourceMappingURL=image.mjs.map
