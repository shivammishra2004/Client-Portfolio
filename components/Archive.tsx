import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {

    return (
        <div className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">
                    Other Related Projects
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
                <ArchiveCard
                    title="How Micro-Influencers Help New Brands To Create A Brand Perspective"
                    topic="Dessertation"
                    des="The paper explores how micro-influencers, through self-branding and credibility, better shape positive brand perception for new brands on social media compared to celebrity influencers.
"
                    link="/assets/thesis.pdf"
                />
                <ArchiveCard
                    title="A Deep Dive into the Internet of Things"
                    topic="Documentary"
                    des="This Documentary explores the diverse sectors of IoT, its impact on daily life, and the future possibilities shaping the industry. It highlights IoT's growing role in innovation and connectivity."
                    link="https://drive.google.com/drive/folders/1-pmez8fZxNbNHeeutaHGqo7LK2y-SNS_"
                />
                {/* <ArchiveCard
                    title="Amazon Clone with login, cart-option and payment intrigation."
                    topic=""
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                    link="https://amazonclone.reactbd.com/"
                /> */}
            </div>
        </div>
    );
};

export default Archive;
