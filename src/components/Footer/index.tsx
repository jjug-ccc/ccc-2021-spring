import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../../assets/styles.sass';

const Footer = () => (
  <footer className="footer">
    <div className='container'>
      <div className='content'>
        <div className="columns is-desktop">
          <div className="column content has-text-left-desktop">
            <a href="https://www.facebook.com/japanjug/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
            <a href="https://twitter.com/jjug"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
          </div>
          <div className="column content has-text-right-desktop">
            <p>Copyright © 2007-2021 JJUG - All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
