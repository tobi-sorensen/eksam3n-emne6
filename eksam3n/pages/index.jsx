import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClimateCard from '../components/ClimateCard';
import tiltak from '../data/tiltak';

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Head>
        <title>Klimakampen</title>
      </Head>
      <Header />
      <main className="grid-container">
        {tiltak.map(t => <ClimateCard key={t.id} tiltak={t} />)}
      </main>
      <Footer />
    </div>
  );
}
