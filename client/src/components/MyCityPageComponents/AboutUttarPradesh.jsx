import React, {useEffect, useState} from 'react';
import {IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";
import img1 from "../../assets/images/UP images compressed/1.jpeg";
import img2 from "../../assets/images/UP images compressed/2.jpeg";
import img3 from "../../assets/images/UP images compressed/3.jpeg";
import img4 from "../../assets/images/UP images compressed/4.jpeg";
import img5 from "../../assets/images/UP images compressed/5.jpeg";
import img6 from "../../assets/images/UP images compressed/6.jpeg";
import img7 from "../../assets/images/UP images compressed/7.jpeg";
import img8 from "../../assets/images/UP images compressed/8.jpeg";
import img9 from "../../assets/images/UP images compressed/9.jpeg";
import img10 from "../../assets/images/UP images compressed/10.jpeg";
import img11 from "../../assets/images/UP images compressed/11.jpeg";
import img12 from "../../assets/images/UP images compressed/12.jpeg";

const AboutUttarPradesh = () => {
    const images = [{src: img1}, {src: img2}, {src: img3}, {src: img4}, {src: img5}, {src: img6}, {src: img7}, {src: img8}, {src: img9}, {src: img10}, {src: img11}, {src: img12}];


    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = 3000; // Time between slides in ms (3 seconds)

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    // Auto slide change
    useEffect(() => {
        const autoSlide = setInterval(nextSlide, slideInterval);
        return () => clearInterval(autoSlide); // Cleanup interval on component unmount
    }, []);

    return (<section
            id="About Uttar Pradesh"
            className=" flex-col rounded-md shadow-sm text-base-content w-full flex items-center lg:p-8">

            <div className="max-w-[1100px]"><h2 className="text-4xl font-playfair font-bold  text-primary">About Uttar
                Pradesh</h2>

                <div className="grid items-center gap-8 md:grid-cols-2">

                    <p className="text-justify text-base font-normal leading-relaxed">Uttar
                        Pradesh, located in northern India, is a state rich in cultural heritage, history, and
                        diversity.
                        Known as the birthplace of Indian civilization, it is home to several iconic landmarks,
                        including
                        the majestic Taj Mahal in Agra, a UNESCO World Heritage site. Uttar Pradesh also boasts sacred
                        cities like Varanasi and Ayodhya, which hold deep spiritual significance for Hindus. The state’s
                        vibrant traditions are reflected in its festivals, classical dance forms, and music. With a mix
                        of
                        bustling cities and rural landscapes, Uttar Pradesh is a captivating destination that showcases
                        the
                        essence of India’s history and culture.</p>


                    <div className="relative h-80 w-full rounded-lg carousel">
                        {/* Slides */}
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-item absolute w-full h-full transition-all duration-700 ${
                                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img
                                    src={image.src}
                                    alt={`Slide ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-4 h-4 rounded-full ${
                                        index === currentSlide ? 'bg-accent' : 'bg-white'
                                    }`}
                                    onClick={() => setCurrentSlide(index)}
                                ></button>
                            ))}
                        </div>

                        {/* Previous Button */}
                        <button
                            className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
                            onClick={prevSlide}
                        >
                            <IoChevronBackOutline/>
                        </button>

                        {/* Next Button */}
                        <button
                            className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
                            onClick={nextSlide}
                        >
                            <IoChevronForwardOutline/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUttarPradesh;
