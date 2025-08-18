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
// import React, { useState } from "react";
// import "./OpeningAddForm.css";
// import OpeningEditableTable from "./OpeningEditTable";
// import Header from "../Partials/Header";
// import Footer from "../Partials/Footer";
// import ChatBotIcon from "../ChatBot/ChatBotIcon";

// const OpeningAddForm = () => {
//   const [project, setProject] = useState("");
//   const [category, setCategory] = useState("");
//   const [material, setMaterial] = useState("");
//   const [specification, setSpecification] = useState("");
//   const [code, setCode] = useState("");
//   const [date, setDate] = useState("");
//   const [showTable, setShowTable] = useState(false);
//   const [tableData, setTableData] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !project || project === "-Select-" ||
//       !category || category === "-All-" ||
//       !material || material === "-All-" ||
//       !specification || specification === "-All-" ||
//       !code.trim() ||
//       !date
//     ) {
//       alert("⚠️ Please fill all required fields before clicking GO.");
//       return;
//     }

//     const sampleData = [
//       {
//         category: category,
//         material: material,
//         specification: specification,
//         code: code,
//         brand: "",
//         qty: "",
//         uom: "sq. ft",
//         rate: "",
//         selected: false,
//       },
//       // {
//       //   category: "PLUMBING",
//       //   specification: "PVC Pipe",
//       //   code: "PLU/PVC/100",
//       //   brand: "Ashirvad",
//       //   qty: "",
//       //   uom: "m",
//       //   rate: "",
//       //   selected: false,
//       // },
//     ];

//     setTableData(sampleData);
//     setShowTable(true);
//   };

//   return (
//     <>
//     <Header/>
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
//             <label>
//               Project <span className="required">*</span>
//             </label>
//             <select value={project} onChange={(e) => setProject(e.target.value)}>
//               <option>-Select-</option>
//               <option>Project A</option>
//               <option>Project B</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Category</label>
//             <select value={category} onChange={(e) => setCategory(e.target.value)}>
//               <option>-All-</option>
//               <option>Electrical</option>
//               <option>Plumbing</option>
//               <option>Bore</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Material</label>
//             <select value={material} onChange={(e) => setMaterial(e.target.value)}>
//               <option>-All-</option>
//               <option>Wire</option>
//               <option>Pipe</option>
//               <option>Sand</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Specification</label>
//             <select value={specification} onChange={(e) => setSpecification(e.target.value)}>
//               <option>-All-</option>
//               <option>Copper</option>
//               <option>PVC</option>
//               <option>MS Rod</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Specification Code</label>
//             <input
//               type="text"
//               placeholder="Enter Specification Code"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label>Date</label>
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           <div className="btn-wrap">
//             <button className="go-btn" type="submit">🔍 GO</button>
//           </div>
//         </form>


//       </div>
//        {showTable && <OpeningEditableTable data={tableData} />}
//     </div>
//     <Footer/>
//     <ChatBotIcon/>
//     </>
//   );
// };

// export default OpeningAddForm;


// import React, { useState } from "react";
// import "./OpeningAddForm.css";
// import OpeningEditableTable from "./OpeningEditTable";
// import Header from "../Partials/Header";
// import Footer from "../Partials/Footer";
// import ChatBotIcon from "../ChatBot/ChatBotIcon";

// const OpeningAddForm = () => {
//   const [project, setProject] = useState("");
//   const [category, setCategory] = useState("");
//   const [material, setMaterial] = useState("");
//   const [specification, setSpecification] = useState("");
//   const [code, setCode] = useState("");
//   const [date, setDate] = useState("");
//   const [showTable, setShowTable] = useState(false);
//   const [tableData, setTableData] = useState([]);
//   const [showAddMaterialForm, setShowAddMaterialForm] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !project || project === "-Select-" ||
//       !category || category === "-All-" ||
//       !material || material === "-All-" ||
//       !specification || specification === "-All-" ||
//       !code.trim() ||
//       !date
//     ) {
//       alert("⚠️ Please fill all required fields before clicking GO.");
//       return;
//     }

//     const sampleData = [
//       {
//         category: category,
//         material: material,
//         specification: specification,
//         code: code,
//         brand: "",
//         qty: "",
//         uom: "sq. ft",
//         rate: "",
//         selected: false,
//       },
//     ];

//     setTableData(sampleData);
//     setShowTable(true);
//   };

//   const handleMaterialChange = (e) => {
//     const value = e.target.value;
//     if (value === "add") {
//       setShowAddMaterialForm(true);
//     } else {
//       setMaterial(value);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="opening-container">
//         <div className="opening-section">
//           <div className="opening-header">
//             <div className="opening-title">OPENING</div>
//             <div className="opening-buttons">
//               <button className="btn new-btn">NEW</button>
//               <button className="btn view-btn">VIEW</button>
//             </div>
//           </div>

