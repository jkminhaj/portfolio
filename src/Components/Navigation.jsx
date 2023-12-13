import { NavLink } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrBusinessService } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";


const Navigation = () => {
    return (
        <div>
            <div className="lg:flex nav rounded-full flex-col w-12 text-gray-500 bg-gray-50 items-center py-5 hidden gap-4 text-xl border">
                <NavHashLink smooth to='#top'><LiaHomeSolid /></NavHashLink>
                <NavHashLink smooth to='#'><AiOutlineUser /></NavHashLink>
                <NavHashLink smooth to='#top'><GrBusinessService /></NavHashLink>
                <NavHashLink smooth to='#top'><IoNewspaperOutline /></NavHashLink>
                <NavHashLink smooth to='#skills'><GiSkills /></NavHashLink>
                <NavHashLink smooth to='#top'><CiMail /></NavHashLink>
            </div>
        </div>
    );
};

export default Navigation;