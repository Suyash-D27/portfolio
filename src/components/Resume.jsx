import React from 'react';
import { FaDownload, FaPrint, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="resume-page section-padding">
            <div className="container">
                <div className="resume-actions">
                    <button onClick={handlePrint} className="btn-primary">
                        <FaPrint /> Print / Save as PDF
                    </button>
                </div>

                <div className="resume-paper single-column" id="resume-content">
                    {/* Header */}
                    <header className="resume-header centered">
                        <h1>SUYASH DAHARWAL</h1>
                        <p className="resume-role">Full Stack Developer | AI/ML-Oriented Engineering Student</p>

                        <div className="resume-contact-info">
                            <span><FaPhone /> +91 7389802319</span>
                            <span><FaEnvelope /> suyashdaharwal2005@gmail.com</span>
                            <span><FaLinkedin /> linkedin.com/in/suyash-daharwal</span>
                            <span><FaGithub /> github.com/Suyash-D27</span>
                        </div>
                    </header>

                    <div className="resume-body">
                        {/* Skills Section */}
                        <section className="resume-section">
                            <h2 className="section-title">SKILLS</h2>
                            <div className="resume-content">
                                <ul className="skills-list">
                                    <li><strong>Programming Languages:</strong> C++, Java (OOP), Python, JavaScript, SQL</li>
                                    <li><strong>Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS</li>
                                    <li><strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT Authentication</li>
                                    <li><strong>Databases:</strong> MongoDB (Aggregation Pipelines), Mongoose</li>
                                    <li><strong>AIML:</strong>Pandas,NumPy,Matplotlib,Seaborn,Scikit learn,Machine learning</li>
                                    <li><strong>Tools & Platforms:</strong> Git, GitHub, Postman, Figma, VS Code, intellij IDEA</li>
                                </ul>
                            </div>
                        </section>

                        {/* Experience Section */}
                        <section className="resume-section">
                            <h2 className="section-title">EXPERIENCE</h2>

                            <div className="resume-item">
                                <div className="item-header">
                                    <h3>Role-Based Hospital Management System (MERN)</h3>
                                    <span>2025</span>
                                </div>
                                <ul className="resume-bullets">
                                    <li>Developed a secure role-based access control (RBAC) system supporting <strong>3 user roles</strong>: Admin, Doctor, and Patient.</li>
                                    <li>Implemented <strong>JWT-based authentication and authorization</strong> to ensure secure access.</li>
                                    <li>Designed and optimized <strong>complex MongoDB aggregation pipelines</strong> for analytics and reporting.</li>
                                    <li>Built responsive and user-friendly frontend interfaces using <strong>React.js</strong>.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="item-header">
                                    <h3>Hotel, Monastery & Event Booking System | Full Stack Project</h3>
                                    <span></span>
                                </div>
                                <ul className="resume-bullets">
                                    <li>Designed and developed a full-stack booking platform for hotels, monasteries, and events.</li>
                                    <li>Implemented <strong>user authentication</strong>, booking workflows, and automated <strong>ticket generation</strong> after successful bookings.</li>
                                    <li>Focused on scalable backend architecture and clean API design.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="item-header">
                                    <h3>VideoTube Backend | Node.js & MongoDB</h3>
                                    <span>Oct 2025</span>
                                </div>
                                <ul className="resume-bullets">
                                    <li>Built a scalable backend system for a video-sharing platform supporting <strong>video upload and processing</strong>.</li>
                                    <li>Optimized database performance using <strong>Mongoose aggregation pipelines</strong>.</li>
                                    <li>Designed RESTful APIs with a focus on maintainability and scalability.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Education Section */}
                        <section className="resume-section">
                            <h2 className="section-title">EDUCATION</h2>
                            <div className="resume-item">
                                <div className="item-header">
                                    <h3>B.Tech in Artificial Intelligence & Data Science</h3>
                                    <span>2023 – 2027</span>
                                </div>
                                <div>LNCT Group of Colleges | CGPA: 7.8</div>
                            </div>
                        </section>

                        {/* Achievements Section */}
                        <section className="resume-section">
                            <h2 className="section-title">ACHIEVEMENTS & CERTIFICATIONS</h2>
                            <ul className="resume-bullets">
                                <li><strong>Smart India Hackathon (SIH) 2025 Participant</strong> – Developed a Hotel & Event Booking System.</li>
                                <li>Solved <strong>200+ Data Structures & Algorithms problems</strong> on LeetCode and GeeksforGeeks.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