//           <form className="opening-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Project <span className="required">*</span></label>
//               <select value={project} onChange={(e) => setProject(e.target.value)}>
//                 <option>-Select-</option>
//                 <option>Project A</option>
//                 <option>Project B</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Category</label>
//               <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option>-All-</option>
//                 <option>Electrical</option>
//                 <option>Plumbing</option>
//                 <option>Bore</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Material</label>
//               <select value={material} onChange={handleMaterialChange}>
//                 <option>-All-</option>
//                 <option>Wire</option>
//                 <option>Pipe</option>
//                 <option>Sand</option>
//                 <option value="add">➕ Add Materials</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Specification</label>
//               <select value={specification} onChange={(e) => setSpecification(e.target.value)}>
//                 <option>-All-</option>
//                 <option>Copper</option>
//                 <option>PVC</option>
//                 <option>MS Rod</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Specification Code</label>
//               <input
//                 type="text"
//                 placeholder="Enter Specification Code"
//                 value={code}
//                 onChange={(e) => setCode(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label>Date</label>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>

//             <div className="btn-wrap">
//               <button className="go-btn" type="submit">🔍 GO</button>
//             </div>
//           </form>

//           {/* Add Material Pop-up Form */}
//           {showAddMaterialForm && (
//             <div className="material-popup-form">
//               <div className="form-row">
//                 <input type="text" placeholder="Material Name" />
//                 <select>
//                   <option>UOM</option>
//                   <option>KG</option>
//                   <option>Liter</option>
//                   <option>Piece</option>
//                 </select>
//                 <input type="number" placeholder="Qty" />
//                 <input type="number" placeholder="Rate" />
//                 <input type="text" placeholder="Code" />
//                 <button className="go-btn">Save</button>
//                 <button className="btn close-btn" onClick={() => setShowAddMaterialForm(false)}>Close</button>
//               </div>
//             </div>
//           )}
//         </div>

//         {showTable && <OpeningEditableTable data={tableData} />}
//       </div>
//       <Footer />
//       <ChatBotIcon />
//     </>
//   );
// };

// export default OpeningAddForm;
import React, { useState, useEffect } from "react";
import "./OpeningAddForm.css";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import ChatBotIcon from "../ChatBot/ChatBotIcon";
import OpeningEditableTable from "./OpeningEditTable";
import { Link } from "react-router-dom";

