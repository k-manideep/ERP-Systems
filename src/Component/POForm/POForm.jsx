// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../Partials/Header";
// import Footer from "../Partials/Footer";
// import "./PoForm.css";

// const POForm = () => {
//   const [indentCode, setIndentCode] = useState("");
//   const [indentCodes, setIndentCodes] = useState([]);
//   const [openingEntryData, setOpeningEntryData] = useState(null);
//   const [vendorId, setVendorId] = useState("");
//   const [vendors, setVendors] = useState([]);
//   const [terms, setTerms] = useState("");
//   const [message, setMessage] = useState("");

//   const token = localStorage.getItem("access_token");

//   useEffect(() => {
//     axios.get("http://127.0.0.1:5000/api/vendors", {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(res => setVendors(res.data));

//     axios.get("http://127.0.0.1:5000/api/indent-codes", {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(res => setIndentCodes(res.data));
//   }, [token]);

//   const fetchOpeningEntry = async () => {
//     try {
//       const res = await axios.get(`http://127.0.0.1:5000/api/po/from-opening-entry/${indentCode}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setOpeningEntryData(res.data);
//       setMessage(""); // clear any previous error
//     } catch (err) {
//       console.error(err);
//       setOpeningEntryData(null);
//       setMessage("Opening entry not found!");
//     }
//   };

//   const handleCreatePO = async () => {
//     try {
//       const res = await axios.post("http://127.0.0.1:5000/api/po", {
//         opening_entry_id: openingEntryData.opening_entry_id,
//         vendor_id: vendorId,
//         terms
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       setMessage(`${res.data.message} | PO Number: ${res.data.po_number} | Created By: ${res.data.created_by}`);
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to create PO");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="container po-form-container">
//         <h2>Create Purchase Order</h2>

//         <div className="form-row po-top-fields">
//           <div className="form-group">
//             <label>Indent Code:</label>
//             <select value={indentCode} onChange={(e) => setIndentCode(e.target.value)}>
//               <option value="">Select Indent Code</option>
//               {indentCodes.map((code, index) => (
//                 <option key={index} value={code}>{code}</option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Vendor:</label>
//             <select value={vendorId} onChange={(e) => setVendorId(e.target.value)}>
//               <option value="">Select Vendor</option>
//               {vendors.map(v => (
//                 <option key={v.id} value={v.id}>{v.name}</option>
//               ))}
//             </select>
//           </div>

//           <button className="fetch-btn" onClick={fetchOpeningEntry}>Fetch Entry</button>
//         </div>

//         {openingEntryData && (
//           <>
//             <div className="entry-details">
//               <h4>Opening Entry Details</h4>
//               <table className="entry-table">
//                 <thead>
//                   <tr>
//                     <th>Material</th>
//                     <th>Specification</th>
//                     <th>Qty</th>
//                     <th>Rate</th>
//                     <th>Total</th>
//                     <th>UOM</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>{openingEntryData.material}</td>
//                     <td>{openingEntryData.specification}</td>
//                     <td>{openingEntryData.qty}</td>
//                     <td>{openingEntryData.rate}</td>
//                     <td>{openingEntryData.total}</td>
//                     <td>{openingEntryData.uom}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <div className="terms-section">
//               <label>Terms & Conditions:</label>
//               <textarea value={terms} onChange={(e) => setTerms(e.target.value)} />
//             </div>

//             <button className="create-btn" onClick={handleCreatePO}>Create PO</button>
//           </>
//         )}

//         {message && <p className="message-text">{message}</p>}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default POForm;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../Partials/Header";
// import Footer from "../Partials/Footer";
// import "./PoForm.css";

// const POForm = () => {
//   const [project, setProject] = useState("");
//   const [indentCode, setIndentCode] = useState("");
//   const [indentCodes, setIndentCodes] = useState([]);
//   const [vendorId, setVendorId] = useState("");
//   const [vendors, setVendors] = useState([]);
//   const [openingEntryData, setOpeningEntryData] = useState(null);
//   const [terms, setTerms] = useState("");
//   const [message, setMessage] = useState("");
//   const [createdBy, setCreatedBy] = useState("Helana"); // change dynamically later

