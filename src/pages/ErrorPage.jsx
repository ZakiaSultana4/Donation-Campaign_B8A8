import React from "react";
import Container from "../components/Shared/Container";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="mx-auto flex flex-col justify-center items-center gap-6">
          <h1 className="font-extrabold text-black text-6xl lg:text-8xl">
            Oops!
          </h1>
          <h3 className="text-md lg:text-xl text-black font-bold">
            404-PAGE NOT FOUND
          </h3>
          <p className="text-sm lg:text-base w-[60%] text-center">
            The page you are looking for might have been removed or had its name
            changed or is temporarily unavailable
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#FF444A] text-white rounded-full py-2 px-4 active:scale-105 duration-[.3s] text-sm lg:text-base"
          >
            GO TO HOMEPAGE
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;
