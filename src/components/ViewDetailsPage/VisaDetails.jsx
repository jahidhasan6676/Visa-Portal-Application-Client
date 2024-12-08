import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/AuthProvider";



const VisaDetails = () => {
    const visaDetailsData = useLoaderData();
    const {user} = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false);
    const { _id, countryName, countryImage, description, fee, visaType, processingTime, validity, applicationMethod, required, ageRestriction } = visaDetailsData;
    // console.log(visaDetailsData)
    const today = new Date().toISOString().split("T")[0];
    
    const handleApplicationData = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const appliedDate = form.appliedDate.value;
        const fee = parseInt(form.fee.value);
        const application = {email, firstName, lastName, appliedDate, fee, countryName, countryImage, visaType, processingTime, validity, applicationMethod };
        // console.log(application);

        fetch('https://visa-portal-website-server.vercel.app/visaApply',{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(application)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                Swal.fire({
                    
                    text: "Your Visa request added",
                    icon: "success"
                  });
            }
        })
    }

    return (
        <div className="py-20 w-11/12 lg:w-10/12 mx-auto ">
            <div className="bg-gray-100 rounded-md py-6">
                <h2 className="text-2xl font-semibold text-center">Visa Details: {visaDetailsData.countryName}</h2>


                <div className="   overflow-hidden md:flex gap-6 lg:gap-14 p-6 md:10 lg:p-20 ">
                    {/* Country Image */}
                    <div className="flex-1">
                        <img
                            src={countryImage}
                            alt={`${countryName} Image`}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>

                    {/* Card Content */}
                    <div className=" flex-1">
                        {/* Country Name and Visa Type */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{countryName}</h2>
                        <p className="text-sm font-semibold text-blue-600 mb-4">{visaType}</p>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

                        {/* Key Details */}
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium text-gray-600">
                                <strong>Processing Time:</strong> {processingTime}
                            </span>
                            <span className="text-sm font-medium text-gray-600">
                                <strong>Fee:</strong> ${fee}
                            </span>
                        </div>

                        {/* Additional Information */}
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-600">
                                <strong>Validity:</strong> {validity}
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                                <strong>Age Restriction:</strong> {ageRestriction}+ years
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                                <strong>Application Method:</strong> {applicationMethod}
                            </p>
                        </div>

                        {/* Required Documents */}
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">
                                Required Documents:
                            </h3>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                                {required.map((doc, index) => (
                                    <li key={index}>{doc}</li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <button onClick={() => setShowModal(true)} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-300">
                            Apply for visa
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Visa Application */}
            {showModal && (
                <div className="modal modal-open pt-20">
                    <div className="modal-box  relative">
                        <button
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg mb-4">Visa Application Form</h3>
                        <form onSubmit={handleApplicationData}  className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Applied Date
                                </label>
                                <input
                                    type="date"
                                    name="appliedDate"
                                    defaultValue={today}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Fee</label>
                                <input
                                    type="number"
                                    name="fee"
                                    defaultValue={fee}
                                    required
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <button className="btn btn-primary w-full mt-4" type="submit">
                                Apply
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>

    );
};

export default VisaDetails;