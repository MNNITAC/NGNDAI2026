function TrackListing() {

    const data = [
        {
            trackNumber: "1",
            trackHeading: "Artificial Intelligence and Machine Learning",
            points: [
                "Activity Detection/ Recognition",
                "Biometrics, Forensics, Content Protection",
                "Compressed Image/ Video Analytics",
                "Deep Learning for Computer Vision",
                "Document and Synthetic Visual Processing",
                "Explainable AI and Generative AI",
                "Face, Iris, Emotion, Sign Language and Gesture Recognition",
                "Medical Image Analysis",
                "Human Computer Interaction",
                "Mathematical models of AI",
                "AI/ML for Geoinformatics",
                "Large Language Models"
            ]
        }, {
            trackNumber: "4",
            trackHeading: "Quantum Computing and Communications",
            points: [
                "Quantum Cryptography",
                "Quantum Networking",
                "Topological Quantum Computing",
                "Quantum-Classical Systems",
                "Quantum Machine Learning"
            ]
        }, {
            trackNumber: "2",
            trackHeading: "Software-Defined Smart Computer Networks",
            points: [
                "Architectures for Software Defined Networking (SDN) in Smart Networks",
                "Network Function Virtualization (NFV) and its Role in Smart Networks",
                "Intelligent Traffic Management using SDN",
                "Integration of IoT with Software Defined Networks",
                "Security and Privacy in SDN-based Smart Networks",
                "Dynamic Resource Allocation in SDN-enabled Smart Networks",
                "Edge and Fog Computing Integration with Software Defined Networks",
                "Programmable Data Planes and Custom Network Protocols",
                "SDN in 5G/6G and Next-generation Wireless Networks",
                "Performance Monitoring and Analytics in SDN-driven Smart Networks",
                "Self-Organizing Networks using SDN and AI",
                "Challenges and Future Trends in SDN-based Smart Networks",
                "SDN-based Quality of Service (QoS) Management",
                "Interoperability and Standardization in Software Defined Networks",
                "Big data analytics in software-defined environments",
                "Digital twins and virtualized environments in software-defined systems",
                "Green and sustainable computing in software-defined environments"
            ]
        },
        {
            trackNumber: "3",
            trackHeading: "Cognitive Computing and Brain-Inspired Systems",
            points: [
                "Cognitive robotics",
                "Cognitive decision theories",
                "Cognitive man-machine communication",
                "Software simulations of the brain",
                "Computational neurology",
                "Fuzzy/rough sets/logic",
                "Neuro-Inspired Learning Algorithms",
                "Perception and Sensory Systems",
                "DNA and genome cognition"
            ]
        },
        {
            trackNumber: "5",
            trackHeading: "Advances in the IoT, Fog and Edge Computing and its Applications",
            points: [
                "IoT device networking and communication protocols",
                "Fog and Edge Computing Architectures",
                "Federated learning and distributed machine learning in the fog and on the edge",
                "Storage and data management platforms for fog/edge",
                "Energy Efficiency and Sustainability in IoT and Edge Systems",
                "Security and Privacy in IoT, Fog, and Edge Computing",
                "Blockchain and Distributed Consensus in Fog, and Edge Systems",
                "AI-powered decision-making in IoT applications",
                "Data fusion and processing in fog/edge systems",
                "Edge Computing for 5G and Beyond"
            ]
        },

    ];

    return (<section
        id="conference tracks"
        className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-base-200/40 text-base-content w-full flex items-center">

        <div className="max-w-[1100px]">
            <h1 className="mb-4 text-4xl font-bold text-primary font-playfair">Conference Tracks</h1>


            <div className="w-full md:columns-3 text-sm">
            {data.map((el,i)=><div className="p-4 bg-base-200/20 border px-6 rounded-lg  break-inside-avoid mb-4">
                <h2 className="font-medium underline mb-2 ">Track <span className="">{i+1} :</span>{el.trackHeading}</h2>
                <ul className="list-disc">
                    {el.points.map(p=><li className="text-justify">{p}</li>)}
                </ul>
            </div>)}
            </div>

        </div>
    </section>)
}

export default TrackListing;