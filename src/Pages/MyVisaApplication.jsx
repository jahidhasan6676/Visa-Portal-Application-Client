
import { useLoaderData } from "react-router-dom";
import MyVisaApplicationCard from "../components/MyVisaApplicationCard";
import { useEffect, useState } from "react";


const MyVisaApplication = () => {
    const visaApplyData = useLoaderData();
    const [visaApply, setVisaApply] = useState(visaApplyData);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/visaApply/?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setVisaApply(data)
                // console.log(data)
            })

    }, [search])

    return (
        <div className=" py-20 bg-gray-100">
            <div className="w-11/12 lg:w-10/12 mx-auto  ">
                <div className="w-full pt-8 md:flex md:justify-between">

                    <div className="">
                        <h1 className="text-2xl md:text-3xl font-bold mb-10">
                            My Visa Applications
                        </h1>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>

                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  py-14">
                    {
                        visaApply.map((visaData) => <MyVisaApplicationCard key={visaData._id} visaData={visaData} setVisaApply={setVisaApply} visaApply={visaApply}></MyVisaApplicationCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplication;
