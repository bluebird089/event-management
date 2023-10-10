import { Link } from 'react-router-dom';
import Banner from '../assets/Banner.jpg'

const Header = () => {
    return (
        <div>
            <div className="hero h-[300px] md:h-[450px] lg:h-[600px] relative" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-black bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h2 className='font-light lg:text-4xl'>One Step</h2>
                        <h1 className="mb-5 lg:text-6xl font-semibold">Corporate Event Planer</h1>
                        <p className="mb-5 lg:text-xl">Your Event | Our Duty</p>
                        <Link to='/aboutus' className='btn bg-white bg-opacity-20 border-green-950 text-green-950 font-bold border-2 hover:bg-green-950 hover:text-white hover:border-green-950 rounded-full duration-300'>Learn More</Link>
                    </div>
                </div>
                <div className='h-1 w-20 bg-green-950 mx-auto absolute bottom-5'></div>
            </div>
        </div>
    );
};

export default Header;