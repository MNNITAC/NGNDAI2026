import React, {useEffect, useState, useRef} from 'react';

import img1 from "../../assets/images/NewsPaperCuttings/img1.jpeg"
import img2 from "../../assets/images/NewsPaperCuttings/img2.jpeg"
import img3 from "../../assets/images/NewsPaperCuttings/img3.jpeg"
import img4 from "../../assets/images/NewsPaperCuttings/img4.jpeg"
import img5 from "../../assets/images/NewsPaperCuttings/img5.jpeg"
import img6 from "../../assets/images/NewsPaperCuttings/img6.jpeg"
import img7 from "../../assets/images/NewsPaperCuttings/img7.jpeg"
import img8 from "../../assets/images/NewsPaperCuttings/img8.jpeg"
import img9 from "../../assets/images/NewsPaperCuttings/img9.jpeg"
import img10 from "../../assets/images/NewsPaperCuttings/img10.jpeg"
import img11 from "../../assets/images/NewsPaperCuttings/img11.jpeg"
import img12 from "../../assets/images/NewsPaperCuttings/img12.jpeg"
import img13 from "../../assets/images/NewsPaperCuttings/img13.jpeg"
import img14 from "../../assets/images/NewsPaperCuttings/img14.jpeg"
import img17 from "../../assets/images/NewsPaperCuttings/img17.jpeg"
import img18 from "../../assets/images/NewsPaperCuttings/img18.jpeg"
import img19 from "../../assets/images/NewsPaperCuttings/img19.jpeg"
import img20 from "../../assets/images/NewsPaperCuttings/img20.jpeg"
import img21 from "../../assets/images/NewsPaperCuttings/img21.jpeg"
import img22 from "../../assets/images/NewsPaperCuttings/img22.jpeg"
import img23 from "../../assets/images/NewsPaperCuttings/img23.jpeg"
import img24 from "../../assets/images/NewsPaperCuttings/img24.jpeg"
import img25 from "../../assets/images/NewsPaperCuttings/img25.jpeg"
import img26 from "../../assets/images/NewsPaperCuttings/img26.jpeg"
import img27 from "../../assets/images/NewsPaperCuttings/img27.jpeg"
import img28 from "../../assets/images/NewsPaperCuttings/img28.jpeg"
import img29 from "../../assets/images/NewsPaperCuttings/img29.jpeg"


const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27 , img28, img29
];
const displayImages = [images[images.length - 1], ...images, images[0]];

function Carousal() {


   const [current, setCurrent] = useState(1);
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
    setCurrent((prev) => (prev <= 1 ? displayImages.length - 2 : prev - 1));
    resetInterval();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= displayImages.length - 2 ? 1 : prev + 1));
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
    <div className="relative w-full overflow-hidden rounded-xl">

      {/* Images container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ width: '100vw', transform: `translateX(-${(100 / 3) * current}%)` }}
      >
        {displayImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`news ${i + 1}`}
            className={`w-1/3 h-[250px] md:h-[400px] object-cover object-top flex-shrink-0 ${(i === (current + 1) % displayImages.length) ? 'border-[5px] border-purple-500 hover:border-[10px]' : ''}`}
          />
        ))}
      </div>

      {/* Left button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-300 text-black rounded-none hover:bg-purple-400 flex items-center justify-center"
      >
        ❮
      </button>

      {/* Right button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-300 text-black rounded-none hover:bg-purple-400 flex items-center justify-center"
      >
        ❯
      </button>

      {/* Dots */}
      {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i + 1); resetInterval(); }}
            className={`w-3 h-3 rounded-full ${
              i === current - 1 ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousal;
