import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import config from 'helpers/config';
import './Header.scss';

const Header = ({ isSubpage }) => {
  return (
    <header id="header">
      {isSubpage ? (
        <Link to="/development" id="back">
          <i className="fas fa-angle-left" />
          Back to list
        </Link>
      ) : (
        <a href="http://www.codejs.co.kr" id="back">
          <span>←</span>Go to blog
        </a>
      )}

      <ul>
        {config.isDev ? (
          <li>
            <NavLink to="/toy" activeClassName="active">
              Toy
            </NavLink>
          </li>
        ) : (
          ''
        )}
        <li>
          <NavLink to="/development" activeClassName="active">
            Development
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
