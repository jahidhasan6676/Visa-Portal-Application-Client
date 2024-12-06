import { useState } from "react";
import Banner from "../components/Banner";
import LatestVisaSection from "../components/LatestVisaSection";
import OurCoaching from "../HomeExtraSection/OurCoaching";
import OurService from "../HomeExtraSection/OurService";
import Toggle from "../HomeExtraSection/Toggle";




const Home = () => {
   
    return (
        <div className="dark:bg-[#181C14]  dark:text-white">
            
            <Toggle></Toggle>
            <Banner></Banner>
            <LatestVisaSection></LatestVisaSection>
            <OurService></OurService>
            <OurCoaching></OurCoaching>
        </div>
    );
};

export default Home;