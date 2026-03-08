const defaultSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://jay-jirayut-site.vercel.app');

export const siteConfig = {
  name: 'Jay Jirayut Chatphet',
  shortName: 'Jay Jirayut',
  title: 'Jay Jirayut Chatphet — AI, Systems, Writing',
  description:
    'AI systems builder writing about judgment, useful technology, and the future of work.',
  url: defaultSiteUrl,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'jay.jirayut@gmail.com',
  location: 'Bangkok, Thailand'
};

type DateVariant = 'display' | 'long' | 'year';

function getDateParts(value: string) {
  const [year, month, day] = value.split('-').map(Number);

  return { year, month, day };
}

export function formatDate(value: string, variant: DateVariant = 'display') {
  const { year, month, day } = getDateParts(value);

  if (variant === 'year') {
    return String(year);
  }

  if (variant === 'display') {
    return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`;
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}
