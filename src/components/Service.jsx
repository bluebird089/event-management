const Service = ({ service }) => {

    const { title, image, price, short_description, description } = service;

    return (
        <div className="flex">
            <img className="w-1/2" src={image} alt="" />
            <div className="w-1/2">
                <h3>{title}</h3>
                <h4>{price}</h4>
                <p>{short_description}</p>
                <button className="btn">Show More</button>
            </div>
        </div>
    );
};

export default Service;