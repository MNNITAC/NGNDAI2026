function ConferenceTracks() {

    const data = [
        {
            trackNumber: "1",
            trackHeading: "Artificial Intelligence and Machine Learning",
            content: "This track of the conference focuses on advancements in Artificial Intelligence (AI) and Machine Learning (ML), covering a wide range of cutting-edge topics. Key areas include activity detection, biometric systems for forensics, and compressed image and video analytics. The track highlights the role of deep learning in computer vision, medical image analysis, and human-computer interaction. Topics like explainable AI, generative AI, and large language models will also be explored, along with computational imaging, document processing, and motion tracking. This track provides a comprehensive look at the impact of transformative AI on modern technology, driving innovation across various industries.",
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
        },
        {
            trackNumber: "2",
            trackHeading: "Software-Defined Smart Computer Networks",
            content: "This track focuses on Software-Defined Smart Computer Networks, exploring the transformative role of Software Defined Networking (SDN) in enhancing modern networks. It covers architectures for SDN, Network Function Virtualization (NFV), and their integration with IoT for intelligent traffic management and dynamic resource allocation. Topics include security, privacy, and performance monitoring in SDN-based smart networks, as well as edge and fog computing integration. The track also addresses SDN in 5G/6G, programmable data planes, and the role of AI in self-organizing networks. Emphasis is placed on future trends, big data analytics, Digital twins and virtualized environments, and green & sustainable computing in software-defined environments.",
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
            content: "This track delves into Cognitive Computing and Brain-Inspired Systems, exploring the intersection of neuroscience and computational intelligence. It covers topics such as cognitive foundations of big data, cognitive robotics, and neuroinformatics. The track also highlights advancements in pattern recognition, cognitive decision theories, man-machine communication, and neuro-inspired learning algorithms. With a focus on computational neurology, fuzzy logic, and software simulations of the brain, this track examines how brain-inspired models are shaping fields like neurocomputing and perception systems. DNA and genome cognition further extend its impact, fostering interdisciplinary discussions on cognition-driven technology.",
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
            trackNumber: "4",
            trackHeading: "Quantum Computing and Communications",
            content: "This track delves into the transformative field of Quantum Computing and Communications, exploring cutting-edge advancements and applications. Key topics include Quantum Cryptography, focusing on secure communication protocols, and Quantum Networking, which aims to revolutionize data transmission and communication systems. The track also covers Topological Quantum Computing, a promising approach for fault-tolerant quantum operations, as well as the integration of Quantum-Classical Systems for hybrid computational models. Additionally, Quantum Machine Learning merges quantum computing with AI to unlock new potentials in data processing and pattern recognition, offering future-forward solutions across industries.",
            points: [
                "Quantum Cryptography",
                "Quantum Networking",
                "Topological Quantum Computing",
                "Quantum-Classical Systems",
                "Quantum Machine Learning"
            ]
        },
        {
            trackNumber: "5",
            trackHeading: "Advances in the IoT, Fog and Edge Computing and its Applications",
            content: "This track focuses on the developments in IoT, Fog, and Edge Computing, highlighting their architectures and applications. Key topics include IoT device networking and communication protocols, Fog and Edge Computing architectures, and the role of Federated Learning in distributed machine learning. The track explores energy-efficient and sustainable solutions for IoT and edge systems, emphasizing security, privacy, and blockchain-based consensus mechanisms. It also discusses AI-powered decision-making, data management, and data fusion in fog/edge systems. Additionally, this track will cover the integration of Edge Computing in 5G and beyond, showcasing its future potential across industries.",
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
        }
    ];


    return (<section
        id="Conference Scope"
        className="mb-16 flex-col rounded-md shadow-sm text-base-content w-full flex items-center lg:p-8">

        <div className="max-w-[1100px]">

            <h1 className=" text-4xl font-bold text-primary font-playfair text-center mb-8">Call for Papers</h1>
            <p className="text-justify mb-4">The International Conference on Next-Generation Networks and Deployable
                Artificial Intelligence
                (NGNDAI-2025) is a platform that brings together researchers, industry experts, and practitioners to
                explore
                cutting-edge developments in machine intelligence, communication systems, and related technologies. The
                conference will bring together leading researchers, engineers and scientists in the domain of interest
                from
                around the world. The scopes of NGNDAI-2025 include the following themes (but not limited to):
            </p>

            {data.map(el => <div className="bg-base-200/40 p-4 rounded-lg flex flex-col gap-4 mb-4">
                <div className="text-2xl bg-base-100 p-2 rounded-full">
                    <span className="font-bold">Track {el.trackNumber}: </span>
                    <span className="font-medium underlin">{el.trackHeading}</span></div>
                <div className="text-justify">{el.content}</div>
                <div>
                    <ul className="list-disc">
                        {el.points.map(p => <li className=" border-black mx-4">{p}</li>)}
                    </ul>
                </div>
            </div>)}
        </div>
    </section>);
}

export default ConferenceTracks;
