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

    return <section
        id="Accomodation"
        className="flex-col rounded-md shadow-sm text-base-content flex items-center py-4 w-full">
        <h2 className="mb-8 text-4xl font-playfair font-bold text-primary text-center">List of Hotels</h2>
        <div className="px-4 w-full max-w-7xl mx-auto">
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
    </section>
}

export default AccomodationPage;