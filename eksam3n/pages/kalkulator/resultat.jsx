import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Resultat = () => {
  const router = useRouter();
  const total = Number(router.query.total) || 0;
  const gjennomsnitt = 9000;
  const diff = total - gjennomsnitt;

  const chartData = {
    labels: ["Din utslippsprofil", "Gjennomsnittet"],
    datasets: [
      {
        label: "CO₂ per år (kg)",
        data: [total, gjennomsnitt],
        backgroundColor: ["#4caf50", "#f44336"]
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, padding: "2rem" }}>
        <h1>Resultat</h1>
        <p><strong>Ditt beregnede utslipp:</strong> {total} kg CO₂ per år</p>
        <p><strong>Gjennomsnittlig person:</strong> {gjennomsnitt} kg CO₂ per år</p>

        {diff > 0 ? (
          <p>Du ligger <strong>{diff} kg</strong> over gjennomsnittet.</p>
        ) : (
          <p>Du ligger <strong>{Math.abs(diff)} kg</strong> under gjennomsnittet – bra jobba!</p>
        )}

        <div style={{ maxWidth: "500px", marginTop: "2rem" }}>
          <h2>Sammenligning i graf</h2>
          <Bar data={chartData} options={options} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resultat;
