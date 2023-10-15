import { RiTeamFill } from "react-icons/ri";
import { GiBalloons } from "react-icons/gi";
import { FaChampagneGlasses } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { MdCelebration } from "react-icons/md";

import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="bg-green-950 bg-opacity-10 py-10 md:py-20">
            <div className="container px-3 sm:px-0 mx-auto flex flex-col md:flex-row md:items-center gap-5">
                <div className="md:w-1/3 space-y-1 md:space-y-6" data-aos="fade-right" data-aos-duration="1000">
                    {/* Title Section */}
                    <div>
                        <div className='h-1 w-20 bg-green-950 bottom-5 mb-5'></div>
                        <h5 className="font-light text-xs sm:text-base">We are CORPEVE.</h5>
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl"><span className="font-bold text-green-950">No.1</span> Events Management</h2>
                    </div>
                    <p className="font-light text-sm sm:text-base md:text-lg">We are a corporate management agency that helps businesses of all sizes achieve their goals. We offer a wide range of services</p>
                    <Link to='/aboutus' className="btn bg-green-950 text-white btn-sm md:btn-md rounded-full font-semibold border-none hover:text-green-950 border-2 hover:border-green-950">Learn More</Link>
                </div>
                <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-3">

                    <div data-aos="flip-right" data-aos-duration="2000" className="flex flex-col justify-center items-center gap-3 py-5 md:py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <RiTeamFill className='text-3xl'></RiTeamFill>
                        <h4 className="font-semibold text-base md:text-xl">Friendly Team</h4>
                        <h5 className="text-xs text-center">More Than 200 Member</h5 >
                    </div>

                    <div data-aos="flip-right" data-aos-duration="2000" className="flex flex-col justify-center items-center gap-3 py-5 md:py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <GiBalloons className='text-3xl'></GiBalloons>
                        <h4 className="font-semibold text-base  lg:text-xl">Perfect Venues</h4>
                        <h5 className="text-xs text-center">Best Locations in the town</h5>
                    </div>

                    <div data-aos="flip-right" data-aos-duration="2000" className="flex flex-col justify-center items-center gap-3 py-3 md:py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <FaChampagneGlasses className='text-3xl'></FaChampagneGlasses>
                        <h4 className="font-semibold text-base  lg:text-xl">Unique Scenario</h4>
                        <h5 className="text-xs text-center">We think out of the box</h5>
                    </div>

                    <div data-aos="flip-right" data-aos-duration="2000" className="flex flex-col justify-center items-center gap-3 py-3 md:py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <MdCelebration className='text-3xl'></MdCelebration>
                        <h4 className="font-semibold text-base  lg:text-xl">Unforgettable Time</h4>
                        <h5 className="text-xs text-center">We make time you never forget</h5>
                    </div>

                    <div data-aos="flip-right" data-aos-duration="2000" className="flex flex-col justify-center items-center gap-3 py-3 md:py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <HiLightBulb className='text-3xl'></HiLightBulb>
                        <h4 className="font-semibold text-base  lg:text-xl">24/7 Support</h4>
                        <h5 className="text-xs text-center">Support Anytime</h5>
                    </div>

                    <div data-aos="flip-right" data-aos-duration="2000" className="flex flex-col justify-center items-center gap-3 py-3 md:py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <BiSupport className='text-3xl'></BiSupport>
                        <h4 className="font-semibold text-base  lg:text-xl">Brilliant Ideas</h4>
                        <h5 className="text-xs text-center">We have best ideas</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;