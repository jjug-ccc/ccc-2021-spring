import React from 'react';
import './assets/styles.sass';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Description from './components/Description';
import About from './components/About';
import Coc from './components/Coc';

import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: string) => (i18n.changeLanguage(lng));

  return (
    <div className="App">
      <NavBar/>
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="section">
                  <h1 className="title is-size-4-mobile">JJUG CCC 2021 Spring</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container has-text-right">
        <a className="button has-text-danger-dark is-ghost" onClick={() => changeLanguage('ja')}><b>Ja</b></a>
        <a className="button has-text-danger-dark is-ghost" onClick={() => changeLanguage('en')}><b>En</b></a>
      </div>
      <div className="section">
        <div className="container">
          <div className="block">
            <h3 className="title has-text-weight-semibold is-size-3 is-size-5-mobile">{t("contentTitle.description")}</h3>
            <Description/>
          </div>
          <div className="block">
            <h3 className="title has-text-weight-semibold is-size-3 is-size-5-mobile">{t("contentTitle.aboutJjug")}</h3>
            <About/>
          </div>
          <div className="block">
            <h3 className="title has-text-weight-semibold is-size-3 is-size-5-mobile">{t("contentTitle.coc")}</h3>
            <Coc />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
