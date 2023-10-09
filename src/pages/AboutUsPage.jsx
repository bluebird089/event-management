import aboutUsImage from '../assets/About-Us.jpg'

const AboutUsPage = () => {
    return (
        <div className="py-20 pb-14 container mx-auto space-y-10">
            <h3 className="text-center font-bold text-5xl">About Us</h3>
            <div className='h-1 w-20 mx-auto bg-green-950'></div>
            <div className='flex items-center'>
                <div className="w-1/2 text-xl font-light space-y-5">
                    <p>
                        We are a corporate management agency that helps businesses of all sizes achieve their goals. We offer a wide range of services, including:
                    </p>
                    <ol>
                        <li>Strategic planning</li>
                        <li>Organizational development</li>
                        <li>Change management</li>
                        <li>Performance improvement</li>
                        <li>Leadership development</li>
                    </ol>
                    <p>
                        We have a team of experienced and qualified professionals who are passionate about helping businesses succeed. We work closely with our clients to understand their unique needs and challenges, and we develop tailored solutions that meet their specific goals.
                    </p>
                </div>
                <div className='w-1/2'><img className='rounded-xl' src={`${aboutUsImage}`} alt="" /></div>
            </div>
            <div className='h-1 w-40 mx-auto bg-green-950'></div>
        </div>
    );
};

export default AboutUsPage;