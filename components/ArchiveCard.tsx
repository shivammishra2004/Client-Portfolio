import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  des: string;
  topic: string;
  link: string;
}

const ArchiveCard = ({ title, des, topic, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-70 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaRegFolder className="text-4xl text-textGreen" />
            <span className="pt-1 text-lg font-semibold text-textLight">{topic}</span>
          </div>
          <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3">{des}</p>
        </div>
      </div>
    </a>
  );
};

export default ArchiveCard;