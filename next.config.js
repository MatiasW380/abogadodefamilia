/** @type {import('next').NextConfig} */
const DOMINIO = 'abogadodefamilia.click';

module.exports = {
  reactStrictMode: true,
  async redirects() {
    // Todas las direcciones alternativas redirigen (301 permanente) al dominio principal,
    // para que Google indexe una sola versión del sitio.
    return ['abogadodefamilia.vercel.app', `www.${DOMINIO}`].map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: `https://${DOMINIO}/:path*`,
      permanent: true,
    }));
  },
};
