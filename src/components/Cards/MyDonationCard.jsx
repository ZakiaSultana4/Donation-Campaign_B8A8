import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from 'react-icons/md'


const MyDonationCard = ({ d ,handleDelete}) => {

  const navigate = useNavigate();
  const {
    id,
    image,
    text,
    title,
    color_cat_bg,
    color_card_bg,
    catagory_name,
    price,
    btn,
  } = d;

  return (
    <div
      className="relative flex  flex-row rounded-lg shadow-md"
      style={{ background: color_card_bg }}
    >
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img
          src={image}
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="pt-16 relative">
        <div className=" relative card-body  flex flex-col items-center justify-center -mt-20">
          <h2
            className="card-title mr-52"
            style={{
              color:text,
              background: color_cat_bg,
              display: "block",
            }}
          >
            {catagory_name}
          </h2>
          <h2 className=" absolute text-[13px] px-12  right-28 my-5   font-bold">
            {title}
          </h2>
          <p
            className="mr-56 font-bold mt-9  "
            style={{ color:text }}
          >
            ${price}
          </p>
        </div>
        <button
           onClick={() => navigate(`/${catagory_name}/${id}`)}
          className=" text-white ml-8 md:-mt-20 mb-3 px-3 py-2 rounded-md "
          style={{ background: btn }}
        >
          View Details
        </button>
      </div>
      <div
        onClick={() => handleDelete(id)}
        style={{ background: text }}
        className=' p-2 ml-5 rounded-full  group 
         cursor-pointer hover:scale-105 absolute -top-5 -right-5'
      >
        <MdDeleteForever
          size={20}
           color="red"
        />
      </div>
    </div>
  );
};

export default MyDonationCard;
