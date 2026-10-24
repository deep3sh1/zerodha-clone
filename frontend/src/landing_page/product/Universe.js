import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
  const partners = [
    {
      logo: "/media/images/smallcaseLogo.png",
      name: "Smallcase",
      desc: "Thematic investment platform"
    },
    {
      logo: "/media/images/streakLogo.png",
      name: "Streak",
      desc: "Algo & strategy trading platform"
    },
    {
      logo: "/media/images/sensibullLogo.svg",
      name: "Sensibull",
      desc: "Options trading platform"
    },
    {
      logo: "/media/images/zerodhaFundhouse.png",
      name: "Zerodha Fundhouse",
      desc: "Asset management"
    },
    {
      logo: "/media/images/goldenpiLogo.png",
      name: "GoldenPi",
      desc: "Bonds trading platform"
    },
    {
      logo: "/media/images/dittoLogo.png",
      name: "Ditto",
      desc: "Insurance advisory"
    }
  ];

  return (
    <div className="container mt-4 mt-md-5 text-center">
      <div className="row justify-content-center g-3 g-md-4">
        {partners.map((partner, index) => (
          <div className="col-6 col-sm-4 col-md-2 p-2 p-md-3 mb-2" key={index}>
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
              <img 
                src={partner.logo} 
                className="img-fluid" 
                style={{ maxHeight: "45px", maxWidth: "120px", objectFit: "contain" }} 
                alt={partner.name} 
              />
              <p className="text-muted mt-2 mb-0" style={{ fontSize: "12px", lineHeight: "1.4" }}>
                {partner.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-4 my-md-5">
        <h2 className="fs-1 fw-semibold">The Zerodha Universe</h2>
        <p className="text-muted px-2 mx-auto" style={{ maxWidth: "600px", lineHeight: "1.6" }}>
          Extend your trading and investment experience even further with our partner platforms
        </p>
        <Link to="/signup">
          <button
            className="btn btn-primary fs-5 mt-3 px-4 py-2"
            style={{ minWidth: "200px", maxWidth: "260px" }}
          >
            Sign up now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
