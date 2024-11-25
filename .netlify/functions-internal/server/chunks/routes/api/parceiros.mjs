import { d as defineEventHandler } from './portifolio.mjs';
import { readdirSync } from 'fs';
import { join } from 'path';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'packrup';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';

const parceiros = defineEventHandler(() => {
  const dirPath = join(process.cwd(), "public/img/parceiros");
  const files = readdirSync(dirPath).filter((file) => file.endsWith(".webp"));
  return files.map((file) => `/img/parceiros/${file}`);
});

export { parceiros as default };
//# sourceMappingURL=parceiros.mjs.map
