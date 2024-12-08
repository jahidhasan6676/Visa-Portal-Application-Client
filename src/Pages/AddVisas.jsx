import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthProvider";


const AddVisas = () => {
    const {user} = useContext(AuthContext)
    const handleAddVisaUser = event =>{
        event.preventDefault();
        const form = event.target;
        const countryImage = form.countryImage.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
       
         // Collect all checked required documents
         const required = Array.from(form.required)
         .filter((checkbox) => checkbox.checked)
         .map((checkbox) => checkbox.value);

        const description = form.description.value;
        const ageRestriction = parseInt(form.ageRestriction.value);
        const fee = parseInt(form.fee.value);
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;
        const email = user.email;
        const NewUser = {countryImage,countryName,visaType,processingTime,required,description,ageRestriction,fee,validity,applicationMethod,email};
        // console.log(NewUser);

        fetch("https://visa-portal-website-server.vercel.app/visa", {
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(NewUser)
        })
        .then(res=> res.json())
        .then(data =>{
            // console.log(data);
            if(data.insertedId){
                Swal.fire({
                    
                    text: "Your Application added",
                    icon: "success"
                  });
            }
        })



    }
    return (
        <div className="py-20 w-full">
            <div className=" bg-white max-w-3xl mx-auto p-6  shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Visa</h2>
                <form onSubmit={handleAddVisaUser}>
                    {/* Country Image */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Country Image URL
                        </label>
                        <input
                            type="text"
                            name="countryImage"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Paste image URL here"
                        />
                    </div>

                    {/* Country Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Country Name
                        </label>
                        <input
                            type="text"
                            name="countryName"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter country name"
                        />
                    </div>

                    {/* Visa Type */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Visa Type</label>
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

                    {/* Processing Time */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Processing Time
                        </label>
                        <input
                            type="text"
                            name="processingTime"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter processing time (e.g., 7-10 days)"
                        />
                    </div>

                    {/* Required Documents */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Required Documents
                        </label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value="Valid passport"
                                    name="required"
                                    className="mr-2"
                                />
                                Valid Passport
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value="Visa application form"
                                    name="required"
                                    className="mr-2"
                                />
                                Visa Application Form
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value="Recent passport-sized photograph"
                                    name="required"
                                    className="mr-2"
                                />
                                Recent Passport-Sized Photograph
                            </label>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea
                            name="description"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            rows="4"
                            placeholder="Add description about the visa"
                        ></textarea>
                    </div>

                    {/* Age Restriction */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Age Restriction
                        </label>
                        <input
                            type="number"
                            name="ageRestriction"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter minimum age"
                        />
                    </div>

                    {/* Fee */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Fee</label>
                        <input
                            type="number"
                            name="fee"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter visa fee"
                        />
                    </div>

                    {/* Validity */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Validity</label>
                        <input
                            type="text"
                            name="validity"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter validity (e.g., 6 months)"
                        />
                    </div>

                    {/* Application Method */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Application Method
                        </label>
                        <input
                            type="text"
                            name="applicationMethod"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter application method"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                        Add Visa
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddVisas;