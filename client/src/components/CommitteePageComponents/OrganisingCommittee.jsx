import React from "react";
import rsv from "../../assets/images/Organising Committee/Prof. Rama Shanker Verma.jpeg"
import mmg from "../../assets/images/Organising Committee/Prof. M. M. Gore.png"
import mp from "../../assets/images/Organising Committee/Prof. Mayank Pandey.jpg"
import dg from "../../assets/images/Organising Committee/62037-Deepak Gupta MNNIT.jpg"
import pns from "../../assets/images/Organising Committee/Prof. P. N. Suganthan, Qatar University, Qatar.jpg"
import as from "../../assets/images/Archive3 compressed/Dr. Abhimanyu Sahu, MNNIT Allahabad, India.jpg";
import ak from "../../assets/images/Archive3 compressed/Dr. Abhinav Kumar.jpg";
import ab from "../../assets/images/Archive3/Dr. Amit Biswas, MNNIT Allahabad, India.png";
import ak2 from "../../assets/images/Archive3 compressed/Dr. Anoj Kumar, MNNIT Allahabad, India.jpg";
import akm from "../../assets/images/Archive3 compressed/Dr. Ashish Kumar Maurya.jpg";
import dk from "../../assets/images/Archive3 compressed/Dr. Dushyant Kumar Singh, MNNIT.jpg";
import id from "../../assets/images/Archive3 compressed/Dr. Indu Dohare, MNNIT Allahabad, India.jpg";
import jc from "../../assets/images/Archive3 compressed/Dr. Joohi Chauhan, MNNIT Allahabad, India.jpg";
import kw from "../../assets/images/Archive3/Dr. Kailash W. Kalare.png";
import ms from "../../assets/images/Archive3 compressed/Dr. Mandhatya Singh, Vanix Technology, Pvt., India.jpg";
import mw from "../../assets/images/Archive3 compressed/Dr. Manoj Wariya, MNNIT Allahabad, India.jpeg";
import pd from "../../assets/images/Archive3 compressed/Dr. Pragya Dwivedi, MNNIT Allahabad, India.jpg";
import rb from "../../assets/images/Archive3 compressed/Dr. Rajitha B, MNNIT Allahabad, India.jpg";
import r from "../../assets/images/Archive3 compressed/Dr. Ranvijay, MNNIT Allahabad, India.jpg";
import st from "../../assets/images/Archive3 compressed/Dr. Sarsij Tripathi, MNNIT Allahabad, India.jpg";
import ss from "../../assets/images/Archive3 compressed/Dr. Shailendra Shukla, MNNIT Allahabad, India.jpeg";
import ss2 from "../../assets/images/Archive3/Dr. Shashank Srivastava, MNNIT Allahabad, India.png";
import vps from "../../assets/images/Archive3 compressed/Dr. Vibhav Prakash Singh, MNNIT Allahabad, India.jpg";
import dk2 from "../../assets/images/Archive3 compressed/Lieutenant (Dr.) Divya Kumar, MNNIT Allahabad, India.jpeg";
import aks from "../../assets/images/Archive3 compressed/aks.jpeg";
import rsy from "../../assets/images/Archive3 compressed/Prof. Rama Shankar Yadav.jpeg";
import dky from "../../assets/images/Archive3 compressed/Dharmendra Kumar Yadav.jpg";
import dsk from "../../assets/images/Archive3 compressed/Prof. Dharmender Singh Kushwaha.jpg";
import vs from "../../assets/images/Archive3/Dr. Vishal Srivastava.png";
import ad from "../../assets/images/Archive3 compressed/Dr. Anuja Dixit.jpg";
import ds from "../../assets/images/Archive3 compressed/Dinesh singh.jpg";
import rd from "../../assets/images/Archive3/Dr. Rupesh K Dewang.jpg";
import gc from "../../assets/images/Organising Committee/Prof. Girija Chetty, University of Canberra.jpeg"
import nt from "../../assets/images/Archive3 compressed/Prof. Neeraj Tyagi.jpg"
import ap from "../../assets/images/Organising Committee/Mr. Anurag Pandey.jpg"
import sr from "../../assets/images/Archive3 compressed/Dr. Saugata Roy.jpg"

