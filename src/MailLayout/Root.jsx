import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
          <div className="mb-[70px]">
          <Navbar></Navbar>
          </div>
          <div className="min-h-[calc(100vh-430px)]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Root;