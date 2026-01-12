import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the background glow
    const springConfig = { damping: 30, stiffness: 200 };
    const glowX = useSpring(mouseX, springConfig);
    const glowY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Center the 600px circle (subtract 300) and account for scroll since we use absolute positioning
            mouseX.set(e.clientX - 300);
            mouseY.set(e.clientY + window.scrollY - 300);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="hero-section">
            {/* Background Moving Glow */}
            <motion.div
                className="hero-glow-follower"
                style={{
                    x: glowX,
                    y: glowY,
                }}
            />

            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    <motion.p
                        className="greeting"
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                        Hi, I am
                    </motion.p>

                    <motion.h1
                        className="name gradient-text"
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                        Suyash Daharwal
                    </motion.h1>

                    <motion.h2
                        className="role"
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                        Full Stack Developer
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                        I build end-to-end applications that combine scalable backend systems, responsive frontend interfaces, and machine-learning-driven features for structured insights. My project experience includes developing an Advanced Health Management System, supported by a strong foundation in Java, DSA, DBMS, and modern application architecture, along with an interest in UI and product design.
                    </motion.p>

                    <motion.div
                        className="cta-buttons"
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                        <Link to="/projects" className="btn-primary">
                            View Projects
                        </Link>
                        <Link to="/contact" className="btn-secondary">
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Static ambient glow for depth */}
            <div className="bg-glow-static"></div>
        </div>
    );
};

export default Hero;
