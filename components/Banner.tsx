import { motion } from "framer-motion";
import { Link } from "react-scroll";
import AnimatedJob from "./AnimatedJob";

function scrollToElement({ id }: { id: string }) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
const Banner = () => {
    return (
        <section
            id="home"
            className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
        >
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg font-titleFont tracking-wide text-textGreen"
            >
                Hi, my name is
            </motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl lgl:text-6xl text-white font-titleFont font-semibold flex flex-col"
            >
                Deepanshu Kumar Singh
                <span className="text-textDark mt-2 lgl:mt-4">
                    <AnimatedJob />
                </span>
            </motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-base md:max-w-[700px] text-textDark font-medium"
            >
                I am a Digital Marketer with 3+ years of experience,
                specializing in CRM systems and Adobe Suite. I have a diverse
                background in social media marketing and creative strategies. My
                focus is on driving brand growth  through
                impactful campaigns.{" "}
            </motion.p>
            <div>
                <motion.button
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
                    onClick={() => scrollToElement({ id: "project" })}
                >
                    Check out my Projects!
                </motion.button>
            </div>
        </section>
    );
};

export default Banner;
