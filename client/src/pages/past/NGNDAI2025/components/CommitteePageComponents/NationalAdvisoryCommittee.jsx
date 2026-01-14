import React from "react";

function NationalAdvisoryCommittee() {

    const boardMembers = [{
        name: "Prof. Suresh Sundaram",
        designation: "",
        university: "IISc Bangalore, India"
    }, // {name: "Prof. Rajeev Tripathi", designation: "Professor", university: "MNNIT Allahabad, India"},
        {name: "Prof. Bhabani P. Sinha", designation: "", university: "ISI Kolkata, India"}, {
            name: "Prof. Umapada Pal", designation: "", university: "ISI Kolkata, India"
        }, {
            name: "Prof. Anjana Kakoti Mahanta", designation: "", university: "Gauhati University, India"
        }, // {name: "Prof. P. Nagabhushan", designation: "", university: "IIIT Allahabad, India"},
        // {name: "Prof. Sivaji Bandyopadhya", designation: "", university: "NIT Silchar, India"},
        {
            name: "Prof. S. Balasundaram", designation: "Professor", university: "JNU, New Delhi, India"
        }, // {name: "Prof. C T Bhunia", designation: "Former Director", university: "NIT Arunachal Pradesh, India"},
        // {name: "Prof. Karmeshu", designation: "", university: "SNU, Greater Noida, India"},
        {
            name: "Prof. Dhruba Kr Bhattacharyya", designation: "", university: "Tezpur University, India"
        }, {
            name: "Prof. T Vijay Kumar", designation: "", university: "Jawaharlal Nehru University, New Delhi, India"
        }, // {name: "Prof. Nityananda Sarma", designation: "", university: "Tezpur University, India"},
        {
            name: "Prof. Shekhar Verma", designation: "", university: "IIIT Allahabad, India"
        }, {
            name: "Prof. Om Prakash Sangwan", designation: "", university: "GJUST, Haryana, India"
        }, {
            name: "Prof. Amit Saxena", designation: "", university: "GGV, Bilaspur, India"
        }, // {name: "Prof. B. K.Panigrahi", designation: "", university: "IIT Delhi, India"},
        {
            name: "Prof. Susanta Chakraborty", designation: "", university: "IIEST, Shibpur, India"
        }, {
            name: "Prof. Vivek Kumar Singh", designation: "", university: "Delhi University, New Delhi, India"
        }, {
            name: "Prof. R. K. Agarwal", designation: "", university: "JNU, New Delhi, India"
        }, {
            name: "Prof. Harish Kumar Sardana", designation: "", university: "IIIT Raichur, India"
        },
        // {
            // name: "Prof. Deepak Garg", designation: "", university: "SR University, India"
        // },
// {name: "Prof. Koshy George", designation: "", university: "SRM University, India"},
        {
            name: "Prof. Soumya K Ghosh", designation: "", university: "IIT Kharagpur, India"
        }, // {name: "Prof. Rajeev Srivastava", designation: "", university: "IIT BHU, India"},
        {
            name: "Dr. V. Vijaya Saradhi", designation: "", university: "IIT Guwahati, India"
        }, {
            name: "Prof. Sukumar Nandi", designation: "", university: "IIT Guwahati, India"
        }, {
            name: "Prof. D. P. Vidhyarthi", designation: "", university: "JNU, New Delhi, India"
        }, {
            name: "Prof. Ram Bilas Pachori",
            designation: "",
            university: "IIT Indore, India"
        }, {name: "Prof. A. K. Tripathi", designation: "", university: "IIT BHU, Varanasi, India"}, {
            name: "Prof. M. Tanveer", designation: "", university: "IIT Indore, India"
        }, // {name: "Dr. Sanjeev Kumar", designation: "", university: "IIT Roorkee, India"},
        {name: "Prof. Asif Ekbal", designation: "", university: "IIT Jodhpur, India"}, {
            name: "Dr. Dilip Singh Sisodia",
            designation: "",
            university: "NIT Raipur, India"
        },
        {name: "Prof. G R Sinha", designation: "", university: "GSFC University, Gujarat, India"},
        {name: "Dr. Aditya Nigam", designation: "", university: "IIT Mandi, India"},
        // {
        // name: "Dr. Reshma Rastogi", designation: "", university: "SAU, New Delhi, India"
        //},  {name: "Dr. Partha Pratim Roy", designation: "", university: "IIT Roorkee, India"},
        // {name: "Dr. Ram Prasad K", designation: "", university: "Sai University, India"}, {
        // name: "Dr. D. Suryanarayana", designation: "", university: "Vishnu Institute of Technology, A.P., India"
        // }, {
        // name: "Dr. B S Mahanand", designation: "", university: "JSS S&T University, Karnataka, India"
        // },
        {
            name: "Prof. Poonam Bedi", designation: "", university: "University of Delhi, Delhi, India"
        },
        {name: "Prof. Deepak Garg", designation: "", university: "SR University, India"},
        // {name: "Prof. S. Balasundaram", designation: "Former Dean, SC&SS", university: "JNU, New Delhi, India"},
        {
            name: "Prof. Ashutosh Singh",
            designation: "",
            university: "National Institute of Technology, Kurukshetra, India"
        },
        {name: "Prof. Anurag Mishra", designation: "", university: "DDUC, University of Delhi, India"},
        {name: "Dr. Reshma Rastogi", designation: "", university: "South Asian University, New Delhi, India"},
        {name: "Dr. Sonali Agarwal", designation: "", university: "IIIT Allahabad, India"},
        {name: "Dr. Ram Prasad K", designation: "", university: "Sai University, India"},
        // {name: "Dr. Rajni Bala", designation: "", university: "University of Delhi, New Delhi, India"}
    ];


    return (<section
        id="National Advisory Committee"
        className="mb-8 flex-col shadow-sm text-base-content w-full flex items-center bg-base-200/40  py-6">
        <div className="max-w-[1100px] flex flex-col items-center">
            <h2 className="mb-8 text-4xl font-bold underlne text-primary font-playfair text-center">National Advisory
                Committee</h2>
            <div className="flex flex-row flex-wrap gap-4 align-middle justify-center">
                {boardMembers.map(member => <div
                    className="relative bg-base-200 p-2 w-full max-w-[90%] md:max-w-[270px] hover:rounded-lg hover:bottom-0.5 hover:shadow-sm transition-all duration-300">
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm">{member.designation}</p>
                    <p className="font-thin">{member.university}</p>
                </div>)}
            </div>
        </div>
    </section>)
}

export default NationalAdvisoryCommittee;