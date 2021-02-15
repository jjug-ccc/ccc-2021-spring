import React from 'react';
import '../../assets/styles.scss';
import jjug_logo from '../../static/icons/jjug_logo.png';

const NavBar : React.FC = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <img className="navbar-item" src={jjug_logo} alt="jjug logo"/>
    </div>
  </nav>
);

export default NavBar;
