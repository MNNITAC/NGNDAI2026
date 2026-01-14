import React from "react";
import Carousal from "../components/CarouselPageComponents/Carousel.jsx";

function CarouselPage() {

    return (<main className="flex w-full flex-col items-center justify-center align-middle max-w-[1400px] min-h-[calc(100vh-5rem)]">
        <div className="w-full flex justify-center">
            <Carousal/>
        </div>
    </main>)
}

export default CarouselPage;