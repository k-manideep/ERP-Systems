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
      
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
