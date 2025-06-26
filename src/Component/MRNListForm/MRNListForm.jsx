import React, { useState } from "react";
import "./MRNListForm.css";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import ChatBotIcon from "../ChatBot/ChatBotIcon";
import MRNTable from "./MRNTable"; // ✅ make sure this exists
import MRNGenerate from "./MRNGenerate";
import MRNDetail from "./MRNDetail";

const MRNListForm = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const handleGoClick = (e) => {
    e.preventDefault(); // Prevent page reload
    if (selectedProject !== "") {
      setShowTable(true); // ✅ Show table only if a project is selected
    } else {
      alert("Please select a project.");
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

          <form className="mrn-form">
            <div className="form-group">
              <label>Project <span className="required">*</span></label>
              <select value={selectedProject} onChange={handleProjectChange}>
                <option value="">-Select-</option>
                <option value="ProjectA">Project A</option>
                <option value="ProjectB">Project B</option>
              </select>
            </div>

            <div className="form-group">
              <label>Vendor</label>
              <select><option>-All-</option></select>
            </div>

            <div className="form-group">
              <label>Dispatch Type</label>
              <select><option>-All-</option></select>
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
        </div>

        {/* ✅ Conditionally render the table */}
        {showTable && <MRNTable />}
      </div>
      <Footer />
      <ChatBotIcon />
    </>
  );
};

export default MRNListForm;
