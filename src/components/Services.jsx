import PropTypes from 'prop-types';
import Service from './Service';

const Services = ({ data }) => {

    return (
        <div className="container mx-auto px-3 md:px-0 my-10 md:my-20">
            {/* Title Section */}
            <div className='mb-10'>
                <div className='h-1 w-20 bg-green-950 bottom-5 mb-5'></div>
                <h5 className="font-light text-xs sm:text-base">CORPEVE. Events</h5>
                <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl"><span className="font-bold text-green-950">Event</span> Listing</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {
                    data.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

Services.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Services;