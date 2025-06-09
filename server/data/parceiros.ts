import { readdirSync } from 'fs';
import { join } from 'path';

export default defineEventHandler(() => {
  const dirPath = join(process.cwd(), 'public/img/parceiros');
  const files = readdirSync(dirPath).filter(file => file.endsWith('.webp'));

  return files.map(file => `/img/parceiros/${file}`);
});
