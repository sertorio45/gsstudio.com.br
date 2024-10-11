import { d as defineEventHandler } from '../../api/portifolio.mjs';
import { i as imageEventHandler } from '../../../_/eventHandlers.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'ipx';
import 'lru-cache';
import 'devalue';
import '@unhead/ssr';
import 'unhead';

const image = defineEventHandler(imageEventHandler);

export { image as default };
//# sourceMappingURL=image.mjs.map
