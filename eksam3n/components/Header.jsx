import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#d3eaf2', padding: '1rem 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Klimakampen</h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Hjem</Link>
          <Link href="/klimaverstinger">Klimaverstinger</Link>
          <Link href="/kalkulator">Kalkulator</Link>
        </nav>
      </div>
    </header>
  );
}