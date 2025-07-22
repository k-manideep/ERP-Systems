import React from "react";
import "./MRNDetailViewForm.css";

const MRNDetailViewForm = ({ onBack }) => {
  return (
    <div className="mrndetailview-container">
      {/* Header */}
      <div className="mrndetailview-header">
        <h3>MRN DETAIL</h3>
        <div className="mrndetailview-actions">
          <button className="disabled-btn" disabled>NEW</button>
          <button className="active-btn">VIEW</button>
        </div>
      </div>

      {/* Form Content */}
      <div className="mrndetailview-form">
        <div className="mrndetailview-row">
          <div className="mrndetailview-group">
            <label>Project<span>*</span></label>
            <select>
              <option>-Select-</option>
              <option>The Drizzle</option>
            </select>
          </div>

          <div className="mrndetailview-group">
            <label>Type</label>
            <select>
              <option>MRN</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mrndetailview-group">
            <label>Vendors</label>
            <select>
              <option>All</option>
              <option>SRI ASHOKA MARKETING</option>
            </select>
          </div>

          <div className="mrndetailview-group">
            <label>Indent Code</label>
            <input type="text" />
          </div>

          <div className="mrndetailview-group">
            <label>PO Code</label>
            <input type="text" />
          </div>

          <div className="mrndetailview-group">
            <label>MRN Code</label>
            <input type="text" />
          </div>
        </div>

        <div className="mrndetailview-row">
          <div className="mrndetailview-group">
            <label>Challan/Bill No</label>
            <input type="text" />
          </div>

          <div className="mrndetailview-group">
            <label>Gate Entry No</label>
            <input type="text" />
          </div>

          <div className="mrndetailview-group period">
            <label>Period</label>
            <div className="date-range">
              <input type="date" />
              <span>-</span>
              <input type="date" />
            </div>
          </div>

          <div className="mrndetailview-go">
            <button>GO</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mrndetailview-footer">
        <button className="back-btn" onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default MRNDetailViewForm;
