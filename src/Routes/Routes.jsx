import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import DonationDetails from "../pages/DonationDetails";
import MyDonations from "../pages/MyDonations";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: () => fetch("/donation.json"),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/MyDonations",
        element:<MyDonations/> ,
      },
      {
        path: "/:type/:id",
        element: <DonationDetails />,
      },
      {
        path: "/Statistics",
        element:<Statistics/> ,
      },
      
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
