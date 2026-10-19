/**
 * Headers para chamadas internas à API protegida.
 * O secret só existe no server (runtimeConfig privado).
 */
export function useProtectedApiHeaders(): Record<string, string> | undefined {
  const config = useRuntimeConfig()

  if (import.meta.server && config.apiSecret) {
    return { 'x-api-secret': String(config.apiSecret) }
  }

  return undefined
}
