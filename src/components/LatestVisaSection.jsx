import { useEffect, useState } from "react";
import LatestVisaCard from "./LatestVisaCard";


const LatestVisaSection = () => {
    const [visaData,setVisaData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/visa")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setVisaData(data)
        })
    },[])
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto mb-20">
            <h2 className="text-center font-bold">Latest Visa Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {
                    visaData.map((visas) => <LatestVisaCard key={visas._id} visas={visas}></LatestVisaCard>)
                }
            </div>
        </div>
    );
};

export default LatestVisaSection;