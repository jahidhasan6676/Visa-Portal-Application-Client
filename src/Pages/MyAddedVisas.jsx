import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import MyAddVisaCard from "../components/MyAddVisaCard";


const MyAddedVisas = () => {
    const { user, setLoading } = useContext(AuthContext)
    const [myAddVisa, setMyAddVisa] = useState([])
    useEffect(() => {
        // Fetch campaigns added by the specific user
        if (user?.email) {
            fetch(`http://localhost:5000/visa/emailed/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {

                    setMyAddVisa(data);
                    setLoading(false)
                    console.log(data)
                })

                .catch((error) => console.error("Error fetching visaApply:", error));
        }
    }, [user]);
    return (
        <div className="py-20 w-11/12 lg:w-10/12 mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center">My All Visa Card</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    myAddVisa.map((addVisa) => <MyAddVisaCard key={addVisa._id} addVisa={addVisa}></MyAddVisaCard>)
                }
            </div>
           
        </div>
    );
};

export default MyAddedVisas;