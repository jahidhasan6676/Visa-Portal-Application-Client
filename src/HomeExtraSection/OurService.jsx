
const OurService = () => {

    const visaData = [
        
        {
          title: "Student Visa",
          description:
            "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
          image: "https://via.placeholder.com/150", // Replace with actual image URL
          link: "#",
        },
        {
          title: "Official Visa",
          description:
            "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
          image: "https://via.placeholder.com/150", // Replace with actual image URL
          link: "#",
        },
        {
          title: "Tourist Visa",
          description:
            "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
          image: "https://via.placeholder.com/150", // Replace with actual image URL
          link: "#",
        },
      ];
    return (
        <div className="py-20 w-11/12 lg:w-10/12 mx-auto">
            <div className="mb-14">
                <h3 className="text-xl font-bold text-red-600 text-center">Service We Provide</h3>
                <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-center mt-4 ">Explore Our Visa Citizenship <br/>
                & Immigration Services</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {/* student visa */}
                {/* {visaData.map((visa, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-red-600"
                    >
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{visa.title}</h2>
                            <p className="text-gray-600 mb-4">{visa.description}</p>
                        </div>
                        <img
                            src={visa.image}
                            alt={visa.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <a
                                href={visa.link}
                                className="text-red-500 flex items-center font-medium hover:underline"
                            >
                                Read More <span className="ml-1">&rarr;</span>
                            </a>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default OurService;