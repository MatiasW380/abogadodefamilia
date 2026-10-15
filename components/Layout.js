import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Emblema from './Emblema';
import Redes from './Redes';
import { SITE, waLink } from '../lib/site';
import { SERVICIOS } from '../lib/servicios';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['Attorney', 'LegalService'],
  '@id': `${SITE.url}/#estudio`,
  name: `${SITE.nombre} — Abogado de Familia`,
  alternateName: 'Abogado de Familia en Córdoba',
  description:
    'Abogado de familia en Córdoba con especialización en género y violencia familiar: cuota alimentaria, divorcio, régimen de comunicación y violencia familiar.',
  logo: `${SITE.url}/apple-touch-icon.png`,
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`,
  founder: { '@id': `${SITE.url}/#abogado` },
  employee: { '@id': `${SITE.url}/#abogado` },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.lat, longitude: SITE.lng },
  priceRange: '$$',
  currenciesAccepted: 'ARS',
  url: SITE.url,
  telephone: SITE.telefonoLink,
  image: `${SITE.url}/og.png`,
  areaServed: [
    { '@type': 'City', name: 'Córdoba' },
    { '@type': 'State', name: 'Provincia de Córdoba' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.direccion,
    addressLocality: SITE.ciudad,
    addressRegion: SITE.provincia,
    postalCode: SITE.cpCompleto,
    addressCountry: 'AR',
  },
  knowsAbout: [
    'Derecho de familia',
    'Cuota alimentaria',
    'Divorcio',
    'Régimen de comunicación',
    'Violencia familiar',
  ],
  sameAs: [SITE.instagram, SITE.facebook],
};

const PERSONA_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#abogado`,
  name: 'Oscar Matías Baronetto',
  honorificPrefix: 'Ab.',
  jobTitle: 'Abogado de Familia',
  description: `Abogado de familia en Córdoba con más de ${SITE.aniosExperiencia} años de ejercicio en Derecho de Familia, autor de libros sobre la materia y mentor de abogados del fuero de familia. Especialización en género y violencia familiar.`,
  url: SITE.url,
  image: `${SITE.url}/matias-baronetto.jpg`,
  worksFor: { '@id': `${SITE.url}/#estudio` },
  address: { '@type': 'PostalAddress', addressLocality: 'Córdoba', addressRegion: 'Córdoba', addressCountry: 'AR' },
  knowsAbout: ['Derecho de familia', 'Cuota alimentaria', 'Violencia familiar', 'Divorcio', 'Régimen de comunicación'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Matrícula profesional',
    name: `Matrícula ${SITE.matricula}`,
    recognizedBy: { '@type': 'Organization', name: 'Colegio de Abogados de Córdoba' },
  },
  sameAs: [SITE.instagram, SITE.facebook],
};

export default function Layout({
  titulo,
  tituloExacto,
  descripcion,
  children,
  whatsappMensaje,
  schema = [],
  tipoOg = 'website',
}) {
  const { asPath } = useRouter();
  const [abierto, setAbierto] = useState(false);
  const canonical = `${SITE.url}${asPath === '/' ? '' : asPath.split('#')[0].split('?')[0]}`;
  const tituloCompleto =
    tituloExacto ||
    (titulo ? `${titulo} · ${SITE.nombre}` : `Abogado de Familia en Córdoba · ${SITE.nombre}`);

  return (
    <>
      <Head>
        <title>{tituloCompleto}</title>
        <meta name="description" content={descripcion} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Córdoba, Argentina" />
        <meta name="geo.position" content={`${SITE.lat};${SITE.lng}`} />
        <meta name="ICBM" content={`${SITE.lat}, ${SITE.lng}`} />
        {SITE.googleVerification && (
          <meta name="google-site-verification" content={SITE.googleVerification} />
        )}
        <meta property="og:type" content={tipoOg} />
        <meta property="og:site_name" content={`${SITE.nombre} — Abogado de Familia`} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:title" content={tituloCompleto} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE.url}/og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        {[JSON_LD, PERSONA_LD, ...schema].map((obj, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
          />
        ))}
      </Head>

      <a className="saltar" href="#contenido">Saltar al contenido</a>

      <header className="cabecera">
        <div className="contenedor cabecera-in">
          <Link href="/" className="marca" onClick={() => setAbierto(false)}>
            <Emblema size={40} className="marca-emblema" />
            <span className="marca-texto">
              <span className="marca-nombre">Oscar Matías Baronetto</span>
              <span className="marca-sub">Abogado de Familia</span>
            </span>
          </Link>

          <button
            className="menu-btn"
            aria-expanded={abierto}
            aria-controls="nav-principal"
            onClick={() => setAbierto(!abierto)}
          >
            <span className="sr">Menú</span>
            <span className={`hamburguesa ${abierto ? 'x' : ''}`} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>

          <nav id="nav-principal" className={`nav ${abierto ? 'abierto' : ''}`}>
            {SERVICIOS.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className={asPath === `/${s.slug}` ? 'activo' : ''}
                onClick={() => setAbierto(false)}
              >
                {s.corto || s.titulo}
              </Link>
            ))}
            <Link
              href="/guias"
              className={asPath.startsWith('/guias') ? 'activo' : ''}
              onClick={() => setAbierto(false)}
            >
              Guías
            </Link>
            <Link href="/#contacto" onClick={() => setAbierto(false)}>
              Contacto
            </Link>
            <Redes className="redes-nav" />
          </nav>
        </div>
      </header>

      <main id="contenido">{children}</main>

      <footer className="pie">
        <div className="contenedor pie-in">
          <div>
            <div className="pie-marca">
              <Emblema size={36} />
              <div>
                <strong>{SITE.nombre}</strong>
                <span>Abogado de Familia · {SITE.matricula}</span>
              </div>
            </div>
            <p className="pie-dato">
              {SITE.direccion}, {SITE.ciudad}, Córdoba, Argentina
              <br />
              <a href={`tel:${SITE.telefonoLink}`}>{SITE.telefonoVisible}</a>
            </p>
          </div>
          <div>
            <h3 className="pie-titulo">Servicios</h3>
            <ul className="pie-lista">
              {SERVICIOS.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`}>{s.titulo}</Link>
                </li>
              ))}
              <li>
                <Link href="/guias">Guías legales</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="pie-titulo">Seguime</h3>
            <Redes className="redes-pie" conWhatsapp />
            <p className="pie-dato pie-handle">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer me">
                @abogadodefamiliacba
              </a>
            </p>
          </div>
        </div>
        <div className="contenedor pie-legal">
          <p>
            La información de este sitio es de carácter general y no reemplaza una consulta
            profesional sobre tu caso concreto.
          </p>
          <p>© {new Date().getFullYear()} {SITE.nombre}</p>
        </div>
      </footer>

      <a
        className="wa-flotante"
        href={waLink(whatsappMensaje)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
      >
        <IconoWhatsApp />
        <span>Consultar</span>
      </a>
    </>
  );
}

export function IconoWhatsApp({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
