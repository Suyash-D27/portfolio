import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section section-padding">
            <div className="container center-text">
                <motion.h2
                    className="title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    className="contact-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Currently seeking internship opportunities and open to new challenges. Happy to connect and discuss ideas, projects, or opportunities.
                </motion.p>

                <motion.div
                    className="contact-socials"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a href="mailto:suyashdaharwal2005@gmail.com" className="social-link" title="Email Me">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.linkedin.com/in/suyash-daharwal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/suyashll0_0ll?igsh=bDR0eXk3OW01NnJs&utm_source=qr" className="social-link" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/Suyash-D27" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a href="mailto:suyashdaharwal2005@gmail.com" className="btn-primary">Say Hello</a>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
