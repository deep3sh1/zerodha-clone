import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5 mt-0 mt-md-3 order-2 order-md-1">
          <h2 className="fs-1 fw-semibold">{productName}</h2>
          <p className="text-muted mt-3" style={{ lineHeight: "1.7", fontSize: "16px" }}>{productDesription}</p>
          <div className="my-3">
            {learnMore && (
              <a href={learnMore} style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>
                Learn More <i className="fa fa-long-arrow-right ms-1"></i>
              </a>
            )}
          </div>
        </div>
        <div className="col-12 col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
          <img src={imageURL} className="img-fluid" style={{ maxHeight: "360px", width: "auto" }} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;