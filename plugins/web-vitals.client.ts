import { useRuntimeConfig } from '#app';
import { getCLS, getFID, getLCP } from 'web-vitals';

export default defineNuxtPlugin(() => {
  const { analyticsId } = useRuntimeConfig().public;

  if (!analyticsId) return;

  const sendToAnalytics = (metric: any) => {
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        metric_id: metric.id,
      });
    }
  };

  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getLCP(sendToAnalytics);
});
