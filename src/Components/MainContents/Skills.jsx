import { FaFigma } from "react-icons/fa";
import { LiaShapesSolid } from "react-icons/lia";
import boot from '../../assets/boot.png'
import tailwind from '../../assets/tailwind.png'
import firebase from '../../assets/firebase.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import vercel from '../../assets/vercel.png'
import express from '../../assets/express.png'
import node from '../../assets/node.png'
import mongodb from '../../assets/mongodb.png'
import figma from '../../assets/figma.png'

const Item = ({name, skill , title}) => {
    return (
        <div>
            <div className="flex flex-col justify-between h-60 border rounded-2xl items-center gap-5 p-5">
                <img className="w-32 rounded" src={name} alt="" />
                <p className="text-4xl text-[#29AB87] text-center">{skill}%</p>
            </div>
            <h1 className="text-2xl text-center mt-4 font-semibold">{title}</h1>
        </div>
    )
}

const Skills = () => {
    return (
        <div id="skills " className="pt-8">
            <div className="border flex  mb-8 items-center gap-2 max-w-min px-3 rounded-full">
                <LiaShapesSolid className="text-xl"></LiaShapesSolid>
                <p className="text-xl mb-1">Skills</p>
            </div>
            <div>
                <h2 className="text-4xl mb-5">My <span className="text-[#29AB87]">Advantages</span></h2>
                {/* skills  */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                    <Item name={react} skill='80' title='React'></Item>
                    <Item name={boot} skill='80' title='Bootstrap'></Item>
                    <Item name={tailwind} skill='95' title='Tailwind'></Item>
                    <Item name={firebase} skill='75' title='Firebase'></Item>
                    <Item name={mongodb} skill='65' title='Mongodb'></Item>
                    <Item name={express} skill='65' title='Express'></Item>
                    <Item name={node} skill='60' title='Node JS'></Item>
                    <Item name={html} skill='90' title='Html'></Item>
                    <Item name={css} skill='80' title='Css'></Item>
                    <Item name={figma} skill='70' title='Figma'></Item>
                    <Item name={js} skill='80' title='JavaScript'></Item>
                    <Item name={vercel} skill='70' title='Vercel'></Item>
                </div>

            </div>
        </div>
    );
};

export default Skills;