import React from "react";

// import timelineDesktopLight
//     from "../../assets/images/timeline/desktop/Beige Minimalist Timeline Diagram Graph-1504.jpg";
import timelineDesktopLight2026 from "../../assets/images/timeline/desktop/timeline2026.png";
import title from "../../assets/images/timeline/desktop/title.jpg";
import timelineMobileLight from "../../assets/images/timeline/Mobile/Beige Minimalist Timeline Diagram Graph-1504.jpg";

function TimeLine() {
  return (
    <section
      id="timeline"
      className="px-4 md:px-5 lg:px-5 max-w-[1600px] mx-auto mb-12 w-full"
    >
      {/* MOBILE */}
      <div className="md:hidden flex justify-center">
        <img
          src={timelineDesktopLight2026}
          alt="timeline"
          className="h-[75vh] max-h-[900px] w-auto object-contain"
        />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-center gap-8 lg:gap-16 2xl:gap-24 min-h-[80vh]">

        <img
          src={title}
          alt="title"
          className="h-[85vh] max-h-[1000px] w-auto object-contain"
        />

        <img
          src={timelineDesktopLight2026}
          alt="timeline"
          className="h-[85vh] max-h-[1000px] w-auto object-contain"
        />

      </div>
    </section>
  );
}

export default TimeLine;
