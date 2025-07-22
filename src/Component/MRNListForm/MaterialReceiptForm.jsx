import React from "react";
import "./MaterialReceiptForm.css";
import { FaTimes } from "react-icons/fa";

const MaterialReceiptForm = ({ onClose }) => {
  return (
    <div className="materialreceipt-overlay">
      <div className="materialreceipt-container">
        <div className="materialreceipt-header">
          <h3>MRN</h3>
          <div className="materialreceipt-actions">
            <button className="new-btn">NEW</button>
            <button className="view-btn">VIEW</button>
            <FaTimes className="close-icon" onClick={onClose} />
          </div>
        </div>

        <div className="materialreceipt-form-row">
          <div>
            <label>Project<span>*</span></label>
            <select><option>-Select-</option></select>
          </div>
          <div>
            <label>Vendor</label>
            <select><option>-All-</option></select>
          </div>
          <div>
            <label>Purchase<span>*</span></label>
            <select><option>DIZZ/PO/24-25/7/73</option></select>
          </div>
          <div className="or-text">OR</div>
          <div>
            <label>PO Code</label>
            <input type="text" placeholder="Enter PO Code" />
          </div>
          <div className="form-actions">
            <button className="preview-btn">PREVIEW</button>
            <button className="go-btn">GO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialReceiptForm;
