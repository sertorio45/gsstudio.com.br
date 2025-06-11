import { defineEventHandler } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';
import { createClient } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@supabase/supabase-js/dist/main/index.js';

const index = defineEventHandler(async (event) => {
  const supabaseUrl = "https://srzohnuulwgonduoudfp.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY;
  if (!supabaseKey) {
    throw new Error("SUPABASE_KEY n\xE3o definida nas vari\xE1veis de ambiente");
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  let { data: articles, error } = await supabase.from("articles").select("*");
  return articles;
});

export { index as default };
//# sourceMappingURL=index.mjs.map
