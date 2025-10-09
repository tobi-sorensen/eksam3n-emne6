import Link from 'next/link';

export default function ClimateCard({ tiltak }) {
  return (
    <div className="card">
      <h3>{tiltak.tittel}</h3>
      <p>{tiltak.intro}</p>
      <Link href={`/tiltak/${tiltak.slug}`}>Les mer</Link>
    </div>
  );
}