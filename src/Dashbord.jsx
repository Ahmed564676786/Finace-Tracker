import React from "react";

import './App.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card green">
        <h4>Total Balance</h4>
        <h2>$8,450.00</h2>
      </div>

      <div className="card blue">
        <h4>Monthly Income</h4>
        <h2>$4,200.00</h2>
      </div>

      <div className="card red">
        <h4>Monthly Expenses</h4>
        <h2>$2,750.00</h2>
      </div>

      <div className="card purple">
        <h4>Savings</h4>
        <h2>$1,500.00</h2>
      </div>
    </div>
  );
};

export default Dashboard;