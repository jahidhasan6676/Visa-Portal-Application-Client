import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const OurService = () => {


  return (
    <div className="py-20 w-11/12 lg:w-10/12 mx-auto min-h-screen flex flex-col">
      <div className="mb-14">
        <h3 className="text-2xl font-bold text-red-600 text-center">Service We Provide</h3>
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-center mt-4">Explore Our Visa Citizenship <br />
          & Immigration Services</h1>
      </div>
      <Zoom>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {/* student  visa */}

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Student Visa</h2>
              <p className="text-gray-600 mb-4">A student visa is a type of visa issued to individuals who wish to study in a foreign country. It typically allows students to enroll in a recognized educational institution and stay for the duration of their studies. Requirements may include proof of enrollment, financial stability, and language proficiency</p>
            </div>
            <div className="px-10 flex-grow">
              <img
                src="https://i.ibb.co.com/TWrnvBq/pexels-tima-miroshnichenko-7009611.jpg"
                alt="visa"
                className="w-full  h-[200px] object-cover" />
            </div>
            <div className="p-4 flex">
              <Link className="text-red-500 flex items-center font-medium hover:underline">
                Read More
              </Link>
              <span className="ml-1 text-red-500">&rarr;</span>
            </div>
          </div>
          {/* official visa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden lex flex-col h-full">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Tourist Visa</h2>
              <p className="text-gray-600 mb-4"> An official visa is issued to government officials or diplomats traveling for official purposes or representing their home country in a foreign land. This type of visa may come with specific privileges and exemptions depending on diplomatic agreements between nations.</p>
            </div>
            <div className="px-10 flex-grow">
              <img
                src="https://i.ibb.co.com/vQ4WhjB/pexels-gustavo-fring-4127627.jpg"
                alt="visa"
                className="w-full  h-[200px] object-cover" />
            </div>
            <div className="p-4 flex">
              <Link className="text-red-500 flex items-center font-medium hover:underline">
                Read More
              </Link>
              <span className="ml-1 text-red-500">&rarr;</span>
            </div>
          </div>
          {/* tourist visa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Tourist Visa</h2>
              <p className="text-gray-600 mb-4">A tourist visa is a short-term visa granted to travelers visiting a foreign country for leisure, sightseeing, or personal purposes. It usually has a limited validity period and does not permit the holder to engage in employment or business activities. It is typically granted to facilitate international relations.</p>
            </div>
            <div className="px-10 flex-grow">
              <img
                src="https://i.ibb.co.com/vH77RDg/pexels-gustavo-fring-3885598.jpg"
                alt="visa"
                className="w-full h-[200px] object-cover" />
            </div>
            <div className="p-4 flex">
              <Link className="text-red-500 flex items-center font-medium hover:underline">
                Read More
              </Link>
              <span className="ml-1 text-red-500">&rarr;</span>
            </div>
          </div>

        </div>
      </Zoom>
    </div>
  );
};

export default OurService;