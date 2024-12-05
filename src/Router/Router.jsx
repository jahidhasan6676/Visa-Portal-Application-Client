import {createBrowserRouter,} from "react-router-dom";
import Root from "../MailLayout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AddVisas from "../Pages/AddVisas";
import AllVisaUsers from "../Pages/AllVisaUsers";
import VisaDetails from "../components/ViewDetailsPage/VisaDetails";
import Test from "../components/Test";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

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
        },
        {
          path:"/visaDetails/:id",
          element:<VisaDetails></VisaDetails>,
          loader:({params})=>fetch(`http://localhost:5000/visa/${params.id}`)
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/test",
          element:<Test></Test>
        }
      ]
    },
  ]);



  export default router;