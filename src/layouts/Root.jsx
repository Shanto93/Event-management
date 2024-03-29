import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";

const Root = () => {
    return (
        <div className="md:ml-16 md:mr-16">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Footer2></Footer2>
        </div>
    );
};

export default Root;