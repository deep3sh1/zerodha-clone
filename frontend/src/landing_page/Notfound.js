import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container py-5 my-5 text-center">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-8 col-md-6">
          <h1 className="display-1 fw-bold text-muted mb-2">404</h1>
          <h2 className="fs-2 fw-semibold mb-3">Oops! Page not found</h2>
          <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
            We couldn’t find the page you were looking for. Please check the URL or head back home.
          </p>
          <Link to="/">
            <button className="btn btn-primary px-4 py-2 fs-6">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
