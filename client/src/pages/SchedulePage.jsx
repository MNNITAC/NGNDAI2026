import React from "react";
import KeynoteSpeakers from "../components/MainPageComponents/KeynoteSpeakers.jsx";
import IndustrySession from "../components/MainPageComponents/IndustrySession.jsx";

function SchedulePage() {

    return (<main className="flex w-full flex-col items-center justify-center align-middle">
        <i/>
        <KeynoteSpeakers/>
        <IndustrySession/>
    </main>)
}

export default SchedulePage;