import { defineEventHandler, getQuery, sendError } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';
import axios from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/axios/index.js';

const _slug_ = defineEventHandler(async (event) => {
  const { slug } = getQuery(event);
  const baseURL = process.env.VITE_STRAPI_URL;
  try {
    const response = await axios.get(`${baseURL}/articles?slug=${slug}`);
    if (response.data.length) {
      return response.data[0];
    } else {
      return { message: "Artigo n\xE3o encontrado" };
    }
  } catch (error) {
    return sendError(event, new Error("Erro ao buscar o artigo."));
  }
});

export { _slug_ as default };
//# sourceMappingURL=_slug_.mjs.map
