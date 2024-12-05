
import { useLoaderData } from "react-router-dom";
import AllVisaUsersList from "../components/AllVisaUsersList";



const AllVisaUsers = () => {
    const visaUsersData = useLoaderData();

    console.log(visaUsersData)
    return (
        <div className="py-20">
            <div className="py-20 bg-gray-50">
                <h1 className="text-3xl font-bold text-center mb-10">All Visas</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 lg:w-10/12 mx-auto">
                    {
                        visaUsersData.map(visaUser => <AllVisaUsersList key={visaUser._id} visaUser={visaUser}></AllVisaUsersList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllVisaUsers;