import React, {useEffect, useState} from 'react';

import MNNIT1 from "../../assets/images/MNNITImages/1.jpg";
import MNNIT2 from "../../assets/images/MNNITImages/2.jpeg";
import MNNIT3 from "../../assets/images/MNNITImages/3.jpg";
import MNNIT4 from "../../assets/images/MNNITImages/4.jpg";


function Carousal() {
    const images = [
        MNNIT1, MNNIT2, MNNIT3, MNNIT4
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = 5000;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    useEffect(() => {
        const autoSlide = setInterval(nextSlide, slideInterval);
        return () => clearInterval(autoSlide);
    }, []);

    return (


        <div className="w-full h-full">
            {/* Slides */}
            {images.map((image, index) => (<div
                key={index}
                className={`carousel-item absolute w-full h-full transition-all duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
                <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="h-full w-full object-cover"
                />
            </div>))}

            {/* Slide Indicators */}
            <div className="hidden z-30 absolute bottom-4 right-0 -translate-x-1/2 md:flex transform space-x-2">
                {images.map((_, index) => (<button
                    key={index}
                    className={`w-4 h-4 rounded-full ${index === currentSlide ? 'bg-accent' : 'bg-white'}`}
                    onClick={() => setCurrentSlide(index)}
                ></button>))}
            </div>

        </div>);
};

export default Carousal;
