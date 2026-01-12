import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import './Stats.css';

const StatItem = ({ value, label, suffix = '+' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return (
        <div className="stat-item">
            <h3 ref={ref} className="stat-number">0{suffix}</h3>
            <p className="stat-label">{label}</p>
        </div>
    );
};

const Stats = () => {
    return (
        <div className="stats-section">
            <div className="container stats-container">
                <StatItem value={5} label="Projects Built" />
                <StatItem value={200} label="DSA Problems Solved" />
                {/* NO CGPA HERE as per instructions */}
            </div>
        </div>
    );
};

export default Stats;
