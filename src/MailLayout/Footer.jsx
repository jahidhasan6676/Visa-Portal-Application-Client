import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer className="footer relative  text-white">
            {/* Shape Divider */}
            <div className="absolute -top-1 w-full overflow-hidden ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="absolute block fill-white"></path>
                </svg>


            </div>

            {/* Footer Content */}
            <div className=" mt-20 md:mt-40 pb-3">
                <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mr-0 gap-8">
                    {/* Logo and Social Links */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                            VISALAND
                        </h2>
                        <p>Your trusted platform for visa services and applications.</p>
                        <div className="flex space-x-4 text-xl mt-4">
                            <Link to="#" className="hover:text-blue-400 transition duration-300">
                                <i className="fab fa-facebook"></i>
                            </Link>
                            <Link to="#" className="hover:text-blue-300 transition duration-300">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to="#" className="hover:text-purple-400 transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="#" className="hover:text-blue-600 transition duration-300">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h6 className="text-lg font-semibold">Contact Us</h6>
                        <p>
                            <i className="fas fa-phone"></i> +880 1818 186676
                        </p>
                        <p>
                            <i className="fas fa-envelope"></i> jh18186676@gmail.com
                        </p>
                        <p>
                            <i className="fas fa-map-marker-alt"></i> 123 Street, Dhaka, Bangladesh
                        </p>
                    </div>

                    {/* Services */}
                    <div className="space-y-4 flex flex-col">
                        <h6 className="text-lg font-semibold">Service</h6>
                        
                        <Link to="/all-visa" className="hover:text-gray-400 transition duration-300">
                            All Visa
                        </Link>
                        <Link to="/add-visa" className="hover:text-gray-400 transition duration-300">
                            Add Visa
                        </Link>
                        <Link
                            to="/visa-application"
                            className="hover:text-gray-400 transition duration-300"
                        >
                            Visa Application
                        </Link>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4 flex flex-col">
                        <h6 className="text-lg font-semibold">Legal</h6>
                        <Link to="/terms" className="hover:text-gray-400 transition duration-300">
                            Terms of Use
                        </Link>
                        <Link to="/privacy" className="hover:text-gray-400 transition duration-300">
                            Privacy Policy
                        </Link>
                        <Link to="/cookies" className="hover:text-gray-400 transition duration-300">
                            Cookie Policy
                        </Link>
                    </div>
                </div>

                <div className="text-center block w-full mt-6">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} VISALAND. All rights reserved.
                    </p>
                </div>
            </div>
                     {/* Footer Bottom */}
            

        </footer>
    );
};





export default Footer;