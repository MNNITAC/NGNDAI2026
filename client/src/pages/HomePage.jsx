import React, {useEffect} from 'react';
import Banner from "../components/Banner.jsx";
import {Outlet, useLocation} from "react-router-dom";

const App = () => {

    const location = useLocation();

    //scroll to specific section
    useEffect(() => {
        if (location.hash) {
            const id = decodeURIComponent(location.hash.substring(1));
            const element = document.getElementById(id);
            const nav = document.querySelector('nav');
            const offset = nav ? nav.offsetHeight : 0;
            if (element) {
                const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementTop - offset,
                    behavior: "smooth"
                });
            }
        } else {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }, [location]);

    return (
        <>
        <div className="w-full overflow-hidden text-red-900 font-bold py-2 whitespace-nowrap relative">
           <div onClick={()=>window.open("https://www.springer.com/series/15179", "_blank")} className="cursor-pointer inline-block pl-full animate-slide hover:[animation-play-state:paused]">
               The Conference Proceedings of NGNDAI 2025 have been approved by Springer. It will be published in the
               Lecture Notes in Networks and Systems (LNNS) series <a>https://www.springer.com/series/15179</a>, which is
               indexed by Scopus.
           </div>
        </div>
            {useLocation().pathname === "/" && <Banner/>}
            <div className="relative flex min-h-[50vh] flex-col gap-5 rounded-md text-base-content items-center">
                <div className="relative md:flex md:flex-row w-full px-2 md:px-0">
                    {/*<Sidebar activeSection={activeSection} sectionId={sectionId}/>*/}
                    <Outlet/>
                </div>

            </div>
        </>
    );
};

export default App;
