import React from "react";
import { Clock, Bell, UserCheck, Users } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      id: 1,
      date: "31st March 2026",
      title: "Paper Submission Deadline",
      description: "Last date for paper submission",
      icon: Clock,
      bgColor: "bg-[#e0e0e0]",
      borderColor: "border-gray-500",
      iconColor: "text-gray-700",
    },
    {
      id: 2,
      date: "15th April 2026",
      title: "Notification of Acceptance",
      description: "Notifications of acceptance will be released by this date",
      icon: Bell,
      bgColor: "bg-[#bfaecb]",
      borderColor: "border-purple-800",
      iconColor: "text-purple-900",
    },
    {
      id: 3,
      date: "01st May 2026",
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
      description: "Dates of NGANDAI conference",
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
      <div className="max-w-[1100px]">
        <h2 className="text-center text-primary text-4xl font-bold leading-normal mb-2 lg:text-start font-playfair">
          Timeline{" "}
        </h2>
        <div className="w-full max-w-7xl mx-auto p-8 font-sans">
          <div className="relative mt-0 mb-0">
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
                    {/* Removed mb-6 so the line can touch the icon */}
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
                              {event.date}
                            </h3>
                            <h4 className="font-semibold text-slate-800 text-base leading-tight mb-2 opacity-90">
                              {event.title}
                            </h4>
                            <p className="text-slate-700 text-sm opacity-80">
                              {event.description}
                            </p>
                          </div>
                          
                          {/* DOTTED CONNECTOR - TOP */}
                          {/* Changed to border-dotted, removed width/bg, added border-l-2 */}
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
                    {/* Removed mt-6 so the line can touch the icon */}
                    <div
                      className={`flex flex-col items-center h-48 justify-start ${
                        !isTop ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      {!isTop && (
                        <div className="relative flex flex-col items-center">
                          {/* DOTTED CONNECTOR - BOTTOM */}
                          {/* Changed to border-dotted, removed width/bg, added border-l-2 */}
                          <div className="h-14 w-0 border-l-2 border-dotted border-gray-400 -mb-2 relative z-0"></div>
                          
                          {/* Card */}
                          <div
                            className={`${event.bgColor} p-6 rounded-lg shadow-md w-72 min-h-[160px] flex flex-col justify-center text-left transition-transform hover:translate-y-1 relative z-10`}
                          >
                            <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">
                              {event.date}
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