import React from "react";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";
import VidBackground from "../components/VidBackground";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Navbar />
      <div className="relative w-full h-full ">
        <VidBackground />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-2 rounded-md">
            <Counter studyTime={5} breakTime={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
