import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import SummaryNavbar from "../components/SummaryComponents/SummaryNavbar.jsx";
import About from "../components/SummaryComponents/AboutConference.jsx";
import SpeakerCarousel from "../components/SummaryComponents/SpeakerCarousel.jsx"
import Sponsors from '../components/SummaryComponents/Sponsors.jsx';
const SummaryRoot = () => {

    const location = useLocation();

    useEffect(() => {
        // If there's a hash in the URL, scroll to that element (with navbar offset).
        if (location.hash) {
            const id = decodeURIComponent(location.hash.slice(1));
            const el = document.getElementById(id);
            const nav = document.querySelector('nav');
            const offset = nav ? nav.offsetHeight : 0;
            if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                return;
            }
        }
        // Default: scroll to top on location change
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

    return (
        <main className="flex w-full flex-col items-center justify-center align-middle">
            <SummaryNavbar />
            <div className="w-full grow bg-base-100">
                <main className="flex w-full flex-col items-center justify-center align-middle">
                    <About />
                    <SpeakerCarousel/>
                    <Sponsors/>
                </main>
            </div>
            <Footer />
        </main>
    );
};

export default SummaryRoot;