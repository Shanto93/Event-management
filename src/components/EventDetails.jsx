import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const {id} = useParams();
    const detailss = useLoaderData();
    return (
        <div>
            <h2>Event Details.{id}</h2>
            
        </div>
    );
};

export default EventDetails;