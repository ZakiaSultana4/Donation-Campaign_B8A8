
import DonationCard from "../components/Cards/DonationCard";

const Donation = ({ campaignData}) => {
  return (

      <div className=" grid md:grid-cols-3 gap-y-10 gap-24 mx-auto  grid-cols-1">
        {campaignData.map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </div>
 
  );
};

export default Donation;
