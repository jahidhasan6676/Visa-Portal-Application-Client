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
import PrivateRoute from "./PrivateRoute";
import MyVisaApplication from "../Pages/MyVisaApplication";
import MyAddedVisas from "../Pages/MyAddedVisas";

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
          element:<PrivateRoute><AddVisas></AddVisas></PrivateRoute>
        },
        {
          path:"allVisa",
          element:<PrivateRoute><AllVisaUsers></AllVisaUsers></PrivateRoute>,
          loader:()=> fetch("http://localhost:5000/visa")
        },
        {
          path:"/visaDetails/:id",
          element:<PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
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
        },
        {
          path:"/visaApplication",
          element:<PrivateRoute><MyVisaApplication></MyVisaApplication></PrivateRoute>,
          // loader:({params})=> fetch(`http://localhost:5000/visaApply/${params.email}`)
          
        },
        {
          path:"/myAddedVisa",
          element:<PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
          
        }
      ]
    },
  ]);



  export default router;