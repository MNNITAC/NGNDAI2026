import React from "react";
import InternationalAdvisoryCommittee from "../components/CommitteePageComponents/InternationalAdvisoryCommittee.jsx";
import NationalAdvisoryCommittee from "../components/CommitteePageComponents/NationalAdvisoryCommittee.jsx";
import TechnicalProgramCommittee from "../components/CommitteePageComponents/TechnicalProgramCommittee.jsx";

function AdvisoryCommittee() {

    return (
        <main className="flex w-full flex-col items-center justify-center align-middle">
            <InternationalAdvisoryCommittee/>
            <NationalAdvisoryCommittee/>
            <TechnicalProgramCommittee/>
        </main>);
}

export default AdvisoryCommittee;