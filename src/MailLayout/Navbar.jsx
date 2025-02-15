import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { AuthContext } from "../Authentication/AuthProvider";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
    const { userLogOut, user, setIsDarkMode, isDarkMode, toggleTheme } = useContext(AuthContext);


    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    // logOut
    const handleLogOut = () => {
        userLogOut();
        navigate("/login")

    }

    return (
        <nav className="py-5 bg-gray-800 text-white w-full  fixed top-0 z-50">

            <div className="w-11/12 mx-auto lg:flex lg:justify-between lg:items-center ">
                {/* logo and name */}
                <div className="flex justify-between items-center">
                    <div className=" text-2xl font-semibold flex items-center cursor-pointer">
                        <span className="text-4xl text-blue-400 mr-1"><TfiWorld /></span>
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 hover:scale-110 transition-transform duration-300 cursor-pointer">VISALAND</h2>

                    </div>
                    <div onClick={() => setOpen(!open)} className="lg:hidden cursor-pointer text-3xl ">
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>
                </div>
                {/* page name */}
                <ul className={`lg:flex lg:items-center lg:static absolute lg:z-auto z-[-1] bg-gray-800  w-full left-0 lg:w-auto lg:pb-0 pb-6 lg:pl-0 pl-7 transition-all duration-500 ease-in  ${open
                    ? "top-[76px] opacity-100 "
                    : "hidden"
                    }`}>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >Home</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/allVisa" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >All visas</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/addVisa" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >Add Visa</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/myAddedVisa" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >My added visas</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/visaApplication" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >My Visa applications</NavLink>
                    </li>


                    {
                        user ?
                            <div className="flex justify-between gap-2">
                                {/* <img title={user?.displayName} className="w-12 rounded-full cursor-pointer" src={user?.photoURL} alt="" /> */}
                                <img
                                    data-tooltip-id="user-tooltip"
                                    data-tooltip-content={user?.displayName}
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                    src={user?.photoURL}
                                    alt="User"
                                />
                                <Tooltip id="user-tooltip" place="top" />
                                <button onClick={handleLogOut} className=" text-white bg-gradient-to-r from-teal-500 to-cyan-500 py-2 px-4 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-600 ">LogOut</button>
                            </div> :

                            <div className="flex justify-between gap-2">
                                <Link to="/login">
                                    <button className=" text-white bg-gradient-to-r from-teal-500 to-cyan-500 py-2 px-4 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-600">Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className=" text-white bg-gradient-to-r from-teal-500 to-cyan-500 py-2 px-4 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-600">Register</button>
                                </Link>
                            </div>
                    }

                    {/* Toggle Button */}
                    <div className="theme-toggle ml-2">
                        <button onClick={toggleTheme}>
                        {isDarkMode ? <span className="text-xl text-yellow-500"><FiSun /> </span>  : <span className="text-xl text-gray-400"><FaMoon /></span>}
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;