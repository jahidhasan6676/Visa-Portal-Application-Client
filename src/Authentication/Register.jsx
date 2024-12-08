import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {

    const { userRegister, googlePopup, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;
        // console.log(email, password, photoURL);

        // clear error message
        setError("");

        // password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError(
                "Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long."
            );
            return;
        };


        // sing Up
        userRegister(email, password)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
                updateUserProfile({displayName:name, photoURL:photo})
                navigate("/")
            })
            .catch(error => {
                // console.log(error)
            })
    }

    // google popup
    const handleGooglePopup = () => {
        googlePopup()
            .then(result => {
                // console.log(result.user);
                setUser(result.user)
                navigate("/")
               
            })
            .catch(error => {
                // console.log(error)
            })
    }
    return (
        <div className="py-20">
            <div className="flex items-center justify-center py-10 bg-gradient-to-br from-green-100 via-purple-100 to-blue-50">
                <div className="w-11/12 lg:w-10/12 max-w-md p-6 bg-white rounded-lg shadow-lg">
                    {/* Title */}
                    <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
                        Register
                    </h2>

                    {/* Registration Form */}
                    <form onSubmit={handleRegister} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Photo URL Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                name="photoURL"
                                placeholder="Enter your photo URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            {
                                error && <p className='text-xs text-red-500'>{error}</p>
                            }
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700">
                            Register
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?
                            <Link to="/login" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Login
                            </Link>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="mt-6 flex items-center justify-center space-x-2">
                        <span className="h-px w-24 bg-gray-300"></span>
                        <span className="text-sm text-gray-500">or</span>
                        <span className="h-px w-24 bg-gray-300"></span>
                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleGooglePopup}
                        className="w-full mt-4 flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
                    >
                        <img
                            src="https://img.icons8.com/color/48/google-logo.png"
                            alt="Google"
                            className="w-6 h-6 mr-2"
                        />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;