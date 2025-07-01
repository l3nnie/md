import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">MedEdu AI</h1>
        <p className="header-subtitle">Gemini-Powered Medical Learning</p>
        <div className="header-badge">
          <span>For Medical Students</span>
        </div>
      </div>
    </header>
  );
};

export default Header;