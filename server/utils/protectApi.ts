import type { H3Event } from 'h3'

const DEFAULT_ALLOWED_HOSTS = [
  'gsstudio.com.br',
  'www.gsstudio.com.br',
  'localhost',
  '127.0.0.1',
]

function parseAllowedHosts(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String).filter(Boolean)
  }

  if (typeof value === 'string' && value.trim()) {
    return value.split(',').map((host) => host.trim()).filter(Boolean)
  }

  return DEFAULT_ALLOWED_HOSTS
}

function hostnameFromUrl(value: string | undefined): string | null {
  if (!value) return null

  try {
    return new URL(value).hostname
  } catch {
    return null
  }
}

/**
 * Protege rotas /api contra acesso cross-origin.
 * - Aceita secret via header `x-api-secret` (SSR / integrações internas)
 * - Aceita browser same-site (Origin/Referer em hosts permitidos)
 * - Em produção, chamadas sem Origin exigem o secret
 */
export function protectApiRoute(event: H3Event) {
  const config = useRuntimeConfig(event)
  const allowedHosts = parseAllowedHosts(config.apiAllowedHosts)
  const apiSecret = String(config.apiSecret || '')

  const requestSecret = getRequestHeader(event, 'x-api-secret')
  if (apiSecret && requestSecret) {
    if (requestSecret !== apiSecret) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Não autorizado',
      })
    }
    return
  }

  const originHost = hostnameFromUrl(getRequestHeader(event, 'origin'))
  const refererHost = hostnameFromUrl(getRequestHeader(event, 'referer'))

  // Chamada sem Origin/Referer (curl, bots, SSR sem header)
  if (!originHost && !refererHost) {
    if (import.meta.dev) {
      return
    }

    // Em produção, exige secret quando não há origem do browser
    if (apiSecret) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Não autorizado',
      })
    }

    const requestHost = getRequestHost(event, { xForwardedHost: true }).split(
      ':',
    )[0]

    if (!allowedHosts.includes(requestHost)) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Acesso à API não permitido',
      })
    }

    return
  }

  const sourceHost = originHost || refererHost
  if (!sourceHost || !allowedHosts.includes(sourceHost)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Origem não autorizada',
    })
  }
}
