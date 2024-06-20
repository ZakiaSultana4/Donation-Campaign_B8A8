import { Outlet, useLoaderData } from "react-router-dom";
import { donationContext } from "../context/index";
import Footer from "../components/Footer";

const RootLayout = () => {
  const donations = useLoaderData();
  return (
    <donationContext.Provider value={donations}>
      <div className="relative max-w-[1440px] mx-auto min-h-screen">
        <Outlet />
        <Footer />
      </div>
    </donationContext.Provider>
  );
};

export default RootLayout;
