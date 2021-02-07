import React from 'react';
import './assets/styles.sass';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Description from './components/Description';
import About from './components/About';

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
                  <h1 className="title is-size-4-mobile">JJUG CCC 2021 Spring</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
          <div className='container'>
              <div className='section'>
                  <div className='columns'>
                      <div className='column is-10 is-offset-1'>
                          <div className='content'>
                              <h3 className='has-text-weight-semibold is-size-3 is-size-4-mobile'>開催概要</h3>
                              <Description />
                              <h3 className='has-text-weight-semibold is-size-3 is-size-4-mobile'>JJUGについて</h3>
                              <About />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
