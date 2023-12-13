import image from '../assets/profile.jpg'
import { FaGithub, FaMailBulk } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsMailbox, BsMailbox2, BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Profile = () => {
    return (
        <div className="border rounded-3xl">
            <div className="p-6 flex flex-col space-y-5">
                <div className="flex  justify-between  items-center relative">
                    <p className="font-semibold text-4xl">Minhaj <sup className='text-sm top-1 left-[120px] font-base border-gray-300 absolute px-1 border rounded-full bg-slate-50'>M</sup></p>
                    <p className="font-semibold">Frontend <br /> Deveoper</p>
                </div>
                <div className="flex justify-center">
                    <img className="rounded-3xl w-[250px]" src={image} alt="" />
                </div>
                <div className="text-center text-2xl ">
                    <p>hello@Minhaj.design
                    Based in Dhaka , BD</p>
                </div>
                <div className="text-center">
                    <p>© 2023 Minhaj . All Rights Reserved</p>
                </div>
                <div className="flex justify-center mb-3">
                    <div className='flex justify-center gap-2'>
                        <p className='border p-3 rounded-full '><FaFacebook></FaFacebook></p>
                        <p className='border p-3 rounded-full '><BsTwitterX></BsTwitterX></p>
                        <p className='border p-3 rounded-full '><BsLinkedin></BsLinkedin></p>
                        <p className='border p-3 rounded-full '><FaGithub></FaGithub></p>
                    </div>
                </div>
                <button className="btn text-white hover:bg-[#208266] bg-[#29AB87] w-full"><BsMailbox2></BsMailbox2> Contact Me</button>
            </div>
        </div>
    );
};

export default Profile;