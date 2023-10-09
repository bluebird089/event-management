import aboutUsImage from '../assets/About-Us.jpg'

const AboutUsPage = () => {
    return (
        <div className="pt-28 pb-20 container mx-auto space-y-5">
            <h3 className="text-center font-bold text-5xl">About Us</h3>
            <div className='h-1 w-20 mx-auto mb-5 bg-green-950'></div>
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
            <div className='text-xl font-light space-y-5'>
                <p>
                    We believe that every business is different, and that there is no one-size-fits-all solution to success. That's why we take a personalized approach to our work. We get to know our clients' businesses inside and out, and we develop customized solutions that help them achieve their specific goals.
                </p>
                <p>
                    We are committed to providing our clients with the highest quality services and support. We understand that our clients' success is our success, and we are dedicated to helping them achieve their full potential.
                </p>
            </div>
            <div className='h-1 w-40 mt-5 mx-auto bg-green-950'></div>
        </div>
    );
};

export default AboutUsPage;