import { defineEventHandler } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import { promises } from 'fs';
import path from 'path';

const portifolio = defineEventHandler(async (event) => {
  const directoryPath = path.join(process.cwd(), "public/img/portifolio");
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

export { portifolio as default };
//# sourceMappingURL=portifolio.mjs.map
