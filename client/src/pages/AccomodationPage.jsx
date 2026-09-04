import React from "react";

const AccomodationPage = () => {
    // Hotel data structure
    const hotels = [{
        id: 1, name: "WelcomeHeritage Badi Kothi", distance: "7.2 km", contact: "095192 92271", rooms: [{
            category: "Premium Suite(Top)", singleBed: "15000/- (15% Discount)", doubleBed: "15000/- (15% Discount)",
        }, {
            category: "Super Delux(Mid)", singleBed: "9500/- (10% Discount)", doubleBed: "9500/- (10% Discount)",
        }, {
            category: "Deluxe(Low)", singleBed: "6500/- (15% Discount)", doubleBed: "6500/- (15% Discount)",
        },]
    }, {
        id: 2, name: "Hotel Kanha Shyam", distance: "7.8 km", contact: "097922 03853", rooms: [{
            category: "Premium Suite(Top)", singleBed: "7000/- + Tax", doubleBed: "8000/- + Tax",
        }, {
            category: "Super Delux(Mid)", singleBed: "5500/- + Tax", doubleBed: "6500/- + Tax",
        },]
    }, {
        id: 3, name: "Treebo Divine Stay", distance: "7.4 km", contact: "093228 00100", rooms: [{
            category: "Delux(Mid)", singleBed: "3650/- (5% Discount)", doubleBed: "4000/- (5% Discount)",
        }, {
            category: "Standard(Low)", singleBed: "3250/- (5% Discount)", doubleBed: "3550/- (5% Discount)",
        },]
    }, {
        id: 4, name: "Itsy Royal Galaxy", distance: "8 km", contact: "093228 00100", rooms: [{
            category: "Standard(Low)", singleBed: "1975/-", doubleBed: "2125/-",
        },]
    }, {
        id: 5, name: "Nirvana Inn", distance: "6.4 km", contact: "091511 42225", rooms: [{
            category: "Delux(Mid)", singleBed: "1500/-", doubleBed: "1600/-",
        }, {
            category: "Standard(Low)", singleBed: "1300/-", doubleBed: "1400/-",
        },]
    }, {
        id: 6, name: "Ranjan Villa", distance: "5.8 km", contact: "087958 28421", rooms: [{
            category: "Super Delux(3 Bed)", singleBed: "", doubleBed: "3500/- (10% Discount)",
        }, {
            category: "Deluxe(2 Bed)", singleBed: "", doubleBed: "2000/- (10% Discount)",
        },]
    }, {
        id: 7, name: "Raghav Villa", distance: "1.1 km", contact: "0124 620 1516", rooms: [{
            category: "Classic", singleBed: "1685/- (Max 2 person) King Size Bed", doubleBed: "",
        },]
    }, {
        id: 8, name: "Hotel Milan Palace", distance: "7.6 km", contact: "080808 90890", rooms: [{
            category: "Super Deluxe (Mid)",
            singleBed: "7500/- + Tax (10% Discount)",
            doubleBed: "8500/- + Tax (12% Discount)",
        }, {
            category: "Deluxe(Low)", singleBed: "6500/- + Tax (12% Discount)", doubleBed: "7500/- + Tax (15% Discount)",
        },]
    }, {
        id: 9, name: "Cennet Da Boutique Hotel", distance: "7 km", contact: "077059 92020", rooms: [{
            category: "Suite(Top)", singleBed: "5000/- (5% Discount)", doubleBed: "6500/- (15% Discount)",
        }, {
            category: "Mini Street(Mid)", singleBed: "3500/-", doubleBed: "4500/- (10% Discount)",
        }, {
            category: "Deluxe(Mid)", singleBed: "3000/-", doubleBed: "4000/-",
        }, {
            category: "Standard (Low)", singleBed: "2800/-", doubleBed: "3500/- (5% Discount)",
        },]
    }, {
        id: 10, name: "Radisson Hotel Prayagraj", distance: "~6.6 km", contact: "0532 350 6400", rooms: [{
            category: "Luxury", singleBed: "5000/- - 7000/- + taxes", doubleBed: "₹5,000/- - ₹7,500/- + taxes",
        },]
    }, {
        id: 11, name: "Zone Connect by The Park", distance: "~6.4 km", contact: "0532 350 9100", rooms: [{
            category: "Luxury",
            singleBed: "10000/- - 17000/- + taxes (20% Discount)",
            doubleBed: "11000/- - 18000/- + taxes (20% Discount)",
        },]
    }, {
        id: 12, name: "Hotel Platinum Inn", distance: "~7.1 km", contact: "097949 89898", rooms: [{
            category: "Average",
            singleBed: "2400/- - 3100/- + taxes (20% Discount)",
            doubleBed: "2700/- - 3300/- + taxes (20% Discount)",
        },]
    }, {
        id: 13, name: "Hotel Galaxy", distance: "~6.4 km", contact: "099189 01108", rooms: [{
            category: "Average", singleBed: "3200/- + taxes", doubleBed: "3700/- + taxes",
        },]
    }, {
        id: 14, name: "Hotel Kashi", distance: "~7.3 km", contact: "090261 15192", rooms: [{
            category: "Average", singleBed: "1500/- - 1600/- + taxes", doubleBed: "1500/- - 1600/- + taxes",
        },]
    }, {
        id: 15, name: "Hotel Rama Continental", distance: "~6.5 km", contact: "091298 98882", rooms: [{
            category: "Average", singleBed: "3500/- - 6800/- + taxes", doubleBed: "4500/- - 8800/- + taxes",
        },]
    },];

    const delegateTariff = [{
        roomType: "DELUXE SINGLE",
        publishedTariff: "12000",
        specialTariff: "5000",
    }, {
        roomType: "DELUXE DOUBLE",
        publishedTariff: "14000",
        specialTariff: "6000",
    }, {
        roomType: "ROYAL CLUB SINGLE",
        publishedTariff: "16000",
        specialTariff: "6000",
    }, {
        roomType: "ROYAL CLUB DOUBLE",
        publishedTariff: "18000",
        specialTariff: "7000",
    }, {
        roomType: "CHAMBER SINGLE/DOUBLE",
        publishedTariff: "25000",
        specialTariff: "8000",
    }, {
        roomType: "JUNIOR SUITE (SINGLE/DOUBLE)",
        publishedTariff: "30000",
        specialTariff: "10000",
    }, {
        roomType: "SUITE (SINGLE/DOUBLE)",
        publishedTariff: "35000",
        specialTariff: "20000",
    }, {
        roomType: "EXTRA PERSON",
        publishedTariff: "3000",
        specialTariff: "1500",
    },];

    return <section
        id="Accomodation"
        className="flex-col rounded-md shadow-sm text-base-content flex items-center py-4 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                            H
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Official Hospitality Partner</h3>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                        We are pleased to announce <span className="font-semibold text-primary">Hotel Kanha Shyam, Prayagraj </span>
                         as the official hospitality partner and accommodation sponsor for NGNDAI-2026.
                    </p>
                    <p className="mt-4 text-base text-gray-700 leading-relaxed">
                        Located strategically in Civil Lines, Hotel Kanha Shyam is offering exclusive discounted room tariffs
                        and premium services for all registered national and international conference delegates.
                    </p>

                    <div className="mt-6">
                        <h4 className="text-xl font-semibold mb-2">Location &amp; Connectivity</h4>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed">
                            <li className="mb-1">Address: 22/1, Strachey Road, Civil Lines, Prayagraj, Uttar Pradesh.</li>
                            <li className="mb-1">Proximity: Convenient travel distance to the conference venue at <span className="font-semibold">MNNIT Allahabad</span> and just 1.2 km from the center of Prayagraj.</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h4 className="text-xl font-semibold mb-2">How to Book Your Room</h4>
                        <p className="text-base text-gray-700 mb-2">To secure the conference-special pricing, please book directly using the contact avenues below:</p>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed">
                            <li className="mb-1">Official Website Portal: <a href="http://www.hotelkanhashyam.com" target="_blank" rel="noreferrer" className="text-primary font-semibold">Hotel Kanha Shyam Booking Portal</a></li>
                            <li className="mb-1">Reservation Helpline: Connect directly via <span className="font-semibold">+91-9897609116</span></li>
                            <li className="mb-1">Email Reference: Please send your reservation query along with your approved conference registration slip to their helpdesk.</li>
                            <li className="mb-1">Official booking emails: <a href="mailto:info@hotelkanhashyam.com" className="text-primary">info@hotelkanhashyam.com</a>, <a href="mailto:sales@hotelkanhashyam.com" className="text-primary">sales@hotelkanhashyam.com</a></li>
                        </ul>

                        <p className="mt-3 text-base text-gray-600">Please note the bookings should come in writing from official mail id either on <a href="mailto:info@hotelkanhashyam.com" className="text-primary">info@hotelkanhashyam.com</a>, or <a href="mailto:sales@hotelkanhashyam.com" className="text-primary">sales@hotelkanhashyam.com</a>.</p>

                        <p className="mt-2 text-base text-gray-600 font-medium">Please note that the above rates shall not be applicable for a block of more than 3 rooms on a single day in case booked in one name.</p>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">Special Delegate Perks</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300 text-sm md:text-base">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-3 py-3 text-left">Room Type</th>
                                <th className="border border-gray-300 px-3 py-3 text-left">Published Tariff</th>
                                <th className="border border-gray-300 px-3 py-3 text-left">Special Tariff</th>
                            </tr>
                            </thead>
                            <tbody>
                            {delegateTariff.map((item) => (
                                <tr key={item.roomType} className="align-top hover:bg-gray-50">
                                    <td className="border border-gray-300 px-3 py-3 font-medium text-gray-800">{item.roomType}</td>
                                    <td className="border border-gray-300 px-3 py-3 text-gray-700">{item.publishedTariff}</td>
                                    <td className="border border-gray-300 px-3 py-3 text-gray-700">{item.specialTariff}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-xs font-medium text-gray-600">(Per room per night) (Exclusive of GST)</p>

                    <div className="mt-4 text-sm text-gray-700">
                        <h4 className="font-semibold mb-2">The above rates include:-</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Tea / Coffee makers in the room with service packs provided on a complimentary basis.</li>
                            <li>Shaving Kit, Dental kit (on request) with bathroom slippers.</li>
                            <li>All the rooms have LCD Televisions with major satellite channels and individual electronic safes.</li>
                            <li>Buffet/Fixed menu Breakfast from 0700 to 1030 Hrs. on daily basis in our Coffee Shop, The Patio.</li>
                            <li>Complimentary usage of our Fitness Centre with state of the art equipment, exclusive Yoga room and steam bath section.</li>
                            <li>Complimentary usage of Wi-Fi on Hotel’s network for up to 2 devices.</li>
                            <li>2 liters of packaged drinking water replenished on daily basis.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 className="text-4xl font-playfair font-bold text-primary text-center">List of Hotels</h2>
            <div className="px-0 w-full">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse mb-8">
                        <thead>
                        <tr className="bg-gray-200 ">
                            <th className="border border-gray-300 px-4 py-2">S. No.</th>
                            <th className="border border-gray-300 px-4 py-2">Hotel Name</th>
                            <th className="border border-gray-300 px-4 py-2">Category</th>
                            <th className="border border-gray-300 px-4 py-2">Distance from MNNIT</th>
                            <th className="border border-gray-300 px-4 py-2">Price Per Night (Single Bed)</th>
                            <th className="border border-gray-300 px-4 py-2">Price Per Night (Double Bed)</th>
                            <th className="border border-gray-300 px-4 py-2">Contact No.</th>
                        </tr>
                        </thead>
                        <tbody>
                        {hotels.map((hotel,hotelIndex) => (hotel.rooms.map((room, roomIndex) => (
                                <tr key={`${hotelIndex}-${roomIndex}`} className="hover:bg-gray-100">
                                    {roomIndex === 0 && (<>
                                            <td className="border border-gray-300 px-4 py-2" rowSpan={hotel.rooms.length}>
                                                {hotelIndex+1}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2" rowSpan={hotel.rooms.length}>
                                                {hotel.name}
                                            </td>
                                        </>)}
                                    <td className="border border-gray-300 px-4 py-2">{room.category}</td>
                                    {roomIndex === 0 && (
                                        <td className="border border-gray-300 px-4 py-2" rowSpan={hotel.rooms.length}>
                                            {hotel.distance}
                                        </td>)}
                                    <td className="border border-gray-300 px-4 py-2">{room.singleBed}</td>
                                    <td className="border border-gray-300 px-4 py-2">{room.doubleBed}</td>
                                    {roomIndex === 0 && (
                                        <td className="border text-nowrap border-gray-300 px-4 py-2" rowSpan={hotel.rooms.length}>
                                            {hotel.contact}
                                        </td>)}
                                </tr>))))}
                        </tbody>
                    </table>
                </div>
                <div className="text-sm text-gray-600 mt-4 mb-8">
                    <p>Note: Prices are subject to change. Please contact hotels directly for the most current rates and
                        availability.</p>
                </div>
            </div>
        </div>
    </section>
}

export default AccomodationPage;