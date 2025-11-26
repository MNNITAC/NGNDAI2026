import React from "react";
import mnnit from "../../assets/images/mnnit1.jpg"


function About() {
    return (<section id="about conference"
                     className="mb-8 flex-col rounded-md text-base-content w-full flex items-center">
        <div className="max-w-[1100px]">
            <h2
                className="text-center text-primary text-4xl font-bold leading-normal mb-2 lg:text-start font-playfair">
                About conference </h2>
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-[2fr_1fr]">
                <div className="text-justify text-base font-normal *:mb-3">
                    <p><span className="font-medium">The 2<sup>nd</sup> International Conference on Next-Generation Networks and Deployable Artificial
                        Intelligence (NGNDAI-2026)</span> is a platform that brings together researchers, industry
                        experts,
                        and practitioners to explore cutting-edge developments in <span className="font-medium"> machine intelligence,
                        communication systems, and related technologies.</span> NGNDAI-2026 features diverse topics
                        including artificial intelligence, machine learning, intelligent networks, robotics, and
                        next-generation communication technologies such as 5G/6G and IoT. The conference aims to
                        foster collaboration across academia and industry, promote innovation in intelligent
                        systems
                        and communication networks, and address emerging challenges in related areas. With its
                        focus
                        on future technologies, NGNDAI-2026 is poised to advance the state-of-the-art in
                        intelligent
                        systems and redefine the landscape of communication technologies.</p>

                    <p>This conference aims to provide a worldwide forum, where international participants can
                        share their research knowledge and ideas on the recent and latest research in these
                        areas and map out the directions for future researchers and collaborations. This will pave the
                        way for undergraduate and postgraduate students to participate and learn new skills
                        supported by the industry at large.</p>
                </div>
                <div className="overflow-hidden w-full h-full rounded-md bg-red-700">
                    <img className=" hover:scale-105 transition-all duration-300 ease-in h-full object-cover"
                         src={mnnit}
                         alt="About Conference"/>
                </div>
            </div>
            <div className="mt-1 text-justify">
                <p>The conference has featured keynote talks, five technical sessions on different subject
                    tracks, an industry track, the inaugural and the valedictory sessions and contributed
                    papers. The goal of the conference is to become a premier venue for researchers and
                    industry
                    practitioners to share new ideas, research results and their enriching experiences in
                    various fields.</p>

                <div>
                    <p className="font-medium">The scope of NGNDAI-2026 covers the following themes but not
                        be limited to:</p>
                    <p><span className="font-medium underline">Track 1:</span> Artificial Intelligence and
                        Machine Learning</p>
                    <p><span className="font-medium underline">Track 2:</span> Software Defined Smart
                        Computer Networks</p>
                    <p><span className="font-medium underline">Track 3:</span> Cognitive Computing and
                        Brain-Inspired Systems</p>
                    <p><span className="font-medium underline">Track 4:</span> Quantum Computing and
                        Communications</p>
                    <p><span className="font-medium underline">Track 5:</span> Advances in the IoT, Fog and
                        Edge Computing and its Applications</p>
                </div>
                <p>Researchers especially from R&D agencies, industries and start-ups along with front-line
                    academic research workers are kindly requested to submit and present their work</p>

            </div>
        </div>
    </section>)
}

export default About;