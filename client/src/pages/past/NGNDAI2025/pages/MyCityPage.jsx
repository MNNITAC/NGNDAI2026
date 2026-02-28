import React from "react";
import AboutUttarPradesh from "../components/MyCityPageComponents/AboutUttarPradesh.jsx";
import AboutPrayagraj from "../components/MyCityPageComponents/AboutPrayagraj.jsx";

function MyCityPage() {

    return (
        <>
            <main className="flex w-full flex-col items-center justify-center align-middle">
            <AboutPrayagraj/>
            <AboutUttarPradesh/>
            </main>
        </>

    )
}

export default MyCityPage;