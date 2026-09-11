import React from "react";

import standee from "../assets/images/CulturalEvent/Standee.png";

// Gallery 1 — event / group performance photos
import g1_1 from "../assets/images/CulturalEvent/g1_1.jpeg";
import g1_2 from "../assets/images/CulturalEvent/g1_2.jpeg";
import g1_3 from "../assets/images/CulturalEvent/g1_3.jpeg";
import g1_4 from "../assets/images/CulturalEvent/g1_4.jpeg";
import g1_5 from "../assets/images/CulturalEvent/g1_5.jpeg";
import g1_6 from "../assets/images/CulturalEvent/g1_6.jpeg";
import g1_7 from "../assets/images/CulturalEvent/g1_7.jpeg";
import g1_8 from "../assets/images/CulturalEvent/g1_8.jpeg";
import g1_9 from "../assets/images/CulturalEvent/g1_9.jpeg";

// Gallery 2 — Kathak artist Pt. Rudra Shankar Mishra & past performances
import g2_1 from "../assets/images/CulturalEvent/g2_1.jpeg";
import g2_2 from "../assets/images/CulturalEvent/g2_2.jpeg";
import g2_3 from "../assets/images/CulturalEvent/g2_3.jpeg";
import g2_4 from "../assets/images/CulturalEvent/g2_4.jpeg";
import g2_5 from "../assets/images/CulturalEvent/g2_5.jpeg";
import g2_6 from "../assets/images/CulturalEvent/g2_6.jpeg";

