import React from "react";

import standee from "../assets/images/CulturalEvent/Standee.png";
import img1 from "../assets/images/CulturalEvent/img1.jpeg";
import img2 from "../assets/images/CulturalEvent/img2.jpeg";
import img3 from "../assets/images/CulturalEvent/img3.jpeg";

const CulturalProgramPage = () => {
    // Image paths - update these when the images are available
    const images = [standee, img1, img2, img3];

    // Production information
    const productions = ["लैला-मजनू", "घण्टाघर", "आज़ादी तब और आज", "खाँप कहीं आस-पास", "गुनाहों का देवता", "काकोरी", "Killing Machine", "नदी प्यासी थी", "कथा संग्राम की", "आज़ाद", "रामायण नृत्य नाटिका", "काकोरी और गाँधी", "अखण्ड भारत नृत्य नाटिका", "सोनाटा", "लो आ गयी सोने की चिड़िया"];

    // Social campaigns
    const campaigns = ["Save the Girl Child, Educate the Girl Child", "Clean India, Healthy India"];

    return (<section
        id="CulturalEvent"
        className="flex-col rounded-md shadow-sm text-base-content flex items-center py-8 w-full"
    >
        <h2 className="mb-8 text-4xl font-playfair font-bold text-primary text-center">Cultural Event</h2>

        <div className="px-4 w-full max-w-7xl mx-auto">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="max-h-[1000px] flex items-center justify-center">
                    <img src={standee} alt="standee" className="object-contain max-h-full w-auto"/>
                </div>
                <div className="flex flex-col gap-4 max-h-[1000px]">
                    <div className="h-1/3 overflow-hidden">
                        <img src={img1} alt="" className="object-cover w-full h-full"/>
                    </div>
                    <div className="h-1/3 overflow-hidden">
                        <img src={img2} alt="" className="object-cover w-full h-full"/>
                    </div>
                    <div className="h-1/3 overflow-hidden">
                        <img src={img3} alt="" className="object-cover w-full h-full"/>
                    </div>
                </div>
            </div>

            {/* About the Group */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-primary mb-4">
                    आरंभ रंगमंडल के बारे में
                </h3>
                <div className="prose max-w-none">
                    <p className="mb-4">
                        आरंभ रंगमंडल की स्थापना 3 सितम्बर 2013 को हुई। यह निरंतर नाटकों, लोक-नाट्य, नुक्कड़ नाटकों और
                        कार्यशालाओं के माध्यम से समाज में जागरूकता फैलाने और रंगकला को सार्थक दिशा देने का कार्य कर रहा
                        है। संस्था का उद्देश्य मनोरंजन के साथ-साथ सामाजिक संदेशों को प्रभावी रूप से प्रस्तुत करना है।
                    </p>
                </div>
            </div>

            {/* Notable Productions */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-primary mb-4">प्रमुख प्रस्तुतियाँ</h3>
                <p className="mb-4">विगत वर्षों में, समूह ने विचारोत्तेजक नाटकों का मंचन किया है, जिनमें शामिल हैं:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {productions.map((production, index) => (<div key={index}
                                                                  className="bg-base-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="font-medium text-center">{production}</p>
                    </div>))}
                </div>
                <p className="mt-4">
                    संस्था अपनी प्रत्येक प्रस्तुति द्वारा सामाजिक जागरूकता फैलाते हुए,  साहित्यिक एवं रचनात्मक विचारों को प्रज्ज्वलित करते हुए दर्शकों पर स्थायी प्रभाव छोड़ने की दिशा में कार्य कर रही है।
                </p>
            </div>

            <div className="mb-10">
                <h3 className="text-2xl font-bold text-primary mb-4">प्रस्तुतियाँ और योगदान</h3>
                <div className="prose max-w-none">
                    <p>
                        विभिन्न प्रतिष्ठित संस्थानों जैसे दूरदर्शन प्रयागराज, इलाहाबाद संग्रहालय प्रयागराज,
                        विश्वविद्यालयों एवं विद्यालयों, आकाशवाणी प्रयागराज द्वारा आयोजित वार्षिक एवं सांस्कृतिक
                        उत्सवों में संस्था "आरंभ" अपनी लोकनाट्य एवं लोक-नृत्य प्रस्तुतियाँ भी प्रस्तुत करती आई है।
                        साथ ही यह समूह लगातार अपने नुक्कड़ नाटकों की प्रस्तुतियों से
                        <strong>“बेटी बचाओ बेटी पढ़ाओ”</strong>,
                        स्वच्छता मिशन व स्वच्छ भारत अभियान जैसे सामाजिक विषयों पर मंचन करता है।
                    </p>
                </div>
            </div>


        </div>
    </section>);
};

export default CulturalProgramPage;