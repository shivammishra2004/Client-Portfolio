import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Hi, I&apos;m Deepanshu Kumar, and I&apos;m passionate about crafting strategies, creating engaging content, and designing visuals that make an impact.
          </p>
          <p>
  Marketing has always been more than just a profession for me—it&apos;s a way to tell stories that connect people and brands. With an MSc in 
  <span className="text-textGreen"> Marketing and Strategy</span> from 
  <span className="text-textGreen"> Aston University</span>, I&apos;ve honed my skills in blending creativity with 
  <span className="text-textGreen"> data-driven strategies</span>.
</p>
<p>
  I&apos;ve worked across digital marketing—including social media campaigns, <span className="text-textGreen">influencer collaborations</span>, and <span className="text-textGreen">market research</span>—in the UK and India. I design eye-catching content and optimize campaigns using tools like <span className="text-textGreen">HubSpot</span>, <span className="text-textGreen">Google Analytics</span>, and <span className="text-textGreen">Adobe Suite</span>, turning ideas into impactful results. Beyond marketing, my passion for <span className="text-textGreen">Photography</span> and <span className="text-textGreen">Technology</span> fuels my creative approach, always aiming to tell stories that resonate and make an impact.
</p>


          <p>Technologies I am Proficient in:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
      <li className="group flex items-center gap-2">
        <span className="text-textGreen transform transition-transform duration-200 group-hover:scale-110">
          <SiJavascript size={20} />
        </span>
        JavaScript
      </li>
      
      <li className="group flex items-center gap-2">
        <span className="text-textGreen transform transition-transform duration-200 group-hover:scale-110">
          <SiNextdotjs size={20} />
        </span>
        Next.js
      </li>
      
      <li className="group flex items-center gap-2">
        <span className="text-textGreen transform transition-transform duration-200 group-hover:scale-110">
          <SiReact size={20} />
        </span>
        React
      </li>
      
      <li className="group flex items-center gap-2">
        <span className="text-textGreen transform transition-transform duration-200 group-hover:scale-110">
          <SiNodedotjs size={20} />
        </span>
        Node.js
      </li>
      
      <li className="group flex items-center gap-2">
        <span className="text-textGreen transform transition-transform duration-200 group-hover:scale-110">
          <SiTypescript size={20} />
        </span>
        TypeScript
      </li>
    </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
