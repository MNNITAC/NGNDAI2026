import so from "../../assets/images/industrySession/SudhanshuOjha.jpg"

function IndustrySession() {

    const name = "Sudhanshu Ojha";
    const designation = "AVP- Government Affairs, CSR & D-Link Academy- D-Link (India) Ltd."
    const image = so;
    const homepage = "https://ardorcomm-media.com/speaker/sudhanshu-ojha/";

    return (<section
        id="industrySession"
        className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-base-200/40 text-base-content w-full flex items-center">
        <div className="max-w-[1100px]">
            <h1 className="mb-4 text-5xl font-bold text-primary font-playfair py-8 text-center">Industry Session</h1>
            <div className="flex justify-center align-middle">
                <div className="border-dotted border-black rounded-lg p-6 text-center shadow-md flex flex-col
                    items-center gap-6 hover:shadow-lg origin-center transition-all bg-base-100 w-[260px]">
                    <img
                        src={image}
                        alt={name} className="rounded-full w-[90%] aspect-square"/>
                    <div>
                        <h3 className="mb-2 font-semibold underline">
                            <a href={homepage}>{name}</a>
                        </h3>
                        <p className="text-base-content/80 text-sm">{designation}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default IndustrySession;