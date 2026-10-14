import Link from 'next/link';
import Layout, { IconoWhatsApp } from '../components/Layout';
import Emblema from '../components/Emblema';
import Redes from '../components/Redes';
import { SERVICIOS } from '../lib/servicios';
import { GUIAS } from '../lib/guias';
import { SITE, waLink } from '../lib/site';

const PASOS = [
  {
    t: 'Consulta',
    d: 'Me escribís por WhatsApp y coordinamos una reunión presencial.',
  },
  {
    t: 'Diagnóstico y presupuesto',
    d: 'Te explico en palabras claras qué opciones tenés, cuánto puede demorar y cuánto va a costar.',
  },
  {
    t: 'Inicio del trámite',
    d: 'Preparo y presento lo necesario. Si hay urgencia, priorizo las medidas que no pueden esperar.',
  },
  {
    t: 'Seguimiento',
    d: 'Te aviso de cada novedad del expediente y te preparo antes de cada audiencia.',
  },
];

const FAQ = [
  {
    p: '¿Cuánto cuesta la consulta?',
    r: 'Escribime por WhatsApp y te informo el valor de la consulta. En los trámites trabajo con presupuesto cerrado, para que sepas desde el principio cuánto vas a pagar.',
  },
  {
    p: '¿Atendés solo en Córdoba Capital?',
    r: `El estudio está en ${SITE.direccion}, Córdoba, pero tomamos casos de toda la provincia.`,
  },
  {
    p: '¿Qué tengo que llevar a la primera consulta?',
    r: 'DNI, partidas de nacimiento de tus hijos e hijas si las tenés, y cualquier notificación, acuerdo o resolución judicial previa. Si no tenés todo, no importa: arrancamos igual.',
  },
  {
    p: 'Me notificaron una medida de restricción, ¿qué hago primero?',
    r: 'Cumplila estrictamente desde el momento en que te notifican, sin excepciones, y consultá inmediatamente a un abogado.',
    link: '/violencia-familiar',
  },
  {
    p: '¿Puedo reclamar cuota alimentaria si el otro progenitor trabaja en negro?',
    r: 'Sí. Sus ingresos se pueden probar por otros medios, como su nivel de vida, su actividad o sus bienes.',
    link: '/cuota-alimentaria',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.p,
    acceptedAnswer: { '@type': 'Answer', text: f.r },
  })),
};

