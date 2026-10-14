import { SITE, waLink } from '../lib/site';

export function IconoInstagram({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconoFacebook({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6V21h3Z" />
    </svg>
  );
}

export function IconoWa({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4.5 19.5l1.1-3.9A8 8 0 1 1 8.6 18.6Z" strokeLinejoin="round" />
      <path d="M9.2 8.6c.2-.5.6-.5.9-.5l.4.1.7 1.6-.5.8c.5 1 1.4 1.9 2.4 2.4l.8-.5 1.6.7v.4c0 .3 0 .7-.5.9-.6.3-1.6.4-3.3-.8-1.5-1.1-2.6-2.6-2.7-3.6 0-.6.1-1.2.2-1.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Fila de botones circulares con las redes del estudio.
export default function Redes({ className = '', conWhatsapp = false }) {
  return (
    <ul className={`redes ${className}`}>
      <li>
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer me" aria-label="Instagram @abogadodefamiliacba">
          <IconoInstagram />
        </a>
      </li>
      <li>
        <a href={SITE.facebook} target="_blank" rel="noopener noreferrer me" aria-label="Facebook: Abogado de Familia en Córdoba">
          <IconoFacebook />
        </a>
      </li>
      {conWhatsapp && (
        <li>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <IconoWa />
          </a>
        </li>
      )}
    </ul>
  );
}
