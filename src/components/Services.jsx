import PropTypes from 'prop-types';
import Service from './Service';

const Services = ({data}) => {

    return (
        <div className="container mx-auto">
            {/* Title Section */}
            <div>
                <div className='h-1 w-20 bg-green-950 bottom-5 mb-5'></div>
                <h5 className="font-light">CORPEVE. Event</h5>
                <h2 className="font-semibold text-4xl"><span className="font-bold text-green-950">Events</span> Services</h2>
            </div>
            <div className="grid grid-cols-3">
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