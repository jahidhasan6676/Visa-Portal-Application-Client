

const Banner = () => {
    

    return (
        <div className="carousel w-full py-20">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/5hxv8HL/rebe-adelaida-zun-Qw-My5-B6-M-unsplash.jpg"
                    className="w-full h-[600px] blur-[2px]" />
                <div className="absolute w-full text-center py-52 text-white space-y-3">
                    <h2 className="text-3xl font-bold">Explore the World Effortlessly!</h2>
                    <p className="font-medium">Find visa requirements for any country in seconds. Whether you're traveling for leisure, work, or study, we simplify the process for you</p>
                    <div className="w-full">
                        <button className="btn btn-accent text-white w-fit">Check Visa Requirements Now</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/BV0pNnM/visa.jpg"
                    className="w-full h-[600px] blur-[2px]" />
                <div className="absolute w-full text-center py-40 text-white space-y-4">
                    <h2 className="md:text-5xl text-3xl font-bold">Immigration visa Consulting</h2>
                    <p className="font-medium text-xl">Expert Guidance for a Seamless Immigration Journey</p>
                    <p className="space-x-2"><i class="fa-solid fa-check"></i><span>Expert Legal Support</span></p>
                    <p className="space-x-2"><i class="fa-solid fa-check"></i><span>Meeting Your Unique Needs</span></p>
                    <p className="space-x-2"><i class="fa-solid fa-check"></i><span>Tailored Immigration Solutions</span></p>
                    <div className="w-full space-x-4">
                        <button className="btn btn-accent text-white w-fit">Book Appointment</button>
                        <button className="btn btn-primary">Read Story</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/b5rCHtY/pixels.webp"
                    className="w-full h-[600px] blur-[2px]" />
                <div className="absolute w-full text-center py-52 text-white space-y-3">
                    <h2 className="text-3xl font-bold">Stay Informed, Stay Ready</h2>
                    <p className="font-medium">Track your visa application status anytime, anywhere, and plan your journey without any delays.</p>
                    <div className="w-full">
                        <button className="btn btn-accent text-white w-fit">Track Your Application</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;