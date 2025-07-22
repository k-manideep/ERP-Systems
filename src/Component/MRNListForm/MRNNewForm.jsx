import React from "react";
import "./MRNNewForm.css";
import { FaTimes } from "react-icons/fa";


const MRNNewForm = ({ onClose, onMaterialReceiptClick  }) => {
  return (
    <div className="mrnnew-overlay">
      <div className="mrnnew-popup">
        {/* Header with Title and Close Icon */}
        <div className="mrnnew-header">
          <h3>MRN</h3>
          <FaTimes className="mrnnew-close-icon" onClick={onClose} />
        </div>

        {/* Buttons Section */}
        <div className="mrnnew-buttons">
          {/* <button className="active-btn">MATERIAL RECEIPT</button> */}
           <button onClick={onMaterialReceiptClick}>MATERIAL RECEIPT</button>
          <button className="disabled-btn" disabled>CONTRACTOR MRN</button>
          <button className="cancel-btn" onClick={onClose}>CANCEL</button>
        </div>
      </div>
    </div>
  );
};

export default MRNNewForm;
