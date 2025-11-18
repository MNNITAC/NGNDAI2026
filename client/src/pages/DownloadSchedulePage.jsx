import React, {useEffect} from "react";
import schedule from "../assets/documents/Conference_Schedule_NGNDAI.pdf"

function DownloadSchedulePage() {
  useEffect(() => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = schedule;
    link.download = "Conference_Schedule_NGNDAI.pdf";

    // Trigger a click on the anchor element
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);

    // Optional: redirect back to home page after initiating download
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Downloading Conference Schedule</h1>
        <p className="mb-4">Your download should start automatically.</p>
        <p className="text-sm text-gray-500">If the download doesn't start,
          <a
            href={schedule}
            download="Conference Schedule.pdf"
            className="text-blue-500 hover:underline ml-1"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}

export default DownloadSchedulePage;
