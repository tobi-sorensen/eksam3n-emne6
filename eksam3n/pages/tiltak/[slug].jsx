import { useRouter } from 'next/router';
import tiltakData from '../../data/tiltak';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TiltakDetalj() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return (
      <div>
        <Header />
        <main style={{ padding: "2rem" }}>
          <p>Laster...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const tiltak = tiltakData.find((t) => t.slug === slug);

  if (!tiltak) {
    return (
      <div>
        <Header />
        <main style={{ padding: "2rem" }}>
          <h2>Tiltak ikke funnet</h2>
          <p>Det finnes ingen tiltak med slug: <strong>{slug}</strong></p>
          <p><Link href="/">← Tilbake til forsiden</Link></p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main className="details" style={{ padding: "2rem" }}>
        <h2>{tiltak.tittel}</h2>
        <p>{tiltak.beskrivelse}</p>
        <p>
          <a href={tiltak.lesMerUrl} target="_blank" rel="noopener noreferrer">
            Les mer hos ekstern kilde
          </a>
        </p>
        <p><Link href="/">← Tilbake</Link></p>
      </main>
      <Footer />
    </div>
  );
}