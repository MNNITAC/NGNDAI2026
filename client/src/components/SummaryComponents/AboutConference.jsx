import React from "react";
import mnnit from "../../assets/images/mnnit1.jpg";

function About() {
    return (
        <section
            id="about conference"
            className="mb-8 mt-6 flex-col rounded-md text-base-content w-full flex items-center scroll-mt-16"
        >
            <div className="max-w-[1100px]">
                <h2 className="text-center text-primary text-4xl font-bold leading-normal mb-2 lg:text-start font-playfair">
                    About the Conference
                </h2>

                <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-[2fr_1fr]">
                    <div className="text-justify text-base font-normal *:mb-3">
                        <p>
                            The Department of Computer Science and Engineering, Motilal Nehru National Institute
                            of Technology (MNNIT), Allahabad successfully hosted the{" "}
                            <span className="font-medium">
                                International Conference on Next-Generation Networks and Deployable Artificial
                                Intelligence (NGNDAI-2025)
                            </span>{" "}
                            from <span className="font-medium">18th to 20th September 2025</span>. The three-day
                            international event brought together researchers, academicians, students, and
                            industry experts from India and abroad to deliberate on emerging trends and future
                            directions in intelligent networks and deployable artificial intelligence.
                        </p>

                        <p>
                            NGNDAI-2025 focused on a wide spectrum of themes including artificial intelligence,
                            machine learning, robotics, 5G/6G communication systems, Internet of Things (IoT),
                            quantum computing, and intelligent networked systems. With a strong emphasis on
                            bridging the gap between academia and industry, the conference served as a vibrant
                            platform for knowledge sharing, innovation, and interdisciplinary collaboration.
                        </p>

                        <p>
                            The conference witnessed overwhelming participation, receiving{" "}
                            <span className="font-medium">576 research paper submissions</span>. After a rigorous
                            peer-review process, <span className="font-medium">117 papers were accepted</span>,
                            out of which <span className="font-medium">103 papers were registered and presented</span>.
                            The accepted papers were organized into{" "}
                            <span className="font-medium">21 technical sessions</span>, reflecting the diversity
                            and depth of ongoing research in AI and next-generation communication technologies.
                        </p>
                    </div>

                    <div className="overflow-hidden w-full h-full rounded-md">
                        <img
                            className="hover:scale-105 transition-all duration-300 ease-in h-full object-cover"
                            src={mnnit}
                            alt="NGNDAI-2025 Conference"
                        />
                    </div>
                </div>

                <div className="mt-1 text-justify *:mb-3">

                    <p>
                        The event also witnessed active participation from industry partners and national
                        research organizations, reinforcing the importance of industry–academia collaboration
                        in driving deployable, scalable, and impactful AI solutions. This balanced participation
                        significantly enhanced the practical relevance of the conference.
                    </p>

                    <p>
                        Overall, NGNDAI-2025 was widely acknowledged as a resounding success. With strong
                        international participation, well-structured technical sessions, impactful keynote
                        lectures, and meaningful industry engagement, the conference achieved its objective of
                        promoting innovation, addressing emerging challenges, and shaping future research
                        directions in artificial intelligence and next-generation networks.
                    </p>

                    <p>
                        The outcomes of NGNDAI-2025 have laid a strong foundation for future editions of the
                        conference, reinforcing its role as a premier platform for advancing deployable
                        artificial intelligence and intelligent communication technologies.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
