import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <h3 className="dashboardHeading">Dashboard</h3>
          <div className="headerStatus row">
            <div className="col-md-3">
              <div className="d-flex align-items-center justify-content-center singleStatus pink">
                  <div>
                  <h4>100</h4>
                  </div>
                  <div>
                  <p>Painding Appointments</p>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="singleStatus blue"></div>
            </div>
            <div className="col-md-3">
              <div className="singleStatus green"></div>
            </div>
            <div className="col-md-3">
              <div className="singleStatus yellow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
