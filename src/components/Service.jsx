import PropTypes from 'prop-types';

const Service = ({ service }) => {

    const { title, image, price, short_description } = service;

    return (

        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="w-full rounded-t-[10px]" src={image} alt="" />
            </figure>
            <div className="p-5 space-y-3">
                <h2 className="card-title text-green-950 font-semibold text-3xl">{title}</h2>
                <h4 className='font-bold'>Price: {price} $</h4>
                <p className='font-light text-lg'>{short_description}</p>
                <button className="btn btn-sm sm:btn-md bg-green-950 hover:bg-[#071a07]  text-white font-semibold border-none w-full rounded-full">Show Details</button>
            </div>
        </div>
    )
};

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;