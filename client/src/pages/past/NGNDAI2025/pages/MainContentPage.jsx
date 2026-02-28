import React from "react";
import About from "../components/MainPageComponents/AboutConference.jsx";
import TimeLine from "../components/MainPageComponents/TimeLine.jsx";
import AboutPrayagraj from "../components/MyCityPageComponents/AboutPrayagraj.jsx";
import AboutUttarPradesh from "../components/MyCityPageComponents/AboutUttarPradesh.jsx";
import Publication from "../components/PaperSubmissionPageComponents/Publication.jsx";
import TrackListing from "../components/MainPageComponents/TrackListing.jsx";
import Sponsors from "../components/MainPageComponents/Sponsors.jsx";

const MainContentPage = () => {

    return (<main className="flex w-full flex-col items-center justify-center align-middle">
        <div className="w-full overflow-hidden text-red-900 font-bold py-2 whitespace-nowrap relative">
            <div onClick={()=>window.open("https://www.springer.com/series/15179", "_blank")} className="cursor-pointer inline-block pl-full animate-slide hover:[animation-play-state:paused]">
                The Conference Proceedings of NGNDAI 2025 have been approved by Springer. It will be published in the
                Lecture Notes in Networks and Systems (LNNS) series <a>https://www.springer.com/series/15179</a>, which is
                indexed by Scopus.
            </div>
        </div>
        <About/>
        <TrackListing/>
        <TimeLine/>
        <Publication/>
        <Sponsors/>
        <AboutPrayagraj/>
        <AboutUttarPradesh/>
    </main>);
};

export default MainContentPage;