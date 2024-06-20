import { useNavigate } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const navigate = useNavigate();

  const {
    id,
    catagory_name,
    image,
    title,
    color_cat_bg,
    color_card_bg,
    text,
  } = donation || {};

  return (
    <div
    onClick={() => navigate(`${catagory_name}/${id}`)}
      className="relative flex  flex-col rounded-lg shadow-md w-[400px] h-[430px]"
      style={{ background: color_card_bg }}
    >
      <div>
        <img
          src={image}
          alt="image"
          className=" object-cover w-[600px] h-[270px] rounded-t-md"
        />
      </div>
      <div className=" relative">
        <div className=" relative card-body  flex flex-col pl-3">
          <h2
            className="card-title w-[120px] py-2 text-center text-2xl font-bold"
            style={{ color: text, background: color_cat_bg, display: "block" }}
          >
            {catagory_name}
          </h2>
          <h2 className=" text-xl font-bold mt-2">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
