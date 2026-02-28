import React, {useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {GoChevronDown} from "react-icons/go";
import {AnimatePresence, motion} from "framer-motion";

function Dropdown({el, prevPath, noUnderline, highlight}) {
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
    // Use the current location and the item's `el.link` to avoid NavLink's partial-match/hash issues
    const underlineIfActive = ({isActive}) => {
        if (noUnderline) return "";

        const to = el.link || "";

        // If link is an absolute route with optional hash, require exact pathname and matching hash (if present)
        // For hash targets we DO NOT require the scroll-bounds check so anchors underline immediately on click
        if (to.startsWith("/")) {
            const [path, hashPart] = to.split("#");
            if (location.pathname !== path) return "";
            if (hashPart) {
                const expectedHash = `#${hashPart}`;
                // For hashes, ignore scroll bounds (user expects immediate underline when navigating to an anchor)
                return (location.hash === expectedHash) ? "transition-all border-primary border-b-2 font-medium" : "";
            }
            // no hash: require exact pathname match and scroll bounds
            return (location.pathname === path && isScrollInBounds) ? "transition-all border-primary border-b-2 font-medium" : "";
        }
        // If link is a hash only (anchor on same page) - ignore scroll bounds for immediate feedback
        if (to.startsWith("#")) {
            return (location.hash === to) ? "transition-all border-primary border-b-2 font-medium" : "";
        }

        // Fallback to NavLink's isActive result
        return (isActive && isScrollInBounds) ? "transition-all border-primary border-b-2 font-medium" : "";
    };

    // Highlight class for special nav items (theme-aware)
    const highlightClass = highlight
        ? 'bg-primary text-base-100 rounded-md px-3 py-1 shadow-sm hover:bg-transparent hover:text-base-content transition-colors'
        : '';

    return (<div className="relative h-full *:text-nowrap  w-full">
        {el.element ?
            <>{el.element}</>:
            el.sublinks ? (<>
            <NavLink
                to={el.link}
                onMouseOut={() => setIsOpen(false)}
                onMouseOver={() => setIsOpen(true)}
                tabIndex={0}
                className={({isActive}) => `flex items-center h-full p-2 hover:bg-base-300/10 ${underlineIfActive({isActive})} ${highlightClass}`}
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
                        <Dropdown key={el.link + subEl.link} el={subEl} prevPath={el.link}/>))}
                </motion.ul>)}
            </AnimatePresence>
            </>) : el.link.charAt(0) === '#' ? (<a
            className={`block w-full rounded-md p-2 hover:bg-base-300/20 hover:shadow-sm ${highlightClass}`}
            href={prevPath + el.link}
            onClick={() => {
                document.getElementById("nav-side-bar").checked = false;
            }}
        >
            {el.name}
        </a>) : prevPath === "" ? (<NavLink
            to={el.link}
            className={({isActive}) => `flex items-center h-full p-2 hover:bg-base-300/20 ${underlineIfActive({isActive})} ${highlightClass}`}
            onClick={() => {

                document.getElementById("nav-side-bar").checked = false;
            }}>
            {el.name}
        </NavLink>) : (<Link
            to={el.link}
            className={`flex items-center h-full p-2 hover:bg-base-300/20 ${highlightClass}`}
            href={prevPath + el.link}
            onClick={() => {

                document.getElementById("nav-side-bar").checked = false;
            }}>
            {el.name}
        </Link>)}
    </div>);
}

export default Dropdown;
