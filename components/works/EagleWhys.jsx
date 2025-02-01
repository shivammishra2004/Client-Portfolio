import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

import React from "react";

const EagleWhys = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Digital Marketing Intern
                <span className="text-textGreen tracking-wide">@London</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                Jun 2023 - Jul 2023
            </p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Created over 100 posts for clients and Eagle Ways to
                    increase engagement during my internship.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Assisted over 50 clients by using social media ads
                    (Instagram and Facebook), managing multiple social media
                    handles, and creating posts and visually appealing ads.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Helped in SEO and website building with backlinks and Google
                    Analytics and gave content for the website.
                </li>
            </ul>
        </motion.div>
    );
};

export default EagleWhys;
