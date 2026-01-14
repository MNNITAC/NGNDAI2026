import React, {useEffect} from 'react';
import Banner from "../components/Banner.jsx";
import {Outlet, useLocation} from "react-router-dom";

const App = () => {

    const location = useLocation();

    //scroll to specific section
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(decodeURIComponent(hash.substring(1)));
            if (element) {
                const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementTop -100,
                    behavior: "smooth"
                });
            }
        } else {
            window.scrollTo({top: 1, behavior: "smooth"});
        }
    }, [location]);

    return (
        <>
            {useLocation().pathname === "/" && <Banner/>}
            <div className="relative flex min-h-screen flex-col gap-5 rounded-md text-base-content items-center">
                <div className="relative md:flex md:flex-row w-full px-2 md:px-0">
                    {/*<Sidebar activeSection={activeSection} sectionId={sectionId}/>*/}
                    <Outlet/>
                </div>

            </div>
        </>
    );
};

export default App;
