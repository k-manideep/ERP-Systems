// import React, { useState } from "react";
// import "./MRNListForm.css";
// import Header from "../Partials/Header";
// import Footer from "../Partials/Footer";
// import ChatBotIcon from "../ChatBot/ChatBotIcon";
// import MRNTable from "./MRNTable"; // ✅ make sure this exists
// import MRNGenerate from "./MRNGenerate";
// import MRNDetail from "./MRNDetail";

// const MRNListForm = () => {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [showTable, setShowTable] = useState(false);

//   const handleProjectChange = (e) => {
//     setSelectedProject(e.target.value);
//   };

//   const handleGoClick = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (selectedProject !== "") {
//       setShowTable(true); // ✅ Show table only if a project is selected
//     } else {
//       alert("Please select a project.");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="mrn-container">
//         <div className="mrn-section">
//           <div className="mrn-header">
//             <div className="mrn-title">PO FOR MRN</div>
//           </div>

//           <form className="mrn-form">
//             <div className="form-group">
//               <label>Project <span className="required">*</span></label>
//               <select value={selectedProject} onChange={handleProjectChange}>
//                 <option value="">-Select-</option>
//                 <option value="ProjectA">Project A</option>
//                 <option value="ProjectB">Project B</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Vendor</label>
//               <select><option>-All-</option></select>
//             </div>

//             <div className="form-group">
//               <label>Dispatch Type</label>
//               <select><option>-All-</option></select>
//             </div>

//             <div className="form-group">
//               <label>PO Code</label>
//               <input type="text" placeholder="Enter PO Code" />
//             </div>

//             <div className="form-group">
//               <label>From</label>
//               <input type="date" />
//             </div>

//             <div className="form-group">
//               <label>To</label>
//               <input type="date" />
//             </div>

//             <div className="btn-wrap">
//               <button type="button" className="go-btn" onClick={handleGoClick}>
//                 GO
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* ✅ Conditionally render the table */}
//         {showTable && <MRNTable />}
//       </div>
//       <Footer />
//       <ChatBotIcon />
//     </>
//   );
// };

// export default MRNListForm;
// import React, { useState } from "react";
// import "./MRNListForm.css";
// import Header from "../Partials/Header";
// import Footer from "../Partials/Footer";
// import ChatBotIcon from "../ChatBot/ChatBotIcon";
// import MRNTable from "./MRNTable";

// const MRNListForm = () => {
//   const [projects, setProjects] = useState([
//     { code: "PRJ-01", name: "Project A" },
//     { code: "PRJ-02", name: "Project B" },
//     { code: "add", name: "➕ Add New Project" }, // special option
//   ]);
//   const [selectedProject, setSelectedProject] = useState("");
//   const [showTable, setShowTable] = useState(false);
//   const [showInlineForm, setShowInlineForm] = useState(false);

//   const [newProject, setNewProject] = useState({
//     project_code: "",
//     name: "",
//     description: "",
//     budget: "",
//     start_date: "",
//     end_date: "",
//   });

//   const handleProjectChange = (e) => {
//     const value = e.target.value;
//     setSelectedProject(value);
//     if (value === "add") {
//       setShowInlineForm(true);
//     }
//   };

//   const handleGoClick = (e) => {
//     e.preventDefault();
//     if (selectedProject && selectedProject !== "add") {
//       setShowTable(true);
//     } else {
//       alert("Please select a valid project.");
//     }
//   };

//   const handleNewProjectChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject({ ...newProject, [name]: value });
//   };

//   const handleSaveProject = () => {
//     if (!newProject.project_code || !newProject.name) {
//       alert("Project Code and Name are required.");
//       return;
//     }

//     const newProj = {
//       code: newProject.project_code,
//       name: newProject.name,
//     };

//     setProjects((prev) => [
//       ...prev.filter((p) => p.code !== "add"), // remove "add" temporarily
//       newProj,
//       { code: "add", name: "➕ Add New Project" }, // re-add at end
//     ]);

//     setSelectedProject(newProj.code);
//     setShowInlineForm(false);

//     // Reset form
//     setNewProject({
//       project_code: "",
//       name: "",
//       description: "",
//       budget: "",
//       start_date: "",
//       end_date: "",
//     });
//   };

//   return (
//     <>
//       <Header />
//       <div className="mrn-container">
//         <div className="mrn-section">
//           <div className="mrn-header">
//             <div className="mrn-title">PO FOR MRN</div>
//           </div>

//           <form className="mrn-form">
//             <div className="form-group">
//               <label>Project <span className="required">*</span></label>
//               <select value={selectedProject} onChange={handleProjectChange}>
//                 <option value="">-Select-</option>
//                 {projects.map((proj, idx) => (
//                   <option key={idx} value={proj.code}>{proj.name}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Vendor</label>
//               <select><option>-All-</option></select>
//             </div>

//             <div className="form-group">
//               <label>Dispatch Type</label>
//               <select><option>-All-</option></select>
//             </div>

//             <div className="form-group">
//               <label>PO Code</label>
//               <input type="text" placeholder="Enter PO Code" />
//             </div>

//             <div className="form-group">
//               <label>From</label>
//               <input type="date" />
//             </div>

//             <div className="form-group">
//               <label>To</label>
//               <input type="date" />
//             </div>

//             <div className="btn-wrap">
//               <button type="button" className="go-btn" onClick={handleGoClick}>GO</button>
//             </div>
//           </form>
//         </div>

