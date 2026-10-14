import Link from 'next/link';
import Layout, { IconoWhatsApp } from '../../components/Layout';
import { GUIAS, getGuia } from '../../lib/guias';
import { getServicio } from '../../lib/servicios';
import { SITE, waLink } from '../../lib/site';

function fechaLarga(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function Guia({ slug }) {
  const g = getGuia(slug);
  const servicio = getServicio(g.servicio);
  const otras = GUIAS.filter((x) => x.slug !== g.slug && x.servicio === g.servicio);
  const url = `${SITE.url}/guias/${g.slug}`;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: g.titulo,
      description: g.descripcion,
      datePublished: g.fecha,
      dateModified: g.actualizada || g.fecha,
      inLanguage: 'es-AR',
      mainEntityOfPage: url,
      image: `${SITE.url}/og.png`,
      author: { '@type': 'Person', name: 'Oscar Matías Baronetto', jobTitle: 'Abogado' },
      publisher: { '@id': `${SITE.url}/#estudio` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: `${SITE.url}/guias` },
        { '@type': 'ListItem', position: 3, name: g.titulo, item: url },
      ],
    },
  ];
  if (g.preguntas?.length) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: g.preguntas.map((q) => ({
        '@type': 'Question',
        name: q.p,
        acceptedAnswer: { '@type': 'Answer', text: q.r },
      })),
    });
  }

  return (
    <Layout
      tituloExacto={g.tituloSeo}
      descripcion={g.descripcion}
      whatsappMensaje={servicio.whatsapp}
      schema={schema}
      tipoOg="article"
    >
      <section className="hero hero-servicio">
        <div className="contenedor">
          <p className="miga">
            <Link href="/">Inicio</Link> <span aria-hidden="true">/</span>{' '}
            <Link href="/guias">Guías</Link> <span aria-hidden="true">/</span> {servicio.titulo}
          </p>
          <h1>{g.titulo}</h1>
          <p className="hero-meta">
            Por Ab. Oscar Matías Baronetto · {SITE.matricula} ·{' '}
            <time dateTime={g.actualizada || g.fecha}>{fechaLarga(g.actualizada || g.fecha)}</time>
          </p>
        </div>
      </section>

      <div className="contenedor servicio-grid">
        <article className="servicio-cuerpo">
          {g.bloques.map((b, i) => (
            <section key={i} className="bloque">
              {b.h2 && <h2>{b.h2}</h2>}
              {b.parrafos?.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              {b.lista && (
                <ul className="lista-guia">
                  {b.lista.map((x, j) => (
                    <li key={j}>{x}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {g.preguntas?.length > 0 && (
            <section className="bloque">
              <h2>Preguntas frecuentes</h2>
              <div className="faq">
                {g.preguntas.map((q) => (
                  <details key={q.p}>
                    <summary>{q.p}</summary>
                    <p>{q.r}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <p className="nota">
            Esta guía es información general y no reemplaza una consulta sobre tu caso concreto.
          </p>
        </article>

        <aside className="servicio-lateral">
          <div className="tarjeta-lateral">
            <h2>¿Necesitás ayuda con tu caso?</h2>
            <p className="nota">
              Escribime y coordinamos una consulta. Presupuesto cerrado desde la primera reunión.
            </p>
            <a
              className="btn btn-oscuro btn-bloque"
              href={waLink(servicio.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWhatsApp size={20} /> Escribime
            </a>
            <p className="lateral-link">
              <Link href={`/${servicio.slug}`}>Ver servicio de {servicio.titulo.toLowerCase()} →</Link>
            </p>
          </div>
          {otras.length > 0 && (
            <div className="tarjeta-lateral relacionadas">
              <h2>Guías relacionadas</h2>
              <ul>
                {otras.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/guias/${o.slug}`}>{o.titulo}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </Layout>
  );
}

export function getStaticPaths() {
  return { paths: GUIAS.map((g) => ({ params: { slug: g.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
