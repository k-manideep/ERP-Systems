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


import React, { useState } from "react";
import "./OpeningEditTable.css";

const OpeningEditableTable = ({ data }) => {
  const [rows, setRows] = useState(data);
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const handleOkClick = () => {
    setShowSummary(true);
  };
  

  return (
    <div className="second-form-wrapper">
      <div className="section-title">Opening Entry</div>

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
              <td>{row.uom}</td>
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
        <button className="ok-btn" onClick={handleOkClick}>OK</button>
      </div>

      {showSummary && (
        <div className="summary-section">
          <div className="section-title">Review</div>
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
                    <td>{row.material }</td>
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
            <button className="save-btn">SAVE</button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default OpeningEditableTable;
