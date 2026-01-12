import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import Stats from './Stats';
import {
    FaReact, FaNodeJs, FaJava, FaPython, FaDatabase, FaGitAlt,
    FaGithub, FaServer, FaKey, FaUserShield, FaProjectDiagram,
    FaFilter, FaChartBar, FaChartArea, FaPenNib
} from 'react-icons/fa';
import {
    SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3,
    SiPostman, SiFigma, SiPandas, SiNumpy, SiScikitlearn, SiMongoose
} from 'react-icons/si';

const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML", icon: <SiHtml5 /> },
            { name: "CSS", icon: <SiCss3 /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "React.js", icon: <FaReact /> }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "REST APIs", icon: <FaServer /> }
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Mongoose", icon: <SiMongoose /> },
            { name: "Aggregation Pipelines", icon: <FaFilter /> }
        ]
    },
    {
        category: "Programming & CS",
        skills: [
            { name: "Java (OOPs)", icon: <FaJava /> },
            { name: "DSA", icon: <FaProjectDiagram /> },
            { name: "DBMS", icon: <FaDatabase /> }
        ]
    },
    {
        category: "Python & ML",
        skills: [
            { name: "Python", icon: <FaPython /> },
            { name: "Pandas", icon: <SiPandas /> },
            { name: "NumPy", icon: <SiNumpy /> },
            { name: "Matplotlib", icon: <FaChartBar /> },
            { name: "Seaborn", icon: <FaChartArea /> },
            { name: "Scikit-learn", icon: <SiScikitlearn /> }
        ]
    },
    {
        category: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Figma", icon: <SiFigma /> }
        ]
    }
];

const Skills = () => {
    return (
        <div className="skills-section section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">My Arsenal</span>
                    <h2 className="title">Skills</h2>
                </motion.div>

                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <h3>{category.category}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">
                                        <span className="skill-icon">{skill.icon}</span>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
            <Stats />
        </div>
    );
};

export default Skills;
