import { LiaHomeSolid } from "react-icons/lia";
import ResumeDownload from "../ResumeDownload";

const Introduce = () => {
    return (
        <div id="introduce">
            <div className="border flex  mb-8 items-center gap-2 max-w-min px-3 rounded-full">
                <LiaHomeSolid className="text-xl"></LiaHomeSolid>
                <p className="text-xl mb-1">Introduce</p>
            </div>
            <div>
                <h1 className="text-7xl  font-normal">
                    Hi, I'm <span className="text-[#29AB87]">Minhaj</span>, a frontend developer crafting intuitive, user-centric websites.
                </h1>
                <div className="border max-w-max px-3 rounded">
                    <ResumeDownload></ResumeDownload>
                </div>

            </div>

        </div>
    );
};

export default Introduce;