import { d as defineEventHandler } from './portifolio.mjs';
import { promises } from 'fs';
import path from 'path';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'ipx';

const parceiros = defineEventHandler(async (event) => {
  const directoryPath = path.join(process.cwd(), "public/parceiros");
  try {
    const files = await promises.readdir(directoryPath);
    return files.filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file));
  } catch (err) {
    return {
      status: "error",
      message: err.message
    };
  }
});

export { parceiros as default };
//# sourceMappingURL=parceiros.mjs.map
