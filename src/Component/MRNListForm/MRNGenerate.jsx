// import React, { useState } from "react";
// import "./MRNGenerate.css";
// import { FaTimes } from "react-icons/fa";
// import MRNNewForm from "./MRNNewForm";
// import MaterialReceiptForm from "./MaterialReceiptForm";
// import MRNDetailViewForm from "./MRNDetailViewForm";

// const MRNGenerateForm = ({ onClose }) => {
//   const [showNewPopup, setShowNewPopup] = useState(false);
//     const [showMaterialReceipt, setShowMaterialReceipt] = useState(false);
//       const [activeForm, setActiveForm] = useState("generate");
//   return (
//     <div className="mrngenerate-overlay">
//       <div className="mrngenerate-container">
//         {/* <div className="mrn-main-title"> */}
//           <div className="mrngenerate-title-row">
//           <h3>MRN</h3>
//           <div className="mrngenerate-title-actions">
//             {/* <button className="mrngenerate-new-btn">NEW</button> */}
//              <button
//               className="mrngenerate-new-btn"
//               onClick={() => setShowNewPopup(true)}
//             >
//               NEW
//             </button>
//             <button className="mrngenerate-view-btn">VIEW</button>
//           </div>
//         </div>

//         {/* First Header Section */}
//         <div className="mrngenerate-form-row">
//           <div className="mrngenerate-form-group">
//             <label>Project<span>*</span></label>
//             <select><option>The Drizzle</option></select>
//           </div>
//           <div className="mrngenerate-form-group">
//             <label>Vendor<span>*</span></label>
//             <select><option>SRI ASHOKA MARKETING</option></select>
//           </div>
//           <div className="mrngenerate-form-group">
//             <label>Purchase<span>*</span></label>
//             <select><option>DIZZ/PO/24-25/6/74</option></select>
//           </div>
//           <div className="mrngenerate-or-label">OR</div>
//           <div className="mrngenerate-form-group short">
//             <label>PO Code</label>
//             <input type="text" value="DIZZ/PO/24-25/6/74" readOnly />
//           </div>
//           <div className="mrngenerate-form-actions">
//             <button className="mrngenerate-btn">PREVIEW</button>
//             <button className="mrngenerate-btn">GO</button>
//           </div>
//         </div>
      

//         {/* Title Row with NEW/VIEW */}
//         {/* <div className="mrngenerate-title-row">
//           <h3>MRN</h3>
//           <div className="mrngenerate-title-actions">
//             <button className="mrngenerate-new-btn">NEW</button>
//             <button className="mrngenerate-view-btn">VIEW</button>
//           </div>
//         </div> */}

//         {/* Second Header with Close Icon */}
//         <div className="mrngenerate-subtitle-row">
//           <h3>SRI ASHOKA MARKETING SERVICES</h3>
//           <FaTimes className="mrngenerate-close-icon" onClick={onClose} />
//         </div>

