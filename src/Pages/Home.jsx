import Banner from "../components/Banner";
import LatestVisaSection from "../components/LatestVisaSection";
import OurCoaching from "../HomeExtraSection/OurCoaching";
import OurService from "../HomeExtraSection/OurService";


const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <LatestVisaSection></LatestVisaSection>
           <OurService></OurService>
           <OurCoaching></OurCoaching>
        </div>
    );
};

export default Home;