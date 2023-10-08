import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const {id} = useParams();
    const detailses = useLoaderData();
    // console.log(detailses, id);
    const intId = parseInt(id);
    // console.log(intId);
    const event = detailses.find(event => event.id === intId);
    console.log(event);
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mt-5 mb-5">{event.event_type}</h2>
            <img className="h-[500px] w-full mb-5" src={event.img} alt="" />
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mt-5 mb-5">Venue: {event.location}</h2>
                <h2 className="text-xl font-bold mt-5 mb-5">Time: {event.date}</h2>
                <h2 className="text-xl font-bold mt-5 mb-5">Organizer: {event.organizer}</h2>
            </div>
            <h2 className="text-3xl font-bold mb-5">Event Details</h2>
            <p className="text-xl mb-5">{event.details}</p>
        </div>
    );
};

export default EventDetails;