// import React, { useState } from "react";
// import "./OpeningAddForm.css";
// import OpeningEditableTable from "./OpeningEditTable";

// const OpeningAddForm = () => {
//   const [showTable, setShowTable] = useState(false);
//   const [tableData, setTableData] = useState([]);
//   const [project, setProject] = useState("");

//  const handleSubmit = (e) => {
//   e.preventDefault();

//   if (!project || project === "-Select-") {
//     alert("Please select a project before clicking GO!");
//     return;
//   }

//   const sampleData = [
//     {
//       date: "2025-07-14",
//       unit: "sq. ft",
//       specification: "Bore",
//       code: "BOR/BO/8202",
//       brand: "",
//       qty: "",
//       uom: "sq. ft",
//     },
//   ];

//   setTableData(sampleData);
//   setShowTable(true);
// };


//   return (
//     <div className="opening-container">
//       <div className="opening-section">
//         <div className="opening-header">
//           <div className="opening-title">OPENING</div>
//           <div className="opening-buttons">
//             <button className="btn new-btn">NEW</button>
//             <button className="btn view-btn">VIEW</button>
//           </div>
//         </div>

//         <form className="opening-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//              <label>
//       Project <span className="required">*</span>
//     </label>
//     <select value={project} onChange={(e) => setProject(e.target.value)}>
//       <option>-Select-</option>
//       <option>Project A</option>
//       <option>Project B</option>
//     </select>
//           </div>

//           <div className="form-group">
//             <label>Category</label>
//             <select>
//               <option>-All-</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Material</label>
//             <select>
//               <option>-All-</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Specification</label>
//             <select>
//               <option>-All-</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Specification Code</label>
//             <input type="text" placeholder="Enter Specification Code" />
//           </div>

//           <div className="form-group">
//             <label>Date</label>
//             <input type="date" />
//           </div>

//           <div className="btn-wrap">
//             <button className="go-btn" type="submit">🔍 GO</button>
//           </div>
//         </form>

//         {/* ✅ Show this only after GO is clicked */}
        
//       </div>
//       {showTable && <OpeningEditableTable data={tableData} />}
//     </div>
//   );
// };

// export default OpeningAddForm;
import React, { useState } from "react";
import "./OpeningAddForm.css";
import OpeningEditableTable from "./OpeningEditTable";

const OpeningAddForm = () => {
  const [project, setProject] = useState("");
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [specification, setSpecification] = useState("");
  const [code, setCode] = useState("");
  const [date, setDate] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !project || project === "-Select-" ||
      !category || category === "-All-" ||
      !material || material === "-All-" ||
      !specification || specification === "-All-" ||
      !code.trim() ||
      !date
    ) {
      alert("⚠️ Please fill all required fields before clicking GO.");
      return;
    }

    const sampleData = [
      {
        category: category,
        material: material,
        specification: specification,
        code: code,
        brand: "",
        qty: "",
        uom: "sq. ft",
        rate: "",
        selected: false,
      },
      // {
      //   category: "PLUMBING",
      //   specification: "PVC Pipe",
      //   code: "PLU/PVC/100",
      //   brand: "Ashirvad",
      //   qty: "",
      //   uom: "m",
      //   rate: "",
      //   selected: false,
      // },
    ];

    setTableData(sampleData);
    setShowTable(true);
  };

  return (
    <div className="opening-container">
      <div className="opening-section">
        <div className="opening-header">
          <div className="opening-title">OPENING</div>
          <div className="opening-buttons">
            <button className="btn new-btn">NEW</button>
            <button className="btn view-btn">VIEW</button>
          </div>
        </div>

        <form className="opening-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Project <span className="required">*</span>
            </label>
            <select value={project} onChange={(e) => setProject(e.target.value)}>
              <option>-Select-</option>
              <option>Project A</option>
              <option>Project B</option>
            </select>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>-All-</option>
              <option>Electrical</option>
              <option>Plumbing</option>
              <option>Bore</option>
            </select>
          </div>

          <div className="form-group">
            <label>Material</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)}>
              <option>-All-</option>
              <option>Wire</option>
              <option>Pipe</option>
              <option>Sand</option>
            </select>
          </div>

          <div className="form-group">
            <label>Specification</label>
            <select value={specification} onChange={(e) => setSpecification(e.target.value)}>
              <option>-All-</option>
              <option>Copper</option>
              <option>PVC</option>
              <option>MS Rod</option>
            </select>
          </div>

          <div className="form-group">
            <label>Specification Code</label>
            <input
              type="text"
              placeholder="Enter Specification Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="btn-wrap">
            <button className="go-btn" type="submit">🔍 GO</button>
          </div>
        </form>

       
      </div>
       {showTable && <OpeningEditableTable data={tableData} />}
    </div>
  );
};

export default OpeningAddForm;
