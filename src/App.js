import NavbarSection from "./components/NavbarSection"
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <div className="portfolio-website">
      <NavbarSection/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
