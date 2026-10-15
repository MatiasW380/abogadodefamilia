# Abogado de Familia en Córdoba — sitio informativo

Sitio del Ab. Oscar Matías Baronetto (MP 1-37398). Next.js (pages router), desplegado en Vercel.

- `lib/site.js`: datos de contacto (teléfono, dirección, redes, URL del sitio).
- `lib/servicios.js`: textos de cada página de servicio.
- `pages/index.js`: inicio. `pages/[servicio].js`: páginas de servicio.
- `lib/guias.js`: guías legales (artículos para SEO). Para sumar una guía, agregá un objeto a la lista; aparece sola en /guias, en el sitemap y en la página del servicio relacionado.
- `pages/sitemap.xml.js`: sitemap automático.
- `public/`: favicon, imagen para compartir (og.png), robots.

Dominio principal: abogadodefamilia.click (la dirección de Vercel y www redirigen ahí desde `next.config.js`). Si cambia el dominio, actualizar `url` en `lib/site.js` y `DOMINIO` en `next.config.js`. El sitemap, robots.txt, las URLs canónicas y los datos para Google se generan desde ahí.
