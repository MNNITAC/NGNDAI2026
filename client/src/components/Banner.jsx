import React from "react";
import Carousal from "./Miscellaneous/Carousal.jsx";
import cfp from "../assets/documents/CFP NGNDAI-2026.pdf";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/submissionGuidelines");
  };

  return (
    <div
      id="Banner"
      className={`relative w-full h-full bg-cover bg-right bg-no-repeat font-playfair`}
    >
      <div className="w-full h-full">
        <Carousal />
      </div>

      <div className=" text-white bg-black bg-opacity-65 mx-auto w-full py-4 flex flex-col justify-center items-center align-middle relative *:z-20">
        {/*<img src={logo} alt="MNNIT logo" className="w-28 z-50 absolute top-0 left-0 translate-x-1/2 translate-y-1/4"/>*/}

        <div className="text-3xl flex flex-col items-center max-w-4xl text-center z-1">
          <h1 className="font-playfair font-thin">
            2<sup>nd</sup> International Conference on
          </h1>

          <h1 className="font-bold text-5xl leading-[60px] rounded-lg p-4 font-playfair">
            {" "}
            Next-Generation Networks and Deployable Artificial Intelligence
          </h1>
          <h1 className="font-playfair font-thin mb-1">(NGNDAI-2026)</h1>
        </div>

        <div className="m-4 flex justify-center">
          <div className="rounded-full px-3 py-1 text-lg ring-1 bg-blue-100 font-medium leading-6 text-black">
            24<sup>th</sup> -26<sup>th</sup> Sept 2026
          </div>
        </div>

        <div className="flex items-center flex-col align-middle gap-8 relative *:z-20 z-30">
          <p className="">Organized By</p>

          <div className="flex flex-col justify-center items-center align-middle text-xl font-medum text-center gap-3 ">
            <p className="badge badge-outline text-xl font-medium p-6">
              Department of Computer Science and Engineering
            </p>
            <p className="text-2xl">
              Motilal Nehru National Institute of Technology Allahabad,
              Prayagraj, India
            </p>
          </div>
        </div>
        {/* 
            <div className="flex md:flex-row flex-col text-xl justify-center items-center align-middle gap-5 mt-4">
                <div onClick={() => window.open(cfp, "_blank")}
                     className="btn btn-outline border-[3px] border-red-600 bg-white text-black hover:bg-neutral-200 hover:text-black  ">Call for
                    Papers
                </div>
                <Link className="btn btn-outline border-2 border-primary bg-white text-black hover:bg-neutral-200 hover:text-black  "
                      to={"/submissionGuidelines"}>Paper Submission</Link>
            </div> */}

        <div className="mt-6 flex flex-wrap gap-6 justify-center">
          <div
            onClick={() => window.open(cfp, "_blank")}
            className="inline-flex items-center justify-center px-6 py-2 text-lg rounded-full border-[3px] border-red-600 bg-white text-black hover:bg-transparent hover:text-white hover:border-white transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600/40 font-semibold cursor-pointer"
            aria-label="Call for Papers"
          >
            Call for Papers
          </div>

          <div
            onClick={handleClick}
            className="inline-flex items-center justify-center px-6 py-2 text-lg rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-800 transition-colors duration-200 ease-in-out shadow-none hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Book of Abstracts"
          >
            Paper Submission Guidelines
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
