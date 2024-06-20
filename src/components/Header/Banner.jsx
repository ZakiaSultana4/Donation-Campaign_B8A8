import React from "react";

const Banner = ({ handleQuery, handleClick}) => {
  return (
    <div className="  bg-opacity-10 relative bg-banner w-full min-h-[300px] h-[80vh] flex
     flex-col  justify-center items-center gap-12 mt-2">
      <h1 className="text-center text-black font-bold text-2xl sm:text-4xl lg:text-5xl">
        We Grow By Helping People In Need
      </h1>
      <div className=" flex items-center justify-center w-full">
        <input
          onChange={(e) => handleQuery(e.target.value)}
          className="active:border-white w-[50%] md:w-[30%] lg:w-[20%] border-[1px] border-gray-200 pl-2 py-2 rounded-l-lg"
          type="text"
          placeholder="Search Here"
        />
        <button
          onClick={handleClick}
          type="button"
          className="text-[#FFFFFF] py-2 px-4 rounded-r-lg bg-[#FF444A]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
