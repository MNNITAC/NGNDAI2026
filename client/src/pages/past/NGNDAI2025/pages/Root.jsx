import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Root = () => {

    // const location = useLocation();

    // useEffect(() => {
    //     window.scrollTo({top: 0, behavior: "smooth"})
    // }, [location]);

    return (
        <main className="flex w-full flex-col items-center justify-center align-middle">
            <Navbar/>
            <div className="w-full grow bg-base-100">
                <Outlet/>
            </div>
            <Footer/>
        </main>
    );
};

export default Root;