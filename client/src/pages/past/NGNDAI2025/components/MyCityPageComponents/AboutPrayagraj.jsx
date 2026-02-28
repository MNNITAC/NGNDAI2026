import React from "react";
import {motion} from "framer-motion";
import img1 from "../../assets/images/UP images compressed/1.jpeg";
import img2 from "../../assets/images/UP images compressed/2.jpeg";
import img3 from "../../assets/images/UP images compressed/3.jpeg";
import img4 from "../../assets/images/UP images compressed/4.jpeg";
import img5 from "../../assets/images/UP images compressed/5.jpeg";
import img6 from "../../assets/images/UP images compressed/6.jpeg";
import img7 from "../../assets/images/UP images compressed/7.jpeg";
import img8 from "../../assets/images/UP images compressed/8.jpeg";
import img9 from "../../assets/images/UP images compressed/9.jpeg";
import img10 from "../../assets/images/UP images compressed/10.jpeg";
import img11 from "../../assets/images/UP images compressed/11.jpeg";
import img12 from "../../assets/images/UP images compressed/12.jpeg";

function AboutPrayagraj() {


    const images = [{src: img1}, {src: img2}, {src: img3}, {src: img4}, {src: img5}, {src: img6}, {src: img7}, {src: img8}, {src: img9}, {src: img10}, {src: img11}, {src: img12}];


    return (<section
        id="About Prayagraj"
        className="flex-col rounded-md shadow-sm text-base-content w-full flex items-center bg-base-200/40 py-8">

        <div className="max-w-[1100px]">


            <h2 className="mb-8 text-4xl font-bold text-primary font-playfair">About Prayagraj</h2>

            <p className="mb-8 text-justify font-normal leading-relaxed">Allahabad,
                officially known as Prayagraj, is a city rich in history and culture, located at the confluence of the
                Ganges, Yamuna, and the mythical Saraswati rivers. Known for its spiritual significance, it hosts the
                world-renowned Kumbh Mela, attracting millions of pilgrims and tourists from around the globe. The city
                is
                also an important center for education, with esteemed institutions like Allahabad University.
                Additionally,
                it boasts a blend of historical monuments, vibrant markets, and a thriving cultural scene that reflects
                its
                diverse heritage. Allahabad truly exemplifies a harmonious blend of tradition and modernity.</p>


            <div className="columns-2 lg:columns-4">
                {images.map((el, idx) => (<motion.img
                    key={idx}
                    className="mb-4 h-auto max-w-full rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300"
                    src={el.src}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5}}
                    // viewport={{once: true}}
                />))}
            </div>
        </div>
    </section>)
}

export default AboutPrayagraj;
