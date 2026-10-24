import React from 'react';

function Createticket() {
  return (
    <div className='w-100 py-4 py-md-5 px-3' style={{ backgroundColor: "#f8fafc" }}>
      <div className="container text-center">
        <h2 className="mb-3 fw-semibold fs-2">Need help? Create a ticket</h2>
        <p className="mb-4 text-muted mx-auto" style={{ fontSize: "1.05rem", maxWidth: "600px", lineHeight: "1.6" }}>
          If you can't find an answer above, raise a support ticket — we will respond within 48 hours.
        </p>
        <button 
          className="btn btn-primary btn-lg px-4 py-2" 
          style={{ 
            borderRadius: "6px",
            minWidth: "180px",
            maxWidth: "240px",
            width: "100%"
          }}
        >
          Create Ticket
        </button>
      </div>
    </div>
  );
}

export default Createticket;
