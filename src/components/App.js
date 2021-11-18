import '../styles/App.css';
import React from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

      // <Header />
