import React from "react";

import "./Header.Footer.styles.scss";

export const Header = () => (
  <header>
    <div className='container header-container'>
      <span className='logo'>LOGO</span>
      <ul className='link-list'>
        <li>
          <a href='#'>HOME</a>
        </li>
      </ul>
    </div>
  </header>
);
