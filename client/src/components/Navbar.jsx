import React from "react";
import logo from "../assets/images/MNNIT logo.png";
import Dropdown from "./NavbarComponents/Dropdown.jsx";
import Accessability from "./NavbarComponents/Accessability.jsx";
import {IoCloseCircleOutline, IoMenu} from "react-icons/io5";

const Navbar = () => {

    const navItems = [{
        name: "Home", link: "/", scrollUpperLimit: 400 - 1,
    }, {
        name: "About",
        link: "/#about%20conference",
        scrollLowerLimit: 400,
        sublinks: [{name: "About Conference", link: "/#about%20conference"}, // {name: "Timeline", link: "/#timeline"},
            {name: "Publication", link: "/#publication"}, {
                name: "About Prayagraj", link: "/#About%20Prayagraj"
            }, {name: "About Uttar Pradesh", link: "/#About%20Uttar%20Pradesh"}]
    }, {
        name: "Committee", link: "/committee", sublinks: [{name: "Organising Committee", link: "/committee"}, {
            name: "International Advisory Committee", link: "advisoryCommittee#International%20Advisory%20Committee"
        }, {
            name: "National Advisory Committee", link: "advisoryCommittee#National%20Advisory%20Committee"
        }, {
            name: "Technical Program Committee", link: "advisoryCommittee#Technical%20Program%20Committee"
        },
            // {name: "Student Committee", link: "studentCommittee"}
        ]
    },
    //     {
    //     name: "Conference Scope", link: "/paperSubmission", sublinks: [{
    //         name: "Special Session", link: "/specialSession", sublinks: [{
    //             name: "Special Track 1", element: <div onClick={() => window.open(spt1, "_blank")}
    //                                                    className="cursor-pointer py-2 flex gap-4 justify-center items-center">
    //                 Special Track 1 <GrDocumentPdf size={10}/>
    //             </div>
    //         }, {
    //             name: "Special Track 2", element: <div onClick={() => window.open(spt2, "_blank")}
    //                                                    className="cursor-pointer py-2 flex gap-4 justify-center items-center">
    //                 Special Track 2 <GrDocumentPdf size={10}/>
    //             </div>
    //         }]
    //     }]
    // },
        {
        name: "Submission Guidelines", link: "/submissionGuidelines"
    },
    //     {
    //     name: "Conference Program", link: "/schedule", sublinks: [
    //         {name: "Timeline", link: "/schedule"},
    //             {
    //         name: "Keynote Speakers", link: "/schedule#Keynote"
    //     }, {
    //         name: "Industry Session", link: "/schedule#industrySession"
    //     }, {
    //         name: "Mentorship Session", link: "/MentorshipSession"
    //     }, {name: "Accomodation", link: "accomodationPage"}, {
    //         name: "Cultural Program", link: "culturalProgramPage"
    //     }]
    // },
    //     {
    //     name: "Registration", link: "/registration"
    // },
        {
        name: "Contact Us", link: "#footer", prevPath: ""
    }];

    return (<nav
        className={`sticky top-0 z-50 flex justify-center shadow-sm w-full transition-all duration-100 bg-base-200/95`}>
        <div className="flex w-full justify-between md:justify-start px-4 max-w-[1400px] items-center">
            <div className="flex items-center gap-4 p-1">
                <img className="w-16" src={logo} alt="MNNIT"/>
                <p className="font-extrabol flex justify-center items-center align-middle flex-col font-playfair">
                    <span>NGNDAI</span><span>  2026</span></p>
            </div>

            <div className="md:hidden drawer-end z-10 relative right-[30px]">
                <input id="nav-side-bar" type="checkbox" className="drawer-toggle"/>
                <div className="flex items-center drawer-content">
                    <label htmlFor="nav-side-bar" className="p-2 drawer-button">
                        <IoMenu size={32}/>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="nav-side-bar" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="min-h-full w-80 p-4 menu  text-base-content bg-base-200">
                        <label htmlFor="nav-side-bar" aria-label="close sidebar">
                            <IoCloseCircleOutline size={24}
                                                  className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2"/>
                        </label>
                        <div className="items-center gap-2 mr-[20px]">
                            {navItems.map((el) => (<Dropdown key={el.link} el={el} prevPath={el.prevPath || ""}/>))}
                        </div>
                    </ul>
                </div>
            </div>

            <div className={`hidden items-center gap-2 ml-24 md:ml-auto md:flex self-center mx-auto`}>
                {navItems.map((el) => (<Dropdown key={el.link} el={el} prevPath={el.prevPath || ""}/>))}
            </div>
            <Accessability/>
        </div>
    </nav>);
};

export default Navbar;
