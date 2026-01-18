import React from "react";

import logo from "../assets/images/MNNIT logo.png"

function Footer() {
    return (
        <footer
            className="footer  bg-base-200 text-base-content p-10 pb-0 gap-4 flex flex-col items-center mt-4 sm:mt-0 scroll-mt-16"
            id="footer">

            <div className="flex flex-col md:flex-row md:items-center w-full md:justify-between">

                <div className="flex gap-4 md:px-4 py-4 ">
                    <img className="max-w-20" src={logo} alt="logo"/>
                    <div>
                        <p className="underline">TEAM NGNDAI 2026</p>
                        <p className="text-xs text-base-content/80">Department of Computer Science and Engineering</p>
                        <p className="mt-1 text-xs text-base-content/80">
                            Motilal Nehru National Institute of Technology, Allahabad
                            <br/>
                            Teliarganj
                            Prayagraj, Uttar Pradesh
                        </p>
                        <a href="mailto:ngndai@mnnit.ac.in">Email: ngndai@mnnit.ac.in</a>
                    </div>
                </div>


                <nav className="">
                    <h6 className="underline footer-title">Contact Person</h6>
                    <div className="flex flex-col">
                        <a className="link link-hover">Prof. Mayank Pandey (+91 9935239332)</a>
                        <a className="link link-hover">Dr. Deepak Gupta (+91 9999778726)</a>
                    </div>
                </nav>

            </div>

            <div className="w-full overflow-hidden rounded-lg card col-span-1 md:col-span-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18233.673598652527!2d81.86635449510112!3d25.49373607879461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca78818ddc51%3A0x6690dd2de3a1415b!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1728329701277!5m2!1sen!2sin"
                    className="w-full min-h-72"
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                {/*<p className="mt-4 text-base-content/70">*/}
                {/*    Developed by <a className="link link-hover" href="">Shashi Rathee</a> {" "}*/}
                {/*    and <a className="link link-hover" href="https://www.linkedin.com/in/jigyasusaini/">Jigyasu*/}
                {/*    Saini</a>*/}
                {/*</p>*/}
            </div>

            <div
                className="flex w-full flex-wrap items-center justify-between gap-5 border-t p-1 pt-6 px-4 align-middle bg-base-200 footer">
                <a href="https://info.flagcounter.com/ghnE" target="_blank">
                    <img className="h-12 opacity-80"
                         src="https://s11.flagcounter.com/count2/ghnE/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
                         alt="Flag Counter" border="0"/>
                </a>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                {/*<div className="flex items-center justify-center gap-2 align-middle">*/}
                {/*    <a className="flex items-center justify-center rounded-full border p-2 align-middle bg-base-300"*/}
                {/*       href=""><FaXTwitter size={20}/></a>*/}
                {/*    <a className="flex items-center justify-center rounded-full border p-2 align-middle bg-base-300"*/}
                {/*       href=""><SlSocialFacebook size={20}/></a>*/}
                {/*    <a className="flex items-center justify-center rounded-full border p-2 align-middle bg-base-300"*/}
                {/*       href=""><SlSocialYoutube size={20}/></a>*/}
                {/*    <a className="flex items-center justify-center rounded-full border p-2 align-middle bg-base-300"*/}
                {/*       href=""><SlSocialLinkedin size={20}/></a>*/}

                {/*</div>*/}
            </div>
        </footer>
    )
}

export default Footer;