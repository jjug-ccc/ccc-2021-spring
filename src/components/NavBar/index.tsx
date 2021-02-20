import React from 'react';
import '../../assets/styles.scss';
import jjug_logo from '../../static/icons/jjug_logo.png';
import { LINK } from '../../constant';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const NavBar : React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img className="navbar-item" src={jjug_logo} alt="jjug logo"/>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-danger" target="_blank" rel="noopener noreferrer" href={LINK.register}>
                <strong>{t("nav.registerBtn")}</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
