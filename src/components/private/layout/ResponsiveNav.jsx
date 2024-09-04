import React, { useState } from 'react';

export const ResponsiveNav = ({ toggleMenuVisibility }) => {
  return (
    <div className="responsive-nav">
      <a href="./" className="logo-ctnr"><img src="/img/public/header/logoFullColor.png" alt=""/></a>
      <i className="fas fa-bars" id="menu-btn" onClick={toggleMenuVisibility}></i>
    </div>
  );
};