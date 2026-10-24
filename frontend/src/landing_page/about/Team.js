import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Team() {
  return (
    <div className="container my-4 my-md-5">
      <div className="row p-3 mt-3 mt-md-5 border-top text-center">
        <h2 className="fs-1 fw-semibold">People</h2>
      </div>

      <div
        className="row p-2 p-md-3 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
      >
        {/* LEFT SIDE */}
        <div className="col-12 col-md-5 p-3 d-flex justify-content-center">
          <div className="text-center">
            <img
              src="/media/images/myself.png.png"
              style={{
                borderRadius: "50%",
                width: "180px",
                height: "180px",
                maxWidth: "100%",
                objectFit: "cover",
                border: "3px solid #ddd",
              }}
              alt="Deepesh Wadhe"
            />

            <h4 className="mt-3 text-dark fw-semibold">Deepesh Wadhe</h4>
            <h6 className="text-secondary">Full Stack Developer</h6>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-md-7 p-3 p-md-4">
          <p>
            I am a passionate full stack developer currently working on building
            a real-world Zerodha-inspired trading platform as my major project.
          </p>

          <p>
            I mainly work with modern web technologies like React, Node.js,
            Express, and MongoDB, and I focus on improving my skills through
            hands-on project development.
          </p>

          <p>
            Apart from coding, I enjoy learning new technologies and constantly
            upgrading my development knowledge.
          </p>

          {/* SOCIAL ICONS */}
          <div className="d-flex gap-4 mt-4 justify-content-center justify-content-md-start">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-dark"
              style={{ fontSize: "1.6rem" }}
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
              style={{ fontSize: "1.6rem" }}
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
