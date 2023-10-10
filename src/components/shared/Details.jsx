import { Link, useLoaderData, useParams } from "react-router-dom";
const Details = () => {
    const { id } = useParams();
    const AllData = useLoaderData();
    const data = AllData.find(data => data.id == id);
    const { title, image, price, description } = data || {};
    return (
        <div>
            <div className="p-20 rounded-md bg-white h-full flex flex-col justify-around">
                <div className="">
                    <img className="w-full  rounded-md" src={image} alt="" />
                </div>
                <h3 className="text-[8px] md:text-[10px] lg:text-4xl font-semibold  lg:pt-2">{title}</h3>
                <p className="text-[6px] md:text-[8px] lg:text-xl text-justify text-[#1C1B1B99]">
                    <span>{description}</span>
                </p>
                <div className="">
                    <div className="">
                        <div className="flex md:items-center text-lime-400">
                            <span className="text-[7px] md:text-[9px]  lg:text-2xl font-semibold"> Price : {price}</span>
                        </div>
                    </div>
                </div>
                <Link to={`/`}>
                    <button

                        className="w-full text-white py-[2px] md:py-1 lg:py-5 text-[7px] md:text-[8px] lg:text-base rounded-full  md:rounded-full lg:rounded-full md:mt-1 lg:mt-2 bg-[#2F80ED] hover:bg-[#3445ff] duration-200"
                    >
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Details;