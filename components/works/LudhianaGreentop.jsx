import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

import React from "react";

const LudhianaGreentop = () => {
    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Creative Content Designer
                <span className="text-textGreen tracking-wide">@Delhi</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                Jan 2021 - Jul 2022
            </p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Created 20+ videos for social media using Adobe Premiere Pro
                    and content provided by the ground team.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Provided 10+ leads through market research and cold calling
                    that converted into sales to the Finance team for funds.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Increased digital campaign ROI by 30% through optimized
                    strategies.
                </li>
            </ul>
        </motion.div>
    );
};

export default LudhianaGreentop;
