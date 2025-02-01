import { useState } from "react";
import SectionTitle from "./SectionTitle";

import EagleWhys from "./works/EagleWhys";
import Fitkilter from "./works/Fitkilter";
import LudhianaGreentop from "./works/LudhianaGreentop";

const Experience = () => {
    const companies: string[] = ["EagleWhys", "Fitkilter", "Ludhiana Greentop"];
    const components: Record<string, JSX.Element> = {
        EagleWhys: <EagleWhys />,
        Fitkilter: <Fitkilter />,
        "Ludhiana Greentop": <LudhianaGreentop />,
    };

    const [active, setActive] = useState<number>(0);

    const handleClick = (index: number): void => {
        setActive(index);
    };

    return (
        <section
            id="experience"
            className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
        >
            <SectionTitle title="Where I have Worked" titleNo="02" />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    {companies.map((company, index) => (
                        <li
                            key={company}
                            onClick={() => handleClick(index)}
                            className={`${
                                index === active
                                    ? "border-l-textGreen text-textGreen"
                                    : "border-l-hoverColor text-textDark"
                            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                        >
                            {company}
                        </li>
                    ))}
                </ul>
                {components[companies[active]]}
            </div>
        </section>
    );
};

export default Experience;
