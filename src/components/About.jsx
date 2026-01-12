import React from 'react';
import { motion } from 'framer-motion';
import { BsCodeSlash, BsCpu } from 'react-icons/bs';
import { FaGraduationCap, FaPalette } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <div className="about-section section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Who I Am</span>
                    <h2 className="title">About Me</h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        {/* Section 1: Intro */}
                        <motion.div className="about-item" variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                            <div className="about-icon icon-dev">
                                <BsCodeSlash />
                            </div>
                            <div className="about-text-content">
                                <p>
                                    I am a <strong>Full Stack Developer</strong> and <strong>AI/ML-oriented engineering student</strong> pursuing B.Tech in <span className="highlight-text">Artificial Intelligence & Data Science</span> (2027) at LNCT College, with experience building end-to-end applications across backend and frontend. Skilled in designing <strong>scalable APIs</strong>, managing databases using <strong>MongoDB</strong> and aggregation pipelines, and developing responsive, user-friendly interfaces using <strong>React</strong>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Section 2: ML Experience */}
                        <motion.div className="about-item" variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                            <div className="about-icon icon-ml">
                                <BsCpu />
                            </div>
                            <div className="about-text-content">
                                <p>
                                    <strong>Full Stack project experience</strong> involving frontend and backend development, along with integrating <strong>machine learning models</strong> to generate summaries and structured reports. Worked on practical projects including a real-time sign language conversion system, applying basic machine learning concepts within functional applications.
                                </p>
                            </div>
                        </motion.div>

                        {/* Section 3: Academic Foundation */}
                        <motion.div className="about-item" variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                            <div className="about-icon icon-edu">
                                <FaGraduationCap />
                            </div>
                            <div className="about-text-content">
                                <p>
                                    My <strong>academic foundation</strong>, supported by hands-on project experience, has developed a strong understanding of <strong>Java, Data Structures and Algorithms</strong>, DBMS, backend systems, and modern frontend architectures. I am interested in applying these concepts to analyze application data and produce structured outputs within reliable software systems.
                                </p>
                            </div>
                        </motion.div>

                        {/* Section 4: Creative */}
                        <motion.div className="about-item" variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                            <div className="about-icon icon-creative">
                                <FaPalette />
                            </div>
                            <div className="about-text-content">
                                <p>
                                    Alongside my academic work, I enjoy exploring <strong>visual and creative tasks</strong> such as <strong>logo design</strong> and <strong>UI prototyping</strong>, allowing me to combine technical thinking with visual creativity while working on digital products.
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
