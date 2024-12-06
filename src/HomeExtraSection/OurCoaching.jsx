import 'animate.css';
import { Fade } from 'react-awesome-reveal';

const OurCoaching = () => {


    return (
        <div className="pb-20">
            <div className="bg-gray-100 py-28">
                <div className="w-11/12 lg:w-10/12 mx-auto">
                    <h2 className="text-red-600 uppercase text-sm tracking-wide font-semibold mb-3">Coaching We Offer</h2>
                    <h1 className="text-4xl font-bold mb-6">Get The Immigration Trainings <br /> You Deserve.</h1>
                    <div className="lg:flex gap-8 w-full space-y-6 md:space-y-0">

                        <Fade duration={4000}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            {/* card-1 */}
                            <div className="p-6 rounded-lg shadow-md transition-transform duration-300 border-2 hover:border-red-500 hover:scale-105 hover:shadow-md bg-white" >
                                <h3 className="text-red-600 text-xl font-semibold mb-2">01.Citizenship Test </h3>
                                <p className="text-gray-600">Prepare for your citizenship test with expert guidance. Gain a comprehensive understanding of the laws, rights, and responsibilities of citizenship with our structured training program.</p>
                            </div>
                            {/* card-2 */}
                            <div className="p-6 rounded-lg shadow-md transition-transform duration-300 border-2 hover:border-red-500 hover:scale-105 hover:shadow-md bg-white" >
                                <h3 className="text-red-600 text-xl font-semibold mb-2">01.TOEFL Coaching </h3>
                                <p className="text-gray-600">Master your English language skills with our TOEFL coaching. Designed to help you excel in reading, writing, speaking, and listening, ensuring a high score for international opportunities.</p>
                            </div>
                            {/* card-3 */}
                            <div className="p-6 rounded-lg shadow-md transition-transform duration-300 border-2 hover:border-red-500 hover:scale-105 hover:shadow-md bg-white" >
                                <h3 className="text-red-600 text-xl font-semibold mb-2">01.PTE Coaching</h3>
                                <p className="text-gray-600">Achieve success in the Pearson Test of English (PTE) with personalized coaching. Our experts help you focus on the areas that matter most to score well in academic and general modules.</p>
                            </div>
                            {/* card-4 */}
                            <div className="p-6 rounded-lg shadow-md transition-transform duration-300 border-2 hover:border-red-500 hover:scale-105 hover:shadow-md bg-white" >
                                <h3 className="text-red-600 text-xl font-semibold mb-2">01.SAT Coaching</h3>
                                <p className="text-gray-600">Boost your SAT scores with our comprehensive training. From mathematics to critical reading and writing, we provide the strategies and practice needed to maximize your performance.</p>
                            </div>

                        </div>
                        </Fade>

                        {/* image */}
                        <div>
                            <img src="https://i.ibb.co.com/z4c1b8f/pexels-spencer-4353813.jpg" className="w-[700px] rounded-md h-full" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurCoaching;

