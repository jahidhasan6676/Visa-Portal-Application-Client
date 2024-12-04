import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { IoMenu, IoClose } from "react-icons/io5";
// import 'animate.css';
import { TfiWorld } from "react-icons/tfi";

const Navbar = () => {

    const [open, setOpen] = useState(false);



    return (
        <nav className="p-5 bg-gray-800 text-white w-full  fixed top-0 z-50">

            <div className="w-11/12 lg:w-10/12 mx-auto md:flex md:justify-between md:items-center ">
                {/* logo and name */}
                <div className="flex justify-between items-center">
                    <div className=" text-2xl font-semibold flex items-center cursor-pointer">
                        <span className="text-4xl text-blue-400 mr-1"><TfiWorld /></span>
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 hover:scale-110 transition-transform duration-300 cursor-pointer">VISALAND</h2>

                    </div>
                    <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer text-3xl ">
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>
                </div>
                {/* page name */}
                <ul className={`md:flex md:items-center md:static absolute md:z-auto z-[-1] bg-gray-800  w-full left-0 md:w-auto md:pb-0 pb-6 md:pl-0 pl-7 transition-all duration-500 ease-in  ${open
                    ? "top-20 opacity-100 "
                    : "hidden"
                    }`}>
                    <li className="mx-4  md:my-0">
                        <NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >Home</NavLink>
                    </li>
                    <li className="mx-4 my-4 md:my-0">
                        <NavLink to="/allVisa" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >All visas</NavLink>
                    </li>
                    <li className="mx-4 my-4 md:my-0">
                        <NavLink to="/addVisa" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >Add Visa</NavLink>
                    </li>
                    <li className="mx-4 my-4 md:my-0">
                        <NavLink to="/addedVisa" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >My added visas</NavLink>
                    </li>
                    <li className="mx-4 my-4 md:my-0">
                        <NavLink to="/application" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >My Visa applications</NavLink>
                    </li>

                    <button className="text-white bg-gradient-to-r from-teal-500 to-cyan-500 py-2 px-4 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-600 transition-transform duration-300">Login</button>

                </ul>

            </div>
        </nav>
    );
};

export default Navbar;