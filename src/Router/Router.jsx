import {createBrowserRouter,} from "react-router-dom";
import Root from "../MailLayout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AddVisas from "../Pages/AddVisas";

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
        }
      ]
    },
  ]);



  export default router;