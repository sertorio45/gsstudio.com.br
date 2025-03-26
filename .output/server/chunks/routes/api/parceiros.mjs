import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { readdirSync } from 'fs';
import { join } from 'path';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'packrup';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';

const parceiros = defineEventHandler(() => {
  const dirPath = join(process.cwd(), "public/img/parceiros");
  const files = readdirSync(dirPath).filter((file) => file.endsWith(".webp"));
  return files.map((file) => `/img/parceiros/${file}`);
});

export { parceiros as default };
//# sourceMappingURL=parceiros.mjs.map
