import { RiTeamFill } from "react-icons/ri";
import { GiBalloons } from "react-icons/gi";
import { FaChampagneGlasses } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { MdCelebration } from "react-icons/md";

import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="bg-green-950 bg-opacity-10 py-20">
            <div className="container mx-auto flex items-center gap-5">
                <div className="w-1/3 space-y-6">
                    {/* Title Section */}
                    <div>
                        <div className='h-1 w-20 bg-green-950 bottom-5 mb-5'></div>
                        <h5 className="font-light">We are CORPEVE.</h5>
                        <h2 className="font-semibold text-4xl"><span className="font-bold text-green-950">No.1</span> Events Management</h2>
                    </div>
                    <p className="font-light text-lg">We are a corporate management agency that helps businesses of all sizes achieve their goals. We offer a wide range of services</p>
                    <Link to='/aboutus' className="btn bg-green-950 text-white font-semibold border-none hover:text-green-950 border-2 hover:border-green-950">Learn More</Link>
                </div>

                <div className="w-2/3 grid grid-cols-3 gap-3">

                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <RiTeamFill className='text-3xl'></RiTeamFill>
                        <h4 className="font-semibold text-xl">Friendly Team</h4>
                        <h5>More Than 200 Member</h5>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <GiBalloons className='text-3xl'></GiBalloons>
                        <h4 className="font-semibold text-xl">Perfect Venues</h4>
                        <h5>Best Locations in the town</h5>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <FaChampagneGlasses className='text-3xl'></FaChampagneGlasses>
                        <h4 className="font-semibold text-xl">Unique Scenario</h4>
                        <h5>We think out of the box</h5>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <MdCelebration className='text-3xl'></MdCelebration>
                        <h4 className="font-semibold text-xl">Unforgettable Time</h4>
                        <h5>We make time you never forget</h5>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <HiLightBulb className='text-3xl'></HiLightBulb>
                        <h4 className="font-semibold text-xl">24/7 Support</h4>
                        <h5>Support Anytime</h5>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <BiSupport className='text-3xl'></BiSupport>
                        <h4 className="font-semibold text-xl">Brilliant Ideas</h4>
                        <h5>We have best ideas</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;