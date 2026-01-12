import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFigma, FaExternalLinkAlt, FaImage } from 'react-icons/fa';
import protoImg from '../assets/WhatsApp Image 2026-01-11 at 1.34.19 PM.jpeg';
import logoImg from '../assets/WhatsApp Image 2025-09-24 at 22.38.35_9fed0360.jpg';
import coverImg from '../assets/cover.jpg';
import pdfLink from '../assets/logo PDF.pdf';
import './SideWorks.css';

const sideWorks = [
    {
        title: "Offline Mobile App Prototype",
        desc: "Designed complete user flow in Figma.",
        type: "Figma Design",
        links: { figma: "https://www.figma.com/design/TcmLbz2buUC7N8NeRpMrtO/final?node-id=108-238&t=hzr93OmnshR9AnMN-1", external: "https://www.figma.com/proto/TcmLbz2buUC7N8NeRpMrtO/final?page-id=108%3A238&node-id=108-467&p=f&viewport=110%2C369%2C0.14&t=CXSj5wB2SBjJCDnG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=108%3A467", image: protoImg }
    },
    {
        title: "Logo Design Environment",
        desc: "Created during SIH ",
        type: "Graphic Design",
        links: { image: logoImg, external: pdfLink },
        hideImageIcon: true
    },
    {
        title: "JS Small Projects",
        desc: "Mini-games & utilities in Vanilla JS.",
        links: { github: "https://github.com/Suyash-D27/ONLY-JS-projects", image: coverImg },
        hideImageIcon: true
    }
];

const SideWorks = () => {
    return (
        <div className="sideworks-section section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Creative Outlet</span>
                    <h2 className="title">Side Projects</h2>
                </motion.div>

                <div className="sideworks-gallery">
                    {sideWorks.map((work, index) => (
                        <motion.div
                            key={index}
                            className="work-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="work-placeholder">
                                {work.links.image ? (
                                    <>
                                        <img src={work.links.image} alt={work.title} className="work-image" />
                                        <div className="work-overlay">
                                            <a
                                                href={work.links.external || work.links.figma || work.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="view-proto-btn"
                                            >
                                                {work.title === "JS Small Projects" ? "View Code" : "View Design"}
                                            </a>
                                        </div>
                                    </>
                                ) : (
                                    <span>{work.type}</span>
                                )}
                            </div>
                            <div className="work-info">
                                <h3>{work.title}</h3>
                                <p>{work.desc}</p>

                                <div className="work-links">
                                    {work.links.github && (
                                        <a href={work.links.github} target="_blank" rel="noopener noreferrer" title="View Source">
                                            <FaGithub />
                                        </a>
                                    )}
                                    {work.links.figma && (
                                        <a href={work.links.figma} target="_blank" rel="noopener noreferrer" title="View Design">
                                            <FaFigma />
                                        </a>
                                    )}
                                    {work.links.image && !work.hideImageIcon && (
                                        <a href={work.links.image} target="_blank" rel="noopener noreferrer" title="View Image">
                                            <FaImage />
                                        </a>
                                    )}
                                    {work.links.external && (
                                        <a href={work.links.external} target="_blank" rel="noopener noreferrer" title="View Project">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideWorks;
