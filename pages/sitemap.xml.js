import { SITE } from '../lib/site';
import { SERVICIOS } from '../lib/servicios';
import { GUIAS } from '../lib/guias';

function generar() {
  const urls = [
    { loc: SITE.url, prioridad: '1.0' },
    ...SERVICIOS.map((s) => ({ loc: `${SITE.url}/${s.slug}`, prioridad: '0.9' })),
    { loc: `${SITE.url}/guias`, prioridad: '0.7' },
    ...GUIAS.map((g) => ({
      loc: `${SITE.url}/guias/${g.slug}`,
      prioridad: '0.7',
      lastmod: g.actualizada || g.fecha,
    })),
  ];
  const cuerpo = urls
    .map(
      (u) =>
        `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<priority>${u.prioridad}</priority></url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${cuerpo}\n</urlset>\n`;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(generar());
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
