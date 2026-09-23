import hex from "../assets/images/StudentCommittee/sanyam.jpg"
import coyote from "../assets/images/StudentCommittee/chinmay.jpg"
import kr from "../assets/images/StudentCommittee/kiran_rathod.png"
import am from "../assets/images/StudentCommittee/aman_mishra.jpg"
import at from "../assets/images/StudentCommittee/anshi_tiwari.jpg"
import sv from "../assets/images/StudentCommittee/shubh_vaish.jpg"
import nm from "../assets/images/StudentCommittee/nayan_mishra.jpg"
import arpitDubey from "../assets/images/StudentCommittee/arpit_dubey.jpeg"
import akankshaSingh from "../assets/images/StudentCommittee/akanksha_singh.jpg"
import ravikantDiwakar from "../assets/images/StudentCommittee/ravikant_diwakar.png"
import yashasviJaiswal from "../assets/images/StudentCommittee/yashasvi_jaiswal.jpg"
import preetiGupta from "../assets/images/StudentCommittee/preeti_gupta.jpg"
import shubhshreeAishwarya from "../assets/images/StudentCommittee/shubhshree_aishwarya.jpeg"
import pawaneshVishwakarma from "../assets/images/StudentCommittee/pawanesh_vishwakarma.jpg"
import mRenubabuNaik from "../assets/images/StudentCommittee/m_renubabu_naik.png"
import swapnil from "../assets/images/StudentCommittee/swapnil.jpg"
import anandKumarPrajapati from "../assets/images/StudentCommittee/anand_kumar_prajapati.png"
import akhilDevMishra from "../assets/images/StudentCommittee/akhil_dev_mishra.jpg"
import ashishKumar from "../assets/images/StudentCommittee/ashish_kumar.jpg"
import ajayKumarKushwaha from "../assets/images/StudentCommittee/ajay_kumar_kushwaha.jpg"
import pushpendraBais from "../assets/images/StudentCommittee/pushpendra_bais.jpg"
import ranjeetKumar from "../assets/images/StudentCommittee/ranjeet_kumar.png"
import shashankSrivastava from "../assets/images/StudentCommittee/shashank_srivastava.jpeg"
import kusumlata from "../assets/images/StudentCommittee/kusumlata.jpg"
import sweta from "../assets/images/StudentCommittee/sweta.jpg"
import jyotiMaurya from "../assets/images/StudentCommittee/jyoti_maurya.png"
import smritiSingh from "../assets/images/StudentCommittee/smriti_singh.jpg"
import shivangiAgrawal from "../assets/images/StudentCommittee/shivangi_agrawal.jpg"
import yogeshKanwar from "../assets/images/StudentCommittee/yogesh_kanwar.jpg"
import utkarshVerma from "../assets/images/StudentCommittee/utkarsh_verma.jpg"
import jatinSharma from "../assets/images/StudentCommittee/jatin_sharma.jpg"
import sunilBansiwal from "../assets/images/StudentCommittee/sunil_bansiwal.png"
import avin from "../assets/images/StudentCommittee/avinash.png"
import React, {useEffect} from "react";

// Simple grey placeholder avatar (inline SVG data URI) used for members
// whose photo hasn't been added yet. Swap `image: placeholder` for a real
// imported photo once one is available.
const placeholder =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
        '<rect width="100" height="100" fill="#e5e7eb"/>' +
        '<circle cx="50" cy="38" r="18" fill="#9ca3af"/>' +
        '<ellipse cx="50" cy="86" rx="32" ry="24" fill="#9ca3af"/>' +
        '</svg>'
    );

