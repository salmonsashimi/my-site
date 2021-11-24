import '../styles/App.css';
import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import 'normalize.css/normalize.css';


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