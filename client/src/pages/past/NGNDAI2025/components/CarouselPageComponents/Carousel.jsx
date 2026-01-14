import React, {useEffect, useState, useRef} from 'react';

import img1 from "../../assets/images/NewsPaperCuttings/img1.jpeg"
import img2 from "../../assets/images/NewsPaperCuttings/img2.jpeg"
import img3 from "../../assets/images/NewsPaperCuttings/img3.jpeg"
import img4 from "../../assets/images/NewsPaperCuttings/img4.jpeg"
import img5 from "../../assets/images/NewsPaperCuttings/img5.jpeg"
import img6 from "../../assets/images/NewsPaperCuttings/img6.jpeg"
import img7 from "../../assets/images/NewsPaperCuttings/img7.jpeg"

const images = [img1, img2, img3, img4, img5, img6, img7];

function Carousal() {


   const [current, setCurrent] = useState(0);
   const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetInterval();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">

      {/* Image */}
      <img
        src={images[current]}
        alt="news"
        className="w-full h-[250px] md:h-[400px] object-contain bg-black transition-all duration-500"
      />

      {/* Left button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
      >
        ❮
      </button>

      {/* Right button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetInterval(); }}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousal;
