import {RxAccessibility} from "react-icons/rx";
import {IoClose, IoSunnyOutline} from "react-icons/io5";
import {AnimatePresence, motion} from "framer-motion";
import {FaRegMoon} from "react-icons/fa";
import FontChange from "./FontChange.jsx";
import React, {useEffect, useState} from "react";

function Accessability() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "fantasy");

    const handleThemeChange = () => {
        setTheme(theme === "fantasy" ? "dark" : "fantasy");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
        setSliderOpen(false)
    }, [theme]);


    const [sliderOpen, setSliderOpen] = useState(false);


    return (<div
        className="absolute right-0 flex -translate-y-1/2 rounded-md border border-r-0 p-1 pr-2 top-[50%] bg-base-100 text-base-content">
        <label className="mr-1 items-center justify-start swap">
            <input type="checkbox" className="theme-controller" checked={sliderOpen}
                   onChange={() => setSliderOpen(!sliderOpen)}/>
            <RxAccessibility size={24} className="swap-off"/>
            <IoClose className="swap-on"/>
        </label>
        <AnimatePresence>
            {sliderOpen && (<motion.div
                    animate={{width: "8.5rem"}}
                    initial={{width: "0"}}
                    exit={{width: "0"}}
                    className="flex origin-right transform transition-all duration-75 ease-in-out"
                >
                    <label className="mr-2 border-r border-l px-2 swap swap-rotate">
                        <input type="checkbox" className="theme-controller" onChange={handleThemeChange}
                               checked={theme === "fantasy"}/>
                        <IoSunnyOutline size={20} className="fill-current swap-off"/>
                        <FaRegMoon size={20} className="fill-current swap-on"
                        />
                    </label>
                    <FontChange/>
                </motion.div>)}
        </AnimatePresence>
    </div>)
}

export default Accessability;