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
