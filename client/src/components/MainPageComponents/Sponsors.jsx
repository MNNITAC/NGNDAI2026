import nrf from '../../assets/sponsors/NRF-LOGO.jpg';
import csir from '../../assets/sponsors/CSIR-Logo.jpg';
import dlink from '../../assets/sponsors/DLink_logo.svg';
import hp from '../../assets/sponsors/HP_logo.png';
import upcst from '../../assets/sponsors/upcst.png'
import fortinet from '../../assets/sponsors/fortinet.png'
import cbi from '../../assets/sponsors/cbi_logo.jpeg'
import group from '../../assets/sponsors/group.png'


function Sponsors() {
    return (

        <div
            className="mb-8 flex-col rounded-md text-base-content w-full flex items-center lg:pb-4">
            <div className="max-w-[1100px] w-full p-0">
                <h1 className="text-center text-primary text-4xl font-bold leading-normal mb-6 lg:text-start font-playfair">Our Sponsors</h1>
                <div className=" wrap flex flex-wrap align-bottom justify-around items-center gap-6">
                    <img
                        className="w-36"
                        src={nrf}
                        alt="mnnit logo"
                    />
                    <img
                            className="h-24"
                            src={upcst}
                            alt="google"
                    />
                    {/* <img
                        className="h-28"
                        src={csir}
                        alt="google"
                    /> */}
                    <img
                        className="w-48"
                        src={dlink}
                        alt="google"
                    />
                    <img
                        className="w-48 pb-2"
                        src={hp}
                        alt="google"
                    />
                    <img
                        className="w-52 pb-3"
                        src={cbi}
                        alt="google"
                    />
                    <img
                        className="h-24"
                        src={fortinet}
                        alt="google"
                    />
                </div>
            </div>
        </div>

    )
}

export default Sponsors;