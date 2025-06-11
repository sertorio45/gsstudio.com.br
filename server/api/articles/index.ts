import { createClient } from '@supabase/supabase-js'
export default defineEventHandler(async (event) => {


const supabaseUrl = 'https://srzohnuulwgonduoudfp.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
if (!supabaseKey) {
  throw new Error('SUPABASE_KEY não definida nas variáveis de ambiente')
}
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: articles, error } = await supabase
.from('articles')
.select('*')

return articles

});
