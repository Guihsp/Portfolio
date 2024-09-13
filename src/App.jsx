import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header.jsx';

import { Home } from './pages/Home/Home.jsx';
import { About } from './pages/About/About.jsx';
import { Skills } from './pages/Skills/Skills.jsx';
import { Projects } from './pages/Projects/Projects.jsx';
import { Contact } from './pages/Contact/Contact.jsx';

export default function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}


