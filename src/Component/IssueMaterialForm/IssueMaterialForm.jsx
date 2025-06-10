import React, { useState } from "react";
import IssueMaterialContractorForm from './IssueMaterialContractor';
import IssueReportContractorForm from './IssueReportContractor';
import IssueReportForm from './IssueReport';
import './IssueMaterialForm.css'

const IssueMaterialForm = () => {
 // const [activeTab, setActiveTab] = useState("Employee");
const [activeTab, setActiveTab] = useState('issue');
  return (
    <div className="issue-container">
      <div className="issue-section">
        <div className="issue-header">
          <span>ISSUE MATERIAL</span>
          {/* <div className="action-buttons">
            <button className="btn primary">ISSUE MATERIAL</button>
            <button className="btn report">ISSUE REPORT</button>
            <button className="btn cancel">CANCEL ISSUE</button>
          </div> */}
           <div className="action-buttons">
        <button
          className={activeTab === 'issue' ? 'btn primary active' : 'btn primary'}
          onClick={() => setActiveTab('issue')}
        >
          ISSUE MATERIAL
        </button>
        <button
          className={activeTab === 'report' ? 'btn primary active' : 'btn primary'}
          onClick={() => setActiveTab('report')}
        >
          ISSUE REPORT
        </button>
        </div>
        </div>

        {/* <div className="row">
          <div className="field">
            <label>Project*</label>
            <select><option>-Select Project-</option></select>
          </div>
          <div className="field">
            <label>Category</label>
            <select><option>-All Categories-</option></select>
          </div>
          <div className="field">
            <label>Material</label>
            <select><option>-All Materials-</option></select>
          </div>
          <div className="field">
            <label>Specification</label>
            <select><option>-All Specs-</option></select>
          </div>
          <div className="field">
            <label>Specification Code</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Recommended By*</label>
            <select><option>-Recommended By-</option></select>
          </div>
        </div> */}
{/* 
        <div className="row">
          <div className="field">
            <label>Approved By*</label>
            <select><option>-Approved By-</option></select>
          </div> */}

          {/* <div className="field">
            <label>Issue Date*</label>
            <input type="date" defaultValue="2025-06-09" />
          </div>

          <div className="tab-buttons">
            <button className={activeTab === "Employee" ? "active" : ""} onClick={() => setActiveTab("Employee")}>Employee</button>
            <button className={activeTab === "Contractor" ? "active" : ""} onClick={() => setActiveTab("Contractor")}>Contractor</button>
            <button className={activeTab === "Production" ? "active" : ""} onClick={() => setActiveTab("Production")}>Production</button>
          </div> */}
        <div className="tab-content">
                 {activeTab === 'issue' && <IssueMaterialContractorForm />} 
                {activeTab === 'report' && <IssueReportForm />}
               
        </div>
          <div className="field">
            <label>Ref</label>
            <select><option>-Select-</option></select>
          </div>

          <div className="go-btn-wrapper">
            <button className="go-btn">🔍 GO</button>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default IssueMaterialForm;
