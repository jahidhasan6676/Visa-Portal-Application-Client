
import { useLoaderData } from "react-router-dom";
import AllVisaUsersList from "../components/AllVisaUsersList";


const AllVisaUsers = () => {
    const visaUsersData = useLoaderData();
    
    console.log(visaUsersData)
    return (
        <div className="py-20">
            <div className="overflow-x-auto w-11/12 lg:w-10/12 mx-auto bg-gray-100 shadow rounded-md py-4 px-10">
                <table className="table ">
                    {/* head */}
                    <thead className="">
                        <tr className=" text-black border-b-1 border-black" >
                            <th>Id</th>
                            <th>Name</th>
                            <th>Validity</th>
                            <th>VisaType</th>
                            <th>Fee</th>
                            <th>Action</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody >
                       {
                        visaUsersData.map((visaUser, index) => <AllVisaUsersList key={visaUser._id} visaUser={visaUser} index={index + 1}></AllVisaUsersList>)
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllVisaUsers;