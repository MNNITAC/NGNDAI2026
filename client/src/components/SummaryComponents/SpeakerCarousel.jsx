import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";


const speakersData = [
  {
    id: 1,
    name: "Prof. Ram Bilas Pachori",
    role: "IIT Indore, Indore, India",
    bio: "Discussed the growing importance of adaptive signal decomposition techniques for analyzing non-stationary signals...",
    image: new URL("../../assets/images/SummeryKeynotes/ram_bilas_pachori.jpg", import.meta.url).href,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Dr. Aditya Nigam",
    role: "IIT Mandi, Mandi, India",
    bio: "Focused on the evolution of foundational AI models such as GPT, DinoV2, and SAM and their impact...",
    image: new URL("../../assets/images/SummeryKeynotes/aditya_nigam.jpg", import.meta.url).href,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Mr. Mehul Aggarwal",
    role: "Practice Head-AI Division, ERS, HCLTech",
    bio: "Discussed the challenges of moving AI solutions from proof-of-concept to reliable deployments...",
    image: new URL("../../assets/images/SummeryKeynotes/mehul_aggarwal.jpg", import.meta.url).href,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Mr. Anurag Pandey",
    role: "Capability Head, Computer Vision, HCLTech, Noida",
    bio: "Highlighted the role of Reinforcement Learning in enabling hyper-personalized systems...",
    image: new URL("../../assets/images/SummeryKeynotes/anurag_pandey.jpg", import.meta.url).href,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Mr. Manish Bajpai",
    role: "COO & Head-Products, Nivetti Systems",
    bio: "Discussed the critical role of networks in powering modern digital innovation and AI...",
    image: new URL("../../assets/images/SummeryKeynotes/manish_bajpai.jpg", import.meta.url).href,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Prof. Girija Chetty",
    role: "University of Canberra, Australia",
    bio: "Explored multimodal generative AI and its ability to unify text, images, audio, and video...",
    image: new URL("../../assets/images/SummeryKeynotes/girija_chetty.jpg", import.meta.url).href,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 7,
    name: "Prof. Sukumar Nandi",
    role: "IIT Guwahati, Guwahati, India",
    bio: "Highlighted the evolution of Device-to-Device communication and its role in 6G networks...",
    image: new URL("../../assets/images/SummeryKeynotes/sukumar_nandi.jpg", import.meta.url).href,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 8,
    name: "Prof. P. N. Suganthan",
    role: "Qatar University, Qatar",
    bio: "Discussed randomization-based feedforward learning paradigms for efficient model training...",
    image: "/api/placeholder/800/600",
    linkedinUrl: "https://linkedin.com",
  },
];

const SpeakerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 1. Refs for Auto-Scrolling
  const tabsRef = useRef(null);
  const itemsRef = useRef([]);

  // 2. Carousel Interval (auto change speaker)
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % speakersData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // 3. Auto-Scroll Logic (center active name button)
  useEffect(() => {
    if (tabsRef.current && itemsRef.current[activeIndex]) {
      const tabContainer = tabsRef.current;
      const activeTab = itemsRef.current[activeIndex];

      // Calculate the scroll position to center the active tab
      const scrollPos =
        activeTab.offsetLeft -
        tabContainer.clientWidth / 2 +
        activeTab.clientWidth / 2;

      tabContainer.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const activeSpeaker = speakersData[activeIndex];

  return (
    <section
      id="keynote-speakers"
      className="flex-col rounded-md shadow-sm text-base-content w-full flex items-center bg-base-200/40 py-6 scroll-mt-16"
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="w-full max-w-[1100px]">
        <h2 className="text-center text-primary text-4xl font-bold leading-normal mb-6 lg:text-start font-playfair">
          Keynote Speakers
        </h2>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 mb-3">
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                (prev - 1 + speakersData.length) % speakersData.length
              )
            }
            className="px-3 py-1.5 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition flex items-center justify-center"
            aria-label="Previous speaker"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % speakersData.length)
            }
            className="px-3 py-1.5 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition flex items-center justify-center"
            aria-label="Next speaker"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Scrollable Navigation Bar */}
        <div
          ref={tabsRef}
          className="
            flex 
            w-full 
            overflow-x-auto 
            whitespace-nowrap 
            gap-3 
            mb-8 
            pb-2 
            hide-scrollbar
            scroll-smooth
          "
        >
          {speakersData.map((speaker, index) => (
            <button
              key={speaker.id}
              ref={(el) => (itemsRef.current[index] = el)}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 flex-shrink-0
                ${activeIndex === index
                  ? "bg-gray-900 text-white border-gray-900 shadow-md scale-105"
                  : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-800"
                }`}
            >
              {speaker.name}
            </button>
          ))}
        </div>

        {/* Card Component */}
        <div
          className="relative bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden flex flex-col md:flex-row w-full transition-opacity duration-500 ease-in-out mb-4"
          style={{ minHeight: "350px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-full md:w-3/12 relative h-64 md:h-auto bg-gray-100 shrink-0">
            <img
              src={activeSpeaker.image}
              alt={activeSpeaker.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="w-full md:w-9/12 p-6 md:p-8 flex flex-col justify-center bg-gray-50/50">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                {activeSpeaker.name}
              </h2>
              <a
                href={activeSpeaker.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors duration-200 mt-1"
                title="View LinkedIn Profile"
              >
                <ExternalLink size={24} />
              </a>
            </div>

            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              {activeSpeaker.role}
            </p>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-4xl">
              {activeSpeaker.bio}
            </p>
          </div>

          <div className="absolute top-0 right-0 w-48 h-48 bg-gray-100 rounded-bl-full -z-10 opacity-50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default SpeakerCarousel;
