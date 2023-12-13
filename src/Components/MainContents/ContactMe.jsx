// ContactMe.js
import React from 'react';
import { BsMailbox } from 'react-icons/bs';
const TimelineItem = ({ title, content }) => (
    <div className="mb-4">
        <h3 className="text-lg font-bold mb-2 text-[#29AB87]">{title}</h3>
        <p>{content}</p>
    </div>)

const ContactMe = () => {
    return (
        <div className="bg-white p-8  w-full">
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 text-[#29AB87]">Education Timeline</h2>
                <TimelineItem title="Higher Secondary Certificate (HSC)" content="Nawab Habibullah Model College, 2023" />
                <TimelineItem title="Enrollment in CSE" content="Expected 2024" />
            </div>
            <div className="border flex  mb-8 items-center gap-2 max-w-min px-3 rounded-full">
                <BsMailbox></BsMailbox>
                <p className="text-xl ">Contact</p>
            </div>
            <h2 className="text-4xl mb-4 ">Contact <span className='text-[#29AB87]'>Me</span></h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#29AB87]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#29AB87]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#29AB87]"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full btn bg-[#29AB87] rounded-lg font-semibold text-white py-2 px-4 hover:bg-[#184337] transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactMe;
