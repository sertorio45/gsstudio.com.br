import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { createClient } from '@supabase/supabase-js';
import 'lru-cache';
import 'devalue';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';

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
