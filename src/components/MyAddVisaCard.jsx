

const MyAddVisaCard = ({addVisa}) => {
    const {countryName,countryImage,visaType,processingTime,fee,validity,applicationMethod} = addVisa;
    return (
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
                <button
                    className="bg-blue-600 text-white py-2 px-5 rounded-lg font-medium hover:bg-blue-700 transition"

                >
                    Update
                </button>
                <button
                    className="bg-red-600 text-white py-2 px-5 rounded-lg font-medium hover:bg-red-700 transition"

                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default MyAddVisaCard;