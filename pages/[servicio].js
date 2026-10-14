import PaginaServicio from '../components/PaginaServicio';
import { SERVICIOS, getServicio } from '../lib/servicios';

export default function Servicio({ slug }) {
  return <PaginaServicio servicio={getServicio(slug)} />;
}

export function getStaticPaths() {
  return {
    paths: SERVICIOS.map((s) => ({ params: { servicio: s.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.servicio } };
}
