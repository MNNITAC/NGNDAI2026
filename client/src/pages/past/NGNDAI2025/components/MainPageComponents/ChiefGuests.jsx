import React from "react";
import {motion} from "framer-motion";

function ChiefGuests() {
    return (<section
        id="Chief Guest"
        className="relative flex lg:p-16 flex-col justify-center overflow-hidden bg-base-200/50 rounded-md shadow-sm
             w-[95%] antialiased text-base-content mt-16">
        <div className="container mx-auto px-4">
            <h2 className="relative mb-8 text-center text-4xl font-bold text-primary">Inaugural Chief Guest</h2>

            {/*<div className="grid grid-cols-1 items-center justify-center gap-8 align-middle sm:grid-cols-2">*/}
            <motion.div
                initial={{opacity: 0, top: "20px"}}
                whileInView={{opacity: 1, top: "0"}}
                viewport={{once: true}}
                transition={{duration: 1}}
                className="relative flex items-center justify-center align-middle">
                {/*<div className="my-6 rounded-lg p-6 text-center shadow-md flex flex-col lg:flex-row*/}
                <div className="my-6 rounded-lg p-6 text-center shadow-md flex flex-col lg:flex-row lg:max-w-[50%]
                    justify-center items-center gap-6 hover:shadow-lg origin-center transition-all bg-white border-dotted border-black border-2">
                    <img
                        src="https://images.pexels.com/photos/19601376/pexels-photo-19601376/free-photo-of-adult-man-with-mustache-wearing-an-elegant-white-outfit.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Team Member 1" className="mb-4 rounded-md lg:w-[40%]"/>
                    <div className="flex h-full flex-col justify-evenly align-top">
                        <h3 className="mb-2 text-xl font-semibold text-black underline">Prof. Deepak B. Phatak</h3>
                        <p className="text-gray-700">Professor Emeritus, Institute of Technology Bombay, India</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>);
}

export default ChiefGuests;