function OrganisingCommittee() {

    const organisingCommittee = [{
        members: [{
            name: "Prof. Rama Shanker Verma",
            image: rsv,
            about: <><u>Director</u>, MNNIT Allahabad, India</>,
            role: "Chief Patron",
            homepage: "https://www.mnnit.ac.in/index.php/institute/437-profile-prof-rs-verma"
        }]
    }, {
        members: [{
            name: "Prof. Girija Chetty",
            image: gc,
            about: "University of Canberra, Australia",
            role: "Honorary Chair",
            homepage: "https://researchprofiles.canberra.edu.au/en/persons/girija-chetty/"
        }, {
            name: "Prof. P. N. Suganthan",
            image: pns,
            about: "Qatar University, Qatar",
            role: "Honorary Chair",
            homepage: "https://www3.ntu.edu.sg/home/epnsugan/"
        }]
    }, {
        members: [{
            name: "Prof. M. M. Gore",
            image: mmg,
            about: "MNNIT Allahabad, India",
            role: "General Chair",
            homepage: "https://www.mnnit.ac.in/profile/gore"
        }, {
            name: "Prof. Neeraj Tyagi",
            image: nt,
            about: "MNNIT Allahabad, India",
            role: "General Chair",
            homepage: "http://www.mnnit.ac.in/profile/neeraj"
        }]
    }, {
        members: [{
            name: "Prof. Mayank Pandey",
            image: mp,
            about: "MNNIT Allahabad, India",
            role: "Organizing Chair",
            homepage: "https://mnnit.ac.in/profile/mayankpandey"
        }, {
            name: "Dr. Deepak Gupta",
            image: dg,
            about: "MNNIT Allahabad, India",
            role: "Organizing Secretary",
            homepage: "https://mnnit.ac.in/profile/deepakg"
        }]
    }, {
        members: [{
            name: "Prof. Rama Shankar Yadav",
            image: rsy,
            about: "MNNIT Allahabad, India",
            role: "Publication Chair",
            homepage: "https://mnnit.ac.in/profile/rsy"
        }, {
            name: "Dr. Dushyant Kumar Singh",
            image: dk,
            about: "MNNIT Allahabad, India",
            role: "Publication Chair",
            homepage: "https://scholar.google.co.in/citations?user=K7-waHwAAAAJ&hl=en"
        }, {
            name: "Dr. Abhinav Kumar",
            image: ak,
            about: "MNNIT Allahabad, India",
            role: "Publication Chair",
            homepage: "https://scholar.google.co.in/citations?user=DAifoJkAAAAJ&hl=en"
        }, {
            name: "Dr. Abhimanyu Sahu",
            image: as,
            about: "MNNIT Allahabad, India",
            role: "Publication Chair",
            homepage: "https://scholar.google.com/citations?user=JDV7Af0AAAAJ&hl=en"
        }, {
            name: "Dr. Anoj Kumar",
            image: ak2,
            about: "MNNIT Allahabad, India",
            role: "Publication Chair",
            homepage: "https://mnnit.ac.in/profile/anojk"
        }]
    }, {
        members: [{
            name: "Prof. Dharmender Singh Kushwaha",
            image: dsk,
            about: "MNNIT Allahabad, India",
            role: "Special Session Chair",
            homepage: "https://www.mnnit.ac.in/dsk/basic.php"
        }, {
            name: "Dr. Shailendra Shukla",
            image: ss,
            about: "MNNIT Allahabad, India",
            role: "Special Session Chair",
            homepage: "https://mnnit.ac.in/profile/preview.php?login=ss"
        }, {
            name: "Dr. Pragya Dwivedi",
            image: pd,
            about: "MNNIT Allahabad, India",
            role: "Special Session Chair",
            homepage: "https://mnnit.ac.in/profile/previewa.php?id=1627"
        }]
    }, {
        members: [{
            name: "Prof. Dharmendra Kumar Yadav",
            image: dky,
            about: "MNNIT Allahabad, India",
            role: "Industry Track Chair",
            homepage: "https://mnnit.ac.in/profile/dky"
        }, {
            name: "Dr. Indu Dohare",
            image: id,
            about: "MNNIT Allahabad, India",
            role: "Industry Track Chair",
            homepage: "https://mnnit.ac.in/profile/indudohare"
        }, {
            name: "Dr. Vibhav Prakash Singh",
            image: vps,
            about: "MNNIT Allahabad, India",
            role: "Industry Track Chair",
            homepage: "https://mnnit.ac.in/profile/vibhav"
        },{
            name: "Mr. Anurag Pandey",
            image: ap,
            about: "Capability Head, Computer Vision, HCLTech, Noida",
            role: "Industry Track Chair",
            homepage: "https://www.linkedin.com/in/anurag-pandey-5244b885/"
        }]
    }, {
        members: [{
            name: "Prof. Anil Kumar Singh",
            image: aks,
            about: "MNNIT Allahabad, India",
            role: "Sponsorship Chair",
            homepage: "https://www.mnnit.ac.in/profile/ak"
        },{
            name: "Dr. Joohi Chauhan",
            image: jc,
            about: "MNNIT Allahabad, India",
            role: "Sponsorship Chair",
            homepage: "https://mnnit.ac.in/profile/joohi"
        }, {
            name: "Dr. Rajitha B",
            image: rb,
            about: "MNNIT Allahabad, India",
            role: "Sponsorship Chair",
            homepage: "https://mnnit.ac.in/profile/rajitha"
        }]
    }, {
        members: [{
            name: "Dr. Ranvijay",
            image: r,
            about: "MNNIT Allahabad, India",
            role: "Publicity Chair",
            homepage: "https://www.mnnit.ac.in/profile/ranvijay"
        }, {
            name: "Dr. Dinesh Singh",
            image: ds,
            about: "MNNIT Allahabad, India",
            role: "Publicity Chair",
            homepage: "https://mnnit.ac.in/profile/dinesh_singh"
        }, {
            name: "Dr. Kailash W. Kalare",
            image: kw,
            about: "MNNIT Allahabad, India",
            role: "Publicity Chair",
            homepage: "https://mnnit.ac.in/profile/kailashwk"
        }, {
            name: "Dr. Vishal Srivastava",
            image: vs,
            about: "MNNIT Allahabad, India",
            role: "Publicity Chair",
            homepage: "https://mnnit.ac.in/profile/vishalsri"
        }]
    }, {
        members: [{
            name: "Dr. Sarsij Tripathi",
            image: st,
            about: "MNNIT Allahabad, India",
            role: "Finance Chair",
            homepage: "https://mnnit.ac.in/profile/previewr.php?id=1702"
        },{
            name: "Dr. Shashank Srivastava",
            image: ss2,
            about: "MNNIT Allahabad, India",
            role: "Finance Chair",
            homepage: "http://mnnit.ac.in/profile/shashank12"
        }, {
            name: "Dr. Indu Dohare",
            image: id,
            about: "MNNIT Allahabad, India",
            role: "Finance Chair",
            homepage: "https://mnnit.ac.in/profile/indudohare"
        }]
    }, {
        members: [{
            name: "Dr. Manoj Wairiya",
            image: mw,
            about: "MNNIT Allahabad, India",
            role: "Website Chair",
            homepage: "https://mnnit.ac.in/profile/wairya"
        }, {
            name: "Lieutenant (Dr.) Divya Kumar",
            image: dk2,
            about: "MNNIT Allahabad, India",
            role: "Website Chair",
            homepage: "https://www.mnnit.ac.in/profile/divyak"
        }, {
            name: "Dr. Ashish Kumar Maurya",
            image: akm,
            about: "MNNIT Allahabad, India",
            role: "Website Chair",
            homepage: "https://mnnit.ac.in/profile/previewr.php?id=1492"
        }]
    }, {
        members: [{
            name: "Dr. Anuja Dixit",
            image: ad,
            about: "MNNIT Allahabad, India",
            role: "Local Organizing Committee",
            homepage: "https://mnnit.ac.in/profile/anujadixit"
        },{
            name: "Dr. Saugata Roy",
            image: sr,
            about: "MNNIT Allahabad, India",
            role: "Local Organizing Committee",
            homepage: "http://mnnit.ac.in/profile/sgtroy"
        }
    ]
    }];


    return (<section
        id="Organising Committee"
        className=" flex-col rounded-md shadow-sm text-base-content flex items-center py-4 w-full">
        <h2 className="mb-8 text-4xl font-playfair font-bold text-primary text-center">Organising
            Committee</h2>
        <div className="px-1 w-full">

            <div className="flex w-full flex-col gap-4 justify-center items-center align-middle">
                {organisingCommittee.map((el, i) => <div key={i} className={`w-full ${i % 2 === 0 ? 'bg-base-200/20' : ''}`}>
                    <div
                        className={`${el.members.length === 4 ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 w-full max-w-[820px] mx-auto' : 'flex w-full p-6 flex-wrap justify-center gap-4'}`}>
                        {el.members.map((member, index) => <div key={index} className="relative w-full max-w-[380px] rounded-lg shadow-md p-4
                    flex items-center gap-3 hover:shadow-lg origin-center transition-all duration-200 bg-base-100">
                            <img
                                src={member.image}
                                alt={member.name} className="object-top w-24 h-24 rounded-full object-cover"/>
                            <div>
                                <a href={member.homepage} target="_blank"
                                   className="text-xl font-semibold link-hover">{member.name}</a>
                                <div className="flex gap-2 flex-wrap items-center">
                                    <span
                                        className="my-1 mb-2 text-xs badge badge-neutral badge-lg text-nowrap font-medium">{member.role}</span>
                                </div>
                                <p className="text-base-content/80">{member.about}</p>
                            </div>
                        </div>)}
                    </div>
                </div>)}
            </div>
        </div>
    </section>);
}

export default OrganisingCommittee;