// File: components/ReportBuilder/ReportBuilder.jsx
import React, { useState } from 'react';
import './ReportBuilderForm.css';

const ReportBuilder = () => {
  const [brandType, setBrandType] = useState('withBrand');
  const [taxType, setTaxType] = useState('withTax');

  const handleBrandClick = (type) => setBrandType(type);
  const handleTaxClick = (type) => setTaxType(type);
  const handleExport = () => alert('Export to Excel clicked!');
  const handleDownload = () => alert('Download Excel Report clicked!');

  return (
    <div className="rb-container">
      <div className="rb-title">REPORT BUILDER</div>

      <div className="rb-form">
        <div className="rb-row">
          <div className="rb-group">
            <label>Report Name<span className="rb-required">*</span></label>
            <select>
              <option>Stock Valuation In Hand</option>
            </select>
          </div>

          <div className="rb-group">
            <label>Project<span className="rb-required">*</span></label>
            <select>
              <option>-Select-</option>
            </select>
          </div>

          <div className="rb-group">
            <label>Category</label>
            <select>
              <option>-All-</option>
            </select>
          </div>

          <div className="rb-group">
            <label>Material</label>
            <select>
              <option>-All-</option>
            </select>
          </div>

          <div className="rb-group">
            <label>Specification</label>
            <select>
              <option>-All-</option>
            </select>
          </div>
        </div>

        <div className="rb-row">
          <div className="rb-group">
            <label>Specification Code</label>
            <input type="text" />
          </div>

          <div className="rb-group">
            <label>Period<span className="rb-required">*</span></label>
            <div className="rb-daterange">
              <input type="date" />
              <span className="rb-dash">-</span>
              <input type="date" />
            </div>
          </div>

          <div className="rb-group rb-inline-buttons">
            <button className={`rb-btn ${brandType === 'withBrand' ? 'rb-btn-active' : ''}`} onClick={() => handleBrandClick('withBrand')}>
              WITH BRAND
            </button>
            <button className={`rb-btn ${brandType === 'withoutBrand' ? 'rb-btn-active' : ''}`} onClick={() => handleBrandClick('withoutBrand')}>
              WITHOUT BRAND
            </button>
            <button className={`rb-btn ${taxType === 'withTax' ? 'rb-btn-active' : ''}`} onClick={() => handleTaxClick('withTax')}>
              WITH TAX
            </button>
            <button className={`rb-btn ${taxType === 'withoutTax' ? 'rb-btn-active' : ''}`} onClick={() => handleTaxClick('withoutTax')}>
              WITHOUT TAX
            </button>
          </div>

          <div className="rb-group rb-export-buttons">
            <button className="rb-btn rb-export" onClick={handleExport}>EXPORT TO EXCEL</button>
            <button className="rb-btn rb-download" onClick={handleDownload}>DOWNLOAD EXCEL REPORT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportBuilder;
