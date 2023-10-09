/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Events = ({ event }) => {
    useEffect(() =>{
        Aos.init({duration: "1000"});
    },[])
    const { id, event_type, img, details } = event;
    return (
        <div className="mt-10">
            <div className="card md:w-80 bg-base-100 shadow-xl" data-aos = "fade-up">
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