import React from 'react';
import './assets/styles.sass';
import jjug_logo from './static/icons/jjug_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <img className="navbar-item" src={jjug_logo} alt="jjug logo" />
        </div>
      </nav>
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h1 className="title">JJUG CCC 2021 Spring</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
