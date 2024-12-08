import { Link } from "react-router-dom";


const LatestVisaCard = ({ visas }) => {
    const { _id, countryName, countryImage, description, fee, visaType, processingTime, validity, applicationMethod } = visas;
    return (
        <div className="card border flex flex-col p-3  bg-white shadow-md">
            <div>
                <img className="h-[200px] w-full rounded-md object-cover"
                    src={countryImage}
                    alt="Flag" />
            </div>
            <div className="  flex-grow flex flex-col justify-between dark:text-white">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-4">
                    {countryName}
                </h2>
                <div className="flex justify-between">
                    {/* 1st row */}
                    <div className="space-y-1">
                        <p className="text-gray-600">
                            <strong>Type:</strong> {visaType}
                        </p>

                        <p className="text-gray-600">
                            <strong>Processing:</strong> {processingTime}
                        </p>

                        <p className="text-gray-600">
                            <strong>Method:</strong> {applicationMethod}
                        </p>
                    </div>
                    {/* 2nd row */}
                    <div className="space-y-1">
                        <p className="text-gray-600">
                            <strong>Fee:</strong> ${fee}
                        </p>

                        <p className="text-gray-600">
                            <strong>Validity:</strong> {validity}
                        </p>
                    </div>

                </div>
                <p className="text-gray-600 ">
                    <strong>Description:</strong> {description}
                </p>
                {/* btn */}
                <div className="flex justify-between mt-6">
                    <Link to={`/visaDetails/${_id}`}>
                    <button className="btn btn-success text-white w-full">See Details</button>
                    </Link>
                    <Link to="/allVisa">
                    <button className="btn btn-accent text-white w-full">See All Visas</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestVisaCard;