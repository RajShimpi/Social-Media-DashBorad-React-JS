import React from 'react';
import '../Styles/header.css';
import './Switch.js';

export default function Header({children}) {
  return (
      <header className="header">
        <div className="wrapper">
            <div className="header-grid">
                <div>
                    <h1>Social Media DashBoard | Raj Shimpi</h1>
                <p className="header-total">Total Followers: 1597</p>
                </div>
                {children}
            </div>
        </div>
      </header>
  )
}
