import React, { useState } from "react";
import IssueMaterialContractorForm from './IssueMaterialContractor';
import IssueReportForm from './IssueReport';
import './IssueMaterialForm.css';

const IssueMaterialForm = () => {
  const [activeTab, setActiveTab] = useState('issue');

  const renderForm = () => {
    switch (activeTab) {
      case 'issue':
        return <IssueMaterialContractorForm />;
      case 'report':
        return <IssueReportForm />;
      case 'cancel':
        return <div className="cancel-placeholder">Cancel Issue Form Coming Soon</div>;
      default:
        return null;
    }
  };

  return (
    <div className="issue-container">
      <div className="issue-section">
        <div className="issue-header">
          <span>ISSUE MATERIAL</span>
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
            <button
              className={activeTab === 'cancel' ? 'btn primary active' : 'btn primary'}
              onClick={() => setActiveTab('cancel')}
            >
              CANCEL ISSUE
            </button>
          </div>
        </div>

        <div className="tab-content">{renderForm()}</div>

        {/* <div className="field">
          <label>Ref</label>
          <select>
            <option>-Select-</option>
          </select>
        </div> */}

        {/* Removed duplicate GO button here */}
      </div>
    </div>
  );
};

export default IssueMaterialForm;
