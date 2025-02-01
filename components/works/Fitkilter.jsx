import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

import React from "react";

const Fitkilter = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Social Media and PR Manager
        <span className="text-textGreen tracking-wide">@Delhi</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                Dec 2021 - Jul 2022
            </p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Acquired 10+ clients and generated 50+ leads through
                    strategic outreach and marketing campaigns.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Created over 50 posts including both pictures and videos,
                    boosted the brand&apos;s visibility by multiple of times.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Gathered and analysed customer feedback through videos,
                    emails, and social media interactions to improve service
                    offerings.
                </li>
            </ul>
        </motion.div>
    );
};

export default Fitkilter;
