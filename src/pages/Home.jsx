import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Header/Banner";
import { donationContext } from "../context/index";
import Donation from "./Donation";
import Navbar from "../components/Header/Navbar";

const Home = () => {
  const donationdata = useContext(donationContext);
  const [query, setQuery] = useState("");
 
  const [campaignData, setCampaignData] = useState(donationdata);

  const handleQuery = (value) => {
    setQuery(value);
  };

  const handleClick = () => {
    setCampaignData(
      donationdata.filter((donation) =>
        (donation.catagory_name.toLowerCase()).includes(query.toLowerCase())
      )
    );
  };

  return (
   
      <div className=" flex flex-col gap-10 mx-auto ">
       <div className=" relative">
       <Banner handleClick={handleClick} handleQuery={handleQuery} />
       <Navbar/>
       </div>
        <Donation campaignData={campaignData} />
      </div>
   
  );
};

export default Home;
