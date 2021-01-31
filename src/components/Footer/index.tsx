import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../../assets/styles.sass';

const Footer = () => (
    <footer className="footer">
        <div className="columns is-desktop">
            <div className="column content has-text-left-desktop">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="column content has-text-right-desktop">
                <p>Copyright © 2007-2021 JJUG - All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