const StudentCommittee = () => {

    const students = [{
        role: "Website Development Team", members: [{
            name: "Sanyam Goel",
            linkedin: "https://www.linkedin.com/in/iamsanyamgoel/",
            image: hex,
            tile: ["Application Club Lead"]
        }, {
            name: "Chinmay Borah",
            linkedin: "https://www.linkedin.com/in/chinmay-borah2003/",
            image: coyote,
            tile: ["Application Club Lead"]
        }]
    }, 
    // {
    //     role: "Registration", members: [{
    //         name: "Java Sonker", linkedin: "http://www.linkedin.com/in/java-sonker-756657128", image: js, tile: []
    //     }, {
    //         name: "Avinash Kumar",
    //         linkedin: "https://www.linkedin.com/in/avinash-kumar-71785b130/",
    //         image: avi,
    //         tile: []
    //     }, {
    //         name: "Shivangi Agrawal",
    //         linkedin: "https://www.linkedin.com/in/shivangi-agrawal-9a7354216/",
    //         image: shag,
    //         tile: []
    //     }, {
    //         name: "Jyoti Maurya", linkedin: "https://www.linkedin.com/in/jyoti-maurya-9305901ba/", image: jyma, tile: []
    //     }]
    // }, 
    {
        role: "Design Team", members: [{
            name: "Aman Mishra",
            linkedin: "https://www.linkedin.com/in/amanmishra2003",
            image: am,
            tile: []
        }, {
            name: "Anshi Tiwari", linkedin: "https://www.linkedin.com/in/anshi-tiwari", image: at, tile: []
        }, {
            name: "Nayan Mishra",
            linkedin: "https://www.linkedin.com/in/nayan-mishra-9b4778250",
            image: nm,
            tile: []
        }, {
            name: "Shubh Vaish", linkedin: "https://www.linkedin.com/in/shubh-vaish-226493220", image: sv, tile: []
        }, {
            name: "Kiran Ravi Rathod", linkedin: "https://www.linkedin.com/in/kiran-rathod-1a3039320", image: kr, tile: []
        }]
    },
    {
        role: "Registration", members: [{
            name: "Arpit Dubey", linkedin: "", image: arpitDubey, tile: []
        }, {
            name: "Akanksha Singh", linkedin: "", image: akankshaSingh, tile: []
        }, {
            name: "Ravikant Diwakar", linkedin: "", image: ravikantDiwakar, tile: []
        }, {
            name: "Yashasvi Jaiswal", linkedin: "", image: yashasviJaiswal, tile: []
        }, {
            name: "Preeti Gupta", linkedin: "", image: preetiGupta, tile: []
        }]
    },
    {
        role: "Food Management", members: [{
            name: "Shubhshree Aishwarya", linkedin: "", image: shubhshreeAishwarya, tile: []
        }, {
            name: "Pawanesh Vishwakarma", linkedin: "", image: pawaneshVishwakarma, tile: []
        }, {
            name: "M. Renubabu Naik", linkedin: "", image: mRenubabuNaik, tile: []
        }, {
            name: "Swapnil", linkedin: "", image: swapnil, tile: []
        }, {
            name: "Aman Mishra", linkedin: "", image: am, tile: []
        }, {
            name: "Anand Kumar Prajapati", linkedin: "", image: anandKumarPrajapati, tile: []
        }]
    },
    {
        role: "Hospitality", members: [{
            name: "Akhil Dev Mishra", linkedin: "", image: akhilDevMishra, tile: []
        }, {
            name: "Ashish Kumar", linkedin: "", image: ashishKumar, tile: []
        }, {
            name: "Chinmay Borah", linkedin: "", image: coyote, tile: []
        }, {
            name: "Ajay Kumar Kushwaha", linkedin: "", image: ajayKumarKushwaha, tile: []
        }, {
            name: "Aditya", linkedin: "", image: placeholder, tile: []
        }]
    },
    {
        role: "Session Management", members: [{
            name: "Pushpendra Kumar Bais", linkedin: "", image: pushpendraBais, tile: []
        }, {
            name: "Ranjeet Kumar", linkedin: "", image: ranjeetKumar, tile: []
        }, {
            name: "Shashank Srivastava", linkedin: "", image: shashankSrivastava, tile: []
        }, {
            name: "Kusumlata", linkedin: "", image: kusumlata, tile: []
        }, {
            name: "Nayan Mishra", linkedin: "", image: nm, tile: []
        }, {
            name: "Avinash Kumar", linkedin: "", image: avin, tile: []
        }]
    },
    {
        role: "Stage Committee", members: [{
            name: "Sweta", linkedin: "", image: sweta, tile: []
        }, {
            name: "Jyoti Maurya", linkedin: "", image: jyotiMaurya, tile: []
        }, {
            name: "Smriti Singh", linkedin: "", image: smritiSingh, tile: []
        }, {
            name: "Shivangi Agrawal", linkedin: "", image: shivangiAgrawal, tile: []
        }]
    },
    {
        role: "Technical Support", members: [{
            name: "Yogesh Kanwar", linkedin: "", image: yogeshKanwar, tile: []
        }, {
            name: "Utkarsh Verma", linkedin: "", image: utkarshVerma, tile: []
        }, {
            name: "Shubh Vaish", linkedin: "", image: sv, tile: []
        }, {
            name: "Jatin Sharma", linkedin: "", image: jatinSharma, tile: []
        }, {
            name: "Sunil Bansiwal", linkedin: "", image: sunilBansiwal, tile: []
        }]
    },
    // {
    //     role: "Hospitality", members: [{
    //         name: "Ajay Kumar Kushwaha",
    //         linkedin: "https://www.linkedin.com/in/ajay-kumar-kushwaha-953170210/",
    //         image: akk,
    //         tile: []
    //     }, {
    //         name: "Pawanesh Kumar Vishwakarma",
    //         linkedin: "https://www.linkedin.com/in/pawanesh-in/",
    //         image: paku,
    //         tile: []
    //     }, {
    //         name: "Amit Kumar Singh",
    //         linkedin: "https://www.linkedin.com/in/amit-kumar-singh-5421a053/",
    //         image: aks,
    //         tile: []
    //     }, {
    //         name: "Imtiyaz Ahmad", linkedin: "https://www.linkedin.com/in/imtiyaz-ahmad-75a93b1a8/", image: ia, tile: []
    //     }, {
    //         name: "Pushpak Shukla", linkedin: "https://www.linkedin.com/in/pushpakshukla/", image: push, tile: []
    //     }, {
    //         name: "Utkarsh Shukla", linkedin: "", image: us, tile: []
    //     }, {
    //         name: "Abhishek Kr Rao", linkedin: "", image: akr, tile: []
    //     }]
    // },
    // {
    //     role: "Session", members: [{
    //         name: "Satya Prakash Singh",
    //         linkedin: "http://www.linkedin.com/in/satya-prakash-singh-584b74177",
    //         image: sps,
    //         tile: []
    //     }, {
    //         name: "Digvijay Singh Yadav",
    //         linkedin: "http://www.linkedin.com/in/digvijay-singh-yadav-1631012a8",
    //         image: dy,
    //         tile: []
    //     }, {
    //         name: "Himanshu Pandey",
    //         linkedin: "http://www.linkedin.com/in/himanshu-pandey-023124103",
    //         image: hp,
    //         tile: []
    //     }, {
    //         name: "Suman Kumar Suman", linkedin: "", image: sks, tile: []
    //     }, {
    //         name: "Vijay Kumar", linkedin: "", image: vk, tile: []
    //     }]
    // }, {
    //     role: "Stage Committee", members: [{
    //         name: "Smriti Singh", linkedin: "https://www.linkedin.com/in/smriti-singh-83895a170/", image: smsi, tile: []
    //     }, {
    //         name: "Manisha", linkedin: "https://www.linkedin.com/in/manisha-kumari-393921283/", image: mk, tile: []
    //     }, {
    //         name: "Rahul Kumar Yadav", linkedin: "https://www.linkedin.com/in/rahulrcs07/", image: rky, tile: []
    //     }, {
    //         name: "Mansi Srivastava", linkedin: "https://www.linkedin.com/in/dr-mansi-srivastava/", image: ms, tile: []
    //     }]
    // }, {
    //     role: "Certificate", members: [{
    //         name: "Kopal Bhartiya", linkedin: "https://www.linkedin.com/in/kopal-bhartiya", image: kobh, tile: []
    //     }, {
    //         name: "Ramniwas Lodhi", linkedin: "", image: rl, tile: []
    //     }]
    // }, {
    //     role: "Food", members: [{
    //         name: "Avinash Maurya", linkedin: "https://www.linkedin.com/in/avinash-maurya-aman/", image: avim, tile: []
    //     }, {
    //         name: "Navneet Kishan", linkedin: "https://www.linkedin.com/in/dr-navneet-kishan/", image: nk, tile: []
    //     }, {
    //         name: "Anjani Kumar", linkedin: "http://www.linkedin.com/in/anjani-kumar-10680b20", image: ak, tile: []
    //     }]
    // }, {
    //     role: "Technical", members: [{
    //         name: "Vikash Chandra Sharma", linkedin: "", image: vcs, tile: []
    //     }]
    // }
]


    // Function to log all student names
    const logAllStudentNames = () => {
        let names = []
        console.log("All Student Names:");
        console.log("=================");
        let i = 0;

        students.forEach(team => {
            team.members.forEach(member => {
                console.log(member.name);
                names.push(member.name)
                i += 1;
            });
        });
        names.sort()
        console.log(names)
        console.log(i)
    };

    // Call the function when component mounts
    useEffect(() => {
        logAllStudentNames();
    }, []);

    return <section
        id="Organising Committee"
        className="flex-col rounded-md shadow-sm text-base-content flex items-center py-4 w-full">
        <h2 className="mb-8 text-4xl font-playfair font-bold text-primary text-center">Student Committee</h2>
        <div className="px-4 w-full max-w-7xl mx-auto">
            {students.map((team, index) => (<div key={index} className="mb-12">
                <h3 className="text-2xl font-semibold text-base-content border-b-2 pb-2 my-6">
                    {team.role}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.members.map((member, memberIndex) => (<div
                        key={memberIndex}
                        className="bg-base-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex p-4 items-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="ml-4 flex-grow">
                                <h4 className="text-lg font-bold">{member.name}</h4>
                                <div className="mt-2 space-y-1">
                                    {member.tile.map((role, roleIndex) => (<div
                                        key={roleIndex}
                                        className="bg-primary/10 text-sm py-1 px-2 rounded inline-block mr-2 mb-2"
                                    >
                                        {role}
                                    </div>))}
                                </div>
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary hover:text-primary-focus text-sm mt-2"
                                    >
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                        LinkedIn
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>))}
        </div>
    </section>
}

export default StudentCommittee;
