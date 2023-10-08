import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";
import EventDetails from "../components/EventDetails";
import PrivateRoute from "./PrivateRoute";
import Gallary from "../components/Gallary";
import Contact from "../components/Contact";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/event.json'),
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/event/:id',
                element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: () => fetch('/event.json'),
            },
            {
                path:'/gallary',
                element:<PrivateRoute> <Gallary></Gallary> </PrivateRoute>
            },
            {
                path:'/contact',
                element:<Contact></Contact>,
            }
        ]

    }
])

export default router;