//   const token = localStorage.getItem("access_token");

//   useEffect(() => {
//     axios.get("http://127.0.0.1:5000/api/vendors", {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(res => setVendors(res.data));

//     axios.get("http://127.0.0.1:5000/api/indent-codes", {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(res => setIndentCodes(res.data));
//   }, [token]);

//   const handleNew = () => {
//     setProject("");
//     setIndentCode("");
//     setVendorId("");
//     setOpeningEntryData(null);
//     setTerms("");
//     setMessage("");
//   };

//   const fetchOpeningEntry = async () => {
//     try {
//       const res = await axios.get(`http://127.0.0.1:5000/api/po/from-opening-entry/${indentCode}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setOpeningEntryData(res.data);
//       setMessage("");
//     } catch (err) {
//       console.error(err);
//       setOpeningEntryData(null);
//       setMessage("Opening entry not found!");
//     }
//   };

//   const handleCreatePO = async () => {
//     try {
//       const res = await axios.post("http://127.0.0.1:5000/api/po", {
//         opening_entry_id: openingEntryData.opening_entry_id,
//         vendor_id: vendorId,
//         terms
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       setMessage(`${res.data.message} | PO Number: ${res.data.po_number} | Created By: ${res.data.created_by}`);
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to create PO");
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div className="po-container">
//         <div className="po-header">
//           {/* <div className="button-group">
//             <button className="header-btn" onClick={handleNew}>New</button>
//             <button className="header-btn">View</button>
//           </div> */}
//           <div className="po-title">Create Purchase Order</div>
          
//           <div className="button-group">
//             <button className="header-btn" onClick={handleNew}>New</button>
//             <button className="header-btn">View</button>
//           </div>
//         </div>

//         <div className="po-form-section">
//           <div className="form-row">
//             <div className="form-group">
//               <label>Project:</label>
//               <input type="text" value={project} onChange={(e) => setProject(e.target.value)} />
//             </div>

//             <div className="form-group">
//               <label>Indent Code:</label>
//               <select value={indentCode} onChange={(e) => setIndentCode(e.target.value)}>
//                 <option value="">Select Indent Code</option>
//                 {indentCodes.map((code, idx) => (
//                   <option key={idx} value={code}>{code}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Vendor:</label>
//               <select value={vendorId} onChange={(e) => setVendorId(e.target.value)}>
//                 <option value="">Select Vendor</option>
//                 {vendors.map(v => (
//                   <option key={v.id} value={v.id}>{v.name}</option>
//                 ))}
//               </select>
//             </div>

//             <button className="fetch-btn" onClick={fetchOpeningEntry}>Fetch Entry</button>
//           </div>
//         </div>
//       </div>

//       {openingEntryData && (
//         <div className="entry-container">
//           <h4>Opening Entry Details</h4>
//           <table className="entry-table">
//             <thead>
//               <tr>
//                 <th>Material</th>
//                 <th>Specification</th>
//                 <th>Qty</th>
//                 <th>Rate</th>
//                 <th>Total</th>
//                 <th>UOM</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{openingEntryData.material}</td>
//                 <td>{openingEntryData.specification}</td>
//                 <td>{openingEntryData.qty}</td>
//                 <td>{openingEntryData.rate}</td>
//                 <td>{openingEntryData.total}</td>
//                 <td>{openingEntryData.uom}</td>
//               </tr>
//             </tbody>
//           </table>

//           <div className="terms-section">
//             <label>Terms & Conditions:</label>
//             <textarea value={terms} onChange={(e) => setTerms(e.target.value)} />
//           </div>

//           <p className="created-by">Created By: {createdBy}</p>

//           <button className="create-btn" onClick={handleCreatePO}>Create PO</button>
//         </div>
//       )}

//       {message && <p className="message-text">{message}</p>}

//       <Footer />
//     </>
//   );
// };

// export default POForm;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import "./PoForm.css";

const POForm = () => {
  const [project, setProject] = useState("");
  const [indentCode, setIndentCode] = useState("");
  const [indentCodes, setIndentCodes] = useState([]);
  const [vendorId, setVendorId] = useState("");
  const [vendors, setVendors] = useState([]);
  const [openingEntryData, setOpeningEntryData] = useState(null);
  const [terms, setTerms] = useState("");
  const [message, setMessage] = useState("");
  const [createdBy, setCreatedBy] = useState("Helana"); // change dynamically later
  const [showViewButtons, setShowViewButtons] = useState(false);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/vendors", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setVendors(res.data));

    axios.get("http://127.0.0.1:5000/api/indent-codes", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setIndentCodes(res.data));
  }, [token]);

  const handleNew = () => {
    setProject("");
    setIndentCode("");
    setVendorId("");
    setOpeningEntryData(null);
    setTerms("");
    setMessage("");
    setShowViewButtons(false);
  };

  const handleView = () => {
    setShowViewButtons(true);
    setOpeningEntryData(null);
  };

  const fetchOpeningEntry = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/api/po/from-opening-entry/${indentCode}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOpeningEntryData(res.data);
      setMessage("");
    } catch (err) {
      console.error(err);
      setOpeningEntryData(null);
      setMessage("Opening entry not found!");
    }
  };

  const handleCreatePO = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/po", {
        opening_entry_id: openingEntryData.opening_entry_id,
        vendor_id: vendorId,
        terms
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setMessage(`${res.data.message} | PO Number: ${res.data.po_number} | Created By: ${res.data.created_by}`);
    } catch (err) {
      console.error(err);
      setMessage("Failed to create PO");
    }
  };

  return (
    <>
      <Header />

      <div className="po-container">
        <div className="po-header">
          <div className="po-title">Create Purchase Order</div>
          <div className="button-group">
            <button className="header-btn" onClick={handleNew}>New</button>
            <button className="header-btn" onClick={handleView}>View</button>
          </div>
        </div>

        {!showViewButtons && (
          <div className="po-form-section">
            <div className="form-row">
              <div className="form-group">
                <label>Project:</label>
                <input type="text" value={project} onChange={(e) => setProject(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Indent Code:</label>
                <select value={indentCode} onChange={(e) => setIndentCode(e.target.value)}>
                  <option value="">Select Indent Code</option>
                  {indentCodes.map((code, idx) => (
                    <option key={idx} value={code}>{code}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Vendor:</label>
                <select value={vendorId} onChange={(e) => setVendorId(e.target.value)}>
                  <option value="">Select Vendor</option>
                  {vendors.map(v => (
                    <option key={v.id} value={v.id}>{v.name}</option>
                  ))}
                </select>
              </div>

              <button className="fetch-btn" onClick={fetchOpeningEntry}>Fetch Entry</button>
            </div>
          </div>
        )}

        {openingEntryData && !showViewButtons && (
          <div className="entry-container">
            <h4>Opening Entry Details</h4>
            <table className="entry-table">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Specification</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Total</th>
                  <th>UOM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{openingEntryData.material}</td>
                  <td>{openingEntryData.specification}</td>
                  <td>{openingEntryData.qty}</td>
                  <td>{openingEntryData.rate}</td>
                  <td>{openingEntryData.total}</td>
                  <td>{openingEntryData.uom}</td>
                </tr>
              </tbody>
            </table>

            <div className="terms-section">
              <label>Terms & Conditions:</label>
              <textarea value={terms} onChange={(e) => setTerms(e.target.value)} />
            </div>

            <p className="created-by">Created By: {createdBy}</p>

            <button className="create-btn" onClick={handleCreatePO}>Create PO</button>
          </div>
        )}

        {showViewButtons && (
          <div className="entry-container">
            <h4>PO Document View</h4>
            <button className="print-btn" onClick={() => window.print()}>Print</button>
            <button className="download-btn" onClick={() => alert("Download triggered")}>Download</button>
          </div>
        )}

        {message && <p className="message-text">{message}</p>}
      </div>

      <Footer />
    </>
  );
};

export default POForm;

