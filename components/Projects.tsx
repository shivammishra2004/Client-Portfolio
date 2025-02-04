import {
    eventImg,
    marketImg1,
    marketImg2,
    marketImg3,
    noorShop,
    freelance,
} from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

interface MediaItem {
    name: StaticImageData | string;
    type: "image" | "video";
    duration: number;
}

const Projects = () => {
    useEffect(() => {
        const playPauseVideo = () => {
            const videos = document.querySelectorAll("video");

            videos.forEach((video) => {
                video.muted = true;

                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                video.play().catch(() => {
                                });
                            } else {
                                video.pause();
                            }
                        });
                    },
                    { threshold: 0.4 }
                );

                observer.observe(video);

                return () => {
                    observer.disconnect();
                    video.pause();
                };
            });
        };

        playPauseVideo();
    }, []);

    const media: MediaItem[] = [
        { name: marketImg1, type: "image", duration: 3000 },
        { name: marketImg2, type: "image", duration: 3000 },
        { name: marketImg3, type: "video", duration: 6000 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
        }, media[currentIndex].duration);

        return () => clearTimeout(interval);
    }, [currentIndex, media]);

    const renderMediaContent = (mediaItem: MediaItem): JSX.Element => {
        const mediaContainerStyle = "w-full aspect-video relative";
        const mediaCommonStyle = "w-full h-full object-cover rounded-lg absolute top-0 left-0";

        if (mediaItem.type === "video") {
            return (
                <div className={mediaContainerStyle}>
                    <video
                        className={mediaCommonStyle}
                        src={mediaItem.name as string}
                        autoPlay
                        muted
                        playsInline
                        // onEnded={handleNext}
                    />
                </div>
            );
        }

        return (
            <div className={mediaContainerStyle}>
                <Image
                    className={mediaCommonStyle}
                    src={mediaItem.name as StaticImageData}
                    alt={`Slide ${currentIndex + 1}`}
                    fill
                    priority={currentIndex === 0}
                />
            </div>
        );
    };

    return (
        <section
            id="project"
            className="max-w-container mx-auto lgl:px-20 py-24"
        >
            <SectionTitle title="Projects I've Worked On:" titleNo="03" />
            {/* ============ project One Start here ================ */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <div className="w-full xl:w-1/2 h-auto relative group">
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={eventImg}
                                alt="amazonImg"
                            />
                            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
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
                    <div className="w-full xl:w-1/2 h-auto relative group">
                        <div>
                            {renderMediaContent(media[currentIndex])}
                            <button
                                onClick={handleNext}
                                className="absolute top-1/2 -right-1 -translate-y-1/2 bg-gray-500/50 text-white rounded-full px-2 text-2xl hover:bg-black/70 transition duration-300 z-50"
                            >
                                &gt;
                            </button>
                            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
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
                    <div className="w-full xl:w-1/2 h-auto relative group">
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={noorShop}
                                alt="noorShop"
                            />
                            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
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
                            , and share sales while solving key business
                            challenges. This collaborative experience enhanced
                            my{" "}
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
                <div className="flex flex-col xl:flex-row gap-6">
                    <div className="w-full xl:w-1/2 h-auto relative group">
                        <div>
                            <video
                                width="600"
                                height="340"
                                className="relative z-10"
                                autoPlay
                                // controls
                            >
                                <source src={freelance} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
                        <div>
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">FreeLance</h3>
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
                            , and share sales while solving key business
                            challenges. This collaborative experience enhanced
                            my{" "}
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
            </div>
        </section>
    );
};

export default Projects;
