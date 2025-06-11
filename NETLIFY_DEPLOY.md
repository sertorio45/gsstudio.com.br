# Deploy no Netlify - Guia Completo

Este guia explica como fazer deploy do projeto GS Studio no Netlify com todas as otimizações configuradas.

## 🚀 Configurações Implementadas

### 1. **Configuração do Nuxt para Netlify**
- ✅ Preset `netlify` configurado no `nuxt.config.ts`
- ✅ ISR (Incremental Static Regeneration) configurado
- ✅ Cache inteligente com `stale-while-revalidate`
- ✅ Prerender de páginas estáticas
- ✅ Headers de segurança e performance

### 2. **Arquivos de Configuração**
- ✅ `netlify.toml` - Configuração principal do Netlify
- ✅ `public/_redirects` - Redirects e fallbacks
- ✅ `public/_headers` - Headers HTTP customizados

### 3. **Otimizações de Cache**
- **Homepage**: Cache por 1 hora com revalidação
- **Blog/Artigos**: Cache por 5-10 minutos com revalidação
- **Páginas estáticas**: Prerender no build
- **Assets**: Cache longo (1 ano) com immutable
- **API**: Sem cache

## 📋 Pré-requisitos

1. **Conta no Netlify**: [netlify.com](https://netlify.com)
2. **Repositório Git**: GitHub, GitLab ou Bitbucket
3. **Node.js**: Versão 18 ou superior
4. **Variáveis de ambiente** configuradas

## 🔧 Variáveis de Ambiente Necessárias

Configure estas variáveis no painel do Netlify:

```bash
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
SUPABASE_TENANT_ID=your-tenant-id

# Site
NUXT_PUBLIC_BASE_URL=https://gsstudio.com.br

# Email (opcional)
MAIL_HOST=mail.gsstudio.com.br
MAIL_PORT=465
MAIL_USER=noreply@gsstudio.com.br
MAIL_PASS=your-password

# Analytics (opcional)
NUXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Build
NODE_ENV=production
```

## 🚀 Deploy Automático (Recomendado)

### 1. **Conectar Repositório**
1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em "New site from Git"
3. Conecte seu provedor Git (GitHub/GitLab/Bitbucket)
4. Selecione o repositório `gsstudio_digital`

### 2. **Configurações de Build**
O Netlify detectará automaticamente as configurações:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### 3. **Deploy**
1. Clique em "Deploy site"
2. Aguarde o build completar
3. Site estará disponível na URL gerada

## 🛠️ Deploy Manual (CLI)

### 1. **Instalar Netlify CLI**
```bash
npm install -g netlify-cli
```

### 2. **Login**
```bash
netlify login
```

### 3. **Inicializar Site**
```bash
netlify init
```

### 4. **Deploy**
```bash
# Deploy de preview
netlify deploy --build

# Deploy para produção
netlify deploy --build --prod
```

## ⚡ Funcionalidades Ativadas

### 1. **Server-Side Rendering (SSR)**
- Renderização no servidor para SEO
- Hydration no cliente para interatividade

### 2. **Incremental Static Regeneration (ISR)**
- Cache inteligente com revalidação em background
- Performance otimizada sem perder freshness

### 3. **Edge Functions**
- Processamento na edge para menor latência
- Disponível globalmente

### 4. **Cache Avançado**
- Headers `Netlify-CDN-Cache-Control`
- Suporte a `stale-while-revalidate`
- Cache tags para invalidação seletiva

## 🔍 Monitoramento e Debug

### 1. **Logs de Build**
- Acesse o painel do Netlify
- Vá em "Deploys" > "Deploy log"

### 2. **Function Logs**
- Acesse "Functions" no painel
- Visualize logs em tempo real

### 3. **Cache Status**
- Use `curl -I` para verificar headers
- Header `Cache-Status` mostra hit/miss/stale

### 4. **Performance**
```bash
# Verificar cache
curl -I https://seu-site.netlify.app/

# Verificar headers de segurança
curl -I https://seu-site.netlify.app/ | grep -E "(X-Frame|X-XSS|X-Content)"
```

## 🎯 Otimizações Implementadas

### 1. **Performance**
- ✅ Assets com cache longo e immutable
- ✅ Compressão automática (Gzip/Brotli)
- ✅ CDN global
- ✅ HTTP/2 e HTTP/3

### 2. **SEO**
- ✅ SSR para indexação
- ✅ Meta tags dinâmicas
- ✅ Sitemap automático
- ✅ Structured data

### 3. **Segurança**
- ✅ Headers de segurança
- ✅ HTTPS automático
- ✅ Protection contra XSS
- ✅ Content Security Policy

### 4. **Developer Experience**
- ✅ Deploy previews automáticos
- ✅ Branch deploys
- ✅ Rollback com um clique
- ✅ Logs detalhados

## 🔄 Workflow de Deploy

### 1. **Desenvolvimento**
```bash
git checkout -b feature/nova-funcionalidade
# Desenvolver...
git commit -m "feat: nova funcionalidade"
git push origin feature/nova-funcionalidade
```

### 2. **Deploy Preview**
- Netlify cria automaticamente um deploy preview
- URL única para testar mudanças
- Não afeta produção

### 3. **Produção**
```bash
git checkout main
git merge feature/nova-funcionalidade
git push origin main
```
- Deploy automático para produção
- Cache invalidado automaticamente

## 🆘 Troubleshooting

### 1. **Build Falha**
- Verifique logs no painel Netlify
- Confirme variáveis de ambiente
- Teste build local: `npm run build`

### 2. **404 em Rotas**
- Verifique `_redirects` em `public/`
- Confirme configuração SPA fallback

### 3. **Cache Não Funciona**
- Verifique headers com `curl -I`
- Confirme configuração `routeRules`

### 4. **Performance Lenta**
- Use Lighthouse para análise
- Verifique Network tab no DevTools
- Confirme ISR está ativo

## 📚 Recursos Adicionais

- [Documentação Netlify + Nuxt](https://docs.netlify.com/frameworks/nuxt/)
- [Guia ISR Netlify](https://developers.netlify.com/guides/isr-and-advanced-caching-with-nuxt-v4-on-netlify/)
- [Netlify CLI Docs](https://cli.netlify.com/)
- [Nuxt Deployment](https://nuxt.com/deploy/netlify)

## ✅ Checklist Final

Antes do deploy, confirme:

- [ ] Variáveis de ambiente configuradas
- [ ] Build local funciona: `npm run build`
- [ ] Testes passando
- [ ] Assets otimizados
- [ ] SEO configurado
- [ ] Analytics configurado
- [ ] Domínio customizado (se aplicável)

---

**🎉 Pronto! Seu site está otimizado para o Netlify com SSR, ISR e cache avançado!** 