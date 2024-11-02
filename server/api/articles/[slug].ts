// server/api/articles/[slug].ts
import { defineEventHandler, getQuery, sendError } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
  const { slug } = getQuery(event);
  const baseURL = process.env.VITE_STRAPI_URL; // URL do Strapi ou backend

  try {
    const response = await axios.get(`${baseURL}/articles?slug=${slug}`);
    if (response.data.length) {
      return response.data[0];
    } else {
      return { message: 'Artigo não encontrado' };
    }
  } catch (error) {
    return sendError(event, new Error('Erro ao buscar o artigo.'));
  }
});
