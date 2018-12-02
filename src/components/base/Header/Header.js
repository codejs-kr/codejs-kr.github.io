import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <a href="http://www.codejs.co.kr" id="back">← Back to blog</a>

        <ul>
          <li>
            <Link to="/">Development</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vcfccc">NotFound</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
