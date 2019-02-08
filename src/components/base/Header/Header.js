import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
          <NavLink  to="/toys" activeClassName="active">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/development" activeClassName="active">Development</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
