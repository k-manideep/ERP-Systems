// POList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import "./POList.css";

const POList = () => {
  const [pos, setPos] = useState([]);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/po", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setPos(res.data));
  }, [token]);

  const handleDownloadPDF = (poId) => {
    window.open(
      `http://127.0.0.1:5000/api/po/${poId}/pdf?token=${token}`,
      "_blank"
    );
  };

  return (
    <>
      <Header />
      <div className="polist-container">
        <div className="polist-header">
          <h2>Purchase Orders</h2>
          <div className="polist-buttons">
            <button className="view-button">View</button>
            <button className="close-button">Close</button>
          </div>
        </div>
        <table className="polist-table">
          <thead>
            <tr>
              <th>PO Number</th>
              <th>Indent</th>
              <th>Vendor</th>
              <th>Total</th>
              <th>Status</th>
              <th>Order Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pos.map((po) => (
              <tr key={po.id}>
                <td>{po.po_number}</td>
                <td>{po.indent_id}</td>
                <td>{po.vendor_name}</td>
                <td>{po.total_amount}</td>
                <td>{po.status}</td>
                <td>{po.order_date}</td>
                <td>
                  <button onClick={() => handleDownloadPDF(po.id)}>Download PDF</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="print-button-container">
          <button className="print-button">Print</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default POList;
