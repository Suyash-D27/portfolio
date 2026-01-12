import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Me', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Side Projects', to: '/sideworks' },
    { name: 'Education', to: '/education' },
    { name: 'Contact', to: '/contact' },
    { name: 'Resume', to: '/resume' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container nav-content">
                <div className="logo">Suyash</div>
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `${isActive ? "active-link" : ""} ${link.name === 'Resume' ? "resume-btn" : ""}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
