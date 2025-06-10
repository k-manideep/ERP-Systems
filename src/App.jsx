import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Component/DashBoard/DashBoard";
import QualityApprovalForm from "./Component/QualityApproval/QualityApprovalForm";
import StockVariationForm from "./Component/StockVariation/StockVariationForm";
import MRNListForm from "./Component/MRNListForm/MRNListForm";
import OpeningQuantityForm from "./Component/OpeningQuantityForm/OpeningQuantityForm";
import OpeningAddForm from "./Component/OpeningAddForm/OpeningAddForm";
import LoginForm from "./Component/LoginForm/LoginForm";
import ChangePasswordForm from "./Component/ChangePasswordForm/ChangePasswordForm"
// import IssueMaterialModule from "./Component/IssueMaterial/IssueMaterialModule";
import IssueMaterialContractor from "./Component/IssueMaterialForm/IssueMaterialContractor";
import IssueReport from "./Component/IssueMaterialForm/IssueReport";
import IssueMaterialForm from "./Component/IssueMaterialForm/IssueMaterialForm";
import IssueReportContractor from "./Component/IssueMaterialForm/IssueReportContractor";
function App() {
  return (
    <div className="App">
     
       <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/quality-approval" element={<QualityApprovalForm />} />
        <Route path="/stock-variation" element={<StockVariationForm />} />
        <Route path="/opening-quantity" element={<OpeningQuantityForm />} />
        <Route path="/opening-add" element={<OpeningAddForm />} />
        <Route path="/mrn-list" element={<MRNListForm />} /> 
        <Route path="/change-password" element={<ChangePasswordForm/>}/>
        <Route path="/issue-report" element={<IssueReport/>}/>
        <Route path="/issue-material" element={<IssueMaterialForm />} />
        <Route path="/issue-material-contractor" element={<IssueMaterialContractor/>}/>
        <Route path="/issue-report-contractor" element={<IssueReportContractor/>}/>
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
