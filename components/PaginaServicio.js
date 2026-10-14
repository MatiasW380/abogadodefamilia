import Link from 'next/link';
import Layout, { IconoWhatsApp } from './Layout';
import { SERVICIOS } from '../lib/servicios';
import { SITE, waLink } from '../lib/site';
import { guiasDeServicio } from '../lib/guias';

export default function PaginaServicio({ servicio }) {
  const otros = SERVICIOS.filter((s) => s.slug !== servicio.slug);
  const guias = guiasDeServicio(servicio.slug);
  const url = `${SITE.url}/${servicio.slug}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: servicio.h1,
      serviceType: servicio.titulo,
      description: servicio.descripcionSeo,
      url,
      provider: { '@id': `${SITE.url}/#estudio` },
      areaServed: { '@type': 'State', name: 'Provincia de Córdoba' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: servicio.titulo, item: url },
      ],
    },
  ];
  return (
    <Layout
      tituloExacto={servicio.tituloSeo}
      schema={schema}
      descripcion={servicio.descripcionSeo}
      whatsappMensaje={servicio.whatsapp}
    >
      <section className="hero hero-servicio">
        <div className="contenedor">
          <p className="miga">
            <Link href="/">Inicio</Link> <span aria-hidden="true">/</span> {servicio.titulo}
          </p>
          <h1>{servicio.h1}</h1>
          <p className="hero-bajada">{servicio.bajada}</p>
          <a
            className="btn btn-claro"
            href={waLink(servicio.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoWhatsApp size={20} /> Consultar por WhatsApp
          </a>
        </div>
      </section>

      <div className="contenedor servicio-grid">
        <article className="servicio-cuerpo">
          {servicio.caminos && (
            <div className="caminos">
              {servicio.caminos.map((c) => (
                <section key={c.titulo} className="camino">
                  <h2>{c.titulo}</h2>
                  {c.parrafos.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {c.pasos && (
                    <ol className="pasos">
                      {c.pasos.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ol>
                  )}
                  {c.aviso && <p className="aviso">{c.aviso}</p>}
                </section>
              ))}
            </div>
          )}

          {servicio.secciones.map((s) => (
            <section key={s.titulo} className="bloque">
              <h2>{s.titulo}</h2>
              {s.parrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}

          {servicio.mito && (
            <aside className="mito">
              <h2>{servicio.mito.titulo}</h2>
              <p>{servicio.mito.texto}</p>
            </aside>
          )}

          {guias.length > 0 && (
            <section className="guias-servicio">
              <h2>Guías sobre {servicio.titulo.toLowerCase()}</h2>
              <ul>
                {guias.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guias/${g.slug}`}>{g.titulo}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <aside className="servicio-lateral">
          <div className="tarjeta-lateral">
            <h2>Qué incluye</h2>
            <ul className="checks">
              {servicio.incluye.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="nota">
              Presupuesto cerrado desde la primera consulta, sin sorpresas.
            </p>
            <a
              className="btn btn-oscuro btn-bloque"
              href={waLink(servicio.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWhatsApp size={20} /> Escribime
            </a>
          </div>
        </aside>
      </div>

      <section className="otros">
        <div className="contenedor">
          <h2 className="titulo-seccion">Otros servicios</h2>
          <div className="otros-grid">
            {otros.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="otro">
                <span className="otro-titulo">{s.titulo}</span>
                <span className="otro-flecha" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
