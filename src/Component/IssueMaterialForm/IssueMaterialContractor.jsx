import React, { useState } from "react";
import './IssueMaterialContractor.css'
const IssueMaterialContractor = () => {
  const [userType, setUserType] = useState("Contractor");
  const [chargeType, setChargeType] = useState("Chargeable");

  return (
    <div className="issue-container">
      <div className="issue-section">
        <div className="issue-header">
          <span>ISSUE MATERIAL</span>
          <div className="header-buttons">
            <button className="btn primary">ISSUE MATERIAL</button>
            <button className="btn">ISSUE REPORT</button>
            <button className="btn">CANCEL ISSUE</button>
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label>Project*</label>
            <select><option>-Select-</option></select>
          </div>
          <div className="form-field">
            <label>Category</label>
            <select><option>-All-</option></select>
          </div>
          <div className="form-field">
            <label>Material</label>
            <select><option>-All-</option></select>
          </div>
          <div className="form-field">
            <label>Specification</label>
            <select><option>-All-</option></select>
          </div>
          <div className="form-field">
            <label>Specification Code</label>
            <input type="text" />
          </div>
          <div className="form-field">
            <label>Recommended By*</label>
            <select><option>-Select-</option></select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label>Approved By*</label>
            <select><option>-Select-</option></select>
          </div>
          <div className="form-field">
            <label>Issue Date*</label>
            <input type="date" defaultValue="2025-06-09" />
          </div>

          <div className="form-field tabs">
            <label>User Type</label>
            <div className="tab-group">
              {["Employee", "Contractor", "Production"].map((type) => (
                <button
                  key={type}
                  className={`tab-button ${userType === type ? "active" : ""}`}
                  onClick={() => setUserType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="form-field">
            <label></label>
            <select><option>-Select-</option></select>
          </div>

          <div className="form-field tabs">
            <label>Charge Type</label>
            <div className="tab-group">
              {["FOC", "Chargeable"].map((type) => (
                <button
                  key={type}
                  className={`tab-button ${chargeType === type ? "active" : ""}`}
                  onClick={() => setChargeType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="form-field">
            <label>Work Order</label>
            <select><option>-Select-</option></select>
          </div>

          <div className="form-field go-button-wrapper">
            <label>&nbsp;</label>
            <button className="go-btn">🔍 GO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueMaterialContractor;
