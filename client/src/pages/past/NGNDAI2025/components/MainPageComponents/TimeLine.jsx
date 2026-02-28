import React from "react";

import timelineDesktopLight
    from "../../assets/images/timeline/desktop/Beige Minimalist Timeline Diagram Graph-1504.jpg";
import timelineMobileLight from "../../assets/images/timeline/Mobile/Beige Minimalist Timeline Diagram Graph-1504.jpg";

function TimeLine() {

    return (<section id="timeline" className="px-4 md:px-5 lg:px-5 max-w-[1400px] mb-8 flex items-center align-middle w-full">
        {/*<h2 className="mb-4 text-center text-4xl font-bold leading-normal text-primary font-manrope lg:text-start font-playfair">Timeline</h2>*/}
        {/*<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">*/}
        {/*    {timelineData.map((el, i) => <li>*/}
        {/*        <div className="timeline-middle">*/}
        {/*            <HiOutlineClock size={22}/>*/}
        {/*        </div>*/}
        {/*        <motion.div*/}
        {/*            initial={{opacity: 0}}*/}
        {/*            whileInView={{opacity: 1}}*/}
        {/*            viewport={{once: true}}*/}
        {/*            transition={{duration: 1}}*/}
        {/*            className={`mb-10 timeline-box ${i % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"}`}>*/}
        {/*            <time className="font-mono italic">{el.date}</time>*/}
        {/*            <div className="text-lg font-black">{el.heading}</div>*/}
        {/*        </motion.div>*/}
        {/*        <hr/>*/}
        {/*    </li>)}*/}
        {/*</ul>*/}
        <img src={timelineDesktopLight} alt="timeline" className="w-3/5 object-contain hidden md:block"/>
        <img src={timelineMobileLight} alt="timeline" className="md:hidden object-contain"/>

    </section>);
}

export default TimeLine;