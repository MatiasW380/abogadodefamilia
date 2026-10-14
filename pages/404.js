import Link from 'next/link';
import Layout from '../components/Layout';

export default function NoEncontrada() {
  return (
    <Layout titulo="Página no encontrada" descripcion="La página que buscás no existe.">
      <section className="hero hero-servicio">
        <div className="contenedor">
          <h1>Página no encontrada</h1>
          <p className="hero-bajada">La dirección que buscás no existe o cambió.</p>
          <Link className="btn btn-claro" href="/">Volver al inicio</Link>
        </div>
      </section>
    </Layout>
  );
}
