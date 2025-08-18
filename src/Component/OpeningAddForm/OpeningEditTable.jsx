// import React, { useState } from "react";
// import "./OpeningEditTable.css";

// const OpeningEditableTable = ({ data }) => {
//   const [rows, setRows] = useState(data);
//   const [showSummary, setShowSummary] = useState(false);

//   const handleChange = (index, field, value) => {
//     const updated = [...rows];
//     updated[index][field] = value;
//     setRows(updated);
//   };

//   const handleOkClick = () => {
//     setShowSummary(true);
//   };

//   return (
//     <div className="second-form-wrapper">
//       <div className="second-table">
//         <div className="section-title">Opening Entry</div>
//       </div>

//       <table className="opening-entry-table">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Category</th>
//             <th>Specification</th>
//             <th>Specification Code</th>
//             <th>Brand</th>
//             <th>Opening Qty</th>
//             <th>UOM</th>
//             <th>Rate</th>
//             <th>Select</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, idx) => (
//             <tr key={idx}>
//               <td>{idx + 1}</td>
//               <td>{row.category}</td>
//               <td>{row.specification}</td>
//               <td>{row.code}</td>
//               <td>{row.brand}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={row.qty}
//                   onChange={(e) => handleChange(idx, "qty", e.target.value)}
//                 />
//               </td>
//               <td>{row.uom}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={row.rate}
//                   onChange={(e) => handleChange(idx, "rate", e.target.value)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="checkbox"
//                   checked={row.selected}
//                   onChange={(e) =>
//                     handleChange(idx, "selected", e.target.checked)
//                   }
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* ✅ OK Button */}
//       <div className="ok-button-wrap">
//         <button className="ok-btn" onClick={handleOkClick}>OK</button>
//       </div>

//       {/* ✅ Summary Table After OK */}
//       {showSummary && (
//         <div className="summary-section">
//           <div className="section-title">Review</div>
//           <table className="opening-entry-table">
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 <th>Category</th>
//                 <th>Material</th>
//                 <th>Specification</th>
//                 <th>Specification Code</th>
//                 <th>Brand</th>
//                 <th>Opening Qty</th>
//                 <th>UOM</th>
//                 <th>Rate</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows
//                 .filter((r) => r.selected)
//                 .map((row, idx) => (
//                   <tr key={idx}>
//                     <td>{idx + 1}</td>
//                     <td>{row.category}</td>
//                     <td>{row.material || "bore work"}</td>
//                     <td>{row.specification}</td>
//                     <td>{row.code}</td>
//                     <td>{row.brand}</td>
//                     <td>{row.qty}</td>
//                     <td>{row.uom}</td>
//                     <td>{row.rate}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>

//           <div className="save-button-wrap">
//             <button className="save-btn">SAVE</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OpeningEditableTable;


// import React, { useState } from "react";
// import "./OpeningEditTable.css";

// const OpeningEditableTable = ({ data }) => {
//   const [rows, setRows] = useState(data);
//   const [showSummary, setShowSummary] = useState(false);

//   const handleChange = (index, field, value) => {
//     const updated = [...rows];
//     updated[index][field] = value;
//     setRows(updated);
//   };

//   const handleOkClick = () => {
//     setShowSummary(true);
//   };


//   return (
//     <div className="second-form-wrapper">
//       <div className="section-title">Opening Entry</div>

//       <table className="opening-entry-table">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Category</th>
//             <th>Material</th>
//             <th>Specification</th>
//             <th>Specification Code</th>
//             <th>Brand</th>
//             <th>Opening Qty</th>
//             <th>UOM</th>
//             <th>Rate</th>
//             <th>Select</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, idx) => (
//             <tr key={idx}>
//               <td>{idx + 1}</td>
//               <td>{row.category}</td>
//               <td>{row.material}</td>
//               <td>{row.specification}</td>
//               <td>{row.code}</td>
//               <td>
//                 <input
//                   type="text"
//                   value={row.brand}
//                   onChange={(e) => handleChange(idx, "brand", e.target.value)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={row.qty}
//                   onChange={(e) => handleChange(idx, "qty", e.target.value)}
//                 />
//               </td>
//               <td>{row.uom}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={row.rate}
//                   onChange={(e) => handleChange(idx, "rate", e.target.value)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="checkbox"
//                   checked={row.selected}
//                   onChange={(e) =>
//                     handleChange(idx, "selected", e.target.checked)
//                   }
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="ok-button-wrap">
//         <button className="ok-btn" onClick={handleOkClick}>OK</button>
//       </div>


