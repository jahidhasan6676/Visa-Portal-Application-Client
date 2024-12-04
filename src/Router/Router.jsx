import {createBrowserRouter,} from "react-router-dom";
import Root from "../MailLayout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AddVisas from "../Pages/AddVisas";
import AllVisaUsers from "../Pages/AllVisaUsers";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/addVisa",
          element:<AddVisas></AddVisas>
        },
        {
          path:"allVisa",
          element:<AllVisaUsers></AllVisaUsers>,
          loader:()=> fetch("http://localhost:5000/visa")
        }
      ]
    },
  ]);



  export default router;