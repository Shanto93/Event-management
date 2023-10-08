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
                <h2 className="text-3xl font-bold text-center">Our Services</h2>
                <p className="text-center mt-3">we offer expert event management services for a wide range of <br /> occasions, including weddings, birthdays, anniversaries, engagements, retirements, and baby showers. <br /> Let us turn your special moments into unforgettable experiences.</p>
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