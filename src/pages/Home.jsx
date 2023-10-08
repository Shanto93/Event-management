import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import Events from "../components/Events";

const Home = () => {
    const events = useLoaderData();
    // console.log(events);
    return (
        <div>
            <Carousel></Carousel>
            <div className="mt-10 mb-10">
                <h2 className="text-3xl font-bold text-center">Our Events</h2>
                <div className="grid grid-cols-3 gap-6">
                    {
                        events.map(event => <Events key={event.id} event={event} ></Events>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;