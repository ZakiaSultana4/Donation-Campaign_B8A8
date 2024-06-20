import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Shared/Container";
import donate from "../assets/don.avif";
import MyDonationCard from "../components/Cards/MyDonationCard";
import { deleteDonationsFromLS, getdonations } from "../utils";

const MyDonations = () => {

  const [noFound, setNoFound] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [donation, setdonation] = useState([])

  useEffect(() => {
    const saveddonations = getdonations()
    setdonation(saveddonations)
  }, [])

  const handleDelete = () => {
    localStorage.clear();
    setdonation([]);
    setNoFound("");
  };
  const onDelete = id => {
    deleteDonationsFromLS(id)
    const saveddonations = getdonations()
    setdonation(saveddonations)
  }
  return (
    <Container>
       <>
      {donation.length <= 0 && (
        <div className="h-[80vh] flex flex-col -mt-32 mx-[500px] justify-center  text-3xl font-semibold text-blue-600">
          <img src={donate} alt="" className="w-[300px] ml-24" />
          <p>You don't have added any donation yet,</p>
          <br />
          <p className="ml-36 -mt-5">please Donate.</p>
        </div>
      )}
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center text-3xl font-semibold text-blue-600">
          {noFound}
        </p>
      ) : (
        <div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8   max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
            {isShowing
              ? donation.map((d) => (
                <MyDonationCard key={d.id} d={d} handleDelete={onDelete}/>
                ))
              : donation
                  .slice(0, 4)
                  .map((d) => (
                    <MyDonationCard key={d.id} d={d} handleDelete={onDelete}/>
                  ))}
          </div>
         
          <div className="flex">
            {donation.length > 4 && (
              <button
                className="px-5 py-2  block mx-auto  rounded-md border  text-success font-semibold"
                onClick={() => setIsShowing(!isShowing)}
              >
                {!isShowing ? "see more" : "see less"}
              </button>
            )}
            {donation.length > 0 && (
              <button
                onClick={handleDelete}
                className="px-5 py-2  block mx-auto  rounded-md  border  text-error font-semibold"
              >
                Delete All
              </button>
            )}
          </div>
        </div>
      )}
    </>
    </Container>
  );
};

export default MyDonations;
