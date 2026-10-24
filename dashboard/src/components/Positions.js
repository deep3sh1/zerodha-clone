import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title text-dark fw-semibold">
        Positions ({positions.length})
      </h3>

      <div className="order-table border rounded-3 bg-white shadow-sm overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 text-nowrap">
            <thead className="table-light border-bottom">
              <tr>
                <th className="py-3 px-3">Product</th>
                <th className="py-3 px-3">Instrument</th>
                <th className="py-3 px-3">Qty.</th>
                <th className="py-3 px-3">Avg.</th>
                <th className="py-3 px-3">LTP</th>
                <th className="py-3 px-3">P&amp;L</th>
                <th className="py-3 px-3">Chg.</th>
              </tr>
            </thead>

            <tbody>
              {positions.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "text-success" : "text-danger";
                const dayClass = stock.isLoss ? "text-danger" : "text-success";

                return (
                  <tr key={index}>
                    <td className="px-3"><span className="badge bg-light text-secondary border">{stock.product}</span></td>
                    <td className="px-3 fw-bold text-dark">{stock.name}</td>
                    <td className="px-3">{stock.qty}</td>
                    <td className="px-3">₹{stock.avg.toFixed(2)}</td>
                    <td className="px-3 fw-semibold">₹{stock.price.toFixed(2)}</td>
                    <td className={`px-3 fw-bold ${profClass}`}>
                      {isProfit ? "+" : ""}₹{(curValue - stock.avg * stock.qty).toFixed(2)}
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
    </>
  );
};

export default Positions;
