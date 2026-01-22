import React from 'react';
import About from "../components/SummaryComponents/AboutConference.jsx";
import SpeakerCarousel from "../components/SummaryComponents/SpeakerCarousel.jsx";
import Sponsors from '../components/SummaryComponents/Sponsors.jsx';
import MediaCoverage from '../components/SummaryComponents/MediaCoverage.jsx';

const SummaryIndex = () => {
    return (
        <>
            <About />
            <SpeakerCarousel />
            <Sponsors />
            <MediaCoverage />
        </>
    );
};

export default SummaryIndex;
