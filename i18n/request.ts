import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const supportedLocales = ['es', 'en'];
  // Aseguramos que siempre haya un valor defini
  const currentLocale: string = supportedLocales.includes(locale ?? '')
    ? (locale as string)
    : 'es';

  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default
  };
});
