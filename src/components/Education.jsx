import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';
import { FaSadCry } from 'react-icons/fa';

const educationData = [
    {
        id: 1,
        institution: "LNCT Group of Colleges",
        degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science (AIDS)",
        details: "CGPA: 7.8",
        year: "2023 – 2027",
        isExam: false
    },
    {
        id: 2,
        institution: "JEE Mains",
        degree: "",
        details: "Percentile: 93%ile",
        year: "2023", // Inferred year for sorting purposes
        isExam: false
    },
    {
        id: 3,
        institution: "Bhagwand Shree Chand Public School",
        degree: "Senior Secondary (12th), PCM",
        details: "Board: MP Board (India) | Percentage: 78%",
        year: "2022",
        isExam: false
    },
    {
        id: 4,
        institution: "Gyan Ganga Public School",
        degree: "High School (10th)",
        details: "Board: CBSE | Percentage: 76%",
        year: "2020",
        isExam: false
    }
];

const Education = () => {
    return (
        <div className="education-section section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">My Journey</span>
                    <h2 className="title">Education</h2>
                </motion.div>

                <div className="education-list">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="education-row"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="edu-content">
                                <h3 className="edu-institution">{item.institution}</h3>
                                <h4 className={`edu-degree ${item.institution === 'JEE Mains' ? 'text-blue' : ''}`}>{item.degree}</h4>
                                {item.details && <p className="edu-details">{item.details}</p>}
                            </div>
                            <div className="edu-year">
                                {item.year}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
