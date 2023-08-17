import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftSide from "../../components/LeftSide/LeftSide";
import MainPost from "../../components/MainPost/MainPost";
import RightSide from "../../components/RightSide/RightSide";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-4'>
          <LeftSide />
        </div>
        <div className='col-span-5'>
          <MainPost />
        </div>
        <div className='col-span-3'>
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
