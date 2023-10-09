import { AiFillGoogleCircle } from "react-icons/ai";
import { TbBrandToyota } from "react-icons/tb";
import { GiFlowerTwirl, GiDustCloud } from "react-icons/gi";
import { LiaCloudversify } from "react-icons/lia";
import { SiGunicorn } from "react-icons/si";
import Client from '../assets/Client.jpg'


const Sponsors = () => {
    return (
        <div className="my-20 container mx-auto">
            {/* Title Section */}
            <div className="">
                <div className='h-1 w-24 bg-green-950 bottom-5 mb-5 mx-auto'></div>
                <h2 className="font-semibold text-4xl text-center">We have <span className="font-bold text-green-950">Best Partners and Clients</span></h2>
            </div>
            <div className="flex gap-5 mt-10">
                <div className="w-1/2 grid grid-cols-2 gap-3">
                    <div className="bg-green-950 rounded-md flex text-white items-center gap-1 text-2xl font-semibold justify-center">
                        <AiFillGoogleCircle></AiFillGoogleCircle>
                        <h3>GOOGLE</h3>
                    </div>
                    <div className="bg-green-950 rounded-md flex text-white items-center gap-1 text-2xl font-semibold justify-center">
                        <TbBrandToyota></TbBrandToyota>
                        <h3>TOYOTA</h3>
                    </div>
                    <div className="bg-green-950 rounded-md flex text-white items-center gap-1 text-2xl font-semibold justify-center">
                        <GiFlowerTwirl></GiFlowerTwirl>
                        <h3>WINX</h3>
                    </div>
                    <div className="bg-green-950 rounded-md flex text-white items-center gap-1 text-2xl font-semibold justify-center">
                        <LiaCloudversify></LiaCloudversify>
                        <h3>THUNDERCLOUD</h3>
                    </div>
                    <div className="bg-green-950 rounded-md flex text-white items-center gap-1 text-2xl font-semibold justify-center">
                        <SiGunicorn></SiGunicorn>
                        <h3>NEW DAY</h3>
                    </div>
                    <div className="bg-green-950 rounded-md flex text-white items-center gap-1 text-2xl font-semibold justify-center">
                        <GiDustCloud></GiDustCloud>
                        <h3>DUSTIN CORP</h3>
                    </div>
                </div>
                <div className="hero w-1/2 rounded-lg" style={{ backgroundImage: `url(${Client})` }}>
                    <div className="hero-overlay rounded-lg bg-black bg-opacity-40"></div>
                    <div className="text-center text-neutral-content space-y-5 p-20">
                        <p className="font-light text-lg text-center bg-white bg-opacity-40 inline-block text-green-950 rounded-md px-1">CORP EVE.</p>
                        <h3 className="font-semibold text-5xl">Client <span className="font-bold">Says,</span></h3>
                        <p className="text-lg font-light">"Bring People Together, or turn your passion into a business. Corp Eve gives you everything you need to host your best event yet"</p>
                        <p className="font-bold text-lg text-center bg-white bg-opacity-40 inline-block text-green-950 rounded-md px-1">Simon Riley</p>
                        <p>Taskforce, 141</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;