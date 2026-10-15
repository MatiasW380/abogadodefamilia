// Datos centrales del estudio. Cambiar acá actualiza todo el sitio.
export const SITE = {
  url: 'https://www.abogadodefamilia.click',
  nombre: 'Ab. Oscar Matías Baronetto',
  marca: 'Abogado de Familia en Córdoba',
  matricula: 'MP 1-37398',
  direccion: '27 de Abril 627',
  ciudad: 'Córdoba',
  provincia: 'Córdoba',
  cp: '5000',
  cpCompleto: 'X5000AEM',
  lat: -31.414715,
  lng: -64.192996,
  telefonoVisible: '351 787-9726',
  telefonoLink: '+5493517879726',
  whatsapp: '5493517879726',
  instagram: 'https://www.instagram.com/abogadodefamiliacba/',
  facebook: 'https://www.facebook.com/profile.php?id=61573220354725',
  // Código de verificación de Google Search Console (solo el valor de content="...").
  googleVerification: 'Pv6aPFQJh_pYMYBvmwvPUZFSDzdlnJW81T9kv-GkvkQ',
  // Trayectoria (se usa en el inicio y en los datos para Google).
  aniosExperiencia: 20,
  mapsQuery: '27 de Abril 627, Córdoba, Argentina',
};

export function waLink(mensaje = 'Hola, quisiera hacer una consulta.') {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
