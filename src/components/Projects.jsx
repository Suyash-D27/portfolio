import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaKey, FaUserShield, FaFilter, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiOpencv, SiMongoose } from 'react-icons/si';
import './Projects.css';


const projects = [
    {
        title: "Role-Based Hospital Management System",
        type: "Advanced Full Stack Project",
        status: "In Progress",
        date: "2026 – Present",
        image: "src/assets/Screenshot 2026-01-11 140741.png",
        desc: [
            "Role-based system (Admin, Doctor, Receptionist, Patient)",
            "Backend built using MongoDB aggregation pipelines",
            "Secure authentication and authorization",
            "Frontend UI and full client-side application included",
            "Future ML integration planned: Generate medical summaries & assist in report analysis"
        ],
        tech: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT & RBAC", "ML (Planned)"],
        links: { github: "https://github.com/Suyash-D27/Hosptialmanagment/tree/suyash" }
    },
    {
        title: "Real-Time Sign Language Recognition System",
        type: "Machine Learning Project",
        status: "Completed",
        date: "December 2025",
        image: "src/assets/Gemini_Generated_Image_9qu4zv9qu4zv9qu4.png",
        desc: [
            "Real-time sign language recognition",
            "Live camera input and ML model integration"
        ],
        tech: ["Python", "OpenCV", "Machine Learning"],
        links: { github: "https://github.com/Suyash-D27/realTimeSignLanguageTranslator" }
    },
    {
        title: "VideoTube Backend System",
        type: "Advanced Backend Project",
        status: "Completed",
        date: "October 2025",
        image: "src/assets/Gemini_Generated_Image_89hvb889hvb889hv (1).png",
        desc: [
            "Backend system inspired by video platforms",
            "Advanced MongoDB aggregation pipelines",
            "Clean controller and scalable architecture"
        ],
        tech: ["Node.js", "Express.js", "MongoDB", "Mongoose Aggregation"],
        links: { github: "https://github.com/Suyash-D27/VideoTubeBackend" }
    },
    {
        title: "Hotel, Monastery & Event Booking System",
        type: "Full Stack Project",
        status: "Completed",
        date: "August 2025 (SIH 2025)",
        image: "src/assets/Gemini_Generated_Image_61cbg61cbg61cbg6.png",
        desc: [
            "Booking system for hotels, monasteries, and events",
            "Ticket generation after booking",
            "User authentication"
        ],
        tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
        links: { github: "https://github.com/Suyash-D27/Bookingwebsite" }
    }
];

const getTechIcon = (techName) => {
    if (techName.includes("React")) return <FaReact />;
    if (techName.includes("Node")) return <FaNodeJs />;
    if (techName.includes("Express")) return <SiExpress />;
    if (techName.includes("MongoDB")) return <SiMongodb />;
    if (techName.includes("Mongoose")) return <SiMongoose />;
    if (techName.includes("Aggregation")) return <FaFilter />;
    if (techName.includes("JWT")) return <FaKey />;
    if (techName.includes("RBAC")) return <FaUserShield />;
    if (techName.includes("Python")) return <FaPython />;
    if (techName.includes("OpenCV")) return <SiOpencv />;
    if (techName.includes("Machine Learning") || techName.includes("ML")) return <FaBrain />;
    return null;
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="project-card-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="project-card">
                {/* Image Section */}
                <div className="project-image-wrapper">
                    {project.image ? (
                        <>
                            <img src={project.image} alt={project.title} className="project-img" />
                            <div className="project-image-overlay">
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="github-overlay-link" title="View Code">
                                    <FaGithub />
                                </a>
                            </div>
                        </>
                    ) : (
                        <div className="project-img-placeholder">
                            <span>Image Coming Soon</span>
                        </div>
                    )}
                </div>

                <div className="project-details-content">
                    <div className="project-meta-header">
                        <span className="project-date">{project.date}</span>
                        <span className={`project-status ${project.status === 'In Progress' ? 'status-progress' : 'status-completed'}`}>
                            {project.status}
                        </span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-type">{project.type}</p>

                    <ul className="project-desc-list">
                        {project.desc.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <div className="tech-stack-container">
                        {project.tech.map(t => (
                            <span key={t} className="tech-tag">
                                <span className="tech-icon">{getTechIcon(t)}</span>
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="project-links">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="icon-link"><FaExternalLinkAlt /></a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="projects-section section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">My Work</span>
                    <h2 className="title">Featured Projects</h2>
                </motion.div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
