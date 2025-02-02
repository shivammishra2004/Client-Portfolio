import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {

    return (
        <div className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">
                    Freelance Projects
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
                <ArchiveCard
                    title="Cyber Security Blog with live comments section"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                    link="https://www.noormohmmad.com/"
                />
                <ArchiveCard
                    title="ReactBD web development company"
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                    link="https://reactbd.com/"
                />
                <ArchiveCard
                    title="Amazon Clone with login, cart-option and payment intrigation."
                    des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                    listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                    link="https://amazonclone.reactbd.com/"
                />
            </div>
        </div>
    );
};

export default Archive;
