import React from 'react';
import { Outlet } from 'react-router-dom';

const MyAccountLayout = () => {
  return (
    <div>
      <h2>My Account</h2>
      <Outlet />
    </div>
  );
};

export default MyAccountLayout;