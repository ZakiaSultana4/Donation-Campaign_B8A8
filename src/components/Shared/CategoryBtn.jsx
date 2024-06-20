import React from "react";


const CategoryBtn = ({ children, color_card_bg, text }) => {
  return (
    <button
      type="button"
      className={`font-medium py-1 px-2 text-sm rounded-md ${color_card_bg} ${text}
      `}
    >
      {children}
    </button>
  );
};

export default CategoryBtn;
