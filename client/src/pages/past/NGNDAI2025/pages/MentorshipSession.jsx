import React from "react";
import mentorshipSession from "../assets/documents/mentorshipSession_NGNDAI.jpeg"

const MentorshipSessionPage = () => {

    return <section
        id="MentorshipSession"
        className="flex-col rounded-md shadow-sm text-base-content flex items-center py-4 w-full">
        <h2 className="mb-8 text-4xl font-playfair font-bold text-primary text-center">Mentorship Session</h2>
        <div className="px-4 w-full max-w-7xl mx-auto">
            <img src={mentorshipSession} alt="MentorshipSession"/>
        </div>
    </section>
}

export default MentorshipSessionPage;