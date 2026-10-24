import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://zerodha-backend-q0yx.onrender.com/allHoldings";

    axios
      .get(url)
      .then((res) => {
        setAllHoldings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
        setError("Error fetching holdings");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-secondary fw-semibold">Loading holdings...</p>;
  if (error) return <p className="text-danger fw-semibold">{error}</p>;

  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(250, 88, 144, 0.6)", 
      },
    ],
  };

  return (
    <>
      <h3 className="title text-dark fw-semibold">
         Total Holdings = ({allHoldings.length})
      </h3>

      <div className="order-table border rounded-3 bg-white shadow-sm overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 text-nowrap">
            <thead className="table-light border-bottom">
              <tr>
                <th className="py-3 px-3">Instrument</th>
                <th className="py-3 px-3">Qty.</th>
                <th className="py-3 px-3">Avg. cost</th>
                <th className="py-3 px-3">LTP</th>
                <th className="py-3 px-3">Cur. val</th>
                <th className="py-3 px-3">P&amp;L</th>
                <th className="py-3 px-3">Net chg.</th>
                <th className="py-3 px-3">Day chg.</th>
              </tr>
            </thead>
            <tbody>
              {allHoldings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "text-success" : "text-danger";
                const dayClass = stock.isLoss ? "text-danger" : "text-success";

                return (
                  <tr key={index}>
                    <td className="px-3 fw-bold text-dark">{stock.name}</td>
                    <td className="px-3">{stock.qty}</td>
                    <td className="px-3">₹{stock.avg.toFixed(2)}</td>
                    <td className="px-3 fw-semibold">₹{stock.price.toFixed(2)}</td>
                    <td className="px-3">₹{curValue.toFixed(2)}</td>
                    <td className={`px-3 fw-bold ${profClass}`}>
                      {isProfit ? "+" : ""}₹{(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={`px-3 fw-semibold ${profClass}`}>
                      {stock.net}
                    </td>
                    <td className={`px-3 fw-semibold ${dayClass}`}>
                      {stock.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="row g-3 my-3">
        <div className="col-12 col-sm-4">
          <div className="p-3 bg-white border rounded-3 shadow-sm">
            <h5 className="fw-bold text-dark mb-1">
              ₹29,875.<small className="fs-6">55</small>
            </h5>
            <span className="text-muted small">Total Investment</span>
          </div>
        </div>

        <div className="col-12 col-sm-4">
          <div className="p-3 bg-white border rounded-3 shadow-sm">
            <h5 className="fw-bold text-dark mb-1">
              ₹31,428.<small className="fs-6">95</small>
            </h5>
            <span className="text-muted small">Current Value</span>
          </div>
        </div>

        <div className="col-12 col-sm-4">
          <div className="p-3 bg-white border rounded-3 shadow-sm">
            <h5 className="fw-bold text-success mb-1">
              +₹1,553.40 <small className="fs-6">(+5.20%)</small>
            </h5>
            <span className="text-muted small">Overall P&amp;L</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-3 border rounded-3 shadow-sm my-3">
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;
