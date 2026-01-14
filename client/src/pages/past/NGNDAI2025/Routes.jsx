import Root from "./pages/Root.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import MainContentPage from "./pages/MainContentPage.jsx";
import CommitteePage from "./pages/CommitteePage.jsx";
import PaperSubmissionPage from "./pages/PaperSubmissionPage.jsx";
import SchedulePage from "./pages/SchedulePage.jsx";
import AdvisoryCommittee from "./pages/AdvisoryCommittee.jsx";
import SubmissionGuidelinesPage from "./pages/SubmissionGuidelines.jsx";
import CarouselPage from "./pages/CarouselPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import SpecialSession from "./pages/SpecialSession.jsx";
import StudentCommittee from "./pages/StudentCommittee.jsx";
import AccomodationPage from "./pages/AccomodationPage.jsx";
import CulturalProgramPage from "./pages/CulturalEvent.jsx";
import DownloadSchedulePage from "./pages/DownloadSchedulePage.jsx";
import MentorshipSessionPage from "./pages/MentorshipSession.jsx";
import ConferenceImagesPage from "./pages/conferenceImages.jsx";

export const ngndai2025Routes = [
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
        children: [
          { path: "", element: <MainContentPage /> },
          { path: "committee", element: <CommitteePage /> },
          { path: "paperSubmission", element: <PaperSubmissionPage /> },
          { path: "schedule", element: <SchedulePage /> },
          { path: "advisoryCommittee", element: <AdvisoryCommittee /> },
          { path: "submissionGuidelines", element: <SubmissionGuidelinesPage /> },
          { path: "carasoulPage", element: <CarouselPage /> },
          { path: "registration", element: <RegistrationPage /> },
          { path: "specialSession", element: <SpecialSession /> },
          { path: "studentCommittee", element: <StudentCommittee /> },
          { path: "accomodationPage", element: <AccomodationPage /> },
          { path: "culturalProgramPage", element: <CulturalProgramPage /> },
          { path: "downloadSchedule", element: <DownloadSchedulePage /> },
          { path: "MentorshipSession", element: <MentorshipSessionPage /> },
          { path: "conferenceImages", element: <ConferenceImagesPage /> },
        ],
      },
    ],
  },
];
