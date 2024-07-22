
import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const directoryPath = path.join(process.cwd(), 'public/img/portifolio');
  try {
    const files = await fs.readdir(directoryPath);
    return files.filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file));
  } catch (err) {
    return {
      status: 'error',
      message: err.message
    };
  }
});
