/** @type {import('next').NextConfig} */
// Dominio principal. En Vercel, abogadodefamilia.click (sin www) ya redirige acá.
const DOMINIO = 'www.abogadodefamilia.click';

module.exports = {
  reactStrictMode: true,
  async redirects() {
    // La dirección vieja de Vercel redirige (permanente) al dominio principal,
    // para que Google indexe una sola versión del sitio.
    // No agregar acá la versión sin www: Vercel ya la redirige y se generaría un bucle.
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'abogadodefamilia.vercel.app' }],
        destination: `https://${DOMINIO}/:path*`,
        permanent: true,
      },
    ];
  },
};
