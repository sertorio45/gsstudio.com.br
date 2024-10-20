import { defineEventHandler } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import { readdirSync } from 'fs';
import { join } from 'path';

const parceiros = defineEventHandler(() => {
  const dirPath = join(process.cwd(), "public/img/parceiros");
  const files = readdirSync(dirPath).filter((file) => file.endsWith(".webp"));
  return files.map((file) => `/img/parceiros/${file}`);
});

export { parceiros as default };
//# sourceMappingURL=parceiros.mjs.map
