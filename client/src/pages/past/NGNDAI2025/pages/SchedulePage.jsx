import React from "react";
import TimeLine from "../components/MainPageComponents/TimeLine.jsx";
import KeynoteSpeakers from "../components/MainPageComponents/KeynoteSpeakers.jsx";
import IndustrySession from "../components/MainPageComponents/IndustrySession.jsx";

function SchedulePage() {

    return (<main className="flex w-full flex-col items-center justify-center align-middle">
        <TimeLine/>
        <KeynoteSpeakers/>
        <IndustrySession/>
    </main>)
}

export default SchedulePage;