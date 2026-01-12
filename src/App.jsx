import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SideWorks from './components/SideWorks';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/sideworks" element={<SideWorks />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <footer style={{ textAlign: 'center', padding: '20px', color: '#666', fontSize: '0.9rem' }}>
                    <p>© {new Date().getFullYear()} Suyash Daharwal. Built with React & Framer Motion.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