//       {showSummary && (
//         <div className="summary-section">
//           <div className="section-title">Review</div>
//           <table className="opening-entry-table">
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 <th>Category</th>
//                 <th>Material</th>
//                 <th>Specification</th>
//                 <th>Specification Code</th>
//                 <th>Brand</th>
//                 <th>Opening Qty</th>
//                 <th>UOM</th>
//                 <th>Rate</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows
//                 .filter((r) => r.selected)
//                 .map((row, idx) => (
//                   <tr key={idx}>
//                     <td>{idx + 1}</td>
//                     <td>{row.category}</td>
//                     <td>{row.material }</td>
//                     <td>{row.specification}</td>
//                     <td>{row.code}</td>
//                     <td>{row.brand}</td>
//                     <td>{row.qty}</td>
//                     <td>{row.uom}</td>
//                     <td>{row.rate}</td>
//                       <td>
//                     <button
//                       className="trash-btn"
//                       onClick={() => handleDeleteRow(idx)}
//                     >
//                       🗑
//                     </button>
//                   </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>

//           <div className="save-button-wrap">
//             <button className="save-btn">SAVE</button>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OpeningEditableTable;

import React, { useState } from "react";
import "./OpeningEditTable.css";

const OpeningEditableTable = ({ data }) => {
  const [rows, setRows] = useState(data);
  const [showReview, setShowReview] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const handleDeleteRow = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  // ✅ First OK: Show review + welcome content
  const handleOkClick = () => {
    setShowReview(true);
  };

  // ✅ Review OK: Show popup
  const handleFinalOkClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowReview(false); // Reset after closing
  };

  return (
    <div className="second-form-wrapper">
      <div className="section-title">Opening Entry</div>

      {/* Editable Table (always visible until review starts) */}
      {!showReview && (
        <>
          <table className="opening-entry-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Category</th>
                <th>Material</th>
                <th>Specification</th>
                <th>Specification Code</th>
                <th>Brand</th>
                <th>Opening Qty</th>
                <th>UOM</th>
                <th>Rate</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{row.category}</td>
                  <td>{row.material}</td>
                  <td>{row.specification}</td>
                  <td>{row.code}</td>
                  <td>
                    <input
                      type="text"
                      value={row.brand}
                      onChange={(e) => handleChange(idx, "brand", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.qty}
                      onChange={(e) => handleChange(idx, "qty", e.target.value)}
                    />
                  </td>
                  {/* <td>{row.uom}</td> */}
                  <td>
                    <select
                      value={row.uom}
                      onChange={(e) => handleChange(idx, "uom", e.target.value)}
                    >
                      <option value="">Select UOM</option>
                      <option value="kg">KG</option>
                      <option value="li">LI</option>
                      <option value="cm">CM</option>
                      <option value="mm">MM</option>
                      <option value="wt">WT</option>
                    </select>
                  </td>

                  <td>
                    <input
                      type="number"
                      value={row.rate}
                      onChange={(e) => handleChange(idx, "rate", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={row.selected}
                      onChange={(e) =>
                        handleChange(idx, "selected", e.target.checked)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="ok-button-wrap">
            <button className="ok-btn" onClick={handleOkClick}>
              OK
            </button>
          </div>
        </>
      )}

      {/* ✅ Show Welcome + Review Together */}
      {showReview && (
        <>
          <div className="welcome-section">
            <h2>Welcome to MRN Content</h2>
            <p>Please review your details before confirming.</p>
          </div>

          <div className="summary-section">
            <div className="section-title">Review Details</div>
            <table className="opening-entry-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Category</th>
                  <th>Material</th>
                  <th>Specification</th>
                  <th>Specification Code</th>
                  <th>Brand</th>
                  <th>Opening Qty</th>
                  <th>UOM</th>
                  <th>Rate</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {rows
                  .filter((r) => r.selected)
                  .map((row, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{row.category}</td>
                      <td>{row.material}</td>
                      <td>{row.specification}</td>
                      <td>{row.code}</td>
                      <td>{row.brand}</td>
                      <td>{row.qty}</td>
                      <td>{row.uom}</td>
                      <td>{row.rate}</td>
                      <td>
                        <button
                          className="trash-btn"
                          onClick={() => handleDeleteRow(idx)}
                        >
                          🗑
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="save-button-wrap">
              <button className="ok-btn" onClick={handleFinalOkClick}>
                Final OK
              </button>
            </div>
          </div>
        </>
      )}

      {/* ✅ Popup after final OK */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>✅ Successfully Reviewed!</h3>
            <p>Your data is saved and ready for further processing.</p>
            <button className="close-popup-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpeningEditableTable;
