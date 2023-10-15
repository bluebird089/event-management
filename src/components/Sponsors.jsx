import { AiFillGoogleCircle } from "react-icons/ai";
import { TbBrandToyota } from "react-icons/tb";
import { GiFlowerTwirl, GiDustCloud } from "react-icons/gi";
import { LiaCloudversify } from "react-icons/lia";
import { SiGunicorn } from "react-icons/si";
import Client from '../assets/Client.jpg'


const Sponsors = () => {
    return (
        <div className="my-10 md:my-20 container mx-auto px-3">
            {/* Title Section */}
            <div className="">
                <div className='h-1 w-24 bg-green-950 bottom-5 mb-5 mx-auto'></div>
                <h2 className="font-semibold text-xl md:text-4xl text-center">We have <span className="font-bold text-green-950">Best Partners and Clients</span></h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-10">
                <div className="md:w-1/2 grid grid-cols-2 gap-3">
                    <div data-aos="flip-right" data-aos-duration="1000" className="bg-green-950 py-5 rounded-md flex text-white items-center gap-1 md:text-lg lg:text-2xl font-semibold justify-center">
                        <AiFillGoogleCircle></AiFillGoogleCircle>
                        <h3>GOOGLE</h3>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className="bg-green-950 py-5 rounded-md flex text-white items-center gap-1 md:text-lg lg:text-2xl font-semibold justify-center">
                        <TbBrandToyota></TbBrandToyota>
                        <h3>TOYOTA</h3>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" className="bg-green-950 py-5 rounded-md flex text-white items-center gap-1 md:text-lg lg:text-2xl font-semibold justify-center">
                        <GiFlowerTwirl></GiFlowerTwirl>
                        <h3>WINX</h3>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className="bg-green-950 py-5 rounded-md flex text-white items-center gap-1 md:text-lg lg:text-2xl font-semibold justify-center">
                        <LiaCloudversify></LiaCloudversify>
                        <h3>THUNDERCLOUD</h3>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" className="bg-green-950 py-5 rounded-md flex text-white items-center gap-1 md:text-lg lg:text-2xl font-semibold justify-center">
                        <SiGunicorn></SiGunicorn>
                        <h3>NEW DAY</h3>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className="bg-green-950 py-5 rounded-md flex text-white items-center gap-1 md:text-lg lg:text-2xl font-semibold justify-center">
                        <GiDustCloud></GiDustCloud>
                        <h3>DUSTIN CORP</h3>
                    </div>
                </div>
                <div className="hero md:w-1/2 rounded-lg" style={{ backgroundImage: `url(${Client})` }} data-aos="fade-left" data-aos-duration="1000">
                    <div className="hero-overlay rounded-lg bg-black bg-opacity-40"></div>
                    <div className="text-center text-neutral-content space-y-3 md:space-y-5 p-5 lg:p-20">
                        <p className="font-light md:text-lg text-center bg-white bg-opacity-40 inline-block text-green-950 rounded-md px-1">CORP EVE.</p>
                        <h3 className="font-semibold text-2xl md:text-5xl">Client <span className="font-bold">Says,</span></h3>
                        <p className="md:text-xl font-light">"Bring People Together, or turn your passion into a business. Corp Eve gives you everything you need to host your best event yet"</p>
                        <p className="font-bold text-lg text-center bg-white bg-opacity-40 inline-block text-green-950 rounded-md px-1">Simon Riley</p>
                        <p>Taskforce, 141</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;