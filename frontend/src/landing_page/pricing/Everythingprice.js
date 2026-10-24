import React from "react";

function Everythingprice() {
  return (
    <div className="container mt-4 mt-md-5" id="charges">

      {/* SECTION 1: Charges for account opening */}
      <h3 className="fs-3 fw-semibold mb-3">Charges for account opening</h3>
      <div className="table-responsive shadow-sm border rounded">
        <table className="table table-hover text-center mb-0">
          <thead className="table-light">
            <tr>
              <th className="py-3">Type of account</th>
              <th className="py-3">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td><span className="badge bg-success-subtle text-success">Free</span></td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td><span className="badge bg-success-subtle text-success">Free</span></td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 2: Demat AMC Charges */}
      <h3 className="fs-3 fw-semibold mt-5 mb-3">Demat account AMC and other charges</h3>
      <div className="table-responsive shadow-sm border rounded">
        <table className="table table-hover text-center mb-0">
          <thead className="table-light">
            <tr>
              <th className="py-3">Services</th>
              <th className="py-3">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demat account Annual Maintenance Charges (AMC)</td>
              <td>₹ 300 / year</td>
            </tr>
            <tr>
              <td>Dematerialisation</td>
              <td>₹ 150 per certificate</td>
            </tr>
            <tr>
              <td>Rematerialisation</td>
              <td>₹ 150 per certificate</td>
            </tr>
            <tr>
              <td>Courier charges for Demat requests</td>
              <td>₹ 100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-muted mt-2" style={{ fontSize: "14px" }}>
        *AMC is charged quarterly.
      </p>

      {/* SECTION 3: Brokerage Charges */}
      <h3 className="fs-3 fw-semibold mt-5 mb-3">Brokerage charges</h3>
      <div className="table-responsive shadow-sm border rounded">
        <table className="table table-hover text-center mb-0">
          <thead className="table-light">
            <tr>
              <th className="py-3">Type</th>
              <th className="py-3">Brokerage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Equity Delivery</td>
              <td><span className="badge bg-success-subtle text-success">Free</span></td>
            </tr>
            <tr>
              <td>Intraday</td>
              <td>₹ 20 or 0.03% (whichever is lower)</td>
            </tr>
            <tr>
              <td>Equity Futures</td>
              <td>₹ 20 per executed order</td>
            </tr>
            <tr>
              <td>Equity Options</td>
              <td>₹ 20 per executed order</td>
            </tr>
            <tr>
              <td>Currency Futures</td>
              <td>₹ 20 per executed order</td>
            </tr>
            <tr>
              <td>Currency Options</td>
              <td>₹ 20 per executed order</td>
            </tr>
            <tr>
              <td>Commodity</td>
              <td>₹ 20 per executed order</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: Other Charges */}
      <h3 className="fs-3 fw-semibold mt-5 mb-3">Other charges</h3>
      <div className="table-responsive shadow-sm border rounded">
        <table className="table table-hover text-center mb-0">
          <thead className="table-light">
            <tr>
              <th className="py-3">Service</th>
              <th className="py-3">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Auto-squareoff</td>
              <td>₹ 50 per order</td>
            </tr>
            <tr>
              <td>Call & Trade</td>
              <td>₹ 50 per order</td>
            </tr>
            <tr>
              <td>Physical contract note</td>
              <td>₹ 20 per contract</td>
            </tr>
            <tr>
              <td>Rejected/Failed instruction charges</td>
              <td>₹ 20</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 5: Payment Related Charges */}
      <h3 className="fs-3 fw-semibold mt-5 mb-3">Payment gateway charges</h3>
      <div className="table-responsive shadow-sm border rounded mb-5">
        <table className="table table-hover text-center mb-0">
          <thead className="table-light">
            <tr>
              <th className="py-3">Payment Type</th>
              <th className="py-3">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UPI</td>
              <td><span className="badge bg-success-subtle text-success">Free</span></td>
            </tr>
            <tr>
              <td>Net banking</td>
              <td>₹ 9</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Everythingprice;
