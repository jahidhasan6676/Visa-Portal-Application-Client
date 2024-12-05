import { useLoaderData } from "react-router-dom";



const VisaDetails = () => {
    const visaDetailsData = useLoaderData();
    const { _id, countryName, countryImage, description, fee, visaType, processingTime, validity, applicationMethod, required, ageRestriction } = visaDetailsData;
    console.log(visaDetailsData)
    return (
        <div className="py-20 w-11/12 lg:w-10/12 mx-auto ">
            <div className="bg-gray-100 rounded-md py-6">
                <h2 className="text-2xl font-semibold text-center">Visa Details: {visaDetailsData.countryName}</h2>


                <div className="   overflow-hidden md:flex gap-14 p-20 ">
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
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-300">
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default VisaDetails;