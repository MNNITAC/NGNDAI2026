import React from "react";
import Carousal from "./Miscellaneous/Carousal.jsx";

function Banner() {
    return <div
        id="Banner"
        className={`relative w-full h-full bg-cover bg-right bg-no-repeat font-playfair`}
    >

        <div className="w-full h-full">
            <Carousal/>
        </div>

        <div
            className=" text-white bg-black bg-opacity-65 mx-auto w-full py-4 flex flex-col justify-center items-center align-middle relative *:z-20">

            {/*<img src={logo} alt="MNNIT logo" className="w-28 z-50 absolute top-0 left-0 translate-x-1/2 translate-y-1/4"/>*/}


            <div className="text-3xl flex flex-col items-center max-w-4xl text-center z-1">
                <h1 className="font-playfair font-thin">International Conference on</h1>

                <h1 className="font-bold text-5xl leading-[60px] rounded-lg p-4 font-playfair"> Next-Generation
                    Networks and
                    Deployable Artificial
                    Intelligence</h1>
                <h1 className="font-playfair font-thin mb-1">(NGNDAI-2026)</h1>
            </div>

            {/*<div className="m-4 flex justify-center">*/}
            {/*    <div className="rounded-full px-3 py-1 text-lg ring-1 bg-blue-100 font-medium leading-6 text-black">*/}
            {/*        18<sup>th</sup> -20<sup>th</sup> Sept 2026*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className="flex items-center flex-col align-middle gap-8 relative *:z-20 z-30">
                <p className="">Organized By</p>

                <div
                    className="flex flex-col justify-center items-center align-middle text-xl font-medum text-center gap-3 ">
                    <p className="badge badge-outline text-xl font-medium p-6">Department of Computer Science and
                        Engineering</p>
                    <p className="text-2xl">Motilal Nehru National Institute of Technology Allahabad, Prayagraj,
                        India</p>
                </div>
            </div>

            {/*<div className="flex md:flex-row flex-col text-xl justify-center items-center align-middle gap-5 mt-4">*/}
            {/*    <div onClick={() => window.open(cfp, "_blank")}*/}
            {/*         className="btn btn-outline border-[3px] border-red-600 bg-white text-black hover:bg-neutral-200 hover:text-black  ">Call*/}
            {/*        for*/}
            {/*        Papers <GrDocumentPdf/>*/}
            {/*    </div>*/}
            {/*    <Link*/}
            {/*        className="btn btn-outline border-2 border-primary bg-white text-black hover:bg-neutral-200 hover:text-black  "*/}
            {/*        to={"/submissionGuidelines"}>Paper Submission</Link>*/}
            {/*    <div onClick={() => window.open(schedule, "_blank")}*/}
            {/*         className="btn btn-outline border-[3px] bg-white text-black hover:bg-neutral-200 hover:text-black  ">Call*/}

            {/*        Conference Schedule*/}
            {/*        <GrDocumentPdf/>*/}

            {/*    </div>*/}
            {/*    <div*/}
            {/*        className="relative btn btn-outline border-[3px] border-red-600 bg-[#FF081C] hover:bg-[#FF081C] text-white hover:scale-105  ">*/}
            {/*        <Link to={"/conferenceImages"}>Glimpse of NGNDAI-2026</Link>*/}
            {/*        <div*/}
            {/*            className="animate-ping bg-yellow-400 text-red-600 rounded-full absolute -top-3 -right-3 w-[20px] h-[20px]"></div>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </div>
    </div>;
}

export default Banner;
