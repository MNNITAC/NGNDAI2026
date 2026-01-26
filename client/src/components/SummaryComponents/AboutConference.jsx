import React from "react";
import mnnit from "../../assets/images/mnnit1.jpg";
import abs from "../../assets/documents/abstract.pdf"
import sch from "../../assets/documents/schedule.pdf"

function About() {

  return (
    <section
      id="about conference"
      className="flex-col text-base-content w-full flex items-center scroll-mt-16 relative bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${mnnit})`,
        backgroundPosition: "center 60%",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.72)]" />

      <div className="w-full max-w-[1100px] mx-auto px-4 md:px-4 py-8 md:py-12 relative z-10">
        <h2 className="text-center text-white text-4xl font-bold leading-normal mb-4 lg:text-start font-playfair">
          About the Conference
        </h2>

        <div className="text-justify text-base font-normal text-white/100 space-y-4">
          <p>
            The Department of Computer Science and Engineering, Motilal Nehru
            National Institute of Technology (MNNIT), Allahabad successfully
            hosted the 
            <span className="font-medium text-white"> International Conference on Next-Generation Networks and
              Deployable Artificial Intelligence (NGNDAI-2025)
            </span>
            from{" "}
            <span className="font-medium text-white">
              18th to 20th September 2025
            </span>
            . The three-day international event brought together researchers,
            academicians, students, and industry experts from India and abroad
            to deliberate on emerging trends and future directions in
            intelligent networks and deployable artificial intelligence.
          </p>

          <p>
            NGNDAI-2025 focused on a wide spectrum of contemporary research
            areas including artificial intelligence, machine learning, robotics,
            5G/6G communication systems, Internet of Things (IoT), quantum
            computing, and intelligent networked systems. With a strong emphasis
            on bridging the gap between academia and industry, the conference
            provided a vibrant platform for knowledge exchange, innovation, and
            interdisciplinary collaboration.
          </p>

          <p>
            The conference witnessed overwhelming participation from the global
            research community, receiving{" "}
            <span className="font-medium text-white">
              576 research paper submissions
            </span>
            . After a rigorous peer-review process,
            <span className="font-medium text-white">
              {" "}
              117 papers were accepted
            </span>
            , out of which
            <span className="font-medium text-white">
              {" "}
              103 papers were registered and presented
            </span>
            . The accepted papers were organized into
            <span className="font-medium text-white">
              21 well-structured technical sessions
            </span>
            , highlighting the depth, diversity, and quality of ongoing research
            in AI and next-generation communication technologies.
          </p>

          <p>
            In addition to academic contributions, the event saw active
            participation from industry partners and national research
            organizations, reinforcing the importance of industry–academia
            collaboration in developing deployable, scalable, and impactful
            artificial intelligence solutions. Overall, NGNDAI-2025 was widely
            acknowledged as a resounding success, achieving its objective of
            fostering innovation, addressing emerging challenges, and laying a
            strong foundation for future editions of the conference.
          </p>
        </div>

        {/* Badges: outline by default, filled on hover */}
         <div className="mt-6 flex flex-wrap gap-10 justify-center">
          <div
            onClick={() => window.open(sch, "_blank")}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-800 transition-colors duration-200 ease-in-out shadow-none hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Program Schedule"
          >
            Program Schedule NGNDAI-2025
          </div>

          <div
            onClick={() => window.open(abs, "_blank")}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-800 transition-colors duration-200 ease-in-out shadow-none hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Book of Abstracts"
          >
            Book of Abstracts NGNDAI-2025
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
