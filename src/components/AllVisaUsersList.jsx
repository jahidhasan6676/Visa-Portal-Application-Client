import { Link } from "react-router-dom";


const AllVisaUsersList = ({ visaUser, index }) => {
    const { _id, countryName, validity, visaType, fee } = visaUser;
    return (
        <>
            <div

                className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {countryName}
                </h2>
                <p className="text-gray-600 text-sm">
                    <strong>Type:</strong> {visaType}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Validity:</strong> {validity}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Fee:</strong> ${fee}
                </p>
                <Link to={`/visaDetails/${_id}`}>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600">
                        See Details
                    </button>
                </Link>
            </div>
        </>
    );
};

export default AllVisaUsersList;