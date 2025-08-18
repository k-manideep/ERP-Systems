// import React, { useState } from "react";
// import "./OpeningQuantityTable.css";

// const OpeningQuantityTable = () => {
//   const [rows, setRows] = useState([
//     {
//       category: "ADHESIVE MATERIALS",
//       material: "FEVICOL",
//       specification: "FEVICOL",
//       specCode: "ADH/FE/1778",
//       brand: "SUPREME",
//       openingQty: "1.00",
//       uom: "KGS",
//       rate: "100",
//       isEditing: false,
//     },
//   ]);

//   const handleEdit = (index) => {
//     const updatedRows = [...rows];
//     updatedRows[index].isEditing = true;
//     setRows(updatedRows);
//   };

//   const handleChange = (index, field, value) => {
//     const updatedRows = [...rows];
//     updatedRows[index][field] = value;
//     setRows(updatedRows);
//   };

//   const handleSave = (index) => {
//     const updatedRows = [...rows];
//     updatedRows[index].isEditing = false;
//     setRows(updatedRows);
//     alert("Row updated successfully!");
//   };

//   const handleCancel = (index) => {
//     const updatedRows = [...rows];
//     updatedRows[index].isEditing = false;
//     setRows(updatedRows);
//   };

//   return (
//     <div className="oq-table-section">
//       <h2>Opening Quantity Details</h2>
//       <table className="oq-table">
//         <thead>
//           <tr>
//             <th>Category</th>
//             <th>Material</th>
//             <th>Specification</th>
//             <th>Specification Code</th>
//             <th>Brand</th>
//             <th>Opening Qty</th>
//             <th>UOM</th>
//             <th>Rate</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, index) => (
//             <tr key={index}>
//               <td>{row.category}</td>
//               <td>{row.material}</td>
//               <td>{row.specification}</td>
//               <td>{row.specCode}</td>
//               <td>
//                 {row.isEditing ? (
//                   <input
//                     type="text"
//                     value={row.brand}
//                     onChange={(e) => handleChange(index, "brand", e.target.value)}
//                   />
//                 ) : (
//                   row.brand
//                 )}
//               </td>
//               <td>{row.openingQty}</td>
//               <td>{row.uom}</td>
//               <td>
//                 {row.isEditing ? (
//                   <input
//                     type="number"
//                     value={row.rate}
//                     onChange={(e) => handleChange(index, "rate", e.target.value)}
//                   />
//                 ) : (
//                   row.rate
//                 )}
//               </td>
//               <td>
//                 {row.isEditing ? (
//                   <>
//                     <button className="save-btn" onClick={() => handleSave(index)}>Save</button>
//                     <button className="cancel-btn" onClick={() => handleCancel(index)}>Cancel</button>
//                   </>
//                 ) : (
//                   <button className="edit-btn" onClick={() => handleEdit(index)}>✏️ Edit</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="oq-actions">
//         <div className="left-buttons">
//           <button className="print-btn">🖨 Print</button>
//           <button className="download-btn">⬇ Download</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OpeningQuantityTable;

import React, { useState, useRef } from "react";
import "./OpeningQuantityTable.css";

const OpeningQuantityTable = () => {
  const [rows, setRows] = useState([
    {
      category: "ADHESIVE MATERIALS",
      material: "FEVICOL",
      specification: "FEVICOL",
      specCode: "ADH/FE/1778",
      brand: "SUPREME",
      openingQty: "1.00",
      uom: "KGS",
      rate: "100",
      isEditing: false,
    },
  ]);

  const tableRef = useRef(null);

  // Edit Functions
  const handleEdit = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].isEditing = true;
    setRows(updatedRows);
  };

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleSave = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].isEditing = false;
    setRows(updatedRows);
    alert("Row updated successfully!");
  };

  const handleCancel = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].isEditing = false;
    setRows(updatedRows);
  };

  // ✅ Print Table
  const handlePrint = () => {
    const printContent = tableRef.current.innerHTML;
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write("<html><head><title>Print Table</title></head><body>");
    printWindow.document.write(printContent);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  // ✅ Download Table as CSV
  const handleDownload = () => {
    const csvRows = [];
    const headers = [
      "Category",
      "Material",
      "Specification",
      "Specification Code",
      "Brand",
      "Opening Qty",
      "UOM",
      "Rate",
    ];
    csvRows.push(headers.join(","));

    rows.forEach((row) => {
      csvRows.push(
        [
          row.category,
          row.material,
          row.specification,
          row.specCode,
          row.brand,
          row.openingQty,
          row.uom,
          row.rate,
        ].join(",")
      );
    });

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "OpeningQuantityTable.csv";
    link.click();
  };

  return (
    <div className="oq-table-section">
      <h2>Opening Quantity Details</h2>
      <div ref={tableRef}>
        <table className="oq-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Material</th>
              <th>Specification</th>
              <th>Specification Code</th>
              <th>Brand</th>
              <th>Opening Qty</th>
              <th>UOM</th>
              <th>Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.category}</td>
                <td>{row.material}</td>
                <td>{row.specification}</td>
                <td>{row.specCode}</td>
                <td>
                  {row.isEditing ? (
                    <input
                      type="text"
                      value={row.brand}
                      onChange={(e) =>
                        handleChange(index, "brand", e.target.value)
                      }
                    />
                  ) : (
                    row.brand
                  )}
                </td>
                <td>{row.openingQty}</td>
                <td>{row.uom}</td>
                <td>
                  {row.isEditing ? (
                    <input
                      type="number"
                      value={row.rate}
                      onChange={(e) =>
                        handleChange(index, "rate", e.target.value)
                      }
                    />
                  ) : (
                    row.rate
                  )}
                </td>
                <td>
                  {row.isEditing ? (
                    <>
                      <button
                        className="save-btn"
                        onClick={() => handleSave(index)}
                      >
                        Save
                      </button>
                      <button
                        className="cancel-btn"
                        onClick={() => handleCancel(index)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(index)}
                    >
                      ✏️ Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="oq-actions">
        <div className="left-buttons">
          <button className="print-btn" onClick={handlePrint}>
            🖨 Print
          </button>
          <button className="download-btn" onClick={handleDownload}>
            ⬇ Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpeningQuantityTable;

