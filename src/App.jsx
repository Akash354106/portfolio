import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Skill from './pages/Skill.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skill />} />
      <Route path="/contactus" element={<ContactUs />} /> 
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
