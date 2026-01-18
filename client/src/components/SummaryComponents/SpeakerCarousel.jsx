import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const speakersData = [
  {
    id: 1,
    name: "Prof. P. N. Suganthan",
    role: "Keynote Speaker & Lifestyle Coach",
    bio: "I'm a presenter, keynote speaker, fitness professional, and performing artist. I've had a successful creative career across Australia, Canada, and the UK working with top international brands.",
    image: "/api/placeholder/800/600",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 2,
    name: "Prof. Ram Bilas Pachori",
    role: "Tech Innovator & CEO",
    bio: "Sarah has spent the last decade leading engineering teams in Silicon Valley. She specializes in AI ethics and scalable architecture and works tirelessly to bridge the digital divide.",
    image: "/api/placeholder/800/600", 
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 3,
    name: "Dr. Aditya Nigam",
    role: "Neuroscientist",
    bio: "An award-winning researcher focusing on memory and cognitive plasticity. Dr. Reza is passionate about translating complex scientific concepts into actionable advice for daily mental health.",
    image: "/api/placeholder/800/600", 
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 4,
    name: "Mr. Mehul Aggarwal",
    role: "Neuroscientist",
    bio: "An award-winning researcher focusing on memory and cognitive plasticity. Dr. Reza is passionate about translating complex scientific concepts into actionable advice for daily mental health.",
    image: "/api/placeholder/800/600", 
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 5,
    name: "Mr. Anurag Pandey",
    role: "Neuroscientist",
    bio: "An award-winning researcher focusing on memory and cognitive plasticity. Dr. Reza is passionate about translating complex scientific concepts into actionable advice for daily mental health.",
    image: "/api/placeholder/800/600", 
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 6,
    name: "Mr. Manish Bajpai",
    role: "Neuroscientist",
    bio: "An award-winning researcher focusing on memory and cognitive plasticity. Dr. Reza is passionate about translating complex scientific concepts into actionable advice for daily mental health.",
    image: "/api/placeholder/800/600", 
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 7,
    name: "Prof. Girija Chetty",
    role: "Neuroscientist",
    bio: "An award-winning researcher focusing on memory and cognitive plasticity. Dr. Reza is passionate about translating complex scientific concepts into actionable advice for daily mental health.",
    image: "/api/placeholder/800/600", 
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 8,
    name: "Prof. Sukumar Nandi",
    role: "Neuroscientist",
    bio: "An award-winning researcher focusing on memory and cognitive plasticity. Dr. Reza is passionate about translating complex scientific concepts into actionable advice for daily mental health.",
    image: "/api/placeholder/800/600", 
    linkedinUrl: "https://linkedin.com"
  },
];

const SpeakerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // 1. Refs for Auto-Scrolling
  const tabsRef = useRef(null);
  const itemsRef = useRef([]);

  // 2. Carousel Interval
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % speakersData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // 3. Auto-Scroll Logic
  useEffect(() => {
    if (tabsRef.current && itemsRef.current[activeIndex]) {
      const tabContainer = tabsRef.current;
      const activeTab = itemsRef.current[activeIndex];

      // Calculate the scroll position to center the active tab
      // Formula: (Tab's Left Offset) - (Half of Container Width) + (Half of Tab Width)
      const scrollPos = 
        activeTab.offsetLeft - 
        (tabContainer.clientWidth / 2) + 
        (activeTab.clientWidth / 2);

      tabContainer.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const activeSpeaker = speakersData[activeIndex];

  return (
    <section id = "keynote-speakers" className="flex-col rounded-md shadow-sm text-base-content w-full flex items-center bg-base-200/40 py-6 scroll-mt-16">
      
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
        
        <h2 className="text-center text-primary text-4xl font-bold leading-normal mb-8 lg:text-start font-playfair">
          Keynote Speakers
        </h2>

        {/* Scrollable Navigation Bar */}
        <div 
          ref={tabsRef} // Attached Ref to Container
          className="
            flex 
            w-full 
            overflow-x-auto 
            whitespace-nowrap 
            gap-8 
            mb-8 
            border-b border-gray-200 
            pb-2 
            hide-scrollbar
            scroll-smooth
          "
        >
          {speakersData.map((speaker, index) => (
            <button
              key={speaker.id}
              ref={(el) => itemsRef.current[index] = el} // Store ref for each button
              onClick={() => setActiveIndex(index)}
              className={`
                text-lg font-medium transition-all duration-300 pb-2 relative flex-shrink-0
                ${activeIndex === index ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}
              `}
            >
              {speaker.name}
              <span 
                className={`absolute bottom-[-9px] left-0 h-0.5 bg-gray-800 transition-all duration-300
                  ${activeIndex === index ? 'w-full' : 'w-0'}
                `}
              />
            </button>
          ))}
        </div>

        {/* Card Component */}
        <div 
          className="relative bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden flex flex-col md:flex-row w-full transition-opacity duration-500 ease-in-out mb-4"
          style={{ minHeight: '350px' }}
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