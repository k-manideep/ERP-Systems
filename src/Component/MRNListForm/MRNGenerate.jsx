import React from "react";
import "./MRNGenerate.css";
import { FaTimes } from "react-icons/fa";

const MRNGenerateForm = ({ onClose }) => {
  return (
    <div className="mrngenerate-overlay">
      <div className="mrngenerate-container">
        {/* <div className="mrn-main-title"> */}
          <div className="mrngenerate-title-row">
          <h3>MRN</h3>
          <div className="mrngenerate-title-actions">
            <button className="mrngenerate-new-btn">NEW</button>
            <button className="mrngenerate-view-btn">VIEW</button>
          </div>
        </div>

        {/* First Header Section */}
        <div className="mrngenerate-form-row">
          <div className="mrngenerate-form-group">
            <label>Project<span>*</span></label>
            <select><option>The Drizzle</option></select>
          </div>
          <div className="mrngenerate-form-group">
            <label>Vendor<span>*</span></label>
            <select><option>SRI ASHOKA MARKETING</option></select>
          </div>
          <div className="mrngenerate-form-group">
            <label>Purchase<span>*</span></label>
            <select><option>DIZZ/PO/24-25/6/74</option></select>
          </div>
          <div className="mrngenerate-or-label">OR</div>
          <div className="mrngenerate-form-group short">
            <label>PO Code</label>
            <input type="text" value="DIZZ/PO/24-25/6/74" readOnly />
          </div>
          <div className="mrngenerate-form-actions">
            <button className="mrngenerate-btn">PREVIEW</button>
            <button className="mrngenerate-btn">GO</button>
          </div>
        </div>
      

        {/* Title Row with NEW/VIEW */}
        {/* <div className="mrngenerate-title-row">
          <h3>MRN</h3>
          <div className="mrngenerate-title-actions">
            <button className="mrngenerate-new-btn">NEW</button>
            <button className="mrngenerate-view-btn">VIEW</button>
          </div>
        </div> */}

        {/* Second Header with Close Icon */}
        <div className="mrngenerate-subtitle-row">
          <h3>SRI ASHOKA MARKETING SERVICES</h3>
          <FaTimes className="mrngenerate-close-icon" onClick={onClose} />
        </div>

        {/* Table Section */}
        <div className="mrngenerate-table-wrapper">
          <table className="mrngenerate-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Material</th>
                <th>Specification</th>
                <th>Specification Code</th>
                <th>Brand</th>
                <th>Qty.</th>
                <th>Qty Variation(%)</th>
                <th>UOM</th>
                <th>Net Qty. Received</th>
                <th>Processing Wastage Qty.</th>
                <th>Balance Qty.</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>6 & 10kg f/cm² Elbow</td>
                <td>25mm</td>
                <td>PLU/7/1854</td>
                <td>SUPREME</td>
                <td>2000.00</td>
                <td>100.00</td>
                <td>NO'S</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><textarea rows="1" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Form */}
        <div className="mrngenerate-bottom-form">
          <div className="mrngenerate-form-group">
            <label>MRN Date<span>*</span></label>
            <input type="date" defaultValue="2025-06-24" />
          </div>
          <div className="mrngenerate-form-group">
            <label>Challan/Bill Date<span>*</span></label>
            <input type="date" defaultValue="2025-06-24" />
          </div>
          <div className="mrngenerate-form-group">
            <label>Challan/Bill No.<span>*</span></label>
            <input type="text" placeholder="Challan/Bill No." />
          </div>
          <div className="mrngenerate-form-group">
            <label>Challan/Bill Type<span>*</span></label>
            <div className="mrngenerate-radio-group">
              <label><input type="radio" name="type" defaultChecked /> Challan</label>
              <label><input type="radio" name="type" /> Bill</label>
            </div>
          </div>
          <div className="mrngenerate-form-group">
            <label>Gate Entry No.<span>*</span></label>
            <input type="text" placeholder="Gate Entry No." />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mrngenerate-buttons">
          <button className="mrngenerate-save-btn">SAVE</button>
          <button className="mrngenerate-close-btn" onClick={onClose}>CLOSE</button>
        </div>

      </div>
    </div>
  );
};

export default MRNGenerateForm;