import Swal from "sweetalert2";

const MyVisaApplicationCard = ({ visaData, visaApply, setVisaApply }) => {
    const { _id, email, firstName, lastName, appliedDate, fee, countryName, countryImage, visaType, processingTime, validity, applicationMethod } = visaData;
    // console.log(visaApplyCard)

    const handleDelete = (id) => {

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
                fetch(`http://localhost:5000/visaApply/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your application successfully deleted.",
                                icon: "success"
                            });
                            const remaining = visaApply.filter(visa => visa._id !== id);
                            setVisaApply(remaining)
                        }
                    })
            }
        });
    }
    return (

        <div className="bg-white rounded-lg overflow-hidden">
            <img
                src={countryImage}
                alt="countryName"
                className="w-full h-[250px] object-cover"
            />
            <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold">{countryName}</h2>
                <p className="text-sm">
                    <span className="font-semibold">Visa Type: </span> {visaType}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Processing Time: </span> {processingTime}

                </p>
                <p className="text-sm">
                    <span className="font-semibold">Fee: </span> ${fee}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Validity: </span> {validity}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Application Method: </span>
                    {applicationMethod}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Applied Date: </span>
                    {appliedDate}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Applicant: </span>
                    {firstName} {lastName}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Email: </span>
                    {email}
                </p>
                <button
                    onClick={() => handleDelete(_id)}
                    className="mt-4 w-full py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition">
                    Cancel
                </button>
            </div>
        </div>

    );
};

export default MyVisaApplicationCard;