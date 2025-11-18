import springerLectureNotes from "../../assets/images/DocumentImages/springerLectureNotes.jpeg"


function Publication() {
    return (<section
        id="publication"
        className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-base-200/40 text-base-content w-full flex items-center">

        <div className="max-w-[1100px]">
            <h1 className="mb-4 text-4xl font-bold text-primary font-playfair">Publication</h1>

            <div className="flex flex-col md:flex-row gap-4 text-justify items-center">
                <div className="flex flex-col gap-4">
                    <p className="">
                        The International Conference on Next-Generation Networks and Deployable Artificial Intelligence
                        (NGNDAI-2026) proceedings will be published as Springer book series “Lecture Notes in Networks
                        and Systems” (https://www.springer.com/series/15179) (indexed in Web of Science, SCOPUS, etc.).
                        {/*<b> (Approved)</b>*/}
                    </p>
                    <p>
                        Selected and extended versions of research papers will be forwarded for publication as a Special
                        Issue in Scopus and SCI/SCIE-indexed Journals of repute.
                    </p>
                </div>
                <img className="h-36" src={springerLectureNotes} alt="Springer Nature"/>
            </div>

            <div className="">
                <h2 className="text-xl font-bold my-2 ">Best Paper Awards</h2>
                <p className="text-justify">The Best Paper Award is presented to the authors who have written the best
                    paper among those who
                    appear in the conference proceedings. Recipients are presented with a souvenir and a certificate
                    that describes the award. The awards are announced and bestowed during the conference valedictory
                    session.</p>
            </div>
        </div>

    </section>)
}

export default Publication;