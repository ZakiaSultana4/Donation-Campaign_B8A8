import  { useState } from "react";
import Container from "../Shared/Container";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Container>
    <nav className=" absolute w-full py-4 flex justify-between items-center top-0  right-1">
      <div className="">
        <img
          className="w-2/5 md:w-3/5 lg:w-4/5"
          src="/assets/Logo.png"
          alt=""
        />
      </div>
      <div className="hidden text-lg md:text-xl  w-3/5 lg:flex justify-end gap-8 items-center">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#FF444A] border-b-[2px] border-[#FF444A]"
                : "text-black"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#FF444A] border-b-[2px] border-[#FF444A]"
                : "text-black"
            }`
          }
          to="/MyDonations"
        >
          MyDonations
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#FF444A] border-b-[2px] border-[#FF444A]"
                : "text-black"
            }`
          }
          to="/Statistics"
        >
          Statistics
        </NavLink>
      </div>

      <GiHamburgerMenu
        className="block lg:hidden text-2xl"
        onClick={() => setMenu(!menu)}
      />

      {menu && (
        <div
          className={`absolute top-0 z-[10] transition-right duration-500 ease-in flex flex-col w-full h-full gap-16 bg-gray-200  ${
            menu ? "right-0" : "-right-[100%]"
          }  `}
        >
          <div className="flex justify-end w-[93%] mt-5">
            <CgCloseO
              className="block lg:hidden text-2xl"
              onClick={() => setMenu(!menu)}
            />
          </div>
          <div
            className="
       flex flex-col lg:hidden z-[10] justify-center items-center gap-8 text-xl"
          >
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#FF444A] border-b-[2px] border-[#FF444A]"
                    : "text-black"
                }`
              }
              to="/"
              onClick={() => setMenu(!menu)}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#FF444A] border-b-[2px] border-[#FF444A]"
                    : "text-black"
                }`
              }
              to="/Donations"
              onClick={() => setMenu(!menu)}
            >
              Donation
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#FF444A] border-b-[2px] border-[#FF444A]"
                    : "text-black"
                }`
              }
              to="/statistics"
              onClick={() => setMenu(!menu)}
            >
              Statistics
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  </Container>
  );
};

export default Navbar;
