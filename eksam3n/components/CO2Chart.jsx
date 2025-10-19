import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CO2Chart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.land),
    datasets: [
      {
        label: 'CO₂ per person (tonn)',
        data: data.map(item => item.utslipp),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
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
    <div>
      <h2>Grafisk visning av CO₂-utslipp</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default CO2Chart;