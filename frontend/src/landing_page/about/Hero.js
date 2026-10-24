import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-2 mt-md-4 mb-2 mb-md-4 text-center justify-content-center">
        <div className="col-12 col-lg-10">
          <h1 className="fs-2 fs-md-1 fw-semibold" style={{ lineHeight: "1.5" }}>
            We pioneered the discount broking model in India.
            <br className="d-none d-md-inline" />
            {" "}Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      <div
        className="row p-2 p-md-5 mt-2 mt-md-3 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
      >
        <div className="col-12 col-md-6 p-3 p-md-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-md-6 p-3 p-md-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "#1a73e8" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
