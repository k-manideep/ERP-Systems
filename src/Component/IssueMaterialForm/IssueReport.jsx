import React, { useState } from "react";
const IssueReport = () => {
  const [userType, setUserType] = useState("Contractor");
  const [chargeType, setChargeType] = useState("Chargeable");

  return (
    <div className="issue-container">
      <div className="issue-section">
        <div className="issue-header">
          <span>ISSUE REPORT</span>
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
        </div>
          <div className="form-field tabs">
            <label>User Type</label>
            <div className="tab-group">
              {[ "All","Employee", "Contractor", "Production",  "Retuen to Vender"].map((type) => (
                <button
                  key={type}
                  className={`tab-button ${userType === type ? "active" : ""}`}
                  onClick={() => setUserType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
        

        <div className="form-row">
          <div className="form-field">
            <label></label>
            <select><option>All</option></select>
          </div>
          <div className="form-field">
            <label>Location</label>
            <select><option>all</option></select>
          </div>
          <div className="form-field">
            <label>Block</label>
             <select><option>all</option></select>
          </div>
           <div className="form-field">
            <label>Floor</label>
             <select><option>all</option></select>
          </div>
            <div className="form-field">
            <label>Unit</label>
            <input type="text" />
          </div>
           <div className="form-field">
            <label>From Date*</label>
            <input type="date" defaultValue="2025-06-10" />
          </div>
           <div className="form-field">
            <label>To Date*</label>
            <input type="date" defaultValue="" />
          </div>
          <div className="form-field go-button-wrapper">
            <label>&nbsp;</label>
            <button className="go-btn">🔍 GO</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default IssueReport; 
