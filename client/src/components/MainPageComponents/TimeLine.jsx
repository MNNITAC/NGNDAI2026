import React from "react";
import { Clock, Bell, UserCheck, Users } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      id: 1,
      originalDate: "31st March 2026",
      newDate: "3oth April 2026 Round 2",
      title: "Paper Submission Deadline",
      description: "Last date for paper submission",
      icon: Clock,
      bgColor: "bg-[#e0e0e0]",
      borderColor: "border-gray-500",
      iconColor: "text-gray-700",
    },
    {
      id: 2,
      originalDate: "30th April 2026",
      newDate: "30th May 2026 Round 2",
      title: "Notification of Acceptance",
      description: "Notifications of acceptance will be released by this date",
      icon: Bell,
      bgColor: "bg-[#bfaecb]",
      borderColor: "border-purple-800",
      iconColor: "text-purple-900",
    },
    {
      id: 3,
      originalDate: "15th May 2026",
      newDate: "10th June 2026 Round 2",
      title: "Author's Registration",
      description: "Last date for author registration",
      icon: UserCheck,
      bgColor: "bg-[#ebd0c6]",
      borderColor: "border-orange-700",
      iconColor: "text-orange-800",
    },
    {
      id: 4,
      date: "24th-26th September 2026",
      title: "NGNDAI-2026 Conference Dates",
      description: "Dates of NGNDAI conference",
      icon: Users,
      bgColor: "bg-[#cda68e]",
      borderColor: "border-amber-900",
      iconColor: "text-amber-900",
    },
  ];

  return (
    <section
      id="timeline"
      className="mb-8 mt-6 flex-col rounded-md text-base-content w-full flex items-center"
    >
      <div className="max-w-[1100px] w-full">
        <h2 className="text-center text-primary text-4xl font-bold leading-normal mb-2 lg:text-start font-playfair">
          Timeline{" "}
        </h2>
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-8 font-sans">

          {/* ===== MOBILE / TABLET: Vertical Timeline ===== */}
          <div className="lg:hidden relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300 z-0"></div>

            <div className="flex flex-col gap-8">
              {events.map((event) => {
                const Icon = event.icon;
                return (
                  <div key={event.id} className="relative flex items-start gap-4">
                    {/* Icon Node */}
                    <div
                      className={`w-10 h-10 min-w-[2.5rem] rounded-full flex items-center justify-center bg-white ${event.iconColor} shadow-lg border-4 ${event.borderColor} z-20`}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    {/* Card */}
                    <div
                      className={`${event.bgColor} p-4 rounded-lg shadow-md flex-1 transition-transform hover:-translate-y-0.5`}
                    >
                      <h3 className="font-bold text-slate-800 text-base leading-tight mb-1">
                        {event.date ? (
                          <span className="font-bold">{event.date}</span>
                        ) : (
                          <>
                            <span className="line-through text-gray-500 font-bold">{event.originalDate}</span>
                            <br />
                            <span className="text-black font-bold">{event.newDate}</span>
                          </>
                        )}
                      </h3>
                      <h4 className="font-semibold text-slate-800 text-sm leading-tight mb-1 opacity-90">
                        {event.title}
                      </h4>
                      <p className="text-slate-700 text-xs opacity-80">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== DESKTOP: Horizontal Alternating Timeline ===== */}
          <div className="hidden lg:block relative mt-0 mb-0">
            {/* Central Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 rounded z-0"></div>

            {/* Timeline Items Container */}
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {events.map((event, index) => {
                const isTop = index % 2 === 0;
                const Icon = event.icon;

                return (
                  <div
                    key={event.id}
                    className="flex flex-col items-center group"
                  >
                    {/* TOP SECTION */}
                    <div
                      className={`flex flex-col items-center h-48 justify-end ${
                        isTop ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      {isTop && (
                        <div className="relative flex flex-col items-center">
                          {/* Card */}
                          <div
                            className={`${event.bgColor} p-6 rounded-lg shadow-md w-72 min-h-[160px] flex flex-col justify-center text-left transition-transform hover:-translate-y-1 relative z-10`}
                          >
                            <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">
                              {event.date ? (
                                <span className="font-bold">{event.date}</span>
                              ) : (
                                <>
                                  <span className="line-through text-gray-500 font-bold">{event.originalDate}</span>
                                  <br />
                                  <span className="text-black font-bold">{event.newDate}</span>
                                </>
                              )}
                            </h3>
                            <h4 className="font-semibold text-slate-800 text-base leading-tight mb-2 opacity-90">
                              {event.title}
                            </h4>
                            <p className="text-slate-700 text-sm opacity-80">
                              {event.description}
                            </p>
                          </div>

                          {/* DOTTED CONNECTOR - TOP */}
                          <div className="h-14 w-0 border-l-2 border-dotted border-gray-400 -mt-2 relative z-0"></div>
                        </div>
                      )}
                    </div>

                    {/* CENTRAL ICON NODE */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center bg-white ${event.iconColor} shadow-lg border-4 ${event.borderColor} z-20 transition-transform hover:scale-110`}
                    >
                      <Icon size={28} strokeWidth={2} />
                    </div>

                    {/* BOTTOM SECTION */}
                    <div
                      className={`flex flex-col items-center h-48 justify-start ${
                        !isTop ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      {!isTop && (
                        <div className="relative flex flex-col items-center">
                          {/* DOTTED CONNECTOR - BOTTOM */}
                          <div className="h-14 w-0 border-l-2 border-dotted border-gray-400 -mb-2 relative z-0"></div>

                          {/* Card */}
                          <div
                            className={`${event.bgColor} p-6 rounded-lg shadow-md w-72 min-h-[160px] flex flex-col justify-center text-left transition-transform hover:translate-y-1 relative z-10`}
                          >
                            <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">
                              {event.date ? (
                                <span className="font-bold">{event.date}</span>
                              ) : (
                                <>
                                  <span className="line-through text-gray-500 font-bold">{event.originalDate}</span>
                                  <br />
                                  <span className="text-black font-bold">{event.newDate}</span>
                                </>
                              )}
                            </h3>
                            <h4 className="font-semibold text-slate-800 text-base leading-tight mb-2 opacity-90">
                              {event.title}
                            </h4>
                            <p className="text-slate-700 text-sm opacity-80">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;