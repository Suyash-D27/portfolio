import { FaFilePdf } from 'react-icons/fa';
import './Resume.css';
import resumeImg from '../assets/RESUME_IMAGE.jpg';
import resumePdf from '../assets/RESUME_SUYASH.pdf';

const Resume = () => {
    return (
        <div className="resume-img-container">
            <img
                src={resumeImg}
                alt="Suyash Daharwal Resume"
                className="resume-image"
            />
            <div className="resume-actions-nav">
                <a href={resumePdf} target="_blank" rel="noreferrer" className="view-pdf-btn">
                    <FaFilePdf /> View PDF Resume
                </a>
            </div>
        </div>
    );
};

export default Resume;
