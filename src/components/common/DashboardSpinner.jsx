import React from 'react';

const DashboardSpinner = () => {
  return (
    <div className="dashboard__spinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardSpinner;