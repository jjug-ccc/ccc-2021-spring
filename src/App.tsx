import React from 'react';
import './assets/styles.sass';
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
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
