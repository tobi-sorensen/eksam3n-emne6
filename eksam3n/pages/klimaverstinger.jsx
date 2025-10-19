import { useState } from "react";
import { co2Data } from "../data/co2Data";
import CO2Table from "../components/CO2Table";
import CO2Chart from "../components/CO2Chart";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Klimaverstinger = () => {
  const [visGraf, setVisGraf] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <main style={{ flex: 1, padding: "2rem" }}>
        <h1>Klima-verstinger</h1>
        <p>Se CO₂-utslipp per innbygger for de 20 landene som slipper ut mest.</p>

        <button
          onClick={() => setVisGraf(!visGraf)}
          className="custom-button"
        >
          Bytt til {visGraf ? "tabellvisning" : "grafvisning"}
        </button>

        {visGraf ? <CO2Chart data={co2Data} /> : <CO2Table data={co2Data} />}
      </main>

      <Footer />
    </div>
  );
};

export default Klimaverstinger;
