const CO2Table = ({ data }) => {
    return (
      <div className="table-container">
        <h2>CO₂-utslipp per person (tonn)</h2>
        <div className="table">
          <div className="table-header">
            <span>Land</span>
            <span>Utslipp</span>
          </div>
          {data.map((item, index) => (
            <div className="table-row" key={index}>
              <span>{item.land}</span>
              <span>{item.utslipp}</span>
            </div>
          ))}
        </div>
        <style jsx>{`
          .table {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .table-header, .table-row {
            display: flex;
            justify-content: space-between;
            padding: 8px;
            background: #f0f0f0;
            border-radius: 4px;
          }
          .table-header {
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  };
  
  export default CO2Table;