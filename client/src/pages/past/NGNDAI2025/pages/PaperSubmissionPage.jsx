import React from "react";
import ConferenceTracks from "../components/PaperSubmissionPageComponents/ConferenceTracks.jsx";

function PaperSubmissionPage() {

    return (<main className="flex w-full flex-col items-center justify-center align-middle ax-w-[1400px]">
        {/*<CallForPaper/>*/}
        <ConferenceTracks/>
        {/*<SubmissionGuidelines/>*/}
        {/*<Publication/>*/}
    </main>)
}

export default PaperSubmissionPage;