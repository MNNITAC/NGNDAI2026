import React, { useState } from "react";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Mousewheel, Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Image Imports
import img1 from "../../assets/images/NewsPaperCuttings/img1.jpeg";
import img2 from "../../assets/images/NewsPaperCuttings/img2.jpeg";
import img3 from "../../assets/images/NewsPaperCuttings/img3.jpeg";
import img4 from "../../assets/images/NewsPaperCuttings/img4.jpeg";
import img5 from "../../assets/images/NewsPaperCuttings/img5.jpeg";
import img6 from "../../assets/images/NewsPaperCuttings/img6.jpeg";
import img7 from "../../assets/images/NewsPaperCuttings/img7.jpeg";
import img8 from "../../assets/images/NewsPaperCuttings/img8.jpeg";
import img9 from "../../assets/images/NewsPaperCuttings/img9.jpeg";
import img10 from "../../assets/images/NewsPaperCuttings/img10.jpeg";
import img11 from "../../assets/images/NewsPaperCuttings/img11.jpeg";
import img12 from "../../assets/images/NewsPaperCuttings/img12.jpeg";
import img13 from "../../assets/images/NewsPaperCuttings/img13.jpeg";
import img14 from "../../assets/images/NewsPaperCuttings/img14.jpeg";
import img17 from "../../assets/images/NewsPaperCuttings/img17.jpeg";
import img18 from "../../assets/images/NewsPaperCuttings/img18.jpeg";
import img19 from "../../assets/images/NewsPaperCuttings/img19.jpeg";
import img20 from "../../assets/images/NewsPaperCuttings/img20.jpeg";
import img21 from "../../assets/images/NewsPaperCuttings/img21.jpeg";
import img22 from "../../assets/images/NewsPaperCuttings/img22.jpeg";
import img23 from "../../assets/images/NewsPaperCuttings/img23.jpeg";
import img24 from "../../assets/images/NewsPaperCuttings/img24.jpeg";
import img25 from "../../assets/images/NewsPaperCuttings/img25.jpeg";
import img26 from "../../assets/images/NewsPaperCuttings/img26.jpeg";
import img27 from "../../assets/images/NewsPaperCuttings/img27.jpeg";
import img28 from "../../assets/images/NewsPaperCuttings/img28.jpeg";
import img29 from "../../assets/images/NewsPaperCuttings/img29.jpeg";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14,
  img17, img18, img19, img20, img21, img22, img23,
  img24, img25, img26, img27, img28, img29,
];

const NewspaperCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeZoom = () => setSelectedImage(null);

  return (
    <section
      id="media-coverage"
      // Removed "flex items-center" from parent so children can handle their own width
      className="flex flex-col rounded-md shadow-sm text-base-content w-full bg-base-200/40 py-8"
    >
      {/* 1. Heading Container - Constrained Width */}
      <div className="w-full max-w-[1100px] mx-auto px-4 mb-2">
        <h2 className="text-4xl font-bold text-primary font-playfair">
          Media Coverage
        </h2>
      </div>

      {/* 2. Carousel Container - Full Width */}
      <div className="w-full">
        <div className="relative w-full overflow-hidden bg-gray-100">
          <style>{`
          .news-swiper-container {
            width: 100%;
            height: 300px; 
            padding: 20px 0 40px 0;
            
            /* Apply primary color to Swiper theme variables */
            --swiper-theme-color: currentColor;
            --swiper-pagination-bullet-inactive-color: #999;
          }
          
          @media (min-width: 768px) {
            .news-swiper-container {
              height: 500px;
            }
          }

          /* Force the active dot to use the current text color (text-primary) */
          .swiper-pagination-bullet-active {
            background-color: currentColor !important;
            opacity: 1;
          }

          .variable-width-slide {
            width: auto !important;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
            z-index: 1; 
          }

          .clipping-card {
            height: 90%; 
            background: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 5px;
            transition: all 0.3s ease;
            cursor: zoom-in;
          }

          .swiper-slide-active .clipping-card {
            transform: scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            z-index: 10;
          }

          .clipping-card img {
            display: block;
            height: 100%; 
            width: auto;
            object-fit: contain;
            pointer-events: none;
          }
        `}</style>

          <Swiper
            modules={[Pagination, Keyboard, Mousewheel, Autoplay]}
            // Added text-primary here so 'currentColor' in CSS picks up the heading color
            className="news-swiper-container text-primary"
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            keyboard={{ enabled: true }}
            mousewheel={true}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="variable-width-slide">
                <div
                  className="clipping-card"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`news ${i + 1}`} loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Zoom Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 p-4 backdrop-blur-sm"
          onClick={closeZoom}
        >
          <button
            onClick={closeZoom}
            className="absolute top-5 right-5 text-white text-4xl opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Close zoom"
          >
            &times;
          </button>

          <img
            src={selectedImage}
            alt="Zoomed clipping"
            className="max-h-full max-w-full object-contain select-none shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default NewspaperCarousel;