import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ isSubpage }) => {
  return (
    <header id="header">
      {
        isSubpage ? (
          <Link to="/development" id="back"><span>←</span>Back to list</Link>
        ) : (
          <a href="http://www.codejs.co.kr" id="back"><span>←</span>Go to blog</a>
        )
      }

      <ul>
        <li>
          <Link to="/toys">Toys</Link>
        </li>
        <li>
          <Link to="/development">Development</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