//         {/* ✅ Inline Add Project Form */}
//         {/* ✅ Inline Add Project Form */}
//         {showInlineForm && (
//           <div className="inline-add-project-form">
//             <div className="single-row">
//               <div className="form-group">
//                 <label>Project Code<span>*</span></label>
//                 <input
//                   name="project_code"
//                   value={newProject.project_code}
//                   onChange={handleNewProjectChange}
//                   placeholder="project-code"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Project Name<span>*</span></label>
//                 <input
//                   name="name"
//                   value={newProject.name}
//                   onChange={handleNewProjectChange}
//                   placeholder="name"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <input
//                   name="description"
//                   value={newProject.description}
//                   onChange={handleNewProjectChange}
//                   placeholder="Enter Description"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Budget</label>
//                 <input
//                   name="budget"
//                   type="number"
//                   value={newProject.budget}
//                   onChange={handleNewProjectChange}
//                   placeholder="5000000"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Start Date</label>
//                 <input
//                   name="start_date"
//                   type="date"
//                   value={newProject.start_date}
//                   onChange={handleNewProjectChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>End Date</label>
//                 <input
//                   name="end_date"
//                   type="date"
//                   value={newProject.end_date}
//                   onChange={handleNewProjectChange}
//                 />
//               </div>
//               <div className="form-actions">
//                 <button className="save-btn" onClick={handleSaveProject}>Save</button>
//                 <button className="cancel-btn" onClick={() => setShowInlineForm(false)}>Cancel</button>
//               </div>
//             </div>
//           </div>
//         )}


//         {showTable && <MRNTable />}
//       </div>
//       <Footer />
//       <ChatBotIcon />
//     </>
//   );
// };

// export default MRNListForm;

import React, { useState, useEffect } from "react";
import "./MRNListForm.css";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import ChatBotIcon from "../ChatBot/ChatBotIcon";
import MRNTable from "./MRNTable";

const MRNListForm = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [vendor, setVendor] = useState("");
  const [dispatchType, setDispatchType] = useState("");
  const [projects, setProjects] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const [newProject, setNewProject] = useState({
    project_code: "",
    name: "",
    description: "",
    budget: "",
    start_date: "",
    end_date: ""
  });

  useEffect(() => {
    fetchProjects();
    fetchVendors();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:5000/api/projects", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVendors = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:5000/api/vendors", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) setVendors(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProjectChange = (e) => {
    const value = e.target.value;
    if (value === "add_new_project") {
      setShowProjectForm(true);
    } else {
      setSelectedProject(value);
    }
  };

  const handleNewProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleGoClick = (e) => {
    e.preventDefault();
    if (selectedProject !== "") {
      setShowTable(true);
    } else {
      alert("Please select a project.");
    }
  };

  const handleSaveProject = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newProject)
      });

      if (response.ok) {
        const addedProject = await response.json();
        alert("Project added successfully!");
        setProjects((prev) => [...prev, addedProject]);
        setSelectedProject(addedProject.project_code);
        setShowProjectForm(false);
        setNewProject({
          project_code: "",
          name: "",
          description: "",
          budget: "",
          start_date: "",
          end_date: ""
        });
      } else {
        alert("Failed to add project");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="mrn-container">
        <div className="mrn-section">
          <div className="mrn-header">
            <div className="mrn-title">PO FOR MRN</div>
          </div>

          {/* MRN Main Form */}
          <form className="mrn-form">
            <div className="form-group">
              <label>Project <span className="required">*</span></label>
              <select value={selectedProject} onChange={handleProjectChange}>
                <option value="">-Select-</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.project_code}>
                    {project.name} ({project.project_code})
                  </option>
                ))}
                <option value="add_new_project">+ Add Project</option>
              </select>
            </div>

            <div className="form-group">
              <label>Vendor</label>
              <select value={vendor} onChange={(e) => setVendor(e.target.value)}>
                <option value="">-All-</option>
                {vendors.map((v) => (
                  <option key={v.id} value={v.id}>{v.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Dispatch Type</label>
              <select value={dispatchType} onChange={(e) => setDispatchType(e.target.value)}>
                <option value="">-All-</option>
                <option value="By Hand">By Hand</option>
                <option value="Courier">Courier</option>
                <option value="Registry">Registry</option>
                <option value="Email">Email</option>
              </select>
            </div>

            <div className="form-group">
              <label>PO Code</label>
              <input type="text" placeholder="Enter PO Code" />
            </div>

            <div className="form-group">
              <label>From</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>To</label>
              <input type="date" />
            </div>

            <div className="btn-wrap">
              <button type="button" className="go-btn" onClick={handleGoClick}>
                GO
              </button>
            </div>
          </form>

          {showTable && <MRNTable />}
        </div>

        {/* Add Project Form Below */}
        {showProjectForm && (
          <div className="add-project-form" style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f9f9f9",
            borderRadius: "8px",
            overflowX: "auto"
          }}>
            <h4>Add New Project</h4>
            <div className="flex-form" style={{
              display: "flex",
              gap: "10px",
              flexWrap: "nowrap",
              alignItems: "center"
            }}>
              <input name="project_code" placeholder="Project Code" onChange={handleNewProjectChange} value={newProject.project_code} />
              <input name="name" placeholder="Project Name" onChange={handleNewProjectChange} value={newProject.name} />
              <input name="description" placeholder="Description" onChange={handleNewProjectChange} value={newProject.description} />
              <input name="budget" type="number" placeholder="Budget" onChange={handleNewProjectChange} value={newProject.budget} />
              <input name="start_date" type="date" onChange={handleNewProjectChange} value={newProject.start_date} />
              <input name="end_date" type="date" onChange={handleNewProjectChange} value={newProject.end_date} />
              <button onClick={handleSaveProject} className="save-btn" style={{ background: "#28a745", color: "#fff" }}>Save</button>
              <button onClick={() => setShowProjectForm(false)} className="cancel-btn" style={{ background: "#dc3545", color: "#fff" }}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ChatBotIcon />
    </>
  );
};

export default MRNListForm;