const CulturalProgramPage = () => {
    const gallery1 = [g1_1, g1_2, g1_3, g1_4, g1_5, g1_6, g1_7, g1_8, g1_9];
    const rudraImages = [g2_2, g2_5, g2_6];
    const gallery2 = [g2_1, g2_3, g2_4];

    // Production information (table kept the same as existing page, with the new event added at the end)
    const productions = ["लैला-मजनू", "घण्टाघर", "आज़ादी तब और आज", "खाँप कहीं आस-पास", "गुनाहों का देवता", "काकोरी", "Killing Machine", "नदी प्यासी थी", "कथा संग्राम की", "आज़ाद", "रामायण नृत्य नाटिका", "काकोरी और गाँधी", "अखण्ड भारत नृत्य नाटिका", "सोनाटा", "लो आ गयी सोने की चिड़िया"];

    // Social campaigns
    const campaigns = ["Save the Girl Child, Educate the Girl Child", "Clean India, Healthy India"];

    return (<section
        id="CulturalEvent"
        className="flex-col rounded-md shadow-sm text-base-content flex items-center py-8 w-full"
    >
        <h2 className="mb-2 text-4xl font-playfair font-bold text-primary text-center">
            "राम तत्त्व"
        </h2>
        <p className="mb-8 text-lg text-center text-base-content/80">
            A Celebration of Indian Classical Dance &amp; Cultural Heritage &nbsp;|&nbsp; Date: 24 September 2026
        </p>

        <div className="px-4 w-full max-w-7xl mx-auto">

            {/* Standee + Kathak Artist Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-10">
                <div className="max-h-[1000px] flex justify-center">
                    <img src={standee} alt="राम तत्त्व नृत्य नाटिका स्टैंडी" className="object-contain max-h-full w-auto" />
                </div>
                <div className="flex flex-col gap-4 max-h-[1000px]">
                    {rudraImages.map((img, index) => (
                        <div key={index} className="h-1/3 overflow-hidden">
                            <img src={img} alt={`पं. रुद्र शंकर मिश्रा ${index + 1}`} className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>
            </div>

            {/* The Cultural Evening */}
            <div className="mb-10">
                <div className="prose max-w-none">
                    <p>
                        <strong>"राम तत्त्व"</strong> एक भावपूर्ण नृत्य-नाटिका है, जिसमें चार प्रस्तुतियों के माध्यम
                        से एक ही दिव्य चेतना और प्रकाश के विभिन्न स्वरूपों को अभिव्यक्त किया गया है। प्रस्तुति की
                        शुरुआत <strong>रामाष्टकम</strong> से होती है, जिसमें श्रीराम के गुण, मर्यादा, चरित्र और उनके
                        चरणों में पूर्ण समर्पण का भाव प्रस्तुत किया जाता है। इसके पश्चात{" "}
                        <strong>शिव ताण्डव स्तोत्रम्</strong> के माध्यम से राम, शिव और रावण की भक्ति एवं आध्यात्मिक
                        एकता को दर्शाया जाता है। <strong>हनुमान चालीसा</strong> में राम के प्रति हनुमान की अनन्य
                        भक्ति, शक्ति, सेवा और समर्पण को अभिव्यक्त किया गया है। अंतिम प्रस्तुति{" "}
                        <strong>रास एवं फूलों की होली</strong> के माध्यम से कृष्ण के प्रेम, आनंद, भक्ति और उत्सवमय
                        स्वरूप को सामने लाती है। इस प्रकार राम, शिव, हनुमान और कृष्ण के अलग-अलग रूपों एवं भावों के
                        माध्यम से प्रस्तुति का मूल संदेश यही है कि <strong>रूप अनेक हैं, भाव अनेक हैं और कथाएँ अनेक
                        हैं, किंतु तत्त्व एक ही है — वही एक प्रकाश, वही एक चेतना, वही "राम तत्त्व"।</strong>
                    </p>
                </div>
            </div>

            {/* Kathak Artist Introduction */}
            <div className="mb-10">
                <div className="prose max-w-none mb-6">
                    <p>
                        The event will feature an acclaimed Kathak performance by{" "}
                        <strong>Pt. Rudra Shankar Mishra</strong>, a distinguished exponent of the{" "}
                        <strong>Banaras Gharana</strong> and a fourth-generation artist in the disciple lineage of
                        Acharya Sukhdev Maharaj Ji.
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4">
                    प्रख्यात कथक कलाकार – पं. रुद्र शंकर मिश्रा
                </h3>
                <div className="prose max-w-none">
                    <p className="mb-4">
                        पं. रुद्र शंकर मिश्रा <strong>बनारस घराने के प्रतिष्ठित कथक कलाकार</strong> हैं तथा आचार्य
                        सुखदेव महाराज जी की शिष्य परंपरा की <strong>चौथी पीढ़ी</strong> के कलाकार हैं। वे प्रसिद्ध
                        कथक कलाकार <strong>पं. माता प्रसाद मिश्रा के सुपुत्र एवं पं. रवि शंकर मिश्रा के शिष्य</strong>{" "}
                        हैं। मात्र पाँच वर्ष की आयु से उन्होंने बनारस घराने की विशिष्ट गुरु-शिष्य परंपरा में कथक का
                        प्रशिक्षण प्राप्त कर अपनी कला-साधना प्रारंभ की।
                    </p>
                    <p className="mb-4">
                        पं. रुद्र शंकर मिश्रा को <strong>उस्ताद बिस्मिल्लाह ख़ाँ युवा पुरस्कार</strong>, केंद्रीय
                        संगीत नाटक अकादमी द्वारा सम्मानित किया जा चुका है। उन्होंने भारत के विभिन्न राज्यों के
                        साथ-साथ <strong>लंदन, श्रीलंका, जापान और स्विट्जरलैंड</strong> जैसे देशों के प्रतिष्ठित
                        मंचों पर कथक की प्रस्तुतियाँ देकर भारतीय शास्त्रीय नृत्य एवं बनारस घराने की समृद्ध परंपरा का
                        प्रतिनिधित्व किया है।
                    </p>
                    <p className="mb-4">
                        भारत में उनकी प्रमुख प्रस्तुतियों में <strong>संकटमोचन संगीत समारोह, गंगा महोत्सव, ताज
                        महोत्सव, महाकथक उत्सव, उदय शंकर डांस फेस्टिवल, कथक उत्सव, महाकुंभ, श्री काशी विश्वनाथ
                        महोत्सव, अवध महोत्सव</strong> सहित अनेक राष्ट्रीय एवं प्रतिष्ठित सांस्कृतिक आयोजन शामिल हैं।
                        उन्होंने संगीत नाटक अकादमी, कथक केंद्र, संस्कृति मंत्रालय, उत्तर प्रदेश संस्कृति विभाग,
                        उत्तर प्रदेश पर्यटन तथा अन्य प्रतिष्ठित सांस्कृतिक मंचों पर भी अपनी कला प्रस्तुत की है।
                    </p>
                    <p className="mb-4">
                        उनकी कला-साधना के लिए उन्हें <strong>भारत गौरव सम्मान, साहित्य श्री सम्मान, कला गौरव सम्मान
                        एवं बाल अध्येता पुरस्कार</strong> सहित अनेक प्रतिष्ठित सम्मानों से सम्मानित किया जा चुका है।
                        वे <strong>दूरदर्शन के ग्रेडेड कलाकार</strong> हैं तथा भारत सरकार द्वारा प्रदान की जाने
                        वाली <strong>सी.सी.आर.टी. छात्रवृत्ति, जूनियर रिसर्च फेलोशिप एवं सीनियर रिसर्च
                        फेलोशिप</strong> भी प्राप्त कर चुके हैं।
                    </p>
                    <p>
                        उनकी कला-साधना <strong>बनारस घराने की समृद्ध कथक परंपरा, उसकी विशिष्ट तकनीकी एवं भावात्मक
                        शैली तथा गुरु-शिष्य परंपरा की निरंतरता</strong> को समर्पित है।
                    </p>
                </div>
            </div>

            {/* About Aarambh Rangmandal */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-primary mb-4">About Aarambh Rangmandal</h3>
                <div className="prose max-w-none">
                    <p className="mb-4">
                        Aarambh Rangmandal is a prominent theatre and performing-arts group based in Prayagraj,
                        Uttar Pradesh, committed to promoting performing arts, nurturing local artistic talent, and
                        keeping Hindi theatre and India&apos;s cultural traditions vibrant.
                    </p>
                    <p>
                        The organization provides a creative platform for actors, directors, writers and technicians
                        while bringing together classical Indian traditions and contemporary artistic expression.
                        Under the leadership of <strong>Director and Secretary Ritika Awasthi</strong>, Aarambh
                        Rangmandal has developed productions that revisit traditional narratives through meaningful
                        contemporary interpretations.
                    </p>
                </div>
            </div>

            {/* Image Gallery 1 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {gallery1.map((img, index) => (
                    <div key={index} className="h-56 md:h-64 overflow-hidden rounded-lg shadow-sm">
                        <img src={img} alt={`राम तत्त्व कार्यक्रम ${index + 1}`} className="object-cover w-full h-full" />
                    </div>
                ))}
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
                    संस्था अपनी प्रत्येक प्रस्तुति द्वारा सामाजिक जागरूकता फैलाते हुए,  साहित्यिक एवं रचनात्मक विचारों को प्रज्ज्वलित करते हुए दर्शकों पर स्थायी प्रभाव छोड़ने की दिशा में कार्य कर रही है।
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
