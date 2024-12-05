import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {
    const {userLogin} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        // user login
        userLogin(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })


    }
    return (
        <div className="py-20">
            <div className="flex items-center justify-center  py-10 lg:py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50">
                <div className="w-11/12 lg:10/12 max-w-md p-6 bg-white rounded-lg shadow-lg">
                    {/* Title */}
                    <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
                        Login
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                required
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
                                placeholder="Enter your password"
                                name="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Forget Password */}
                        <div className="text-right">
                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Login
                        </button>


                    </form>
                    {/* Login Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don’t have an account ?
                            <Link to="/register" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Register
                            </Link>
                        </p>
                    </div>
                    {/* Divider */}
                    <div className="mt-6 flex items-center justify-center space-x-2">
                        <span className="h-px w-24 bg-gray-300"></span>
                        <span className="text-sm text-gray-500">or</span>
                        <span className="h-px w-24 bg-gray-300"></span>
                    </div>

                    {/* Social Login Options */}
                    <div className="mt-6 flex justify-center">
                        <button
                            className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"

                        >
                            <img
                                src="https://img.icons8.com/color/48/google-logo.png"
                                alt="Google"
                                className="w-6 h-6 mr-2"
                            />
                            Google
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;