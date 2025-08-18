import React, { useState } from "react"
import "./OpeningQuantityForm.css";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import ChatBotIcon from "../ChatBot/ChatBotIcon";
import OpeningQuantityTable from "./OpeningQuantityTable";

const OpeningQuantityForm = () => {
   const [selectedProject, setSelectedProject] = useState("");
   const [showTable, setShowTable] = useState(false);

  // const handleGoClick = (e) => {
  //   e.preventDefault();
  //   setShowTable(true);
  // };
  const handleGoClick = (e) => {
    e.preventDefault();
    if (selectedProject) {
      setShowTable(true); // ✅ Show the table below form
    } else {
      alert("Please select a project!");
    }
  };
  return (
    <>
    <Header />
    <div className="oq-container">
      <div className="oq-header">
        <div className="oq-title">OPENING QUANTITY</div>
        <div className="oq-buttons">
          <button className="action-btn">VIEW</button>
          <button className="action-btn">CLOSE</button>
        </div>
      </div>

      <form className="oq-form">
        <div className="form-group">
          <label>
            Project <span className="required">*</span>
          </label>
          {/* <select>
            <option>-Select-</option>
          </select> */}
          <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option value="">-Select-</option>
              <option value="The Drizzle">The Drizzle</option>
              <option value="Project X">Project X</option>
            </select>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select>
            <option>-All-</option>
          </select>
        </div>

        <div className="form-group">
          <label>Material</label>
          <select>
            <option>-All-</option>
          </select>
        </div>

        <div className="form-group">
          <label>Specification</label>
          <select>
            <option>-All-</option>
          </select>
        </div>

        <div className="form-group">
          <label>Specification Code</label>
          <input type="text" placeholder="Enter Code" />
        </div>

        <div className="btn-wrap">
          {/* <button className="go-btn" type="submit">
            🔍 GO
          </button> */}
          <button className="go-btn" type="submit" onClick={handleGoClick}>
              🔍 GO
            </button>
        </div>
      </form>
       {/* {showTable && <OpeningQuantityTable />} */}
    </div>
     {showTable && <OpeningQuantityTable />}
    <Footer/>
    <ChatBotIcon/>
    </>
  );
};

export default OpeningQuantityForm;
