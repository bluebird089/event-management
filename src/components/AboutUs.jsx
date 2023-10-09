import { RiTeamFill } from "react-icons/ri";
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
                    <p className="font-light text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet, saepe unde qui quia aliquam. Reprehenderit, quas iure temporibus, nisi sequi voluptates molestias dolorem voluptatibus excepturi eum, dignissimos quaerat molestiae.</p>
                    <Link to='/aboutus' className="btn bg-green-950 text-white font-semibold border-none hover:text-green-950 border-2 hover:border-green-950">Learn More</Link>
                </div>

                <div className="w-2/3 grid grid-cols-3 gap-3">
                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <RiTeamFill className='text-3xl'></RiTeamFill>
                        <h4 className="font-semibold text-xl">Friendly Team</h4>
                        <h5>More Than 200 Member</h5>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <RiTeamFill className='text-3xl'></RiTeamFill>
                        <h4 className="font-semibold text-xl">Friendly Team</h4>
                        <h5>More Than 200 Member</h5>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <RiTeamFill className='text-3xl'></RiTeamFill>
                        <h4 className="font-semibold text-xl">Friendly Team</h4>
                        <h5>More Than 200 Member</h5>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <RiTeamFill className='text-3xl'></RiTeamFill>
                        <h4 className="font-semibold text-xl">Friendly Team</h4>
                        <h5>More Than 200 Member</h5>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <RiTeamFill className='text-3xl'></RiTeamFill>
                        <h4 className="font-semibold text-xl">Friendly Team</h4>
                        <h5>More Than 200 Member</h5>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 py-10 bg-white rounded-md hover:bg-green-950 hover:text-white duration-300">
                        <RiTeamFill className='text-3xl'></RiTeamFill>
                        <h4 className="font-semibold text-xl">Friendly Team</h4>
                        <h5>More Than 200 Member</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;