import nrf from '../../assets/sponsors/NRF-LOGO.jpg';
import csir from '../../assets/sponsors/CSIR-Logo.jpg';
import dlink from '../../assets/sponsors/DLink_logo.svg';
import hp from '../../assets/sponsors/HP_logo.png';


function Sponsors() {
    return (

        <div
            className="mb-8 flex-col rounded-md text-base-content w-full flex items-center lg:pb-4">
            <div className="max-w-[1100px] w-full p-0">
                <h1 className="text-4xl font-bold text-primary font-playfair mb-12 ">Our Sponsors</h1>
                <div className=" wrap flex flex-wrap align-middle items-center gap-16">
                    <img
                        className="h-32"
                        src={nrf}
                        alt="mnnit logo"
                    />
                    <img
                        className="h-32"
                        src={csir}
                        alt="google"
                    />
                    <img
                        className="w-48"
                        src={dlink}
                        alt="google"
                    />
                    <img
                        className=""
                        src={hp}
                        alt="google"
                    />
                </div>
            </div>
        </div>

    )
}

export default Sponsors;