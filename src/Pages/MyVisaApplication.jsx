
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import MyVisaApplicationCard from "../components/MyVisaApplicationCard";

const MyVisaApplication = () => {
    const { user, setLoading } = useContext(AuthContext);
    const [visaApply, setVisaApply] = useState([]); 
    const [search, setSearch] = useState(""); 
    const [filteredVisaApply, setFilteredVisaApply] = useState([]); 

    // email filter data

    useEffect(() => {
        if (user?.email) {
            fetch(`https://visa-portal-website-server.vercel.app/visaApply/emails/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setVisaApply(data);
                    setFilteredVisaApply(data); 
                    setLoading(false);
                })
                .catch((error) => console.error("Error fetching visaApply:", error));
        }
    }, [user]);

   
    // search option
    useEffect(() => {
        if (search === "") {
            setFilteredVisaApply(visaApply);
        } else {
            const filteredData = visaApply.filter((visa) =>
                visa.countryName.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredVisaApply(filteredData);
        }
    }, [search, visaApply]);

    return (
        <div className="py-20 bg-gray-100">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="w-full pt-8 md:flex md:justify-between md:items-center">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-10">
                        Track, Search, and Manage Your Submissions
                        </h1>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-14">
                    {filteredVisaApply.map((visaData) => (
                        <MyVisaApplicationCard
                            key={visaData._id}
                            visaData={visaData}
                            setVisaApply={setVisaApply}
                            visaApply={visaApply}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplication;

