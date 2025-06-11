# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# GS Studio Digital

## Server-Side Rendering (SSR) - Implementação

### Melhorias Implementadas

#### 1. **Otimização do Composable `useArticles`**
- ✅ Tipagem TypeScript completa com interfaces `Article` e `ArticleCategory`
- ✅ Função `fetchArticleBySlug()` para buscar artigos específicos
- ✅ Configuração via `useRuntimeConfig()` para variáveis de ambiente
- ✅ Tratamento de erros melhorado
- ✅ Ordenação por data de criação (mais recentes primeiro)

#### 2. **SSR na Página `[slug].vue`**
- ✅ `useLazyAsyncData()` para renderização no servidor
- ✅ Busca otimizada - apenas o artigo específico (não todos os artigos)
- ✅ Meta tags SEO renderizadas no servidor
- ✅ Cache de 10 minutos por artigo
- ✅ Reatividade quando o slug muda
- ✅ Tratamento de erro 404 no servidor
- ✅ Estados de loading, erro e não encontrado

#### 3. **Configuração do Nuxt**
- ✅ SSR habilitado (`ssr: true`)
- ✅ Cache configurado para APIs (1 hora) e páginas (10 minutos)
- ✅ Variável de ambiente `NUXT_PUBLIC_BASE_URL` para URLs canônicas

### Como Testar o SSR

#### 1. **Verificar se o conteúdo é renderizado no servidor:**
```bash
# Desabilitar JavaScript no navegador e acessar uma página de artigo
# O conteúdo deve aparecer mesmo sem JavaScript
```

#### 2. **Verificar o HTML fonte:**
```bash
curl -s https://gsstudio.com.br/seu-artigo-slug | grep -i "título do artigo"
# Deve retornar o título do artigo no HTML
```

#### 3. **Verificar meta tags no código fonte:**
- Abrir "Ver código fonte" no navegador
- Procurar por `<meta property="og:title"` - deve conter o título do artigo
- Procurar por `<title>` - deve conter o título específico do artigo

#### 4. **Teste de Performance:**
```bash
# Usar ferramentas como Lighthouse ou PageSpeed Insights
# Verificar se o "First Contentful Paint" melhorou
```

### Variáveis de Ambiente

Adicione no seu `.env`:
```env
SUPABASE_URL=sua_url_do_supabase
SUPABASE_KEY=sua_chave_do_supabase  
SUPABASE_TENANT_ID=seu_tenant_id
NUXT_PUBLIC_BASE_URL=https://gsstudio.com.br
```

### Benefícios do SSR Implementado

1. **SEO Melhorado**: Meta tags e conteúdo renderizados no servidor
2. **Performance**: Primeiro carregamento mais rápido
3. **Compartilhamento Social**: Preview correto no Facebook, Twitter, etc.
4. **Acessibilidade**: Conteúdo disponível mesmo sem JavaScript
5. **Cache Inteligente**: Reduz carga no servidor e melhora velocidade

### Estrutura de Cache

- **Artigos**: Cache de 10 minutos por slug
- **APIs**: Cache de 1 hora
- **Revalidação**: Automática quando dados mudam

### Monitoramento

Para verificar se o cache está funcionando:
```bash
# Verificar headers de cache na resposta
curl -I https://gsstudio.com.br/seu-artigo-slug
# Procurar por headers como: Cache-Control, Age, etc.
```
