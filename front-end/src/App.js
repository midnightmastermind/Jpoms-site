import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux";
import store from "./store";
import jplogo from "./jplogo.png"
import LandingLinksPage from './components/LandingLinksPage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage';
import InterestsPage from './components/InterestsPage'
import HistoryPage from './components/HistoryPage';
import CatsPage from './components/CatsPage';
import ProjectZenoPage from './components/ProjectZenoPage';
import JessicaPage from './components/JessicaPage';
import SocialPage from './components/SocialPage';
import ErrorPage from './components/ErrorPage';
import LoginPage from './components/LoginPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import Particles from "react-tsparticles";

const App = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Provider store={store}>
      <div className="App">
        <div style={{backgroundColor: "#333"}}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            background: {
              color: "rgb(34,34,34,.85)"
            },
            backgroundMode: {
              enable: true
            },
            particles: {
              color: {
                value: ["#f67e7d", "#843b62", "#621940"]
              },
              links: {
                color: "#ffb997",
                enable: true
              },
              move: {
                enable: true,
                speed: 6
              },
              size: {
                value: 5,
                random: {
                  enable: true,
                  minimumValue: 1
                },
                animation: {
                  enable: true,
                  speed: 2.5,
                  minimumValue: 1
                }
              },
              opacity: {
                value: 0.8,
                random: {
                  enable: true,
                  minimumValue: 0.4
                }
              }
            }
          }}
            />
          </div>
        <div className="App-pages">
          <Routes>
             {/*<Route path="/about" component={ AboutPage } />
             <Route path="/blog" component={ BlogPage } />
             <Route path="/services" component={ ServicesPage } />
             <Route path="/history" component={ HistoryPage } />
             <Route path="/interests" component={ InterestsPage } />
             <Route path="/cats" component={ CatsPage } />
             <Route path="/projectzeno" component={ ProjectZenoPage } />
             <Route path="/jessica" component={ JessicaPage } />
             <Route path="/social" component={ SocialPage } />*/}

             <Route path="/" element={<LandingLinksPage />} />
             <Route path="/history" element={ <HistoryPage />} />
             <Route path="/error" element={ <ErrorPage />} />
             <Route path="/login" element={ <LoginPage />} />
             <Route path="*" element={ <ErrorPage /> } />
          </Routes>
        </div>
        <img src={jplogo} className="App-logo" alt="logo" />
        <div className="divider"></div>
        <div className="footer">jpoms.com | creater: Josh Pomerenke</div>
      </div>
    </Provider>
  );
};

export default App;
