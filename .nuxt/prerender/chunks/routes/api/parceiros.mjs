import { defineEventHandler } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/h3/dist/index.mjs';
import { promises } from 'fs';
import path from 'path';

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
