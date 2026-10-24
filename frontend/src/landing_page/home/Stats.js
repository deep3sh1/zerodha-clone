import React from 'react';

function Stats() {
  return ( 
    <div className="container p-2 p-md-3">
      <div className="row p-3 p-md-5 align-items-center">
        <div className="col-12 col-md-6 p-2 p-md-4">
          <h2 className="fs-1 fw-semibold mb-4">Trust with confidence</h2>
          
          <h3 className="fs-4 fw-semibold mt-4">Customer-first always</h3>
          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h3 className="fs-4 fw-semibold mt-4">No spam or gimmicks</h3>
          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="fs-4 fw-semibold mt-4">The Zerodha universe</h3>
          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="fs-4 fw-semibold mt-4">Do better with money</h3>
          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-12 col-md-6 p-2 p-md-4 text-center mt-4 mt-md-0">
          <img 
            src="/media/images/ecosystem.png" 
            className="img-fluid mb-4 mx-auto d-block" 
            style={{ maxWidth: "100%", height: "auto" }} 
            alt="Ecosystem" 
          />
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 gap-md-4">
            <a href="/productpage" className="py-2" style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
            <a href="/signup" className="py-2" style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;