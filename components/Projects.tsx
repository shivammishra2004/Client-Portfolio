import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
    return (
        <section
            id="project"
            className="max-w-container mx-auto lgl:px-20 py-24"
        >
            <SectionTitle title="Projects I've Worked On:" titleNo="03" />
            {/* ============ project One Start here ================ */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://nextamazon.reactbd.com/"
                        target="_blank"
                    >
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={amazonImg}
                                alt="amazonImg"
                            />
                            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                        <div>
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                Event Management
                            </h3>
                        </div>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            Managing social media for an Event Management
                            Company was all about creating excitement and
                            connection. We focused on sharing{" "}
                            <span className="text-textGreen">
                                vibrant event highlights
                            </span>
                            ,
                            <span className="text-textGreen">
                                behind-the-scenes glimpses
                            </span>
                            , and
                            <span className="text-textGreen">
                                interactive stories
                            </span>{" "}
                            that truly reflected their brand&apos;s energy. By
                            staying consistent and engaging with followers, we
                            built a{" "}
                            <span className="text-textGreen">
                                strong online presence
                            </span>
                            . The result? A{" "}
                            <span className="text-textGreen">
                                50% increase in traffic
                            </span>
                            , more event inquiries, and a growing community of
                            engaged followers. <br />
                            Social media didn&apos;t just support the brand—it
                            became a stage for its success.
                        </p>
                        <div className="text-2xl flex gap-4"></div>
                    </div>
                </div>
                {/* ============ project One End here ================== */}
                {/* ============ project Two Start here ================ */}
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://www.noormohmmad.com/"
                        target="_blank"
                    >
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={cyberImg}
                                alt="cyberImg"
                            />
                            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
                        <div>
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                Marketing Agency
                            </h3>
                        </div>
                        <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
                            During my time at a marketing agency, I worked with
                            diverse brands, shaping their unique identities and
                            crafting tailored{" "}
                            <span className="text-textGreen">
                                social media strategies
                            </span>
                            . I executed impactful{" "}
                            <span className="text-textGreen">
                                online campaigns
                            </span>
                            , gaining insights into{" "}
                            <span className="text-textGreen">
                                consumer behavior
                            </span>{" "}
                            and{" "}
                            <span className="text-textGreen">
                                UK market trends
                            </span>
                            . This experience refined my{" "}
                            <span className="text-textGreen">
                                creative and strategic skills
                            </span>
                            , helping brands thrive in a competitive digital
                            landscape.
                        </p>
                        <div className="text-2xl flex gap-4"></div>
                    </div>
                </div>
                {/* ============ project Two End here ================== */}
                {/* ============ project Three Start here ============== */}
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://noorshop.netlify.app/"
                        target="_blank"
                    >
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={noorShop}
                                alt="noorShop"
                            />
                            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
                        <div>
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                Pearson Business Simulation
                            </h3>
                        </div>
                        <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
                            During a two-week{" "}
                            <span className="text-textGreen">
                                Pearson Business Simulation
                            </span>{" "}
                            with four colleagues, I gained hands-on experience
                            in high-level{" "}
                            <span className="text-textGreen">
                                corporate decision-making
                            </span>
                            . We managed{" "}
                            <span className="text-textGreen">acquisitions</span>
                            ,{" "}
                            <span className="text-textGreen">
                                market positioning
                            </span>
                            ,{" "}
                            <span className="text-textGreen">
                                product strategies
                            </span>
                            , and share sales{" "}
                            while solving key business challenges. This
                            collaborative experience enhanced my{" "}
                            <span className="text-textGreen">
                                strategic thinking
                            </span>
                            ,{" "}
                            <span className="text-textGreen">
                                problem-solving skills
                            </span>
                            , and ability to make{" "}
                            <span className="text-textGreen">
                                data-driven decisions
                            </span>{" "}
                            under pressure. It provided a practical
                            understanding of running a company from a leadership
                            perspective, bridging theory with real-world
                            application.
                        </p>
                        <div className="text-2xl flex gap-4"></div>
                    </div>
                </div>
                {/* ============ project Three End here ================== */}
            </div>
        </section>
    );
};

export default Projects;
