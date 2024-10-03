export default defineNuxtPlugin(() => {
    const cookieControl = useCookieControl()
  
    watch(
      () => cookieControl.cookiesEnabledIds.value,
      (current) => {
        if (current && current.includes('gtm')) {
          if (!document.getElementById('gtm-script')) {
            const script = document.createElement('script')
            script.id = 'gtm-script'
            script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-N3X2JT4' // Substitua pelo seu ID do GTM
            script.async = true
            document.head.appendChild(script)
            console.log('GTM ativado após o consentimento.')
          }
        }
      },
      { immediate: true, deep: true }
    )
  })
  