import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">MedScena</h1>        
        <div className="header-badge">
          <span>For Medical Students</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
