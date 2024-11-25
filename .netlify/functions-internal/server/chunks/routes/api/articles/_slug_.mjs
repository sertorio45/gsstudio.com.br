import { d as defineEventHandler, g as getQuery, s as sendError } from '../portifolio.mjs';
import axios from 'axios';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'packrup';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';

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
