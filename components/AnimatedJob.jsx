"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const texts = ["Marketing Strategist", "Content Creator", "Graphic Designer"];

const AnimatedJob = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const speed = isDeleting ? 50 : 100;
        const currentText = texts[textIndex];
        if (!isDeleting && displayText === currentText) {
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && displayText == "") {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        const timeout = setTimeout(() => {
            setDisplayText((prev) =>
              isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
            );
          }, speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex]);

    return (
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
        >
            {displayText}
            <span className="animate-blink">|</span>
        </motion.h1>
    );
};

export default AnimatedJob;
