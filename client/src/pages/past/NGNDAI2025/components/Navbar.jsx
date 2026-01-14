import React from "react";
import logo from "../assets/images/MNNIT logo.png";
import Dropdown from "./NavbarComponents/Dropdown.jsx";
import Accessability from "./NavbarComponents/Accessability.jsx";
import { IoCloseCircleOutline, IoMenu } from "react-icons/io5";
import spt1 from "../assets/documents/Special Session_track1.pdf";
import spt2 from "../assets/documents/Special Session_track2.pdf";
import { GrDocumentPdf } from "react-icons/gr";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "",
      scrollUpperLimit: 400 - 1,
    },
    {
      name: "About",
      link: "/2025/#about%20conference",
      scrollLowerLimit: 400,
      sublinks: [
        { name: "About Conference", link: "/2025/#about%20conference" },
        {
          name: "Timeline",
          link: "/2025/#timeline",
        },
        { name: "Publication", link: "/2025/#publication" },
        {
          name: "About Prayagraj",
          link: "/2025/#About%20Prayagraj",
        },
        { name: "About Uttar Pradesh", link: "/2025/#About%20Uttar%20Pradesh" },
      ],
    },
    {
      name: "Committee",
      link: "/2025/committee",
      sublinks: [
        { name: "Organising Committee", link: "/2025/committee" },
        {
          name: "International Advisory Committee",
          link: "/2025/advisoryCommittee#International%20Advisory%20Committee",
        },
        {
          name: "National Advisory Committee",
          link: "/2025/advisoryCommittee#National%20Advisory%20Committee",
        },
        {
          name: "Technical Program Committee",
          link: "/2025/advisoryCommittee#Technical%20Program%20Committee",
        },
        { name: "Student Committee", link: "/2025/studentCommittee" },
      ],
    },
    {
      name: "Conference Scope",
      link: "/2025/paperSubmission",
      sublinks: [
        {
          name: "Special Session",
          link: "/2025/specialSession",
          sublinks: [
            {
              name: "Special Track 1",
              element: (
                <div
                  onClick={() => window.open(spt1, "_blank")}
                  className="cursor-pointer py-2 flex gap-4 justify-center items-center"
                >
                  Special Track 1 <GrDocumentPdf size={10} />
                </div>
              ),
            },
            {
              name: "Special Track 2",
              element: (
                <div
                  onClick={() => window.open(spt2, "_blank")}
                  className="cursor-pointer py-2 flex gap-4 justify-center items-center"
                >
                  Special Track 2 <GrDocumentPdf size={10} />
                </div>
              ),
            },
          ],
        },
      ],
    },
    {
      name: "Submission Guidelines",
      link: "/2025/submissionGuidelines",
    },
    {
      name: "Conference Program",
      link: "/2025/schedule",
      sublinks: [
        { name: "Timeline", link: "/2025/schedule" },
        {
          name: "Keynote Speakers",
          link: "/2025/schedule#Keynote",
        },
        {
          name: "Industry Session",
          link: "/2025/schedule#industrySession",
        },
        {
          name: "Mentorship Session",
          link: "/2025/MentorshipSession",
        },
        { name: "Accomodation", link: "/2025/accomodationPage" },
        { name: "Cultural Program", link: "/2025/culturalProgramPage" },
      ],
    },
    {
      name: "Registration",
      link: "/2025/registration",
    },
    {
      name: "Contact Us",
      link: "/2025/#footer",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-center shadow-sm w-full transition-all duration-100 bg-base-200/95`}
    >
      <div className="flex w-full justify-between md:justify-start px-4 max-w-[1400px] items-center">
        <div className="flex items-center gap-4 p-1">
          <img className="w-16" src={logo} alt="MNNIT" />
          <p className="font-extrabol flex justify-center items-center align-middle flex-col font-playfair">
            <span>NGNDAI</span>
            <span> 2025</span>
          </p>
        </div>

        <div className="md:hidden drawer-end z-10 relative right-[30px]">
          <input id="nav-side-bar" type="checkbox" className="drawer-toggle" />
          <div className="flex items-center drawer-content">
            <label htmlFor="nav-side-bar" className="p-2 drawer-button">
              <IoMenu size={32} />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="nav-side-bar"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="min-h-full w-80 p-4 menu  text-base-content bg-base-200">
              <label htmlFor="nav-side-bar" aria-label="close sidebar">
                <IoCloseCircleOutline
                  size={24}
                  className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2"
                />
              </label>
              <div className="items-center gap-2 mr-[20px]">
                {navItems.map((el) => (
                  <Dropdown key={el.link} el={el} />
                ))}
              </div>
            </ul>
          </div>
        </div>

        <div
          className={`hidden items-center gap-2 ml-24 md:ml-auto md:flex self-center mx-auto`}
        >
          {navItems.map((el) => (
            <Dropdown key={el.link} el={el} />
          ))}
        </div>
        <Accessability />
      </div>
    </nav>
  );
};

export default Navbar;
