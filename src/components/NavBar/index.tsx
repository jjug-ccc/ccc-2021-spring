import React from 'react';
import '../../assets/styles.sass';
import jjug_logo from '../../static/icons/jjug_logo.png';

const NavBar = () => (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <img className="navbar-item" src={jjug_logo} alt="jjug logo"/>
        </div>
    </nav>
);

export default NavBar;
