import React from "react";
import About from "../components/MainPageComponents/AboutConference.jsx";
import AboutPrayagraj from "../components/MyCityPageComponents/AboutPrayagraj.jsx";
import AboutUttarPradesh from "../components/MyCityPageComponents/AboutUttarPradesh.jsx";
import Publication from "../components/PaperSubmissionPageComponents/Publication.jsx";
import TrackListing from "../components/MainPageComponents/TrackListing.jsx";
import TimeLine from "../components/MainPageComponents/TimeLine.jsx";

const MainContentPage = () => {

    return (<main className="flex w-full flex-col items-center justify-center align-middle">
        <About/>
        <TrackListing/>
        <TimeLine/>
        <Publication/>
        {/*<Sponsors/>*/}
        <AboutPrayagraj/>
        <AboutUttarPradesh/>
    </main>);
};

export default MainContentPage;