import jig from "../../src/assets/images/StudentCommittee/jigyasu.jpeg"
import sha from "../../src/assets/images/StudentCommittee/shashi.jpeg"
import avi from "../../src/assets/images/StudentCommittee/avinash.jpeg"
import avim from "../../src/assets/images/StudentCommittee/avinashMaurya.jpg"
import kobh from "../../src/assets/images/StudentCommittee/kopalbhartya.jpeg"
import push from "../../src/assets/images/StudentCommittee/pushpakshukla.jpeg"
import jyma from "../../src/assets/images/StudentCommittee/jyotimaurya.jpeg"
import smsi from "../../src/assets/images/StudentCommittee/smritisingh.png"
import aks from "../../src/assets/images/StudentCommittee/amitkumarsingh.jpeg"
import shag from "../../src/assets/images/StudentCommittee/shivaniagarwal.jpeg"
import hkg from "../../src/assets/images/StudentCommittee/HimanshuKumarGumlado.jpeg"
import abku from "../../src/assets/images/StudentCommittee/abhishekkumar.jpg"
import adsh from "../../src/assets/images/StudentCommittee/adarshshivhare.jpg"
import paku from "../../src/assets/images/StudentCommittee/Pawanesh Kumar Vishwakarma.jpg"
import sps from "../../src/assets/images/StudentCommittee/satyaPrakashSingh.jpeg"
import ia from "../../src/assets/images/StudentCommittee/imtiyazAhmed.jpeg"
import mk from "../../src/assets/images/StudentCommittee/manishaKumari.jpeg"
import rp from "../../src/assets/images/StudentCommittee/RahulPrasad.jpeg"
import rky from "../../src/assets/images/StudentCommittee/RahulKumarYadav.jpeg"
import js from "../../src/assets/images/StudentCommittee/JavaSonker.png"
import us from "../../src/assets/images/StudentCommittee/utkarshShukla.jpeg"
import akr from "../../src/assets/images/StudentCommittee/Abhishek.png"
import dy from "../../src/assets/images/StudentCommittee/digvijay.jpeg"
import hp from "../assets/images/StudentCommittee/himanshuPandey.jpg"
import sks from "../assets/images/StudentCommittee/sumanKumarsuman1.jpg"
import vk from "../assets/images/StudentCommittee/VijayKumar.jpg"
import ms from "../assets/images/StudentCommittee/MansiSrivastava.jpg"
import rl from "../assets/images/StudentCommittee/RamniwasLodhi.jpg"
import nk from "../assets/images/StudentCommittee/NavneetKishan.jpeg"
import ak from "../assets/images/StudentCommittee/AnjaniKumar.jpg"
import vcs from "../assets/images/StudentCommittee/Vikashchandra Sharma.jpg"
import akk from "../assets/images/StudentCommittee/ajayKumarKushwaha.jpg"
import React, {useEffect} from "react";

