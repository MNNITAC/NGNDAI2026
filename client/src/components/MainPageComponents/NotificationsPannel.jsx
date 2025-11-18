import newIndicator from "../../assets/images/new.gif"

function NotificationsPannel() {

    const news = [
        {
            heading: "The Conference Proceedings of NGNDAI 2026 have been approved by Springer. It will be published in the Lecture Notes in Networks and Systems (LNNS) series (https://www.springer.com/series/15179), which is indexed by Scopus.",
            content: <div className="bold">The Conference Proceedings of NGNDAI 2026 have been approved by Springer. It will be published in the Lecture Notes in Networks and Systems (LNNS) series <a>https://www.springer.com/series/15179</a>, which is indexed by Scopus.</div>
        }
    ];


    return (
        <div className="relative left-0 w-[100%] top-0 flex flex-col overflow-hidden p-1 gap-">
            <div className="flex items-center align-middle gap-2 mb-2">
            <span className="text-red-600 font-bold text-lg">News and updates</span>
            <img src={newIndicator} className="h-4 inline"/>
            </div>
            <div className="flex max-w-[90dvw] animatescroll-horizontal hover:pause-scroll gap-2">
                {news.map((item, index) => (
                    <span
                        onClick={() => document.getElementById('all_news').showModal()}
                        key={index}
                        className="cursor-pointer inline-flex border border-neutral-content rounded-3xl justify-center items-center align-middle font-medium relative"
                    >
                        <span
                            className="text-xs text-nowrap p-1 px-2 border-r border-neutral-content text-error">{item.date?.toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                        }) || ""}</span>
                        <h4 className="max-w-[300px] text-sm overflow-hidden text-ellipsis whitespace-nowrap p-1 px-2">{item.heading}</h4>
                        {((new Date() - new Date(item.date)) <= 5 * 24 * 60 * 60 * 1000) &&
                            <img src={newIndicator} className="absolute top-0 right-0 -translate-y-1/2"/>}
                    </span>
                ))}
            </div>
            <span className="self-end text-xs link link-primary"
                  onClick={() => document.getElementById('all_news').showModal()}>View All</span>

            <dialog id="all_news" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById('all_news').close()}>✕
                    </button>
                    <div className="flex flex-col gap-4 max-h-[90dvh] overflow-y-scroll">
                        {
                            news.map(n => <div className="text-xs bg-base-200 p-1 rounded-sm">
                                <div className="flex gap-1 mb-1">
                                <span className="">{n.date?.toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric',
                                })}:</span>
                                    <span className="underline text-primary">{n.heading}</span>
                                    {((new Date() - new Date(n.date)) <= 5 * 24 * 60 * 60 * 1000) &&
                                        <img src={newIndicator} className=""/>}
                                </div>
                                <div className="">{n.content}</div>
                            </div>)
                        }

                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default NotificationsPannel;