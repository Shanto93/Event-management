import { Link } from "react-router-dom";

const Events = ({ event }) => {
    const { id, event_type, img, location, details } = event;
    return (
        <div className="mt-10">
            <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{event_type}</h2>

                {
                    details.length > 20?
                    <p>{details.slice(0,20)} <Link to={`/event/${id}`}><span className="text-red-700" >Read More...</span></Link> </p>:
                    <p> {details} </p>
                }
            </div>
        </div>
        </div>
    );
};

export default Events;