const StudentCommittee = () => {

    const students = [{
        role: "Website Development Team", members: [{
            name: "Jigyasu Saini",
            linkedin: "https://www.linkedin.com/in/jigyasusaini/",
            image: jig,
            tile: ["Application Club Lead"]
        }, {
            name: "Shashi Rathee",
            linkedin: "https://www.linkedin.com/in/shashi-rathee-282074217/",
            image: sha,
            tile: []
        }]
    }, {
        role: "Registration", members: [{
            name: "Java Sonker", linkedin: "http://www.linkedin.com/in/java-sonker-756657128", image: js, tile: []
        }, {
            name: "Avinash Kumar",
            linkedin: "https://www.linkedin.com/in/avinash-kumar-71785b130/",
            image: avi,
            tile: []
        }, {
            name: "Shivangi Agrawal",
            linkedin: "https://www.linkedin.com/in/shivangi-agrawal-9a7354216/",
            image: shag,
            tile: []
        }, {
            name: "Jyoti Maurya", linkedin: "https://www.linkedin.com/in/jyoti-maurya-9305901ba/", image: jyma, tile: []
        }]
    }, {
        role: "Design", members: [{
            name: "Adarsh Shivhare",
            linkedin: "https://www.linkedin.com/in/adarsh-shivhare-mnnit/",
            image: adsh,
            tile: []
        }, {
            name: "Abhishek Kumar", linkedin: "https://www.linkedin.com/in/abhishekk018", image: abku, tile: []
        }, {
            name: "Himanshu Kumar Gumladoo",
            linkedin: "https://www.linkedin.com/in/himanshu-kumar-b52548322",
            image: hkg,
            tile: []
        }, {
            name: "Rahul Prasad", linkedin: "https://www.linkedin.com/in/rahul-prasad-074170216/", image: rp, tile: []
        }]
    }, {
        role: "Hospitality", members: [{
            name: "Ajay Kumar Kushwaha",
            linkedin: "https://www.linkedin.com/in/ajay-kumar-kushwaha-953170210/",
            image: akk,
            tile: []
        }, {
            name: "Pawanesh Kumar Vishwakarma",
            linkedin: "https://www.linkedin.com/in/pawanesh-in/",
            image: paku,
            tile: []
        }, {
            name: "Amit Kumar Singh",
            linkedin: "https://www.linkedin.com/in/amit-kumar-singh-5421a053/",
            image: aks,
            tile: []
        }, {
            name: "Imtiyaz Ahmad", linkedin: "https://www.linkedin.com/in/imtiyaz-ahmad-75a93b1a8/", image: ia, tile: []
        }, {
            name: "Pushpak Shukla", linkedin: "https://www.linkedin.com/in/pushpakshukla/", image: push, tile: []
        }, {
            name: "Utkarsh Shukla", linkedin: "", image: us, tile: []
        }, {
            name: "Abhishek Kr Rao", linkedin: "", image: akr, tile: []
        }]
    }, {
        role: "Session", members: [{
            name: "Satya Prakash Singh",
            linkedin: "http://www.linkedin.com/in/satya-prakash-singh-584b74177",
            image: sps,
            tile: []
        }, {
            name: "Digvijay Singh Yadav",
            linkedin: "http://www.linkedin.com/in/digvijay-singh-yadav-1631012a8",
            image: dy,
            tile: []
        }, {
            name: "Himanshu Pandey",
            linkedin: "http://www.linkedin.com/in/himanshu-pandey-023124103",
            image: hp,
            tile: []
        }, {
            name: "Suman Kumar Suman", linkedin: "", image: sks, tile: []
        }, {
            name: "Vijay Kumar", linkedin: "", image: vk, tile: []
        }]
    }, {
        role: "Stage Committee", members: [{
            name: "Smriti Singh", linkedin: "https://www.linkedin.com/in/smriti-singh-83895a170/", image: smsi, tile: []
        }, {
            name: "Manisha", linkedin: "https://www.linkedin.com/in/manisha-kumari-393921283/", image: mk, tile: []
        }, {
            name: "Rahul Kumar Yadav", linkedin: "https://www.linkedin.com/in/rahulrcs07/", image: rky, tile: []
        }, {
            name: "Mansi Srivastava", linkedin: "https://www.linkedin.com/in/dr-mansi-srivastava/", image: ms, tile: []
        }]
    }, {
        role: "Certificate", members: [{
            name: "Kopal Bhartiya", linkedin: "https://www.linkedin.com/in/kopal-bhartiya", image: kobh, tile: []
        }, {
            name: "Ramniwas Lodhi", linkedin: "", image: rl, tile: []
        }]
    }, {
        role: "Food", members: [{
            name: "Avinash Maurya", linkedin: "https://www.linkedin.com/in/avinash-maurya-aman/", image: avim, tile: []
        }, {
            name: "Navneet Kishan", linkedin: "https://www.linkedin.com/in/dr-navneet-kishan/", image: nk, tile: []
        }, {
            name: "Anjani Kumar", linkedin: "http://www.linkedin.com/in/anjani-kumar-10680b20", image: ak, tile: []
        }]
    }, {
        role: "Technical", members: [{
            name: "Vikash Chandra Sharma", linkedin: "", image: vcs, tile: []
        }]
    }]


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
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>))}
        </div>
    </section>
}

export default StudentCommittee;