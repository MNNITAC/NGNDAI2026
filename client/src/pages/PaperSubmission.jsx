function PaperSubmission() {
    return (
        <div className="flex w-full flex-col items-center justify-center align-middle">
            <div id="CMTAcknowledgement" className="relative flex lg:p-16 flex-col justify-center overflow-hidden rounded-md shadow-sm
             antialiased text-base-content mb-8 w-full items-center">
                <div className="max-w-[1100px]">
                    <div className="text-justify">
                        <h1 className="mb-4 text-4xl font-bold text-primary font-playfair text-center">Instructions for Preparing Manuscripts:</h1>
                        <p>Prospective authors are invited to submit full-length original research papers. In submitting
                            a
                            manuscript to NGNDAI-2026, authors acknowledge that no paper substantially similar in
                            content
                            has been
                            or will be submitted to another journal, conference or workshop during the review period. In
                            such a
                            case, the paper will be rejected without review.
                            Papers must be electronically submitted to the Microsoft Research paper submission portal
                            before
                            the
                            deadline expires without exception.
                            Authors should prepare their manuscripts of 10-12 pages (including all text, figures, and
                            references).
                            The manuscript must be submitted in pdf format only and the file size of your manuscript
                            should
                            not
                            exceed 10 MB as per guidelines of Springer proceedings (Click).
                            Use a proper tool to convert the resulting source into a pdf document that has only scalable
                            fonts with
                            all fonts embedded.
                            The images embedded in the paper must not contain transparent pixels (i.e., an alpha-channel
                            of
                            a
                            transparent color) since this could lead to problems when displaying or printing the pdf.
                            The pdf manuscript must not have Adobe Document Protection or Document Security enabled.</p>

                        <p className="font-bold text-xl mb-4 mt-6">Proceedings:</p>
                        <p>The proceedings of the conference will be published by Springer Nature book series.</p>

                        <p className="font-bold text-xl mb-4 mt-6">Preparing Your Proceedings Paper:</p>
                        <p>For your convenience, we have summarized in the “Author Guidelines” document how a
                            proceedings
                            paper
                            should be structured, how elements (headings, figures, references) should be formatted using
                            our
                            predefined styles, etc. We also give some insight on how your paper will be typeset at
                            NGNDAI-2026. The
                            PDF of the Authors Guidelines can be downloaded here <a
                                className="text-red-500 font-medium underline"
                                href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">Proceedings
                                Guidelines for Authors</a>.</p>

                        <p className="font-bold text-xl mb-4 mt-6">Proceedings Guidelines for Authors:</p>
                        <p>Authors must use the manuscript template specified here. The LaTeX and Word templates can be
                            downloaded
                            from the following links:</p>

                        <ul className="list-disc ml-8">
                            <li>LaTeX Template</li>
                            <li>Word Template</li>
                        </ul>
                        <p>Authors can use the <a className="text-red-500 font-medium underline"
                                                  href="https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj#.WuA4JS5uZpi">
                            LaTeX2e Proceedings Templates</a> available in the scientific authoring platform
                            Overleaf.</p>

                        <p className="font-bold text-xl mb-4 mt-6">Instruction for Manuscript Submission:</p>
                        <p>The manuscript has to be uploaded online at the ICTCON 2025 Microsoft Research paper submission
                        portal
                            at the following link: <a className="text-blue-500 font-medium underline" href="https://cmt3.research.microsoft.com/NGNDAI2026">https://cmt3.research.microsoft.com/NGNDAI2026</a></p>
                    </div>
                </div>
            </div>
            <div className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-base-200/40 text-base-content w-full flex items-center">
                <div className="max-w-[1100px]">
                    <div>
                        <p className="font-bold text-xl mb-4 mt-6">Acknowledgement:</p>
                        The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
                        This
                        service was provided for free by Microsoft and they bore all expenses, including costs for Azure
                        cloud
                        services as well as for software development and support.
                    </div>
                </div>
            </div>
        </div>)
}

export default PaperSubmission;