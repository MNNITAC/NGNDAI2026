import React from "react";
import logo from "../../assets/images/MNNIT logo.png";
import Dropdown from "../NavbarComponents/Dropdown.jsx";
import Accessability from "../NavbarComponents/Accessability.jsx";
import { IoCloseCircleOutline, IoMenu } from "react-icons/io5";

const SummaryNavbar = () => {
  const navItems = [
    {
      name: "About",
      link: "/2025/",
      scrollUpperLimit: 400 - 1,
    },
    {
      name: "Keynote Speakers",
      link: "/2025/#keynote-speakers",
      scrollLowerLimit: 200,
    },
    {
        name: "Sponsors",
        link: "/2025/#sponsors",
        prevPath: "",
    },
    {
        name: "Glossary",
        link: "",
        prevPath: "",
    },
    {
        name: "Media Coverage",
        link: "",
        prevPath: "",
    },
    {
        name: "NGNDAI-2026",
      link: "/",
      highlight: true,
        prevPath: "",
    },
    {
      name: "Contact Us",
      link: "/2025/#footer",
      prevPath: "",
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
                  <Dropdown
                    key={el.link}
                    el={el}
                    prevPath={el.prevPath || ""}
                    noUnderline={true}
                    highlight={el.highlight}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>

        <div
          className={`hidden items-center gap-2 ml-24 md:ml-auto md:flex self-center mx-auto`}
        >
          {navItems.map((el) => (
            <Dropdown key={el.link} el={el} prevPath={el.prevPath || ""} noUnderline={true} highlight={el.highlight} />
          ))}
        </div>
        <Accessability />
      </div>
    </nav>
  );
};

export default SummaryNavbar;
