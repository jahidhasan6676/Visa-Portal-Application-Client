

const AllVisaUsersList = ({ visaUser,index }) => {
    const {countryName,validity,visaType,fee} = visaUser;
    return (
        <>
            <tr className="hover:bg-gray-200">
                <th>{index}</th>
                <td>{countryName}</td>
                <td>{validity}</td>
                <td>{visaType}</td>
                <td>{fee}</td>
                
                <td>
                    <button className="btn btn-accent text-white">See Details</button>
                </td>
                
            </tr>
        </>
    );
};

export default AllVisaUsersList;