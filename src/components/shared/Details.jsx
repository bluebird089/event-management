import { useLoaderData, useParams } from "react-router-dom";
const Details = () => {
    const { id } = useParams();
    const AllData = useLoaderData();
    const data = AllData.find(data => data.id == id);
    const { title, image, description } = data || {};
    return (
        <div className="flex items-center gap-5 py-10 container mx-auto">
            <div className="w-1/2">
                <img className="rounded-lg w-full" src={image} />
            </div>
            <div className="w-1/2 space-y-5">
                <h2 className="text-green-950 text-5xl font-semibold">{title}</h2>
                <p className="font-thin text-lg">{description}</p>
                <button className="btn rounded-full mt-5 bg-green-950 hover:bg-[#071a07] text-white font-semibold border-none">Book Reservation</button>
            </div>
        </div>
    );
};

export default Details;