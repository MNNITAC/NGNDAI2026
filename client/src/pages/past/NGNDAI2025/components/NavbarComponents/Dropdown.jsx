import React, {useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {GoChevronDown} from "react-icons/go";
import {AnimatePresence, motion} from "framer-motion";

function Dropdown({el}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrollInBounds, setIsScrollInBounds] = useState(true);
    const location = useLocation();  // Get current URL path

    // Check if scrollLowerLimit and scrollUpperLimit exist, and handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollLowerLimit = el.scrollLowerLimit || 0;
            const scrollUpperLimit = el.scrollUpperLimit || Infinity;

            // Determine if scroll is within the bounds (between lower and upper limits)
            if (scrollY >= scrollLowerLimit && scrollY <= scrollUpperLimit) {
                setIsScrollInBounds(true);
            } else {
                setIsScrollInBounds(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [el.scrollLowerLimit, el.scrollUpperLimit]);

    // Conditionally apply underline based on whether scroll is within bounds
    const underlineIfActive = ({isActive}) => {
        // Apply underline only if active and within scroll bounds
        return isActive && isScrollInBounds ? "transition-all border-secondary border-b-2 font-medium" : "";
    };

    return (<div className="relative h-full *:text-nowrap  w-full">
        {el.element ?
            <>{el.element}</>:
            el.sublinks ? (<>
            <NavLink
                to={el.link}
                onMouseOut={() => setIsOpen(false)}
                onMouseOver={() => setIsOpen(true)}
                tabIndex={0}
                className={({isActive}) => `flex items-center h-full p-2 hover:bg-base-300/10 ${underlineIfActive({isActive})}`}
            >
                {el.name}
                <GoChevronDown/>
            </NavLink>
            <AnimatePresence>
                {isOpen && (<motion.ul
                    onMouseOut={() => setIsOpen(false)}
                    onMouseOver={() => setIsOpen(true)}
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.95}}
                    transition={{duration: 0.1}}
                    className="md:absolute right-0 top-[calc(100%-5px)] min-w-52 p-2 shadow rounded-md bg-base-200"
                >
                    {el.sublinks.map((subEl) => (
                        <Dropdown key={el.link + subEl.link} el={subEl}/>))}
                </motion.ul>)}
            </AnimatePresence>
        </>) : el.link.charAt(0) === '#' ? (<a
            className="block w-full rounded-md p-2 hover:bg-base-300/20 hover:shadow-sm"
            href={el.link}
            onClick={() => {
                document.getElementById("nav-side-bar").checked = false;
            }}
        >
            {el.name}
        </a>) : (<Link
            to={el.link}
            className="flex items-center h-full p-2 hover:bg-base-300/20"
            href={el.link}
            onClick={() => {

                document.getElementById("nav-side-bar").checked = false;
            }}>
            {el.name}
        </Link>)}
    </div>);
}

export default Dropdown;
