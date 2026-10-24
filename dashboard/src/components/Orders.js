import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./Orders.css"; // optional styling

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // track error state

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://zerodha-backend-q0yx.onrender.com/orders", {
          headers: {
            Authorization: `Bearer ${token}`, // Use Bearer format
          },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders", err);
        setError(true); // just set error state
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  if (error)
    return (
      <div className="no-orders">
        <p>Unable to fetch orders at the moment. Please try again later.</p>
      </div>
    );

  if (orders.length === 0)
    return (
      <div className="no-orders">
        <p>You haven't placed any orders yet</p>
      </div>
    );

  return (
    <div className="orders bg-white border rounded-3 p-3 p-md-4 shadow-sm">
      <h3 className="fw-bold text-dark mb-3">Your Orders</h3>
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0 text-nowrap">
          <thead className="table-light border-bottom">
            <tr>
              <th className="py-3 px-3">Stock</th>
              <th className="py-3 px-3">Qty</th>
              <th className="py-3 px-3">Price</th>
              <th className="py-3 px-3">Mode</th>
              <th className="py-3 px-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const isBuy = (order.mode || "").toUpperCase() === "BUY";
              return (
                <tr key={order._id}>
                  <td className="px-3 fw-bold text-dark">{order.name}</td>
                  <td className="px-3">{order.qty}</td>
                  <td className="px-3 fw-semibold">₹{Number(order.price).toFixed(2)}</td>
                  <td className="px-3">
                    <span className={`badge ${isBuy ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"} px-3 py-1 rounded-pill fw-bold`}>
                      {order.mode}
                    </span>
                  </td>
                  <td className="px-3 text-muted small">{new Date(order.createdAt).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
