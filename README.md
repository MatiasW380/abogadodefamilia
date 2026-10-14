# Abogado de Familia en Córdoba — sitio informativo

Sitio del Ab. Oscar Matías Baronetto (MP 1-37398). Next.js (pages router), desplegado en Vercel.

- `lib/site.js`: datos de contacto (teléfono, dirección, redes, URL del sitio).
- `lib/servicios.js`: textos de cada página de servicio.
- `pages/index.js`: inicio. `pages/[servicio].js`: páginas de servicio.
- `public/`: favicon, imagen para compartir (og.png), robots y sitemap.

Si cambia el dominio, actualizar `url` en `lib/site.js`, `public/robots.txt` y `public/sitemap.xml`.
