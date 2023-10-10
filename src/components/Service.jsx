import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, title, image, price, short_description } = service;

    return (

        <div className="bg-base-100 flex flex-col rounded-xl shadow-xl">
            <figure>
                <img className="w-full rounded-t-[10px]" src={image} alt="" />
            </figure>
            <div className="p-2 md:p-5 flex-1 flex flex-col gap-3">
                <h2 className="text-green-950 font-semibold text-lg sm:text-xl xl:text-3xl">{title}</h2>
                <h4 className='font-bold text-sm md:text-base'>Price: {price} $</h4>
                <p className='font-light flex-1 text-sm md:text-lg'>{short_description}</p>
                <Link to={`details/${id}`} className="btn btn-sm sm:btn-md bg-green-950 hover:bg-[#071a07]  text-white font-semibold text-sm md:text-base border-none w-full rounded-full">Show Details</Link>
            </div>
        </div>
    )
};

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;