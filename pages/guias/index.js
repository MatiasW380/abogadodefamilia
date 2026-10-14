import Link from 'next/link';
import Layout from '../../components/Layout';
import { GUIAS } from '../../lib/guias';
import { SERVICIOS } from '../../lib/servicios';
import { SITE } from '../../lib/site';

export default function Guias() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: `${SITE.url}/guias` },
      ],
    },
  ];
  return (
    <Layout
      tituloExacto="Guías de Derecho de Familia en Córdoba | Abogado de Familia"
      descripcion="Guías claras sobre cuota alimentaria, violencia familiar, divorcio y régimen de comunicación en Córdoba. Respuestas a las dudas más frecuentes."
      schema={schema}
    >
      <section className="hero hero-servicio">
        <div className="contenedor">
          <p className="miga">
            <Link href="/">Inicio</Link> <span aria-hidden="true">/</span> Guías
          </p>
          <h1>Guías de Derecho de Familia</h1>
          <p className="hero-bajada">
            Respuestas claras a las dudas más frecuentes sobre cuota alimentaria, violencia
            familiar, divorcio y régimen de comunicación en Córdoba.
          </p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor">
          {SERVICIOS.map((s) => {
            const lista = GUIAS.filter((g) => g.servicio === s.slug);
            if (!lista.length) return null;
            return (
              <div key={s.slug} className="guias-grupo">
                <h2 className="titulo-seccion">{s.titulo}</h2>
                <div className="tarjetas tarjetas-guias">
                  {lista.map((g) => (
                    <Link key={g.slug} href={`/guias/${g.slug}`} className="tarjeta">
                      <h3>{g.titulo}</h3>
                      <p>{g.resumen}</p>
                      <span className="tarjeta-mas">
                        Leer guía <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
