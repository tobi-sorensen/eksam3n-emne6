import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CalculatorForm = () => {
  const [biff, setBiff] = useState("");
  const [fly, setFly] = useState("");
  const [km, setKm] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

  useEffect(() => {
    
    const co2 =
      (Number(biff || 0) * 5 * 52) +
      (Number(fly || 0) * 250) +
      (Number(km || 0) * 0.2 * 52);

    setTotal(Math.round(co2));
  }, [biff, fly, km]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/kalkulator/resultat",
      query: { total },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="calculator-form space-y-4">
      <label className="block">
        Hvor mange biffmåltider spiser du i uka?
        <input
          type="number"
          value={biff}
          onChange={(e) => setBiff(e.target.value)}
          placeholder="0"
          min="0"
          max="14"
          className="custom-input border p-2 rounded w-full"
        />
      </label>

      <label className="block">
        Hvor mange flyreiser tar du i året?
        <input
          type="number"
          value={fly}
          onChange={(e) => setFly(e.target.value)}
          placeholder="0"
          min="0"
          max="5000"
          className="custom-input border p-2 rounded w-full"
        />
      </label>

      <label className="block">
        Hvor mange kilometer kjører du i uka?
        <input
          type="number"
          value={km}
          onChange={(e) => setKm(e.target.value)}
          placeholder="0"
          min="0"
          max="5000"
          className="custom-input border p-2 rounded w-full"
        />
      </label>

      <p>
        <strong>Foreløpig utslipp:</strong> {total} kg CO₂/år
      </p>

      <button
        type="submit"
        className="custom-button bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Se oppsummering
      </button>
    </form>
  );
};

export default CalculatorForm;