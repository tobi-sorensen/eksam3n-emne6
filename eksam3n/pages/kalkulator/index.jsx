import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CalculatorForm from "../../components/CalculatorForm";

const Kalkulator = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, padding: "2rem" }}>
        <h1>Klimakalkulator</h1>
        <p>Fyll ut informasjon om ditt forbruk og se ditt CO₂-avtrykk.</p>
        <CalculatorForm />
      </main>
      <Footer />
    </div>
  );
};

export default Kalkulator;