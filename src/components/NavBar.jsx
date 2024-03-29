import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li> <NavLink to='/' >Home</NavLink> </li>
        {
            user && <>
                <li> <NavLink to='/gallary' >Gallary</NavLink> </li>
                <li> <NavLink to='/contact' >Contact</NavLink> </li>

            </>
        }
        <li> <NavLink to='/login' >Login</NavLink> </li>
        <li> <NavLink to='/register' >Register</NavLink> </li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">S<span className="text-[#1E55B3]">Events</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="flex-col flex md:flex-row items-center">
                    {
                        user ?
                            <h2>{user.displayName}</h2> :
                            ""
                    }
                    {
                        user ?
                            <img className="w-10 rounded-full ml-2" src={user.photoURL} alt="" /> :
                            ''
                    }
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn ml-2">Sign Out</button> :
                            <Link to='/login'>
                                <button className="btn ml-2">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;