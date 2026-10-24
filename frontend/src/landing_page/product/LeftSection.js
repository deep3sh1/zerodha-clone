import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} className="img-fluid" style={{ maxHeight: "360px", width: "auto" }} alt={productName} />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5 mt-0 mt-md-3">
          <h2 className="fs-1 fw-semibold">{productName}</h2>
          <p className="text-muted mt-3" style={{ lineHeight: "1.7", fontSize: "16px" }}>{productDesription}</p>
          <div className="d-flex flex-wrap gap-4 my-3">
            {tryDemo && (
              <a href={tryDemo} style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>
                Try Demo <i className="fa fa-long-arrow-right ms-1"></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>
                Learn More <i className="fa fa-long-arrow-right ms-1"></i>
              </a>
            )}
          </div>
          <div className="d-flex flex-wrap gap-3 mt-4">
            {googlePlay && (
              <a href={googlePlay}>
                <img src="/media/images/googlePlayBadge.svg" className="img-fluid" style={{ height: "40px" }} alt="Google Play" />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img
                  src="/media/images/appstoreBadge.svg"
                  className="img-fluid"
                  style={{ height: "40px" }}
                  alt="App Store"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;