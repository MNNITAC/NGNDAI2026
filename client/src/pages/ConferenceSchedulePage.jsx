import React from "react";
import schedule from "../assets/documents/detailed_schedule.pdf";

function ConferenceSchedulePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-gray-100 px-4 py-8">
      <h1 className="mb-6 text-center font-playfair text-4xl font-bold text-primary">
        Conference Schedule
      </h1>
      <iframe
        src={schedule}
        title="NGNDAI 2026 Conference Schedule"
        className="h-[80vh] w-full max-w-6xl border border-gray-300 bg-white shadow-md"
      />
    </main>
  );
}

export default ConferenceSchedulePage;
