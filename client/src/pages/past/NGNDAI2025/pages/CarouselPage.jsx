import React from "react";
import Carousal from "../components/CarouselPageComponents/Carousel.jsx";

function CarouselPage() {

    return (<main className="flex w-screen flex-col items-center justify-center align-middle min-h-[calc(100vh-5rem)] overflow-x-hidden relative">
        {/* Background circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-purple-300 rounded-full opacity-25"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-35"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-300 rounded-full opacity-20"></div>
        <div className="absolute top-10 right-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 left-1/3 w-50 h-36 bg-purple-300 rounded-full opacity-15"></div>
        <div className="absolute top-3/4 left-10 w-22 h-22 bg-purple-300 rounded-full opacity-45"></div>
        <div className="absolute top-1/4 right-10 w-18 h-18 bg-purple-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 left-2/3 w-26 h-26 bg-purple-300 rounded-full opacity-40"></div>
        <h2
                className="text-center text-primary text-4xl font-bold leading-normal mb-2 lg:text-start font-playfair relative z-10">
                Glimpses of NGNDAI2025 </h2>
        <div className="w-full flex justify-center mt-8 relative z-10">
            <Carousal/>
        </div>
    </main>)
}

export default CarouselPage;