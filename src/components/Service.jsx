import PropTypes from 'prop-types';

const Service = ({ service }) => {

    const { title, image, price, short_description } = service;

    return (
        <div className="flex">
            <div>
                <img className="w-1/2" src={image} alt="" />
            </div>
            <div className="w-1/2">
                <h3>{title}</h3>
                <h4>{price}</h4>
                <p>{short_description}</p>
                <button className="btn">Show More</button>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;