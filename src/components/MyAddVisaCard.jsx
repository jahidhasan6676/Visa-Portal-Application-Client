
import { useState } from "react";
import Swal from "sweetalert2";


const MyAddVisaCard = ({ addVisa, myAddVisa, setMyAddVisa }) => {
    const [showModal, setShowModal] = useState(false);

    const { _id, countryName, countryImage, visaType, processingTime, fee, validity, applicationMethod, ageRestriction } = addVisa;

    // update add visa
    const handleMyVisaData = e => {
        e.preventDefault();

        const form = e.target;
        const countryImage = form.countryImage.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const fee = parseInt(form.fee.value);
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;
        const ageRestriction = parseInt(form.ageRestriction.value);
        const NewUser = { countryImage, countryName, visaType, processingTime, fee, validity, applicationMethod, ageRestriction };
        // console.log(NewUser);


        fetch(`https://visa-portal-website-server.vercel.app/visa/emailed/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewUser)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "User Update Successfully",
                        icon: "success"

                    });

                    // Directly update state
                    setMyAddVisa((prevVisas) =>
                        prevVisas.map((visa) =>
                            visa._id === _id ? { ...visa, ...NewUser } : visa
                        )
                    );

                    setShowModal(false);
                }
            })
    }

    const handleDeleteVisa = id => {
        // console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // delete application form database and ui
                fetch(`https://visa-portal-website-server.vercel.app/visa/emailed/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your application successfully deleted.",
                                icon: "success"
                            });
                            const remaining = myAddVisa.filter(visa => visa._id !== id);
                            setMyAddVisa(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="">
            <div className="bg-gray-50 border rounded-lg overflow-hidden">
                {/* Country Image */}
                <div className="relative">
                    <img
                        src={countryImage}
                        alt={`flag`}
                        className="w-full h-[200px] object-cover"
                    />
                    <div className="absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent w-full p-4 text-white">
                        <h2 className="text-xl font-bold">{countryName}</h2>
                    </div>
                </div>

                {/* Visa Details */}
                <div className="p-6 space-y-3">
                    <p className="text-gray-700">
                        <span className="font-semibold">Visa Type:</span> {visaType}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Processing Time: </span>
                        {processingTime} days
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Fee: </span> ${fee}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Validity: </span> {validity}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Application Method: </span>
                        {applicationMethod}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="px-6 py-4 flex justify-between items-center border-t">
                    <button onClick={() => setShowModal(true)}
                        className="bg-blue-600 text-white py-2 px-5 rounded-lg font-medium hover:bg-blue-700 transition"

                    >
                        Update
                    </button>
                    <button onClick={() => handleDeleteVisa(_id)}
                        className="bg-red-600 text-white py-2 px-5 rounded-lg font-medium hover:bg-red-700 transition"

                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Modal for Visa Application */}
            {showModal && (
                <div className="modal modal-open pt-20">
                    <div className="modal-box  relative">
                        <button onClick={() => setShowModal(false)}
                            className="btn btn-sm btn-circle absolute right-2 top-2"

                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-semibold mb-6 text-center">Update Visa</h2>
                        <form onSubmit={handleMyVisaData}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        CountryImage
                                    </label>
                                    <input
                                        type="text"
                                        name="countryImage"
                                        defaultValue={countryImage}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="Paste image URL here"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Country Name
                                    </label>
                                    <input
                                        type="text"
                                        name="countryName"
                                        defaultValue={countryName}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="Enter country name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Country Name
                                    </label>
                                    <select
                                        name="visaType"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                    >
                                        <option value="">Select Visa Type</option>
                                        <option value="Tourist Visa">Tourist Visa</option>
                                        <option value="Student Visa">Student Visa</option>
                                        <option value="Official Visa">Official Visa</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Processing Time
                                    </label>
                                    <input
                                        type="text"
                                        name="processingTime"
                                        defaultValue={processingTime}
                                        placeholder="Processing Time (days)"
                                        className="border p-2 rounded-lg w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Fee
                                    </label>
                                    <input
                                        type="number"
                                        name="fee"
                                        defaultValue={fee}
                                        placeholder="Fee"
                                        className="border p-2 rounded-lg w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Validity
                                    </label>
                                    <input
                                        type="text"
                                        name="validity"
                                        defaultValue={validity}
                                        placeholder="Validity"
                                        className="border p-2 rounded-lg w-full"
                                    />

                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Application Method
                                    </label>
                                    <input
                                        type="text"
                                        name="applicationMethod"
                                        defaultValue={applicationMethod}
                                        placeholder="Application Method"
                                        className="border p-2 rounded-lg w-full"
                                    />
                                </div>
                                <div className="">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Age Restriction
                                    </label>
                                    <input
                                        type="number"
                                        name="ageRestriction"
                                        defaultValue={ageRestriction}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="Enter minimum age"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MyAddVisaCard;