//         {/* Table Section */}
//         <div className="mrngenerate-table-wrapper">
//           <table className="mrngenerate-table">
//             <thead>
//               <tr>
//                 <th>S.No.</th>
//                 <th>Material</th>
//                 <th>Specification</th>
//                 <th>Specification Code</th>
//                 <th>Brand</th>
//                 <th>Qty.</th>
//                 <th>Qty Variation(%)</th>
//                 <th>UOM</th>
//                 <th>Net Qty. Received</th>
//                 <th>Processing Wastage Qty.</th>
//                 <th>Balance Qty.</th>
//                 <th>Remarks</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>6 & 10kg f/cm² Elbow</td>
//                 <td>25mm</td>
//                 <td>PLU/7/1854</td>
//                 <td>SUPREME</td>
//                 <td>2000.00</td>
//                 <td>100.00</td>
//                 <td>NO'S</td>
//                 <td><input type="text" /></td>
//                 <td><input type="text" /></td>
//                 <td><input type="text" /></td>
//                 <td><textarea rows="1" /></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Bottom Form */}
//         <div className="mrngenerate-bottom-form">
//           <div className="mrngenerate-form-group">
//             <label>MRN Date<span>*</span></label>
//             <input type="date" defaultValue="2025-06-24" />
//           </div>
//           <div className="mrngenerate-form-group">
//             <label>Challan/Bill Date<span>*</span></label>
//             <input type="date" defaultValue="2025-06-24" />
//           </div>
//           <div className="mrngenerate-form-group">
//             <label>Challan/Bill No.<span>*</span></label>
//             <input type="text" placeholder="Challan/Bill No." />
//           </div>
//           <div className="mrngenerate-form-group">
//             <label>Challan/Bill Type<span>*</span></label>
//             <div className="mrngenerate-radio-group">
//               <label><input type="radio" name="type" defaultChecked /> Challan</label>
//               <label><input type="radio" name="type" /> Bill</label>
//             </div>
//           </div>
//           <div className="mrngenerate-form-group">
//             <label>Gate Entry No.<span>*</span></label>
//             <input type="text" placeholder="Gate Entry No." />
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="mrngenerate-buttons">
//           <button className="mrngenerate-save-btn">SAVE</button>
//           <button className="mrngenerate-close-btn" onClick={onClose}>CLOSE</button>
//         </div>
//           {/* {showNewPopup && <MRNNewForm onClose={() => setShowNewPopup(false)} />}
//             {showMaterialReceipt && (
//           <MaterialReceiptForm onClose={() => setShowMaterialReceipt(false)} />
//         )} */}
//          {showNewPopup && (
//           <MRNNewForm
//             onClose={() => setShowNewPopup(false)}
//             onMaterialReceiptClick={() => {
//               //setShowNewPopup(false);
//               setShowMaterialReceipt(true);
//             }}
//           />
//         )}

//         {/* ✅ Show Material Receipt Form */}
//         {showMaterialReceipt && (
//           <MaterialReceiptForm onClose={() => setShowMaterialReceipt(false)} />
//         )}

//       </div>
//     </div>
//   );
// };

// export default MRNGenerateForm;
import React, { useState } from "react";
import "./MRNGenerate.css";
import MRNNewForm from "./MRNNewForm";
import MaterialReceiptForm from "./MaterialReceiptForm";
import MRNDetailViewForm from "./MRNDetailViewForm";

const MRNGenerateForm = ({ onClose }) => {
  const [activeForm, setActiveForm] = useState("generate");
  // "generate" | "new" | "material" | "view"

  const handleNewClick = () => setActiveForm("new");
  const handleMaterialReceiptClick = () => setActiveForm("material");
  const handleViewClick = () => setActiveForm("view");
  const handleBackClick = () => setActiveForm("generate");

  return (
    <>
      {/* ✅ Show MRNGenerate Main Form */}
      {activeForm === "generate" && (
        <div className="mrngenerate-container">
          <div className="mrngenerate-title-row">
            <h3>MRN</h3>
            <div className="mrngenerate-title-actions">
              <button className="mrngenerate-new-btn" onClick={handleNewClick}>NEW</button>
              <button className="mrngenerate-view-btn" onClick={handleViewClick}>VIEW</button>
            </div>
          </div>

          {/* Form Header */}
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

          {/* Table */}
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

          {/* Bottom Fields */}
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

          {/* Buttons */}
          <div className="mrngenerate-buttons">
            <button className="mrngenerate-save-btn">SAVE</button>
            <button className="mrngenerate-close-btn" onClick={onClose}>CLOSE</button>
          </div>
        </div>
      )}

      {/* ✅ NEW Form */}
      {activeForm === "new" && (
        <MRNNewForm
          onClose={handleBackClick}
          onMaterialReceiptClick={handleMaterialReceiptClick}
        />
      )}

      {/* ✅ Material Receipt Form */}
      {activeForm === "material" && (
        <MaterialReceiptForm onClose={handleBackClick} />
      )}

      {/* ✅ VIEW Form as Full Page */}
      {activeForm === "view" && (
        <div className="fullpage-view">
          <MRNDetailViewForm onClose={handleBackClick} />
        </div>
      )}
    </>
  );
};

export default MRNGenerateForm;
