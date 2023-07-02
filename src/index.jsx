import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/style.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



const App = () => {
  return (
    <>
    <div className="top"> 
      <Nav />
      <Header title="Kodérka" subtitle="Veronika Bosáková" />
    </div>
    <main>
      <About />
      <Skills />
      <Portfolio />
      <Contact 
        email="veronikabosakova@gmail.com" 
        linkedin="https://www.linkedin.com/in/veronika-bos%C3%A1kov%C3%A1-248b0164/" 
        github="https://github.com/Veronique-in-chains"
      />
    </main>
    <footer className="footer">&copy; Veronika Bosáková, 2023</footer>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
