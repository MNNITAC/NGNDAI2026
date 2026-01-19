import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const speakersData = [

  {
    id: 1,
    name: "Prof. Ram Bilas Pachori",
    role: "IIT Indore, Indore, India",
    bio: "Discussed the growing importance of adaptive signal decomposition techniques for analyzing non-stationary signals. Explored methods inspired by empirical mode decomposition, including empirical wavelet transform and iterative filtering, along with their extensions to multichannel signal processing. Presented frameworks combining multivariate EWT, iterative filtering, and machine learning for brain disease diagnosis using EEG signals, demonstrating effectiveness in conditions such as epilepsy and schizophrenia.",
    image: new URL("../../assets/images/SummeryKeynotes/ram_bilas_pachori.jpg", import.meta.url).href,
    linkedinUrl: "https://people.iiti.ac.in/~pachori/",
  },
  {
    id: 2,
    name: "Dr. Aditya Nigam",
    role: "IIT Mandi, Mandi, India",
    bio: "Focused on the evolution of foundational AI models such as GPT, DinoV2, and SAM and their impact on modern AI. The session highlighted parameter-efficient fine-tuning techniques like Adapters, LoRA, and QLoRA. It also focused on enabling efficient and scalable deployment of large models under computational constraints.",
    image: new URL("../../assets/images/SummeryKeynotes/aditya_nigam.jpg", import.meta.url).href,
    linkedinUrl: "https://faculty.iitmandi.ac.in/~aditya/",
  },
  {
    id: 3,
    name: "Mr. Mehul Aggarwal",
    role: "Practice Head-AI Division, ERS, HCLTech",
    bio: "Discussed the challenges of moving AI solutions from proof-of-concept to reliable, 24/7 production deployments in real customer environments. Explored the importance of building and deploying responsible AI, addressing concerns such as bias, ethics, and regulatory compliance with frameworks like NIST AI RMF, the EU AI Act, and ISO guidelines. Highlighted structured validation approaches, field issue anticipation, and evaluation methods, along with the tools and metrics required to make AI and GenAI applications deployment-ready.",
    image: new URL("../../assets/images/SummeryKeynotes/mehul_aggarwal.jpg", import.meta.url).href,
    linkedinUrl: "https://www.linkedin.com/in/mehulag/",
  },
  {
    id: 4,
    name: "Mr. Anurag Pandey",
    role: "Capability Head, Computer Vision, HCLTech, Noida",
    bio: "Highlighted the role of Reinforcement Learning in enabling hyper-personalized systems through continuous real-time learning. Explored the transition from static, rule-based approaches to adaptive models. Discussed applications in healthcare and e-commerce that deliver more responsive and user-centric experiences.",
    image: new URL("../../assets/images/SummeryKeynotes/anurag_pandey.jpg", import.meta.url).href,
    linkedinUrl: "https://www.linkedin.com/in/anurag-pandey-5244b885/",
  },
  {
    id: 5,
    name: "Mr. Manish Bajpai",
    role: "COO & Head-Products, Nivetti Systems",
    bio: "Disussed about the critical role of networks in powering modern digital innovation and AI, particularly in connecting distributed GPU clusters for fast inference. The talk explored how the rise of agentic and edge AI is expanding networking beyond data centers to LAN, WAN, and broadband infrastructures. It also provided market-driven insights into how networks will evolve for AI and by AI in the emerging AI era.",
    image: new URL("../../assets/images/SummeryKeynotes/manish_bajpai.jpg", import.meta.url).href,
    linkedinUrl: "https://www.linkedin.com/in/manish-bajpai-83387b3/",
  },
  {
    id: 6,
    name: "Prof. Girija Chetty",
    role: "University of Canberra, Australia",
    bio: "Explored multimodal generative AI and its ability to unify text, images, audio, and video within a single framework. Presented research on integrating multimodal and agentic generative AI to build autonomous systems. Highlighted AI agents capable of perception, reasoning, planning, and adaptation across complex environments.",
    image: new URL("../../assets/images/SummeryKeynotes/girija_chetty.jpg", import.meta.url).href,
    linkedinUrl: "https://www.linkedin.com/in/girija-chetty-680542227/",
  },
  {
    id: 7,
    name: "Prof. Sukumar Nandi",
    role: "IIT Guwahati, Guwahati, India",
    bio: "Highlighted the evolution of Device-to-Device (D2D) communication and its role in supporting V2X, IoT, and immersive AR/VR systems through direct device links. Explored challenges in device discovery and resource allocation, presenting hybrid discovery models, adaptive probing, and cooperative network-assisted mechanisms. Examined the vision of AI-native 6G networks, highlighting AI-driven transmission, scheduling, reliability, mobility management, and the use of digital twins for closed-loop optimization enabling ultra-high performance next-generation networks.",
    image: new URL("../../assets/images/SummeryKeynotes/sukumar_nandi.jpg", import.meta.url).href,
    linkedinUrl: "https://www.iitg.ac.in/sukumar/",
  },
    {
    id: 8,
    name: "Prof. P. N. Suganthan",
    role: "Qatar University, Qatar",
    bio: "Discussed randomization-based feedforward learning paradigms that offer closed-form solutions for efficient model training. Covered methods such as random vector functional link neural networks, random weight neural networks, extreme learning machines, stochastic configuration networks, and broad learning systems, including deep RVFL implementations. Presented insights on hyperparameter tuning along with extensive benchmarking results on classification and forecasting datasets.",
    image: new URL("../../assets/images/SummeryKeynotes/epnsugan.jpg", import.meta.url).href,
    linkedinUrl: "https://www3.ntu.edu.sg/home/epnsugan/",
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

      // Clamp the scroll position so we never try to scroll past the bounds
      const maxScroll = Math.max(0, tabContainer.scrollWidth - tabContainer.clientWidth);
      const clamped = Math.max(0, Math.min(scrollPos, maxScroll));

      tabContainer.scrollTo({
        left: clamped,
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

  <div className="w-full max-w-[1100px] px-3">
  <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 mb-6">
          <h2 className="text-primary text-4xl font-bold leading-normal font-playfair text-center md:text-start">
            Keynote Speakers
          </h2>

          {/* Navigation Buttons aligned with heading */}
          <div className="flex gap-3">
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
        </div>

        {/* Scrollable Navigation Bar */}
        <div
          ref={tabsRef}
          className="
            flex
            w-full
            overflow-x-auto
            overflow-y-visible
            whitespace-nowrap
            gap-3
            mb-8
            py-2 px-1
            hide-scrollbar
            items-center
            scroll-smooth
          "
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* start spacer so the first pill can be centered without clipping */}
          <div className="flex-shrink-0 w-3 md:w-6" aria-hidden />

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
          {/* end spacer so the last pill can be centered without clipping */}
          <div className="flex-shrink-0 w-3 md:w-6" aria-hidden />
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