export default function Inicio() {
  return (
    <Layout
      tituloExacto="Abogado de Familia en Córdoba | Ab. Oscar Matías Baronetto"
      schema={[FAQ_SCHEMA]}
      descripcion={`Abogado de familia en Córdoba con más de ${SITE.aniosExperiencia} años de experiencia (${SITE.matricula}). Cuota alimentaria, divorcio, régimen de comunicación y violencia familiar.`}
    >
      <section className="hero hero-inicio">
        <div className="contenedor hero-grid">
          <div>
            <p className="kicker">Córdoba · {SITE.matricula}</p>
            <h1>Abogado de Familia en Córdoba</h1>
            <p className="hero-bajada">
              Más de {SITE.aniosExperiencia} años dedicado al Derecho de Familia en Córdoba.
              Cuota alimentaria, divorcio, régimen de comunicación y violencia familiar.
            </p>
            <div className="hero-acciones">
              <a
                className="btn btn-claro"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoWhatsApp size={20} /> Consultar por WhatsApp
              </a>
              <a className="btn btn-linea" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
          <div className="hero-sello" aria-hidden="true">
            <Emblema size={220} />
          </div>
        </div>
      </section>

      <section className="credenciales" aria-label="Credenciales">
        <ul className="contenedor credenciales-lista">
          <li>
            <strong>{SITE.matricula}</strong>
            <span>Colegio de Abogados de Córdoba</span>
          </li>
          <li>
            <strong>Más de {SITE.aniosExperiencia} años</strong>
            <span>dedicados al Derecho de Familia</span>
          </li>
          <li>
            <strong>Autor</strong>
            <span>de libros de Derecho de Familia</span>
          </li>
          <li>
            <strong>Especialización</strong>
            <span>en género y violencia familiar</span>
          </li>
          <li>
            <strong>Presupuesto cerrado</strong>
            <span>desde la primera consulta</span>
          </li>
        </ul>
      </section>

      <section id="servicios" className="seccion">
        <div className="contenedor">
          <p className="kicker kicker-oscuro">Servicios</p>
          <h2 className="titulo-seccion">¿En qué te puedo ayudar?</h2>
          <div className="tarjetas">
            {SERVICIOS.map((s, i) => (
              <Link key={s.slug} href={`/${s.slug}`} className="tarjeta">
                <span className="tarjeta-num">0{i + 1}</span>
                <h3>{s.titulo}</h3>
                <p>{s.resumen}</p>
                <span className="tarjeta-mas">
                  Más información <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-urgente">
        <div className="contenedor">
          <p className="kicker kicker-oscuro">Violencia familiar</p>
          <h2 className="titulo-seccion">Cuando la situación no puede esperar</h2>
          <p className="intro">
            En violencia familiar las medidas se dictan en horas. Si hay violencia, siempre debe ser denunciada.
          </p>
          <div className="urgente-grid">
            <div className="urgente">
              <h3>Necesito protección</h3>
              <p>
                Exclusión del hogar, prohibición de acercamiento y de contacto, cuota y
                cuidado provisorio de los hijos.
              </p>
              <Link href="/violencia-familiar">Cómo pedir medidas →</Link>
            </div>
            <div className="urgente">
              <h3>Me notificaron una medida</h3>
              <p>
                Una restricción o una exclusión del hogar no es una condena. Seas la persona denunciante o la denunciada, lo que hagas en las primeras horas importa.
              </p>
              <Link href="/violencia-familiar">Qué hacer primero →</Link>
            </div>
          </div>
          <p className="aviso aviso-centro">
            Si estás en peligro ahora, llamá al <strong>911</strong> o a la{' '}
            <strong>Línea 144</strong> (gratuita, 24 horas).
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <p className="kicker kicker-oscuro">Cómo trabajo</p>
          <h2 className="titulo-seccion">Claridad desde el primer día</h2>
          <ol className="proceso">
            {PASOS.map((p, i) => (
              <li key={p.t}>
                <span className="proceso-num">{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="seccion seccion-oscura">
        <div className="contenedor sobre">
          <Emblema size={120} className="sobre-emblema" />
          <div>
            <p className="kicker">Sobre mí</p>
            <h2 className="titulo-seccion claro">{SITE.nombre}</h2>
            <p>
              Hace más de dos décadas que me dedico al Derecho de Familia en Córdoba. Soy abogado
              matriculado en el Colegio de Abogados de Córdoba ({SITE.matricula}), con
              especialización en género y violencia familiar.
            </p>
            <p>
              Publiqué libros sobre Derecho de Familia y fui mentor de muchos abogados que hoy
              ejercen en el fuero de familia de Córdoba. Esa experiencia es la que pongo al
              servicio de cada caso.
            </p>
            <p>
              Sé que quien llega a un estudio de familia suele estar atravesando un momento
              difícil. Por eso trabajo con explicaciones simples, presupuestos claros y
              comunicación directa: siempre vas a saber en qué está tu caso.
            </p>
            <Redes className="redes-sobre" conWhatsapp />
          </div>
        </div>
      </section>

      <section className="seccion seccion-urgente">
        <div className="contenedor">
          <p className="kicker kicker-oscuro">Guías</p>
          <h2 className="titulo-seccion">Información para entender tu situación</h2>
          <div className="tarjetas tarjetas-guias">
            {GUIAS.slice(0, 3).map((g) => (
              <Link key={g.slug} href={`/guias/${g.slug}`} className="tarjeta">
                <h3>{g.titulo}</h3>
                <p>{g.resumen}</p>
                <span className="tarjeta-mas">
                  Leer guía <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
          <p className="ver-todas">
            <Link href="/guias">Ver todas las guías →</Link>
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor faq-wrap">
          <div>
            <p className="kicker kicker-oscuro">Preguntas frecuentes</p>
            <h2 className="titulo-seccion">Lo que más me consultan</h2>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.p}>
                <summary>{f.p}</summary>
                <p>
                  {f.r}{' '}
                  {f.link && (
                    <Link href={f.link}>Leer más</Link>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="seccion seccion-contacto">
        <div className="contenedor contacto-grid">
          <div>
            <p className="kicker kicker-oscuro">Contacto</p>
            <h2 className="titulo-seccion">Hablemos de tu caso</h2>
            <p className="intro">
              La forma más rápida de acordar una cita es mediante WhatsApp. Atiendo con turno previo en el estudio.
            </p>
            <dl className="datos">
              <div>
                <dt>WhatsApp y teléfono</dt>
                <dd>
                  <a href={`tel:${SITE.telefonoLink}`}>{SITE.telefonoVisible}</a>
                </dd>
              </div>
              <div>
                <dt>Estudio</dt>
                <dd>
                  {SITE.direccion}, {SITE.ciudad} ({SITE.cp})
                </dd>
              </div>
              <div>
                <dt>Redes</dt>
                <dd className="dd-redes">
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer me">
                    Instagram @abogadodefamiliacba
                  </a>
                  <a href={SITE.facebook} target="_blank" rel="noopener noreferrer me">
                    Facebook: Abogado de Familia en Córdoba
                  </a>
                </dd>
              </div>
            </dl>
            <a
              className="btn btn-oscuro"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWhatsApp size={20} /> Escribir por WhatsApp
            </a>
          </div>
          <div className="mapa">
            <iframe
              title={`Mapa: ${SITE.mapsQuery}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
