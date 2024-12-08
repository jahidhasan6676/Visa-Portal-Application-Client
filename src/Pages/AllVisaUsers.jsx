
import { useLoaderData } from "react-router-dom";
import AllVisaUsersList from "../components/AllVisaUsersList";
import { useState } from "react";



const AllVisaUsers = () => {

    const visaUsersData = useLoaderData();
    const [filteredVisas, setFilteredVisas] = useState(visaUsersData);
    const [selectedVisaType, setSelectedVisaType] = useState("");


    // Filter function
    const handleFilterChange = (visaType) => {
        setSelectedVisaType(visaType);
        if (visaType === "") {
            setFilteredVisas(visaUsersData);
        } else {
            const filtered = visaUsersData.filter(visa =>
                visa.visaType.toLowerCase() === visaType.toLowerCase()
            );
            setFilteredVisas(filtered);
        }
    };
    // console.log(visaUsersData)
    return (
        <div className="py-20">


            <div className="py-20 bg-gray-50">
                <div className="md:flex md:justify-between w-11/12 lg:w-10/12 mx-auto">
                    <div><h1 className="text-3xl font-bold  mb-10 text-center md:text-start">All Visas</h1></div>

                    {/* Filter Dropdown */}
                    <div className=" mb-10 text-center md:text-start">
                        <select
                            className="px-4 py-2 border rounded-md"
                            value={selectedVisaType}
                            onChange={(e) => handleFilterChange(e.target.value)}
                        >
                            <option value="">All Visa Types</option>
                            <option value="Tourist visa">Tourist Visa</option>
                            <option value="Student visa">Student Visa</option>
                            <option value="Official visa">Official Visa</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 lg:w-10/12 mx-auto">
                    {
                        filteredVisas.map(visaUser => <AllVisaUsersList key={visaUser._id} visaUser={visaUser}></AllVisaUsersList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllVisaUsers;