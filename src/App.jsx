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
import StockInHandForm from "./Component/StoreReports/StockInHandForm/StockInHandForm";
import StockValuationForm from "./Component/StoreReports/StockValuationForm/StockValuationForm";
import ConstructionStockIssueReport from "./Component/StoreReports/ConstructionStockIssueReport/ConstructionStockIssueReport";
import StockTransferRegister from "./Component/StoreReports/StockTransferRegister/StockTransferRegister";
import StockTransitRegister from "./Component/StoreReports/StockTransitRegister/StockTransitRegister";
import ItemStockGroup from "./Component/StoreReports/ItemStockGroup/ItemStockGroup";
import PendingItemStock from "./Component/StoreReports/PendingItemStock/PendingItemStock";
import CompanyStock from "./Component/StoreReports/CompanyStock/CompanyStock";
import ItemStockReport from "./Component/StoreReports/ItemStockReport/ItemStockReport";
import MaterialStockWages from "./Component/StoreReports/MaterialStockWages/MaterialStockWages";
import RejectedStock from "./Component/StoreReports/RejectedStock/RejectedStock";
import ProcessItemStockForm from "./Component/StoreReports/ProcessItemStock/ProcessItemStockForm";
import ProjectMaterialForm from "./Component/StoreReports/ProjectMaterial/ProjectMaterialForm";
import ContractorStockForm from "./Component/StoreReports/ContractorStock/ContractorStockForm";
import ReportBuilderForm from "./Component/StoreReports/ReportBuilder/ReportBuilderForm";
import ContractorClosingStock from "./Component/StoreReports/ContractorClosingStock/ContractorClosingStock";
import ContractorWastageReport from "./Component/StoreReports/ContractorWastageReport/ContractorWastageReport";
import LocationIssueReport from "./Component/StoreReports/LocationIssueReport/LocationIssueReport";
import ContractorOutMaterialForm from "./Component/Store/ContractorOutMaterial/ContractorOutMaterialForm";

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
        <Route path="/stock-in-hand" element={<StockInHandForm/>}/>
        <Route path="/stock-valuation" element={<StockValuationForm/>}/>
        <Route path="/construction-Stock-issue" element={<ConstructionStockIssueReport/>}/>
        <Route path="/stock-transfer-register" element={<StockTransferRegister/>}/>
        <Route path="/stock-transit-register" element={<StockTransitRegister/>}/>
        <Route path="/item-stock-group" element={<ItemStockGroup/>}/>
        <Route path="/pending-item-stock" element={<PendingItemStock/>}/>
        <Route path="/company-stock" element={<CompanyStock/>}/>
        <Route path="/item-stock-report" element={<ItemStockReport/>}/>
        <Route path="/material-stock-wages" element={<MaterialStockWages/>}/>
        <Route path="/rejected-stock" element={<RejectedStock/>}/>
        <Route path="/process-item-stock" element={<ProcessItemStockForm/>}/>
        <Route path="/project-material" element={<ProjectMaterialForm/>}/>
        <Route path="/contractor-stock" element={<ContractorStockForm/>}/>
        <Route path="/report-builder" element={<ReportBuilderForm/>}/>
        <Route path="/Contractor-closing-stock" element={<ContractorClosingStock/>}/>
        <Route path="/Contractor-wastage-report" element={<ContractorWastageReport/>}/>
        <Route path="/local-issue-report" element={<LocationIssueReport/>}/>
        <Route path="/contractor-out-material" element={<ContractorOutMaterialForm/>}/>
      
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
