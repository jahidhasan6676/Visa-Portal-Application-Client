import { useContext, useState } from "react";
import Banner from "../components/Banner";
import LatestVisaSection from "../components/LatestVisaSection";
import OurCoaching from "../HomeExtraSection/OurCoaching";
import OurService from "../HomeExtraSection/OurService";
import { AuthContext } from "../Authentication/AuthProvider";


const Home = () => {
    const {isDarkMode} = useContext(AuthContext)

   
    return (
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
          
            <Banner></Banner>
            <LatestVisaSection></LatestVisaSection>
            <OurService></OurService>
            <OurCoaching></OurCoaching>
        </div>
    );
};

export default Home;