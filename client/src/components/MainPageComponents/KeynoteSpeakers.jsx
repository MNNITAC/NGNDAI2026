import React from "react";
import {motion} from "framer-motion";

import epnsugan from "../../assets/images/KeynoteSpeakers/epnsugan.jpg"
import ap from "../../assets/images/KeynoteSpeakers/Mr. Anurag Pandey.jpg"
import gc from "../../assets/images/KeynoteSpeakers/Prof. Girija Chetty.jpg"
import as from "../../assets/images/KeynoteSpeakers/Prof. Abhishek Srivastava.png"
import ajk from "../../assets/images/KeynoteSpeakers/Mr. Ajay Kumar Sharma.jpg"
import ak from "../../assets/images/KeynoteSpeakers/Mr. Ashok Kumar.jpg"
import aks from "../../assets/images/KeynoteSpeakers/Prof. Ashutosh Kumar Singh.jpg"
import dpv from "../../assets/images/KeynoteSpeakers/Prof. Deo Prakash Vidyarthi.png"



function KeynoteSpeakers() {

    const keynoteSpeakers = [{
        name: "Prof. P. N. Suganthan",
        image: epnsugan,
        about: "Professor, Qatar University, Qatar",
        homepage: "https://www3.ntu.edu.sg/home/epnsugan/"
    },
    {
        name: "Prof. Girija Chetty",
        image: gc,
        about: "University of Canberra, Australia",
        homepage: "https://www.linkedin.com/in/girija-chetty-680542227/"
    }, 
    {
        name: "Prof. Abhishek Srivastava",
        image: as,
        about: "IIT Indore",
        homepage: "https://people.iiti.ac.in/~asrivastava/work%20exp.html"
    }, 
    {
        name: "Mr. Ajay Kumar Sharma",
        image: ajk,
        about: "ERS, HCL Tech",
        homepage: "https://www.linkedin.com/in/ajay-k-sharma/"
    }, 
    {
        name: "Mr. Ashok Kumar",
        image: ak,
        about: "Deputy Director General, Department of Telecommunications",
        homepage: "https://www.linkedin.com/in/ashok100/"
    }, 
    {
        name: "Prof. Ashutosh Kumar Singh",
        image: aks,
        about: "Director, IIIT Bhopal",
        homepage: "https://scholar.google.com/citations?user=1pBXMOgAAAAJ&hl=en"
    }, 
    {
        name: "Prof. Deo Prakash Vidyarthi",
        image: dpv,
        about: "JNU, New Delhi",
        homepage: "https://www.jnu.ac.in/scss-lab05-dpvidyarthi"
    }, 
    {
        name: "Mr. Anurag Pandey",
        image: ap,
        about: "Capability Head Computer Vision, HCLTech, Noida",
        homepage: "https://www.linkedin.com/in/anurag-pandey-5244b885/"
    },];


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