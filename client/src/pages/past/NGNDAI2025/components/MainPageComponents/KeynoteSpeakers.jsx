import React from "react";
import {motion} from "framer-motion";

import epnsugan from "../../assets/images/KeynoteSpeakers/epnsugan.jpg"
import aditya_nigam from "../../assets/images/KeynoteSpeakers/aditya_nigam.jpg"
import Manish_Bajpai from "../../assets/images/KeynoteSpeakers/Manish_Bajpai.jpg"
import Mehul_Agarwal from "../../assets/images/KeynoteSpeakers/Mehul_Agarwal.png"
import sukumar from "../../assets/images/KeynoteSpeakers/sukumar.png"
import ap from "../../assets/images/KeynoteSpeakers/Mr. Anurag Pandey.jpg"
import gc from "../../assets/images/KeynoteSpeakers/Prof. Girija Chetty.jpg"
import rbp from "../../assets/images/KeynoteSpeakers/Prof._Ram_Bilash_Pachori.png"


function KeynoteSpeakers() {

    const keynoteSpeakers = [{
        name: "Prof. P. N. Suganthan",
        image: epnsugan,
        about: "Professor, Qatar University, Qatar",
        homepage: "https://www3.ntu.edu.sg/home/epnsugan/"
    }, {
        name: "Prof. Ram Bilash Pachori",
        image: rbp,
        about: "Professor, IIT Indore",
        homepage: "https://people.iiti.ac.in/~pachori/"
    }, {
        name: "Dr. Aditya Nigam",
        image: aditya_nigam,
        about: "Associate Professor, IIT Mandi",
        homepage: "https://faculty.iitmandi.ac.in/~aditya/"
    }, {
        name: "Mr. Mehul Agarwal",
        image: Mehul_Agarwal,
        about: "Practice Head – AITech, HCLTech",
        homepage: "https://www.linkedin.com/in/mehulag/"
    }, {
        name: "Mr. Manish Bajpai",
        image: Manish_Bajpai,
        about: "COO & Head-Products, Nivetti Systems",
        homepage: "https://www.linkedin.com/in/manish-bajpai-83387b3/"
    }, {
        name: "Mr. Anurag Pandey",
        image: ap,
        about: "Capability Head Computer Vision, HCLTech, Noida",
        homepage: "https://www.linkedin.com/in/anurag-pandey-5244b885/"
    }, {
        name: "Prof. Girija Chetty",
        image: gc,
        about: "University of Canberra, Australia",
        homepage: "https://www.linkedin.com/in/girija-chetty-680542227/"
    }, {
        name: "Prof. Sukumar Nandi",
        image: sukumar,
        about: "Professor, IIT Guwahati",
        homepage: "https://www.iitg.ac.in/sukumar/"
    }];


    return (<section
        id="Keynote"
        className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-base-200/40 text-base-content w-full flex items-center">
        <div className="max-w-[1100px]">
            <h1 className="mb-4 text-5xl font-bold text-primary font-playfair py-8 text-center">Keynote Speakers</h1>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {keynoteSpeakers.map((member, i) => <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 0.1 * i}}
                    key={i} className="border-dotted border-black rounded-lg p-6 text-center shadow-md flex flex-col
                    items-center gap-6 hover:shadow-lg origin-center transition-all bg-base-100">
                    <img
                        src={member.image}
                        alt={member.name} className="rounded-full w-[90%] aspect-square"/>
                    <div>
                        <h3 className="mb-2 font-semibold underline">
                            <a href={member.homepage}>{member.name}</a>
                        </h3>
                        <p className="text-base-content/80 text-sm">{member.about}</p>
                    </div>
                </motion.div>)}
            </div>
        </div>
    </section>)
}

export default KeynoteSpeakers;