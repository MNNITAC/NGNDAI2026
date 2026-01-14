function SubmissionGuidelines() {

    const parameters = [
        {
            factor: "Originality",
            content: "The paper presents a new idea, issue and application; discusses existing research with its possible research gaps and a suggestive mechanism to fill it up using a new strategy."
        },
        {
            factor: "Engaging",
            content: "The presentation format engages the audience most creatively, or has a great potential to attract conference attendees by pinpointing the needs of the research community."
        },
        {
            factor: "Significant",
            content: "The paper must have incorporated the issues important to resolving the inefficiencies of the existing techniques for relevant problems, and to provide solutions most simply and effectively."
        },
        {
            factor: "Quality",
            content: "Claims are supported by sufficient data; it should be based on relevant experiments and simulations with appropriate theoretical foundations based on published literature. Limitations of the conducted experiments are to be described comprehensively."
        },
        {
            factor: "Clear",
            content: "The intended outcomes of the paper are simple and easily understood."
        },
        {
            factor: "Relevant",
            content: "The paper addresses one or more of the themes of the conference."
        }
    ];


    return (<section
            id="Submission Guidelines"
            className="flex-col rounded-md text-base-content w-full flex items-center py-8 text-justify">

            <div className="max-w-[1100px]">


                <h1 className="mb-8 text-4xl font-bold text-primary font-playfair text-center">Submission
                    Guidelines</h1>

                <div className="space-y-8">
                    <div>
                        <div>
                            <h2 className="mb-2 text-xl font-bold">Paper format</h2>
                            <ul className="list-inside list-disc">
                                <li>The submission of the papers shall be accepted in the Springer format available
                                    on: <a
                                        target="_blank"
                                        href="https://typeset.io/formats/springer-conferences/default-format-for-springer-conferences/f8d71f9027f449abb4f73d0a7bf6d340"
                                        className="link-error link">
                                        https://typeset.io/formats/springer-conferences/default-format-for-springer-conferences/f8d71f9027f449abb4f73d0a7bf6d340
                                    </a></li>

                                <li>The papers <b className="text-error">must not exceed</b> a page limit of 12-14 pages
                                    in
                                    any
                                    manner in
                                    the single page - single column format supported by Springer. Any paper exceeding
                                    this
                                    page
                                    limit will be outright rejected.
                                </li>
                                <li>The papers are to be submitted at the submission link <a
                                    className="link link-primary"
                                    target="_blank"
                                    href="https://cmt3.research.microsoft.com/NGNDAI2025">https://cmt3.research.microsoft.com/NGNDAI2025</a> within
                                    the last dates mentioned in the conference paper schedule.
                                </li>
                                <li>All further enquiries about the
                                    status of the paper can be made at the conference email – <a
                                        className="link-primary link"
                                        href="mailto:ngndai@mnnit.ac.in">ngndai@mnnit.ac.in</a>
                                </li>


                            </ul>
                        </div>

                    </div>

                    <div>
                        <div>
                            <h2 className="mb-2 text-xl font-bold">Review Process</h2>
                            <p>The review process is double-blind. Therefore, please do not mention your names and
                                affiliations of institutions/companies in your submission. Also, do not include funding
                                sources or other acknowledgements in your papers.</p>
                            <div className="my-2">
                                <p>Each paper will be reviewed by at least three regular PC members or two senior PC
                                    members.
                                    The acceptance decisions will take into account paper novelty, technical depth,
                                    elegance,
                                    practical or theoretic impact, and presentation based on the following
                                    parameters:</p>

                                <ul className="list-disc mt-2 pl-4">
                                    {
                                        parameters.map(p => <li><span
                                            className="font-medium underline">{p.factor}</span><span
                                            className="text-base-content/70">: {p.content}</span>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default SubmissionGuidelines;