const OpeningAddForm = () => {
  const [project, setProject] = useState("");
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [specification, setSpecification] = useState("");
  const [code, setCode] = useState("");
  const [date, setDate] = useState("");
  const [uom, setUom] = useState("");
  const [uoms, setUoms] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const [projects, setProjects] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredSpecifications, setFilteredSpecifications] = useState([]);

  const [showAddMaterialForm, setShowAddMaterialForm] = useState(false);
  const [newMaterial, setNewMaterial] = useState({
    category: "",
    description: "",
    id: "",
    material_code: "",
    name: "",
    specifications: "",
    unit: "",
  });

  const API_BASE = "http://localhost:5000/api";

  const fetchData = async (endpoint, setter) => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE}/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setter(data);
    } catch (error) {
      console.error(`Error loading ${endpoint}:`, error);
    }
  };

  useEffect(() => {
    fetchData("projects", setProjects);
    fetchData("materials", setMaterials);
    fetchData("uoms", setUoms);
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  useEffect(() => {
    const categories = [...new Set(materials.map((m) => m.category))];
    setFilteredCategories(categories);
  }, [materials]);

  useEffect(() => {
    const specs = materials
      .filter((m) => (category ? m.category === category : true))
      .map((m) => m.specifications);
    const uniqueSpecs = [...new Set(specs)];
    setFilteredSpecifications(uniqueSpecs);
  }, [category, materials]);

  const handleMaterialChange = (e) => {
    const selected = e.target.value;
    if (selected === "ADD_NEW") {
      setShowAddMaterialForm(true);
      return;
    }

    setMaterial(selected);
    const selectedMat = materials.find((m) => m.name === selected);
    if (selectedMat) {
      const cat = selectedMat.category || "";
      const mat = selectedMat.name || "";
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const specCode = `${cat.slice(0, 3).toUpperCase()}/${mat.slice(0, 2).toUpperCase()}/${randomNum}`;
      setCategory(cat);
      setSpecification(selectedMat.specifications);
      setCode(specCode);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!project || !category || !material || !specification || !code || !date || !uom) {
      alert("⚠️ Please fill all required fields before clicking GO.");
      return;
    }

    const sampleData = [
      {
        project_id: projects.find((p) => p.name === project)?.id,
        material_id: materials.find((m) => m.name === material)?.id,
        category,
        material,
        specification,
        code,
        brand: "",
        qty: "",
        uom,
        rate: "",
        selected: false,
        date,
      },
    ];

    setTableData(sampleData);
    setShowTable(true);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("access_token");

    const payloads = tableData.map((item) => ({
      project_id: projects.find((p) => p.name === project)?.id,
      category: item.category,
      material_id: materials.find((m) => m.name === item.material)?.id,
      specification: item.specification,
      specification_code: item.code,
      brand: item.brand,
      opening_qty: item.qty,
      uom: item.uom,
      rate: item.rate,
      date: date,
    }));

    try {
      for (let payload of payloads) {
        const res = await fetch(`${API_BASE}/opening-entries`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Save failed");
      }

      alert("✅ Saved successfully to database!");
      setTableData([]);
      setShowTable(false);
    } catch (err) {
      console.error("Save Error:", err);
      alert("❌ Failed to save entries.");
    }
  };

  const handleDelete = () => {
    setTableData([]);
    setShowTable(false);
  };

 
  const handleNewMaterialChange = (e) => {
    const { name, value } = e.target;
    setNewMaterial((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMaterialSave = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/materials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMaterial)
      });

      if (response.ok) {
        alert("Material saved successfully!");
        setNewMaterial({
          category: "",
          description: "",
          id: "",
          material_code: "",
          name: "",
          specifications: "",
          unit: ""
        });
        setShowAddMaterialForm(false);
      } else {
        alert("Failed to save material.");
      }
    } catch (error) {
      console.error("Error saving material:", error);
      alert("Error saving material.");
    }
  };

  const handleAddMaterialCancel = () => {
    setShowAddMaterialForm(false);
    setNewMaterial({
      category: "",
      description: "",
      id: "",
      material_code: "",
      name: "",
      specifications: "",
      unit: ""
    });
  };

  return (
    <>
      <Header />
      <div className="opening-container">
        <div className="opening-section">
          <div className="opening-header">
            <div className="opening-title">OPENING</div>
            <div className="opening-buttons">
              <Link to="/opening-add" className="btn view-btn1">NEW</Link>
              <Link to="/opening-quantity" className="btn view-btn1">VIEW</Link>
            </div>
          </div>

          <form className="opening-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Project <span className="required">*</span></label>
              <select value={project} onChange={(e) => setProject(e.target.value)}>
                <option value="">-Select-</option>
                {projects.map((proj) => (
                  <option key={proj.id} value={proj.name}>{proj.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">-All-</option>
                {filteredCategories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Material</label>
              <select value={material} onChange={handleMaterialChange}>
                <option value="">-All-</option>
                {materials.map((mat) => (
                  <option key={mat.id} value={mat.name}>{mat.name}</option>
                ))}
                <option value="ADD_NEW">➕ Add Material</option>
              </select>
            </div>

            <div className="form-group">
              <label>Specification</label>
              <select value={specification} onChange={(e) => setSpecification(e.target.value)}>
                <option value="">-All-</option>
                {filteredSpecifications.map((spec, idx) => (
                  <option key={idx} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Specification Code</label>
              <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Unit of Measurement (UOM)</label>
              <select value={uom} onChange={(e) => setUom(e.target.value)}>
                <option value="">-Select-</option>
                {uoms.map((unit, idx) => (
                  <option key={idx} value={unit}>{unit}</option>
                ))}
              </select>
            </div>

            <div className="btn-wrap">
              <button className="go-btn" type="submit">🔍 GO</button>
            </div>
          </form>

          {showAddMaterialForm && (
            <div className="material-inline-form">
              <h4>Add MaterialForm</h4>
              <div className="material-form-grid">
                {["category", "description", "id", "material_code", "name", "specifications", "unit"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={newMaterial[field]}
                    onChange={handleNewMaterialChange}
                  />
                ))}
              {/* </div> */}
              {/* <div className="button-row"> */}
              <button onClick={handleAddMaterialSave} className="btn new-btn">Save</button>
              <button onClick={handleAddMaterialCancel} className="btn view-btn">Cancel</button>
              {/* </div> */}
            </div>
            </div>
          )}


        </div>

        {showTable && (
          <div className="preview-block" style={{ marginTop: 24 }}>
            <OpeningEditableTable data={tableData} setData={setTableData} />
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              {/* Future buttons */}
            </div>
          </div>
        )}
      </div>
      <ChatBotIcon />
      <Footer />
    </>
  );
};

export default OpeningAddForm;

