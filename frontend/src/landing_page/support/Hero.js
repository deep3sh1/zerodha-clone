import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function SupportHero() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: "accountOpening",
      title: "Account Opening",
      content: [
        "How to open a demat account online?",
        "Documents required for NRI / Corporate sign‑up",
        "Account fees & charges",
      ],
    },
    {
      id: "transactionsCharges",
      title: "Transactions & Charges",
      content: [
        "Securities transaction tax (STT/CTT) – explanation.",
        "Exchange & turnover charges (NSE, BSE, MCX).",
        "Call & Trade, Stamp, DP, Pledge charges etc.",
      ],
    },
    {
      id: "accountMaintenance",
      title: "Account Maintenance",
      content: [
        "Demat AMC charges based on holdings value (BSDA).",
        "Other related maintenance or courier charges.",
      ],
    },
    {
      id: "nriAccounts",
      title: "NRI Accounts",
      content: [
        "PIS vs Non-PIS account charges.",
        "Fund transfer rules for NRI accounts.",
        "Documents required for account opening.",
      ],
    },
    {
      id: "tradingAndBrokerage",
      title: "Trading & Brokerage",
      content: [
        "Intraday and F&O charges.",
        "Delivery charges and limits.",
        "Call & Trade fees and rules.",
      ],
    },
    {
      id: "marginAndLoans",
      title: "Margin & Loans",
      content: [
        "Margin Trading Facility (MTF) interest and charges.",
        "Loan against shares rules.",
        "Pledge and unpledge fees.",
      ],
    },
    {
      id: "others",
      title: "Other Services",
      content: [
        "Corporate actions like buyback/OFS.",
        "Payment gateway charges.",
        "Delayed payment and debit balance rules.",
      ],
    },
  ];

  return (
    <div className="container my-4 my-md-5">
      <div className="row mb-4">
        <div className="col-12 text-center text-md-start">
          <h2 className="fs-1 fw-semibold mb-2">Support Portal</h2>
          <p className="text-muted">Frequently asked questions and guides</p>
        </div>
      </div>

      <div className="accordion-container">
        {sections.map((sec) => (
          <div className="row mb-3 border rounded-3 p-1 p-md-2 bg-white shadow-sm" key={sec.id}>
            <div
              className="col-12 py-3 px-3 d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer", userSelect: "none" }}
              onClick={() => toggle(sec.id)}
            >
              <h3 className="mb-0 fs-5 fw-medium text-dark">{sec.title}</h3>
              <FontAwesomeIcon
                icon={openSection === sec.id ? faMinus : faPlus}
                className="text-primary ms-2"
              />
            </div>
            {openSection === sec.id && (
              <div className="col-12 pb-3 px-3 border-top pt-3">
                <ul className="mb-0 ps-3" style={{ lineHeight: "1.9", fontSize: "0.95rem" }}>
                  {sec.content.map((item, idx) => (
                    <li key={idx} className="my-1">
                      <a href="#" style={{ color: "#1a73e8", textDecoration: "none" }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportHero;
